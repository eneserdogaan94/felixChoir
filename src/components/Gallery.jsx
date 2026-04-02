import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import pop from '../assets/galeri/pop.jpg'
import karma from '../assets/galeri/karma.jpg'
import kadin from '../assets/galeri/kadin.jpg'
import bayraki from '../assets/galeri/bayraki.jpg'
import img1 from '../assets/galeri/1.jpg'
import img2 from '../assets/galeri/2.jpg'
import img3 from '../assets/galeri/3.jpg'
import img4 from '../assets/galeri/4.png'

const images = [pop, karma, kadin, bayraki, img1, img2, img3, img4]

function GalleryImage({ src, index }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
      className="group mb-4 overflow-hidden break-inside-avoid"
    >
      <img
        src={src}
        alt="Koro Felix galeri"
        className="w-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 cursor-pointer"
      />
    </motion.div>
  )
}

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="galeri" className="bg-chalk text-ink py-24 px-8 md:px-24 clip-diagonal-up">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <p className="text-xs text-felix tracking-[0.4em] uppercase font-semibold">GALERİ</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold mt-3">Sahne Arkası ve Konserler</h2>
      </motion.div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <GalleryImage key={index} src={src} index={index} />
        ))}
      </div>
    </section>
  )
}
