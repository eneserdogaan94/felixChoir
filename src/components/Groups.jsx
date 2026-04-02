import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { groups } from '../data/groups'

function GroupCard({ group, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.07 }}
      className="group relative flex flex-col items-center text-center p-6 border border-chalk/5 hover:border-felix/30 transition-all duration-500 cursor-pointer"
    >
      <div className="absolute inset-0 bg-felix/0 group-hover:bg-felix/3 transition-all duration-500" />

      <div className="relative w-24 h-24">
        <img
          src={group.logo}
          alt={group.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>

      <h3 className="mt-4 font-semibold text-chalk text-sm tracking-wide relative z-10">{group.name}</h3>
      <p className="text-chalk/40 text-xs mt-1 uppercase tracking-widest relative z-10">{group.type}</p>

      <a
        href={`https://instagram.com/${group.instagram.slice(1)}`}
        className="mt-3 text-felix text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide relative z-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        {group.instagram} ↗
      </a>

      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
        {group.conductors.map((c) => (
          <p key={c} className="text-chalk/30 text-xs">{c}</p>
        ))}
      </div>
    </motion.div>
  )
}

export default function Groups() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="korolarimiz" className="bg-ink text-chalk py-24 px-8 md:px-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xs text-felix tracking-[0.4em] uppercase font-semibold">KOROLARIMİZ</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold mt-3">Her Sese Bir Yuva</h2>
        <p className="text-chalk/50 text-lg mt-4">
          Çocuklardan yetişkinlere, klasikten pop&apos;a — her ses burada kendine yer buluyor.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
        {groups.map((group, index) => (
          <GroupCard key={group.id} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}
