import { motion } from 'framer-motion'
import logoMain   from '../assets/logolar/logo-main.png'
import logoKoro   from '../assets/logolar/logo-koro.png'
import logoKadin  from '../assets/logolar/logo-kadin.png'
import logoPop    from '../assets/logolar/logo-pop.png'
import logoYildiz from '../assets/logolar/logo-yildiz.png'
import logoCocuk  from '../assets/logolar/logo-cocuk.png'
import logoMini   from '../assets/logolar/logo-mini.png'
import logoOrk    from '../assets/logolar/logo-orkestra.png'
import logoRitim  from '../assets/logolar/logo-koro.png'

// 8 logo, 2 yörüngede 4'er tane — iç r:130, dış r:195
const orbitLogos = [
  { src: logoKoro,   size: 48, r: 130, startDeg: 0,   duration: 22, dir: 'cw'  },
  { src: logoPop,    size: 44, r: 130, startDeg: 90,  duration: 22, dir: 'cw'  },
  { src: logoCocuk,  size: 44, r: 130, startDeg: 180, duration: 22, dir: 'cw'  },
  { src: logoMini,   size: 40, r: 130, startDeg: 270, duration: 22, dir: 'cw'  },
  { src: logoKadin,  size: 46, r: 195, startDeg: 45,  duration: 34, dir: 'ccw' },
  { src: logoYildiz, size: 44, r: 195, startDeg: 135, duration: 34, dir: 'ccw' },
  { src: logoOrk,    size: 48, r: 195, startDeg: 225, duration: 34, dir: 'ccw' },
  { src: logoRitim,  size: 42, r: 195, startDeg: 315, duration: 34, dir: 'ccw' },
]

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

      {/* Ses dalgası + etrafında dönen grup logoları — sadece desktop */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{ width: 460, height: 460, left: '52%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <style>{`
          @keyframes hero-cw  { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
          @keyframes hero-ccw { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(-360deg); } }
          @keyframes keep-cw  { from { transform: rotate(0deg);   } to { transform: rotate(-360deg);  } }
          @keyframes keep-ccw { from { transform: rotate(0deg);   } to { transform: rotate(360deg);   } }
        `}</style>

        {/* İç yörünge çemberi */}
        <div className="absolute rounded-full border border-felix/10"
             style={{ width: 260, height: 260, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        {/* Dış yörünge çemberi */}
        <div className="absolute rounded-full border border-felix/6"
             style={{ width: 390, height: 390, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

        {/* Dönen logolar */}
        {orbitLogos.map((logo, i) => {
          const isCw = logo.dir === 'cw'
          const animDelay = `${-(logo.startDeg / 360) * logo.duration}s`
          return (
            <div
              key={i}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 0, height: 0,
                animation: `${isCw ? 'hero-cw' : 'hero-ccw'} ${logo.duration}s linear infinite`,
                animationDelay: animDelay,
              }}
            >
              {/* Radius offset */}
              <div style={{
                position: 'absolute',
                top: -logo.r - logo.size / 2,
                left: -logo.size / 2,
                width: logo.size,
                height: logo.size,
                animation: `${isCw ? 'keep-cw' : 'keep-ccw'} ${logo.duration}s linear infinite`,
                animationDelay: animDelay,
              }}>
                <img src={logo.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.8 }} />
              </div>
            </div>
          )
        })}

        {/* Merkez: ses dalgası */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <svg width="100" height="160" viewBox="0 0 100 160" fill="none">
            {[
              { x: 8,  h: 32,  dur: '1.1s', delay: '0s'    },
              { x: 22, h: 64,  dur: '1.4s', delay: '0.15s' },
              { x: 36, h: 96,  dur: '1.0s', delay: '0.05s' },
              { x: 50, h: 72,  dur: '1.3s', delay: '0.25s' },
              { x: 64, h: 112, dur: '0.9s', delay: '0.1s'  },
              { x: 78, h: 56,  dur: '1.5s', delay: '0.2s'  },
              { x: 92, h: 40,  dur: '1.2s', delay: '0.3s'  },
            ].map((bar, i) => (
              <rect key={i} x={bar.x - 5} y={(160 - bar.h) / 2} width={9} height={bar.h} rx={4} fill="rgba(245,200,0,0.22)">
                <animate attributeName="height" values={`${bar.h};${bar.h * 0.25};${bar.h}`} dur={bar.dur} begin={bar.delay} repeatCount="indefinite" />
                <animate attributeName="y" values={`${(160 - bar.h) / 2};${(160 - bar.h * 0.25) / 2};${(160 - bar.h) / 2}`} dur={bar.dur} begin={bar.delay} repeatCount="indefinite" />
              </rect>
            ))}
          </svg>
        </div>
      </div>

      {/* Decorative rings */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full border border-felix/10 pointer-events-none" />
      <div className="absolute right-[-5%] top-[18%] w-[450px] h-[450px] rounded-full border border-felix/8 pointer-events-none" style={{ animation: 'spin 30s linear infinite' }} />
      <div className="absolute right-[2%] top-[26%] w-[300px] h-[300px] rounded-full border border-felix/12 pointer-events-none" style={{ animation: 'spin 20s linear infinite reverse' }} />

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
