import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const moodBoards = [
  {
    title: 'Mood Room',
    desc: 'You enter, not scroll. A calm ambient space that greets you without demands — no notifications, no urgency, just presence.',
    img: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=900',
    tag: 'Ambient Entry',
  },
  {
    title: 'The Finite Feed',
    desc: '20–30 meaningful posts, curated by people you chose. When it ends, it says so — and the app closes gracefully.',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900',
    tag: 'Intentional Scroll',
  },
  {
    title: 'Journal Entry',
    desc: 'A space for thoughts that don\'t need an audience. Voice notes, fragments, sketches — shared only if you want.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=900',
    tag: 'Private Expression',
  },
  {
    title: 'Community Room',
    desc: 'Temporary rooms around shared moments. They fade when the moment passes — no lingering follower counts, no permanent records.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900',
    tag: 'Intimate Circles',
  },
  {
    title: 'Mood Palette',
    desc: 'The app listens to how you feel. Soft colors, slow animations, and a visual language that shifts gently with your emotional state.',
    img: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&q=80&w=900',
    tag: 'Emotional Design',
  },
];

export default function AestheticSystem() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={scrollRef} className="w-full bg-[var(--ink)] noise-bg py-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[48px] md:text-[64px] font-serif text-[var(--cream)]"
        >
          Designed to breathe.
        </motion.h2>
      </div>

      {/* Horizontal Scroll Strip */}
      <div className="w-full overflow-x-auto hide-scrollbar pl-6 md:pl-[calc((100vw-1400px)/2+24px)] mb-32">
        <motion.div
          className="flex gap-8 w-max pb-8"
          style={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? xOffset : 0 }}
        >
          {moodBoards.map((board, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-[300px] md:w-[420px] h-[440px] md:h-[560px] rounded-[32px] overflow-hidden flex-shrink-0 group snap-center cursor-none"
            >
              {/* Unsplash Photo */}
              <img
                src={board.img}
                alt={board.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--moss)]/10 to-[var(--ember)]/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top: pill tag */}
              <div className="absolute top-6 left-6 z-20">
                <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[var(--blush)] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  {board.tag}
                </span>
              </div>

              {/* Bottom: title + desc */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                <h3 className="font-serif text-[28px] md:text-[32px] text-[var(--ink)] leading-tight mb-0 group-hover:mb-3 transition-all duration-500">
                  {board.title}
                </h3>
                {/* Description slides in on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[120px] transition-all duration-500 ease-out">
                  <p className="font-sans text-[14px] md:text-[15px] text-[var(--slate)] leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {board.desc}
                  </p>
                </div>
              </div>

              {/* Noise grain overlay */}
              <div className="absolute inset-0 noise-bg pointer-events-none mix-blend-overlay opacity-30 z-30" />
            </motion.div>
          ))}
          <div className="w-12 flex-shrink-0" />
        </motion.div>
      </div>

      {/* Design Tokens Row */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        
        {/* Colors */}
        <div>
          <h4 className="font-sans text-[12px] uppercase tracking-widest text-[var(--slate)] mb-6">Palette</h4>
          <div className="flex flex-wrap gap-3">
            {['moss', 'dusk', 'fog', 'cream', 'ink', 'blush', 'slate', 'parchment', 'ember'].map(color => (
              <div key={color} className="flex flex-col gap-2 items-center">
                <div 
                  className="w-10 h-10 rounded-full border border-white/10" 
                  style={{ backgroundColor: `var(--${color})` }} 
                />
                <span className="text-[10px] text-[var(--slate)]">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h4 className="font-sans text-[12px] uppercase tracking-widest text-[var(--slate)] mb-6">Typography</h4>
          <div className="flex flex-col gap-4 text-[var(--ink)]">
            <div className="font-serif text-[24px]">Helvetica Bold</div>
            <div className="font-sans text-[16px]">Helvetica Regular</div>
            <div className="font-handwriting text-[24px]">Helvetica Light</div>
          </div>
        </div>

        {/* Motion */}
        <div>
          <h4 className="font-sans text-[12px] uppercase tracking-widest text-[var(--slate)] mb-6">Motion</h4>
          <div className="font-sans text-[28px] font-bold text-[var(--slate)] opacity-80">
            slow · organic · breathing
          </div>
        </div>

      </div>

    </section>
  );
}
