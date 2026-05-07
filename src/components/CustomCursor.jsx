import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-[14px] h-[14px] bg-[var(--ember)] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
      />
      
      {/* Following ring */}
      <motion.div
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-[var(--ember)] rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.2, // 200ms delay
        }}
      />
    </>
  );
}
