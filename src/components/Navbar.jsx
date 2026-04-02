import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoMain from '../assets/logolar/logo-main.png'

const navLinks = [
  { label: 'Hakkımızda', id: 'hakkimizda' },
  { label: 'Korolarımız', id: 'korolarimiz' },
  { label: 'Ekibimiz', id: 'ekibimiz' },
  { label: 'Galeri', id: 'galeri' },
  { label: 'İletişim', id: 'iletisim' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-24 h-16 transition-all duration-500 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={logoMain} className="h-9 object-contain" alt="Koro Felix" />
        <span className="ml-3 font-sans font-semibold text-chalk text-sm tracking-[0.2em] uppercase">
          KORO FELİX
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-xs uppercase tracking-widest text-chalk/60 hover:text-chalk transition-colors duration-300 cursor-pointer bg-transparent border-none"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        className="hidden md:block bg-felix text-ink px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        onClick={() => scrollTo('iletisim')}
      >
        Bize Katıl
      </button>

      {/* Hamburger */}
      <button
        className="md:hidden text-chalk p-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menü"
      >
        {menuOpen ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="3" x2="19" y2="19" />
            <line x1="19" y1="3" x2="3" y2="19" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        )}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed right-0 top-0 h-screen w-72 bg-ink border-l border-felix/20 z-50 flex flex-col pt-20 px-8"
          >
            <button
              className="absolute top-5 right-6 text-chalk/60 hover:text-chalk"
              onClick={() => setMenuOpen(false)}
              aria-label="Kapat"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
                  className="text-sm uppercase tracking-widest text-chalk/60 hover:text-chalk transition-colors text-left bg-transparent border-none"
                >
                  {link.label}
                </button>
              ))}
              <button
                className="mt-4 bg-felix text-ink px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-yellow-300 transition-all duration-300"
                onClick={() => { scrollTo('iletisim'); setMenuOpen(false) }}
              >
                Bize Katıl
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
