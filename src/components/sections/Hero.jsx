import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] bg-[var(--cream)] noise-bg overflow-hidden flex items-center pt-20">
      {/* Ambient Blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[var(--moss)] opacity-10 blur-[120px]"
        animate={{
          x: [-50, 50, -50],
          y: [-50, 20, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: '10%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-[var(--ember)] opacity-10 blur-[150px]"
        animate={{
          x: [50, -50, 50],
          y: [20, -50, 20],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '-10%', right: '-10%' }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start"
        >
          <span className="font-handwriting text-[14px] text-[var(--slate)] mb-6 opacity-80">
            a cultural response to algorithmic exhaustion
          </span>
          <h1 className="text-[64px] md:text-[96px] font-serif leading-[0.9] text-[var(--ink)] tracking-tight mb-8">
            A softer<br />internet.
          </h1>
          <p className="text-[20px] font-sans text-[var(--slate)] max-w-[480px] mb-12 leading-relaxed">
            MOSAIC is not social media. It's a healthier digital social environment — designed for human flourishing, not attention extraction.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[var(--ink)] border-b border-[var(--ink)] pb-1 font-sans text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity">
              Explore the Vision ↓
            </button>
            <button className="text-[var(--slate)] border-b border-transparent hover:border-[var(--slate)] pb-1 font-sans text-sm tracking-wide transition-colors">
              Read the Manifesto
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Pulsing Circle */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full bg-[var(--blush)] opacity-15 blur-[60px] z-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative w-[320px] h-[640px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[48px] p-4 shadow-[0_0_50px_rgba(188,19,254,0.15)] overflow-hidden z-10"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-white/10 rounded-b-xl z-20" />
            
            {/* Abstract Feed */}
            <div className="relative w-full h-[200%]">
              <motion.div
                className="flex flex-col gap-4 absolute top-0 w-full"
                animate={{ y: [0, -600] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-[240px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm shadow-sm border border-white/5 p-4 flex flex-col justify-end">
                     <div className="w-2/3 h-4 rounded bg-white/10 mb-2" />
                     <div className="w-1/3 h-4 rounded bg-white/5" />
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Bottom fading gradient to simulate depth */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
