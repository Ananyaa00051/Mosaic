import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const screens = [
  {
    title: "You don't open into chaos",
    desc: "No loud notifications. No trending outrage. No 'you missed this.' You enter a space.",
    mockup: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0f12] to-[#1e1b4b] p-6 flex flex-col justify-center items-center">
        <div className="font-serif text-[28px] text-[var(--ink)] mb-12 opacity-80">Good morning.</div>
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-sm flex items-center justify-center text-xs font-handwriting text-[var(--slate)]">circles</div>
          <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-sm flex items-center justify-center text-xs font-handwriting text-[var(--slate)]">journal</div>
          <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-sm flex items-center justify-center text-xs font-handwriting text-[var(--slate)]">discoveries</div>
        </div>
      </div>
    )
  },
  {
    title: "The Finite Feed",
    desc: "20–30 meaningful posts. Then the app ends the session naturally. 'That's all for today.'",
    mockup: (
      <div className="w-full h-full bg-[#050505] p-4 flex flex-col gap-4 overflow-hidden relative">
        <div className="w-full h-32 rounded-2xl bg-white/5 border border-white/5 p-4" />
        <div className="w-full h-48 rounded-2xl bg-white/5 border border-white/5 p-4" />
        
        <div className="absolute bottom-8 left-4 right-4 bg-[var(--parchment)] border border-[var(--ember)]/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(188,19,254,0.1)]">
          <div className="text-[32px] mb-2">🌿</div>
          <div className="font-serif text-[18px] text-[var(--ember)]">That's all for today.</div>
          <div className="font-sans text-xs text-[var(--slate)] mt-1">You've seen everything your people shared.</div>
        </div>
      </div>
    )
  },
  {
    title: "What posts look like",
    desc: "Not optimized for virality. Fragments. Thoughts. Voice notes. Art dumps. More human, less performance.",
    mockup: (
      <div className="w-full h-full bg-[#050505] p-4 flex items-center justify-center">
        <div className="w-full rounded-[32px] bg-white/5 border border-white/10 overflow-hidden">
          <div className="w-full h-64 bg-[var(--fog)] relative">
             <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-handwriting text-white">feeling dreamy</div>
          </div>
          <div className="p-4 flex gap-2 overflow-x-auto hide-scrollbar">
            <div className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[var(--blush)]/20 text-[var(--blush)] text-xs font-sans">felt this</div>
            <div className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[var(--moss)]/20 text-[var(--moss)] text-xs font-sans">saved</div>
            <div className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[var(--slate)]/20 text-[var(--slate)] text-xs font-sans">thinking about this</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Mood System",
    desc: "The app doesn't diagnose you. It notices patterns. And responds gently.",
    mockup: (
      <div className="w-full h-full bg-gradient-to-b from-[#050505] to-[#1e1b4b] p-4 flex flex-col items-center justify-center relative">
         <div className="w-full max-w-[280px] bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-[var(--blush)]/20 text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--blush)]/20 mx-auto mb-4 flex items-center justify-center text-[var(--ember)]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
            </div>
            <div className="font-serif text-[20px] text-[var(--ink)] mb-2">Maybe take a breath from this lane?</div>
            <div className="font-sans text-[13px] text-[var(--slate)] mb-6">You've been lingering on heavy topics.</div>
            <button className="w-full py-2 rounded-full bg-white/5 text-[var(--slate)] text-sm hover:bg-white/10 transition-colors">Dismiss gently</button>
         </div>
      </div>
    )
  }
];

function ScreenText({ screen, i, scrollYProgress, total }) {
  const start = i * 0.25;
  const end = start + 0.25;
  const isLast = i === total - 1;

  const input = [];
  const outputOpacity = [];
  const outputY = [];

  if (start > 0) {
    input.push(0, start - 0.001);
    outputOpacity.push(0, 0);
    outputY.push(30, 30);
  }

  if (start === 0) {
    input.push(0);
    outputOpacity.push(1);
    outputY.push(0);
  } else {
    input.push(start, start + 0.05);
    outputOpacity.push(0, 1);
    outputY.push(30, 0);
  }

  if (isLast) {
    input.push(1);
    outputOpacity.push(1);
    outputY.push(0);
  } else {
    input.push(end - 0.05, end);
    outputOpacity.push(1, 0);
    outputY.push(0, -30);
    
    if (end < 1) {
      input.push(end + 0.001, 1);
      outputOpacity.push(0, 0);
      outputY.push(-30, -30);
    }
  }

  const opacity = useTransform(scrollYProgress, input, outputOpacity);
  const y = useTransform(scrollYProgress, input, outputY);

  return (
    <motion.div 
      className="absolute w-full top-1/2 left-0 -translate-y-1/2"
      style={{ opacity, y, pointerEvents: "none" }}
    >
      <h3 className="font-serif text-[40px] md:text-[56px] text-[var(--ink)] leading-[1.1] mb-6">
        {screen.title}
      </h3>
      <p className="font-sans text-[18px] md:text-[20px] text-[var(--slate)] leading-relaxed">
        {screen.desc}
      </p>
    </motion.div>
  );
}

function ScreenMockup({ screen, i, scrollYProgress, total }) {
  const start = i * 0.25;
  const end = start + 0.25;
  const isLast = i === total - 1;

  const input = [];
  const output = [];

  if (start > 0) {
    input.push(0, start - 0.001);
    output.push(0, 0);
  }

  if (start === 0) {
    input.push(0);
    output.push(1);
  } else {
    input.push(start, start + 0.05);
    output.push(0, 1);
  }

  if (isLast) {
    input.push(1);
    output.push(1);
  } else {
    input.push(end - 0.05, end);
    output.push(1, 0);

    if (end < 1) {
      input.push(end + 0.001, 1);
      output.push(0, 0);
    }
  }

  const opacity = useTransform(scrollYProgress, input, output);
  
  return (
    <motion.div
      className="absolute inset-0 bg-[#050505]"
      style={{ opacity }}
    >
      {screen.mockup}
    </motion.div>
  );
}

export default function AppExperience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="how-it-works" ref={containerRef} className="relative w-full h-[400vh] bg-[var(--cream)]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Sticky Text */}
          <div className="relative w-full h-full max-w-[480px]">
             {screens.map((screen, i) => (
               <ScreenText key={i} screen={screen} i={i} scrollYProgress={scrollYProgress} total={screens.length} />
             ))}
          </div>

          {/* Right: Phone Mockup Container */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-[320px] h-[640px] bg-[#050505] rounded-[48px] shadow-[0_0_80px_rgba(139,92,246,0.2)] border-[8px] border-[#1a1a1c] overflow-hidden z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1c] rounded-b-xl z-50 shadow-sm" />
              
              {/* Screen Content Overlays */}
              {screens.map((screen, i) => (
                <ScreenMockup key={i} screen={screen} i={i} scrollYProgress={scrollYProgress} total={screens.length} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
