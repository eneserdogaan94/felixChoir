import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const tags = [
  'Şan Tekniği',
  'Sahne Varlığı',
  'Bedensel Rahatlama',
  'Bireysellik ve Kolektivite',
  'Çoklu Düşünme Becerileri',
  'Workshop & Atölyeler',
]

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true })
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

export default function About() {
  return (
    <section id="hakkimizda" className="bg-chalk text-ink py-32 px-8 md:px-24 clip-diagonal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
        {/* Left column */}
        <FadeUp delay={0}>
          <p className="text-xs text-felix tracking-[0.4em] uppercase font-semibold">HAKKIMIZDA</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-3 leading-tight">
            Müziğin dönüştürücü gücü.
          </h2>
          <div className="w-12 h-1 bg-felix mt-6" />

          <p className="mt-8 text-ink/70 text-lg leading-relaxed">
            Hareket eden her nesne benzersiz frekanslarda titreşir. Baskın titreşimler zayıf olanları
            kendine çeker ve senkronize eder. Müzik, bu titreşim olgusunun doğrudan bir yansımasıdır.
          </p>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            Koro Felix, 2022 yılında müziğin bu dönüştürücü gücüyle gerçek, pozitif ve birleştirici
            titreşimler yaymak amacıyla kurulmuştur. Çocuklardan profesyonel sanatçılara, her yaş ve
            seviyedeki bireyler burada sesini bulur.
          </p>

          <blockquote className="mt-10 pl-6 border-l-4 border-felix">
            <p className="font-display text-xl italic text-ink/80 leading-relaxed">
              &ldquo;Sanata dokunan bir çocuk, karşısına çıkan her şeyin üstesinden zarafetle gelir.&rdquo;
            </p>
            <cite className="mt-3 block text-xs text-ink/40 uppercase tracking-widest not-italic">
              — Hülya Kazan, Kurucu & Sanat Yönetmeni
            </cite>
          </blockquote>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">Çalışma Alanlarımız</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-ink/5 text-ink/60 text-xs px-3 py-1.5 rounded-full border border-ink/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right column */}
        <FadeUp delay={0.2}>
          <div className="font-display text-[9rem] font-bold text-ink/5 leading-none select-none overflow-hidden">
            FELIX
          </div>
          <div className="mt-4">
            <div className="bg-ink text-chalk p-8">
              <p className="text-felix text-xs uppercase tracking-widest">Vizyonumuz</p>
              <p className="text-chalk/60 text-sm mt-3 leading-relaxed">
                Sanatın birleştirici gücünü kullanarak toplumu etkileyen ve farklı sesleri
                bir araya getiren bir müzik platformu oluşturmak.
              </p>
            </div>
            <div className="bg-felix text-ink p-8 mt-px">
              <p className="text-ink/60 text-xs uppercase tracking-widest">Misyonumuz</p>
              <p className="text-ink/80 text-sm mt-3 leading-relaxed">
                Sanat ve müziğin evrensel dilini kullanarak toplulukları ilham almaya teşvik etmek,
                yetenekli bireylerin eğitimine katkıda bulunmak ve sosyal sorumluluk projeleriyle topluma
                fayda sağlamak.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
