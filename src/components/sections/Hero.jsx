import { motion } from 'framer-motion';

// Soft feed cards inside phone
const feedCards = [
  {
    img: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=400',
    name: 'maya k.',
    tag: 'feeling dreamy',
    reaction: '🫧 felt this',
  },
  {
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400',
    name: 'journal entry',
    tag: 'late night thoughts',
    reaction: '🌿 saved',
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400',
    name: 'somewhere quiet',
    tag: 'ambient music',
    reaction: '🌊 made me pause',
  },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center pt-20">

      {/* — Ambient background blobs — */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-[var(--moss)] opacity-[0.07] blur-[140px]"
        animate={{ x: [-60, 60, -60], y: [-40, 30, -40] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ top: '0%', left: '-15%' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[var(--ember)] opacity-[0.06] blur-[130px]"
        animate={{ x: [60, -60, 60], y: [30, -40, 30] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '-5%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[var(--blush)] opacity-[0.05] blur-[100px]"
        animate={{ x: [-30, 30, -30], y: [20, -20, 20] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ top: '40%', left: '35%' }}
      />

      <div className="max-w-[1300px] mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 relative">

        {/* ── Left: Text ── */}
        <div className="flex flex-col items-start">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--moss)] mb-7"
          >
            a cultural response to algorithmic exhaustion
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[68px] md:text-[96px] font-serif leading-[0.88] text-[var(--ink)] tracking-tight mb-8"
          >
            A softer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blush)] via-[var(--moss)] to-[var(--ember)]">
              internet.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-[17px] md:text-[19px] text-[var(--slate)] max-w-[460px] mb-12 leading-relaxed"
          >
            MOSAIC is not social media. It's a healthier digital social environment — designed for human flourishing, not attention extraction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex items-center gap-8"
          >
            <a
              href="#the-vision"
              className="font-sans text-[13px] text-[var(--ink)] border-b border-[var(--moss)] pb-1 tracking-wide hover:text-[var(--moss)] transition-colors duration-300"
            >
              Explore the Vision ↓
            </a>
            <a
              href="#manifesto"
              className="font-sans text-[13px] text-[var(--slate)] border-b border-transparent hover:border-[var(--slate)] pb-1 tracking-wide transition-colors duration-300"
            >
              Read the Manifesto
            </a>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-3"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--moss)] animate-pulse" />
            <span className="font-sans text-[12px] text-[var(--slate)] tracking-wide">
              No followers. No likes. No streaks.
            </span>
          </motion.div>
        </div>

        {/* ── Right: Phone Mockup ── */}
        <div className="relative flex justify-center items-center h-[680px]">

          {/* Glow behind phone */}
          <motion.div
            className="absolute w-[340px] h-[340px] rounded-full bg-[var(--blush)] opacity-[0.12] blur-[80px]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Phone shell */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            style={{ perspective: '1000px' }}
            className="relative w-[300px] h-[620px] bg-[#0A0A0D] border border-white/10 rounded-[44px] shadow-[0_0_80px_rgba(139,92,246,0.18),0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0A0A0D] border-b border-white/5 rounded-b-2xl z-30" />

            {/* Status bar */}
            <div className="absolute top-5 left-0 right-0 flex justify-between items-center px-6 z-20">
              <span className="font-sans text-[10px] text-[var(--slate)]">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-1.5 rounded-sm border border-[var(--slate)]/50" />
                <div className="w-1 h-1 rounded-full bg-[var(--moss)]" />
              </div>
            </div>

            {/* Screen content */}
            <div className="absolute inset-0 pt-12 flex flex-col overflow-hidden">

              {/* Greeting header */}
              <div className="px-5 pt-4 pb-3 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <p className="font-sans text-[11px] text-[var(--slate)] mb-1 uppercase tracking-widest">Good morning</p>
                  <p className="font-serif text-[22px] text-[var(--ink)]">Your quiet corner.</p>
                </motion.div>

                {/* Circle avatars */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.7 }}
                  className="flex gap-3 mt-4"
                >
                  {['circles', 'journal', 'wander'].map((label, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at 40% 40%, ${['#4C1D9520','#8B5CF615','#BC13FE12'][i]}, transparent)`,
                        }}
                      >
                        <span className="text-[16px]">{['🌿','📖','🌊'][i]}</span>
                      </div>
                      <span className="font-sans text-[9px] text-[var(--slate)]">{label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-white/5 flex-shrink-0" />

              {/* Scrolling feed cards */}
              <div className="flex-1 overflow-hidden relative px-4 pt-3">
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: [0, -420] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                >
                  {[...feedCards, ...feedCards].map((card, i) => (
                    <div
                      key={i}
                      className="w-full rounded-2xl overflow-hidden relative flex-shrink-0"
                      style={{ height: '160px' }}
                    >
                      <img
                        src={card.img}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="font-sans text-[9px] uppercase tracking-widest text-[var(--moss)]">{card.tag}</span>
                            <p className="font-serif text-[13px] text-[var(--ink)] leading-tight">{card.name}</p>
                          </div>
                          <span className="font-sans text-[9px] text-[var(--blush)] bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                            {card.reaction}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* End of feed card */}
                  <div className="w-full rounded-2xl border border-white/8 bg-white/3 flex flex-col items-center justify-center gap-2 flex-shrink-0" style={{ height: '100px' }}>
                    <span className="text-[20px]">🌿</span>
                    <span className="font-serif text-[12px] text-[var(--moss)]">That's all for today.</span>
                    <span className="font-sans text-[9px] text-[var(--slate)]">You've seen everything.</span>
                  </div>
                </motion.div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0D] to-transparent pointer-events-none" />
              </div>

            </div>

            {/* Phone edge gleam */}
            <div className="absolute top-0 left-0 w-full h-full rounded-[44px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating pill — no notifications */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
            className="absolute top-16 right-0 md:-right-8 bg-[#0F0F14] border border-white/10 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 backdrop-blur-xl z-20"
          >
            <div className="w-7 h-7 rounded-full bg-[var(--moss)]/15 flex items-center justify-center">
              <span className="text-[13px]">🔕</span>
            </div>
            <div>
              <p className="font-sans text-[11px] text-[var(--ink)] font-bold">No notifications.</p>
              <p className="font-sans text-[9px] text-[var(--slate)]">You come when you're ready.</p>
            </div>
          </motion.div>

          {/* Floating pill — finite feed */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-24 left-0 md:-left-8 bg-[#0F0F14] border border-white/10 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 backdrop-blur-xl z-20"
          >
            <div className="w-7 h-7 rounded-full bg-[var(--ember)]/15 flex items-center justify-center">
              <span className="text-[13px]">📖</span>
            </div>
            <div>
              <p className="font-sans text-[11px] text-[var(--ink)] font-bold">Finite feed.</p>
              <p className="font-sans text-[9px] text-[var(--slate)]">20 posts, then it ends.</p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
