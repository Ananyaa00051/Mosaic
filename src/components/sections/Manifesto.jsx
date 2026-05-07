import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const paragraphs = [
  "It's a cultural response to algorithmic exhaustion. To being observed, manipulated, emotionally optimized, and commodified.",
  "MOSAIC intentionally engineers calm. Sincerity. Reflection. Creativity. Groundedness.",
  "The internet does not need to disappear. It needs better emotional architecture."
];

const taglines = [
  "A softer internet.",
  "The feed that ends.",
  "Connection without consumption.",
  "An internet that lets you breathe.",
  "Designed for people, not addiction."
];

export default function Manifesto() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex(prev => (prev + 1) % taglines.length);
    }, 4000); // 4s interval for slow crossfade
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="manifesto" className="w-full min-h-screen bg-[#050505] noise-bg py-40 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Heavy Film Grain Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay noise-bg" />
      
      <div className="max-w-[640px] w-full flex flex-col items-center z-10">
        
        {/* Opening Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-24"
        >
          <h2 className="font-serif italic text-[40px] md:text-[48px] text-[var(--ink)] text-center">
            "This is not an app."
          </h2>
        </motion.div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-12 mb-32 text-center">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
              className="font-sans text-[18px] md:text-[20px] text-[var(--slate)] leading-[1.8]"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Cycling Taglines */}
        <div className="h-[120px] w-full flex items-center justify-center mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 1.5 }}
              className="font-serif text-[40px] md:text-[56px] text-[var(--ink)] text-center leading-[1.1]"
            >
              {taglines[taglineIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Final Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="font-handwriting text-[24px] md:text-[28px] text-[var(--blush)] text-center"
        >
          people existing together online.
        </motion.div>

      </div>
    </section>
  );
}
