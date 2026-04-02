import { motion } from 'framer-motion'
import logoMain from '../assets/logolar/logo-main.png'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
})

const stats = [
  { value: '8', label: 'Koro & Orkestra' },
  { value: '2022', label: 'Kuruluş Yılı' },
  { value: 'Ankara', label: 'Yenimahalle' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-ink relative overflow-hidden flex items-center">
      {/* Decorative rings */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full border border-felix/10 pointer-events-none" />
      <div className="absolute right-[-5%] top-[18%] w-[450px] h-[450px] rounded-full border border-felix/8 pointer-events-none" style={{ animation: 'spin 30s linear infinite' }} />
      <div className="absolute right-[2%] top-[26%] w-[300px] h-[300px] rounded-full border border-felix/12 pointer-events-none" style={{ animation: 'spin 20s linear infinite reverse' }} />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Left content */}
      <div className="relative z-10 pl-8 md:pl-24 max-w-2xl py-32">
        <motion.div {...fadeUp(0.2)}>
          <span className="inline-flex items-center gap-2 bg-felix/10 border border-felix/30 text-felix text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
            ♪ Ankara · 2022&apos;den beri
          </span>
        </motion.div>

        <div className="mt-6">
          <motion.h1 {...fadeUp(0.4)} className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold text-chalk leading-[0.95]">
            Gerçek, pozitif
          </motion.h1>
          <motion.h1 {...fadeUp(0.55)} className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold text-felix italic leading-[0.95]">
            ve birleştirici
          </motion.h1>
          <motion.h1 {...fadeUp(0.7)} className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold text-chalk leading-[0.95]">
            titreşimler.
          </motion.h1>
        </div>

        <motion.p {...fadeUp(0.9)} className="mt-6 text-chalk/50 text-xl font-light leading-relaxed max-w-lg">
          Müziğin dönüştürücü gücüyle farklı sesleri bir araya getiriyoruz.
        </motion.p>

        <motion.div {...fadeUp(1.1)} className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('korolarimiz')}
            className="bg-felix text-ink px-8 py-4 text-sm font-bold tracking-wide uppercase hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Korolarımızı Keşfet
          </button>
          <button
            onClick={() => scrollTo('ekibimiz')}
            className="border border-chalk/25 text-chalk px-8 py-4 text-sm font-light tracking-wide hover:border-felix hover:text-felix transition-all duration-300"
          >
            Ekibimizle Tanış →
          </button>
        </motion.div>

        <motion.div {...fadeUp(1.3)} className="mt-16 flex gap-8 md:gap-16 pt-8 border-t border-chalk/10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-felix font-bold">{stat.value}</div>
              <div className="text-xs text-chalk/40 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right logo */}
      <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={logoMain}
          alt="Koro Felix"
          className="w-80 h-80 object-contain hover:scale-105 transition-transform duration-700"
          style={{ filter: 'drop-shadow(0 0 40px rgba(245,200,0,0.15))' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-felix/40 text-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4 8 10 14 16 8" />
        </svg>
      </motion.div>
    </section>
  )
}
