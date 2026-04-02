import sharp from 'sharp'
import { readdir, rename } from 'fs/promises'
import path from 'path'

const logoDir = 'src/assets/logolar'
const files = await readdir(logoDir)

// 4-yönlü flood-fill: köşelerden başlayıp beyaza yakın pikselleri sil
function floodFill(buf, width, height, channels, threshold = 30) {
  const visited = new Uint8Array(width * height)
  const queue = []

  function isWhitish(idx) {
    const r = buf[idx * channels]
    const g = buf[idx * channels + 1]
    const b = buf[idx * channels + 2]
    return r > 255 - threshold && g > 255 - threshold && b > 255 - threshold
  }

  function makeTransparent(idx) {
    buf[idx * channels + 3] = 0
  }

  // 4 köşeden başla
  const corners = [0, width - 1, (height - 1) * width, height * width - 1]
  for (const c of corners) {
    if (!visited[c] && isWhitish(c)) {
      queue.push(c)
      visited[c] = 1
    }
  }

  while (queue.length > 0) {
    const idx = queue.pop()
    makeTransparent(idx)
    const x = idx % width
    const y = Math.floor(idx / width)
    const neighbors = []
    if (x > 0) neighbors.push(idx - 1)
    if (x < width - 1) neighbors.push(idx + 1)
    if (y > 0) neighbors.push(idx - width)
    if (y < height - 1) neighbors.push(idx + width)
    for (const n of neighbors) {
      if (!visited[n] && isWhitish(n)) {
        visited[n] = 1
        queue.push(n)
      }
    }
  }
}

for (const file of files) {
  const filePath = path.join(logoDir, file)
  const image = sharp(filePath)
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const buf = Buffer.from(data)

  floodFill(buf, width, height, channels, 25)

  const tmpPath = filePath + '.tmp'
  await sharp(buf, { raw: { width, height, channels } }).png().toFile(tmpPath)
  await rename(tmpPath, filePath.replace(/\.[^.]+$/, '.png'))
  console.log(`✓ ${file}`)
}

console.log('\nTamamlandı.')
