import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '../utils';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setHasScrolled(latest > window.innerHeight - 100); // Past hero section roughly
    });
  }, [scrollY]);

  const links = ['The Problem', 'The Vision', 'How It Works', 'The Feed', 'Community', 'Monetization', 'Manifesto'];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-md px-6 py-5 flex items-center justify-between",
        hasScrolled ? "border-b border-[var(--fog)] bg-[var(--cream)]/70" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="font-serif text-[18px] tracking-tight uppercase">
        MOSAIC
      </div>
      
      <div className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm font-sans text-current opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
