import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  { text: 'outrage', color: 'var(--ember)' },
  { text: 'insecurity', color: 'var(--slate)' },
  { text: 'doomscrolling', color: 'var(--moss)' },
  { text: 'loneliness', color: 'var(--fog)' },
  { text: 'ragebait', color: 'var(--ember)' },
  { text: 'spirals', color: 'var(--dusk)' },
  { text: 'exhaustion', color: 'var(--slate)' },
  { text: 'performance', color: 'var(--blush)' },
  { text: 'addiction', color: 'var(--moss)' },
  { text: 'dysregulation', color: 'var(--dusk)' },
];

const contrastStatements = [
  { left: '"You missed 283 things."', right: '"Welcome back."' },
  { left: '"Keep scrolling."', right: '"That\'s all for today."' },
  { left: '"Trending outrage."', right: '"A calmer space."' },
  { left: '"Build your brand."', right: '"Just exist here."' },
  { left: '"Maximize engagement."', right: '"Emotional sustainability."' },
];

const stats = [
  { label: 'hours lost daily', number: '2.4h' },
  { label: 'feel worse after scrolling', number: '64%' },
  { label: 'want something different', number: '78% of Gen Z' },
];

export default function Problem() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1800); // 1.2s stay + fade time
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="the-problem" className="relative w-full min-h-screen bg-[var(--ink)] text-[var(--cream)] py-32 px-6 flex flex-col items-center">
      
      {/* Headline */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-[40px] md:text-[64px] font-serif text-center max-w-[800px] mb-12"
      >
        The internet was not supposed to feel like this.
      </motion.h2>

      {/* Kinetic Word Cloud */}
      <div className="h-[80px] mb-24 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWordIndex}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[48px] md:text-[72px] font-serif italic"
            style={{ color: words[currentWordIndex].color }}
          >
            {words[currentWordIndex].text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrast Statements */}
      <div className="w-full max-w-[900px] flex flex-col gap-8 mb-32">
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10 opacity-50 text-sm tracking-widest uppercase">
          <div>The internet says...</div>
          <div>MOSAIC says...</div>
        </div>
        {contrastStatements.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-8 items-center"
          >
            <div className="font-handwriting text-[24px] md:text-[32px] text-[var(--fog)] opacity-60 line-through decoration-black/20">
              {stat.left}
            </div>
            <div className="font-serif text-[24px] md:text-[36px] text-[var(--moss)]">
              {stat.right}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Callouts */}
      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#0F0F12] p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-[200px] shadow-[0_0_30px_rgba(139,92,246,0.05)]"
          >
            <div className="font-handwriting text-[20px] text-[var(--slate)]">
              {stat.label}
            </div>
            <div className="font-serif text-[64px] text-[var(--cream)] leading-none">
              {stat.number}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
