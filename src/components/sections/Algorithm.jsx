import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconFlameOff, IconHeartRateMonitor, IconRefresh, IconArrowsExchange, IconShieldCheck, IconEye } from '@tabler/icons-react';

const principleCards = [
  { label: 'Ragebait suppressed', icon: IconFlameOff, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800' },
  { label: 'Emotional spirals slowed', icon: IconHeartRateMonitor, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
  { label: 'Repetitive sadness interrupted', icon: IconRefresh, img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800' },
  { label: 'Opposing views, gently', icon: IconArrowsExchange, img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800' },
  { label: 'Creators not punished for inconsistency', icon: IconShieldCheck, img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800' },
  { label: 'Transparency: why you see this', icon: IconEye, img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800' },
];

export default function Algorithm() {
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleIndex(prev => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[var(--ink)] py-32 px-6 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] md:text-[56px] font-serif text-[var(--cream)] mb-24 text-center"
        >
          An algorithm that works for you.
        </motion.h2>

        {/* Interactive Diagram */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center relative mb-32">
          
          {/* Left Side */}
          <div className="w-full md:w-[40%] flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="font-handwriting text-[24px] text-[var(--slate)] mb-6">
              Traditional algorithm asks...
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cycleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="font-serif text-[32px] md:text-[40px] text-[var(--fog)] opacity-50"
                >
                  What maximizes engagement?
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 h-[200px]">
            <motion.div 
              className="w-px h-full bg-gradient-to-b from-transparent via-[var(--fog)] to-transparent opacity-30"
            />
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-[var(--fog)] bg-[var(--ink)] z-10"
              animate={{ rotate: [45, 225] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[40%] flex flex-col items-center text-center">
            <div className="font-handwriting text-[24px] text-[var(--moss)] mb-6">
              MOSAIC asks...
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cycleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-serif text-[32px] md:text-[40px] text-[var(--cream)]"
                >
                  What creates emotional balance?
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {principleCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "var(--moss)" }}
                className="relative bg-[#0F0F12] p-6 rounded-[24px] border border-white/5 flex items-start gap-4 transition-colors duration-300 shadow-[0_0_20px_rgba(139,92,246,0.03)] overflow-hidden group min-h-[140px]"
              >
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/70 z-10 transition-opacity duration-300 group-hover:bg-black/50" />
                  <img src={card.img} alt={card.label} className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative z-10 text-[var(--moss)] opacity-80 mt-1 drop-shadow-md">
                  <Icon size={24} stroke={1.5} />
                </div>
                <div className="relative z-10 font-sans text-[16px] text-[var(--ink)] leading-snug drop-shadow-md">
                  {card.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparency Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full bg-[#050505] border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(188,19,254,0.1)]"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--ember)] opacity-5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="inline-block px-3 py-1 bg-[var(--ember)]/10 border border-[var(--ember)]/30 rounded-full text-[12px] font-sans text-[var(--ember)] uppercase tracking-wider mb-6">
            Radical Transparency
          </div>
          
          <h3 className="font-serif text-[32px] text-[var(--cream)] mb-4">
            "Why am I seeing this?"
          </h3>
          <p className="font-sans text-[18px] text-[var(--fog)] max-w-[600px] leading-relaxed">
            "You're seeing more photography because you saved 5 film-camera posts. No black-box manipulation."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
