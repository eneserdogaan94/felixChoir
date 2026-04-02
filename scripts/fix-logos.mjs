import sharp from 'sharp'
import path from 'path'
import { rename } from 'fs/promises'

// Orijinal dosyaları kaynak klasörden al, sadece dairesel maske uygula
const sources = [
  {
    src: 'E:/Projeler/Felix/DocumentsForProject/Logolar/CEEB5CB1-05F1-402A-9929-D5B0D0C4FEFA_1_105_c.jpeg',
    out: 'src/assets/logolar/logo-kadin.png',
  },
  {
    src: 'E:/Projeler/Felix/DocumentsForProject/Logolar/5D0E6798-EBF0-42DF-BBBD-7DA4C0DAC3BB_1_105_c.jpeg',
    out: 'src/assets/logolar/logo-cocuk.png',
  },
]

for (const { src, out } of sources) {
  const image = sharp(src)
  const { width, height } = await image.metadata()

  const size = Math.min(width, height)
  const r = Math.floor(size / 2)
  const cx = Math.floor(width / 2)
  const cy = Math.floor(height / 2)

  // SVG daire maskesi
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white"/>
    </svg>`
  )

  const tmp = out + '.tmp'
  await sharp(src)
    .extract({ left: cx - r, top: cy - r, width: size, height: size })
    .composite([{ input: circleSvg, blend: 'dest-in' }])
    .png()
    .toFile(tmp)

  await rename(tmp, out)
  console.log(`✓ ${out}`)
}

console.log('\nTamamlandı.')
