import logoMain from '../assets/logolar/logo-main.png'

const navLinks = [
  { label: 'Hakkımızda', id: 'hakkimizda' },
  { label: 'Korolarımız', id: 'korolarimiz' },
  { label: 'Ekibimiz', id: 'ekibimiz' },
  { label: 'Galeri', id: 'galeri' },
  { label: 'İletişim', id: 'iletisim' },
]

const instagramHandles = [
  { handle: 'korofelix', label: 'KF' },
  { handle: 'korofelixkadin', label: 'KD' },
  { handle: 'korofelixpop', label: 'PP' },
  { handle: 'korofelixyildiz', label: 'YL' },
  { handle: 'korofelixcocuk', label: 'CK' },
  { handle: 'felixminii', label: 'MN' },
  { handle: 'felixorkestra', label: 'OR' },
  { handle: 'felixritim', label: 'RT' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-felix/15 pt-16 pb-8 px-8 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-chalk/[0.08] max-w-7xl mx-auto">
        {/* Col 1 */}
        <div>
          <img src={logoMain} alt="Koro Felix" className="h-12 object-contain" />
          <p className="font-sans font-semibold tracking-[0.2em] text-chalk mt-3">KORO FELİX</p>
          <p className="text-chalk/30 text-sm mt-2">Müziğin mutlu hali.</p>
          <p className="text-chalk/20 text-xs mt-1">Ankara, Türkiye · 2022</p>
        </div>

        {/* Col 2 */}
        <div>
          <p className="text-xs uppercase tracking-widest text-felix mb-5">Sayfalar</p>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block text-sm text-chalk/40 hover:text-chalk transition-colors py-1 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Col 3 */}
        <div>
          <p className="text-xs uppercase tracking-widest text-felix mb-5">İletişim</p>
          <p className="text-sm text-chalk/40">+90 (533) 315 17 79</p>
          <p className="text-sm text-chalk/40 mt-1">Yenimahalle / Ankara</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {instagramHandles.map(({ handle, label }) => (
              <a
                key={handle}
                href={`https://instagram.com/${handle}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`@${handle}`}
                className="w-8 h-8 rounded-full border border-chalk/10 hover:border-felix flex items-center justify-center text-chalk/30 hover:text-felix text-xs transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center flex-wrap gap-4 max-w-7xl mx-auto">
        <p className="text-xs text-chalk/20">© 2025 Koro Felix. Tüm hakları saklıdır.</p>
        <img src={logoMain} alt="Koro Felix" className="h-6 opacity-20" />
      </div>
    </footer>
  )
}
