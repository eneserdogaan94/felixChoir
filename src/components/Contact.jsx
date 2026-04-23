import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS başlatma
emailjs.init('m4Ym6c0C100JWNvrZ')

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
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        'service_48glhoo',
        'template_p7z1eam',
        formRef.current
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      console.error('Email gönderme hatası:', error)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    } finally {
      setLoading(false)
    }
  }

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
            <div className="flex items-center gap-2 mb-4">
              {/* Instagram logo SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-felix">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <p className="text-xs uppercase tracking-widest text-chalk/50">Instagram'da Takip Edin</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {instagramHandles.map((handle) => (
                <a
                  key={handle}
                  href={`https://instagram.com/${handle.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-chalk/5 hover:bg-felix/10 border border-chalk/10 hover:border-felix/40 text-xs text-chalk/60 hover:text-felix px-3 py-2 transition-all duration-300 rounded-sm group"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right — Form */}
        <FadeUp delay={0.2}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Ad Soyad"
                required
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="ornek@email.com"
                required
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-chalk/40 mb-2 block">
                İlgilendiğiniz Koro
              </label>
              <select
                name="selected_koro"
                required
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
                name="message"
                rows={5}
                placeholder="Mesajınızı yazınız..."
                required
                className="w-full bg-chalk/5 border border-chalk/10 text-chalk px-4 py-3 placeholder:text-chalk/20 focus:outline-none focus:border-felix transition-colors duration-300 resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 text-sm">
                ✓ Mesajınız başarıyla gönderildi!
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 text-sm">
                ✗ Mesaj gönderme başarısız. Lütfen tekrar deneyin.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-felix text-ink py-4 font-bold tracking-widest uppercase hover:bg-yellow-300 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
