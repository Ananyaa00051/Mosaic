import { useState } from 'react';
import { motion } from 'framer-motion';

const methods = [
  {
    title: 'Curator trails',
    desc: 'human-made collections',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=700',
  },
  {
    title: 'Community recommendations',
    desc: 'from real circles',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=700',
  },
  {
    title: 'Rotating themes',
    desc: 'weekly editorial',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=700',
  },
  {
    title: 'Serendipitous finds',
    desc: 'no algorithm, just chance',
    img: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=700',
  },
  {
    title: 'Interest maps',
    desc: 'visual exploration',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=700',
  },
];

// Masonry layout configs: span, height, delay
const tileLayout = [
  { col: 'col-span-2', h: 'h-48', delay: 0 },
  { col: 'col-span-1', h: 'h-48', delay: 0.1 },
  { col: 'col-span-1', h: 'h-56', delay: 0.15 },
  { col: 'col-span-2', h: 'h-40', delay: 0.2 },
  { col: 'col-span-3', h: 'h-36', delay: 0.25 },
];

export default function Discovery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="the-feed" className="w-full bg-[#050505] flex flex-col relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row relative z-10">

        {/* Left Panel */}
        <div className="w-full lg:w-[45%] px-6 lg:pl-16 lg:pr-20 py-32 flex flex-col justify-center border-r border-white/5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--moss)] mb-6 block"
          >
            The Feed
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[40px] md:text-[52px] font-serif text-[var(--ink)] mb-14 leading-[1.1]"
          >
            Discovery that feels like wandering.
          </motion.h2>

          <div className="flex flex-col gap-0 divide-y divide-white/5">
            {methods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="group flex items-center justify-between py-5 cursor-none"
              >
                <div className="flex flex-col">
                  <span className="font-serif text-[20px] text-[var(--ink)] group-hover:text-[var(--blush)] transition-colors duration-300">
                    {method.title}
                  </span>
                  <span className="font-sans text-[13px] text-[var(--slate)] mt-0.5">
                    {method.desc}
                  </span>
                </div>
                <motion.div
                  animate={{ x: hovered === i ? 4 : 0, opacity: hovered === i ? 1 : 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--moss)] text-[20px]"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Panel — Photo Grid */}
        <div className="w-full lg:w-[55%] px-6 lg:px-12 py-24 flex items-center justify-center">
          <div className="w-full max-w-[520px] grid grid-cols-3 gap-3">
            {methods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: tileLayout[i].delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`${tileLayout[i].col} ${tileLayout[i].h} rounded-2xl overflow-hidden relative group cursor-none`}
              >
                <img
                  src={method.img}
                  alt={method.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[var(--moss)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Label reveals on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="font-serif text-[13px] text-[var(--ink)] leading-tight">
                    {method.title}
                  </div>
                </div>

                {/* Active highlight ring */}
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 rounded-2xl ring-2 ring-[var(--moss)]/60 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Tagline Strip */}
      <div className="w-full border-t border-white/5 py-10 text-center px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif italic text-[22px] md:text-[28px] text-[var(--slate)]"
        >
          "Not algorithmic compulsion. Intentional wandering."
        </motion.p>
      </div>

    </section>
  );
}
