import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reactions = [
  { id: 'felt', label: 'felt this', color: 'var(--blush)' },
  { id: 'thinking', label: 'thinking about this', color: 'var(--slate)' },
  { id: 'saved', label: 'saved', color: 'var(--moss)' },
  { id: 'comforted', label: 'comforted me', color: 'var(--dusk)' },
  { id: 'pause', label: 'made me pause', color: 'var(--fog)' },
  { id: 'reply', label: 'want to reply later', color: 'transparent', border: 'var(--ember)' },
];

export default function InteractionSystem() {
  const [activeReaction, setActiveReaction] = useState(null);

  const handleReactionClick = (id) => {
    setActiveReaction(id);
    setTimeout(() => {
      if (activeReaction === id) setActiveReaction(null);
    }, 2000);
  };

  return (
    <section className="w-full bg-[var(--parchment)] py-32 px-6 flex flex-col items-center">
      <div className="max-w-[800px] w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] md:text-[52px] font-serif text-[var(--ink)] mb-16 text-center"
        >
          Reactions, not rankings.
        </motion.h2>

        {/* Reaction Picker UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-xl rounded-[32px] p-8 shadow-sm border border-white/10 flex flex-wrap justify-center gap-4 mb-24 relative max-w-[600px]"
        >
          {reactions.map((rx) => (
            <motion.button
              key={rx.id}
              onClick={() => handleReactionClick(rx.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-sans text-sm tracking-wide transition-colors duration-300 relative"
              style={{
                backgroundColor: rx.border ? 'transparent' : `${rx.color}30`, // 30 is hex for roughly 20% opacity
                border: rx.border ? `1px solid ${rx.border}` : '1px solid transparent',
                color: rx.border ? rx.border : rx.color,
              }}
            >
              {rx.label}
              
              {/* Floating Confirmation */}
              <AnimatePresence>
                {activeReaction === rx.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap text-xs font-handwriting text-[var(--ink)] bg-[#050505] border border-white/10 px-3 py-1 rounded-full shadow-sm pointer-events-none"
                  >
                    +1 quiet appreciation
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>

        {/* Comparison */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--fog)]/50 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 text-[24px] md:text-[28px] font-handwriting text-[var(--slate)] line-through decoration-[var(--slate)]/50"
          >
            <div>❌ likes</div>
            <div>❌ followers</div>
            <div>❌ viral rankings</div>
            <div>❌ engagement scores</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 text-[24px] md:text-[28px] font-handwriting text-[var(--moss)]"
          >
            <div>✓ quiet appreciation</div>
            <div>✓ soft signals</div>
            <div>✓ no public counts</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
