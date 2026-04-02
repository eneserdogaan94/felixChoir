import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { team } from '../data/team'

function TeamCard({ member, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
        />

        {/* Yellow bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-felix scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Role overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 right-4">
            {member.positions.slice(0, 1).map((p) => (
              <p key={p} className="text-chalk/80 text-xs leading-snug">{p}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-chalk text-sm">{member.name}</h3>
        <p className="text-felix text-xs uppercase tracking-widest mt-1">{member.role}</p>
      </div>

      {member.quote && (
        <p className="mt-3 text-chalk/30 text-xs italic leading-relaxed group-hover:text-chalk/60 transition-colors duration-500">
          &ldquo;{member.quote}&rdquo;
        </p>
      )}
    </motion.div>
  )
}

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="ekibimiz" className="bg-[#0c0c0c] text-chalk py-24 px-8 md:px-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xs text-felix tracking-[0.4em] uppercase font-semibold">EKİBİMİZ</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold mt-3">Sesimizin Arkasındakiler</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  )
}
