import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reactions = [
  { id: 'felt',      label: 'felt this',           emoji: '🫧',  color: '#D8B4FE', confirm: 'softly felt' },
  { id: 'thinking',  label: 'thinking about this',  emoji: '🌀',  color: '#94A3B8', confirm: 'sitting with it' },
  { id: 'saved',     label: 'saved',                emoji: '🌿',  color: '#8B5CF6', confirm: 'kept quietly' },
  { id: 'comforted', label: 'comforted me',          emoji: '🕯️',  color: '#BC13FE', confirm: 'a gentle warmth' },
  { id: 'pause',     label: 'made me pause',         emoji: '🌊',  color: '#6D28D9', confirm: 'a thoughtful pause' },
  { id: 'reply',     label: 'want to reply later',   emoji: '✉️',  color: '#BC13FE', confirm: 'noted for later', isOutline: true },
];

const OLD = ['likes', 'follower counts', 'viral rankings', 'engagement scores', 'story views'];
const NEW  = ['quiet appreciation', 'soft signals', 'no public counts', 'felt responses', 'private echoes'];

export default function InteractionSystem() {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive(id);
    setTimeout(() => setActive(prev => prev === id ? null : prev), 2200);
  };

  return (
    <section className="w-full bg-[var(--parchment)] py-32 px-6 flex flex-col items-center overflow-hidden">
      <div className="max-w-[900px] w-full flex flex-col items-center">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--moss)] mb-6"
        >
          Interaction Design
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] md:text-[56px] font-serif text-[var(--ink)] mb-4 text-center leading-tight"
        >
          Reactions, not rankings.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-[16px] text-[var(--slate)] text-center mb-20 max-w-[480px]"
        >
          No likes. No counts. Just honest, human responses — private by default.
        </motion.p>

        {/* Post Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-[600px] bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.08)] mb-6"
        >
          {/* Post image */}
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
              alt="journal entry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="font-sans text-[11px] text-[var(--slate)] uppercase tracking-widest">journal entry</span>
              <p className="font-serif text-[18px] text-[var(--ink)] leading-snug mt-1">
                "the light at 4pm was doing something today"
              </p>
            </div>
          </div>

          {/* Reaction strip */}
          <div className="p-6">
            <p className="font-sans text-[12px] text-[var(--slate)] uppercase tracking-widest mb-4">How did this land for you?</p>
            <div className="flex flex-wrap gap-3">
              {reactions.map((rx) => (
                <div key={rx.id} className="relative">
                  <motion.button
                    onClick={() => handleClick(rx.id)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    animate={{
                      backgroundColor: active === rx.id
                        ? `${rx.color}35`
                        : rx.isOutline ? 'transparent' : `${rx.color}18`,
                      borderColor: active === rx.id
                        ? rx.color
                        : rx.isOutline ? `${rx.color}60` : 'transparent',
                    }}
                    transition={{ duration: 0.25 }}
                    className="px-4 py-2.5 rounded-full font-sans text-[13px] border flex items-center gap-2 cursor-none"
                    style={{ color: rx.color }}
                  >
                    <span className="text-[15px]">{rx.emoji}</span>
                    {rx.label}
                  </motion.button>

                  {/* Floating confirmation */}
                  <AnimatePresence>
                    {active === rx.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.85 }}
                        animate={{ opacity: 1, y: -38, scale: 1 }}
                        exit={{ opacity: 0, y: -46, scale: 0.85 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap font-sans text-[11px] text-[var(--ink)] bg-[#0F0F12] border border-white/10 px-3 py-1 rounded-full shadow-lg pointer-events-none z-50"
                      >
                        ✦ {rx.confirm}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-[12px] text-[var(--slate)]/50 mb-28 text-center"
        >
          tap a reaction ↑ to feel it
        </motion.p>

        {/* Before / After comparison */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/3 border border-white/5 rounded-[24px] p-8"
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-red-400/60 mb-6">The old internet</p>
            <div className="flex flex-col gap-3">
              {OLD.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="text-red-400/40 text-[12px]">✕</span>
                  <span className="font-sans text-[16px] text-[var(--slate)]/40 line-through decoration-[var(--slate)]/20">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-[var(--moss)]/5 border border-[var(--moss)]/15 rounded-[24px] p-8 shadow-[0_0_40px_rgba(139,92,246,0.06)]"
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[var(--moss)] mb-6">On MOSAIC</p>
            <div className="flex flex-col gap-3">
              {NEW.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[var(--moss)] text-[12px]">✦</span>
                  <span className="font-sans text-[16px] text-[var(--ink)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
