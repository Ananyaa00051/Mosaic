import { motion } from 'framer-motion';

const methods = [
  'Curator trails — human-made collections',
  'Community recommendations — from real circles',
  'Rotating themes — weekly editorial',
  'Serendipitous finds — no algorithm, just chance',
  'Interest maps — visual exploration',
];

const mockTiles = [
  { w: 'w-[60%]', h: 'h-40', bg: 'bg-[#1E1B4B]', delay: 0 },
  { w: 'w-[35%]', h: 'h-32', bg: 'bg-[#4C1D95]', delay: 0.1 },
  { w: 'w-[45%]', h: 'h-48', bg: 'bg-[#5B21B6]', delay: 0.2 },
  { w: 'w-[50%]', h: 'h-36', bg: 'bg-[#7C3AED]', delay: 0.3 },
  { w: 'w-[100%]', h: 'h-24', bg: 'bg-[#8B5CF6]', delay: 0.4 },
];

export default function Discovery() {
  return (
    <section className="w-full bg-[var(--cream)] flex flex-col relative overflow-hidden">
      
      {/* Split Backgrounds */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-full lg:w-1/2 bg-[#050505]" />
        <div className="w-full lg:w-1/2 bg-[#0F0F12]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row relative z-10">
        
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-12 lg:pr-24 py-32 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[40px] md:text-[48px] font-serif text-[var(--ink)] mb-12 leading-[1.1]"
          >
            Discovery that feels like wandering.
          </motion.h2>

          <div className="flex flex-col gap-6">
            {methods.map((method, i) => {
              const [title, desc] = method.split(' — ');
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="flex flex-col"
                >
                  <span className="font-serif text-[20px] text-[var(--ink)]">{title}</span>
                  <span className="font-sans text-[15px] text-[var(--slate)]">{desc}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 px-6 lg:px-24 py-16 lg:py-32 flex items-center justify-center min-h-[600px]">
          <div className="w-full max-w-[480px] bg-white/40 backdrop-blur-md rounded-[40px] border border-white/60 p-6 flex flex-wrap gap-4 shadow-sm items-start content-start">
             {mockTiles.map((tile, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 0.8, scale: 1 }}
                 whileHover={{ opacity: 1, scale: 1.02 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: tile.delay }}
                 className={`${tile.w} ${tile.h} ${tile.bg} rounded-3xl relative overflow-hidden group cursor-none`}
               >
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
               </motion.div>
             ))}
          </div>
        </div>

      </div>

      {/* Tagline */}
      <div className="w-full bg-[var(--cream)] py-24 relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-handwriting text-[28px] text-[var(--dusk)]"
        >
          "Not algorithmic compulsion. Intentional wandering."
        </motion.div>
      </div>

    </section>
  );
}
