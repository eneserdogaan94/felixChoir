import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const instagramHandles = [
  '@korofelix',
  '@korofelixkadin',
  '@korofelixpop',
  '@korofelixyildiz',
  '@korofelixcocuk',
  '@felixminii',
  '@felixorkestra',
  '@felixritim',
]

const koroOptions = [
  'Koro Felix',
  'Felix Kadın',
  'Felix Pop',
  'Felix Yıldız',
  'Felix Çocuk',
  'Felix Mini',
  'Felix Orkestra',
  'Felix Ritim',
]

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="iletisim" className="bg-ink text-chalk py-32 px-8 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {/* Left */}
        <FadeUp delay={0}>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Birlikte müzik yapalım.
          </h2>
          <p className="text-chalk/50 text-xl mt-4">
            Her yaştan, her seviyeden müzikseverleri bekliyoruz.
          </p>

          <div className="mt-12 space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <span className="text-xl mt-0.5">📍</span>
              <div>
                <p className="text-chalk/80 text-sm">Beştepe, Zübeyde Hanım Cd. No:56</p>
                <p className="text-chalk/80 text-sm">Azaflı Plaza, 3. Kat No.13</p>
                <p className="text-chalk/50 text-sm">Yenimahalle / Ankara</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <span className="text-xl">📞</span>
              <a
                href="tel:+905333151779"
                className="text-chalk/80 text-sm hover:text-felix transition-colors duration-300"
              >
                +90 (533) 315 17 79
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-chalk/30 mb-4">Sosyal Medya</p>
            <div className="flex flex-wrap gap-2">
              {instagramHandles.map((handle) => (
                <a
                  key={handle}
                  href={`https://instagram.com/${handle.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-chalk/5 hover:bg-felix/10 border border-chalk/10 hover:border-felix/30 text-xs text-chalk/50 hover:text-felix px-3 py-1.5 transition-all duration-300"
                >
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right — Form */}
        <FadeUp delay={0.2}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                placeholder="ornek@email.com"
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                İlgilendiğiniz Koro
              </label>
              <select
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 focus:outline-none focus:border-felix transition-colors duration-300 appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-ink">Koro seçiniz</option>
                {koroOptions.map((koro) => (
                  <option key={koro} value={koro} className="bg-ink">{koro}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                Mesajınız
              </label>
              <textarea
                rows={5}
                placeholder="Mesajınızı yazınız..."
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-felix text-ink py-4 font-bold tracking-widest uppercase hover:bg-yellow-300 transition-all duration-300 mt-2"
            >
              Mesaj Gönder
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
