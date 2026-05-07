import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IconBrandTumblr, IconBrandPinterest, IconMovie, IconBrandDiscord, IconBook, IconDeviceGamepad2 } from '@tabler/icons-react';

const cards = [
  { label: 'early Tumblr', icon: IconBrandTumblr, color: 'var(--slate)', bg: '#1E1B4B', img: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&q=80&w=800' },
  { label: 'Pinterest', icon: IconBrandPinterest, color: 'var(--ember)', bg: '#2E1065', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800' },
  { label: 'Letterboxd', icon: IconMovie, color: 'var(--moss)', bg: '#4C1D95', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
  { label: 'Discord communities', icon: IconBrandDiscord, color: 'var(--ink)', bg: '#5B21B6', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800' },
  { label: 'digital journals', icon: IconBook, color: 'var(--blush)', bg: '#6D28D9', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800' },
  { label: 'cozy indie games', icon: IconDeviceGamepad2, color: 'var(--ember)', bg: '#7C3AED', tagline: "but built by behavioral psychologists, not ad companies", img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800' },
];

function TiltCard({ card }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = card.icon;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex-shrink-0 w-[240px] h-[320px] rounded-[32px] p-6 flex flex-col justify-between cursor-none snap-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className="absolute inset-0 rounded-[32px] overflow-hidden -z-10"
      >
        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 hover:opacity-40" />
        <img 
          src={card.img} 
          alt={card.label} 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div 
        className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-0"
        style={{ transform: "translateZ(-20px)" }}
      />
      
      <div style={{ transform: "translateZ(30px)", color: card.color }}>
        <Icon size={32} stroke={1.5} />
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="mt-auto">
        <h3 className="font-serif text-[24px] leading-tight text-[var(--ink)] mb-2">
          {card.label}
        </h3>
        {card.tagline && (
          <p className="font-handwriting text-[16px] text-[var(--slate)] leading-tight">
            {card.tagline}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Vision() {
  return (
    <section id="the-vision" className="w-full bg-[var(--cream)] py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] md:text-[56px] font-serif text-[var(--ink)]"
        >
          What if the internet felt like this?
        </motion.h2>
      </div>

      {/* Horizontal Scroll Snap Grid */}
      <div className="w-full pl-6 md:pl-[calc((100vw-1200px)/2+24px)] overflow-x-auto flex gap-6 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ perspective: "1000px" }}>
        {cards.map((card, i) => (
          <TiltCard key={i} card={card} />
        ))}
        {/* Padding element for right edge spacing */}
        <div className="flex-shrink-0 w-6 md:w-[calc((100vw-1200px)/2)]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 mt-24">
        <hr className="border-[var(--ember)] opacity-30 mb-16" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-center font-serif italic text-[28px] md:text-[40px] text-[var(--ink)] leading-tight">
            "People existing together online. Not building personal brands."
          </p>
        </motion.div>
        <hr className="border-[var(--ember)] opacity-30 mt-16" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
