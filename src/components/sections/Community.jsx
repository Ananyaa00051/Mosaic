import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const clusters = [
  { id: 1, cx: 80, cy: 60, label: 'film photography', dots: [{x: 70, y: 50}, {x: 90, y: 55}, {x: 80, y: 70}] },
  { id: 2, cx: 220, cy: 100, label: 'late night thoughts', dots: [{x: 210, y: 90}, {x: 230, y: 100}, {x: 215, y: 115}, {x: 235, y: 85}] },
  { id: 3, cx: 120, cy: 180, label: 'ambient music', dots: [{x: 110, y: 170}, {x: 130, y: 175}, {x: 125, y: 190}] },
  { id: 4, cx: 250, cy: 220, label: 'soft journaling', dots: [{x: 240, y: 210}, {x: 260, y: 220}, {x: 245, y: 235}] },
];

function NodeGraph() {
  const [hoveredCluster, setHoveredCluster] = useState(null);

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 shadow-sm p-8 flex items-center justify-center">
      <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
        {/* Connections between clusters */}
        <motion.path
          d="M 80 60 Q 150 80 220 100 T 250 220 Q 180 200 120 180 T 80 60"
          fill="none"
          stroke="var(--moss)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Clusters */}
        {clusters.map((cluster) => (
          <g 
            key={cluster.id} 
            onMouseEnter={() => setHoveredCluster(cluster.id)}
            onMouseLeave={() => setHoveredCluster(null)}
            className="cursor-none"
          >
            {/* Invisible hover area */}
            <circle cx={cluster.cx} cy={cluster.cy} r="40" fill="transparent" />
            
            {/* Background pulse on hover */}
            <motion.circle
              cx={cluster.cx}
              cy={cluster.cy}
              r="30"
              fill="var(--moss)"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredCluster === cluster.id ? 0.1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Internal cluster connections */}
            {cluster.dots.map((dot, i) => (
              <line 
                key={`line-${i}`}
                x1={cluster.cx} y1={cluster.cy} 
                x2={dot.x} y2={dot.y} 
                stroke="var(--slate)" 
                strokeWidth="0.5" 
                opacity="0.3" 
              />
            ))}

            {/* Center Node */}
            <motion.circle 
              cx={cluster.cx} cy={cluster.cy} fill="var(--moss)"
              initial={{ r: 4 }}
              animate={{ r: hoveredCluster === cluster.id ? 5 : 4 }}
            />

            {/* Satellite Dots */}
            {cluster.dots.map((dot, i) => (
              <motion.circle 
                key={`dot-${i}`}
                cx={dot.x} cy={dot.y} fill="var(--slate)" 
                initial={{ r: 2 }}
                animate={{ 
                  y: [-2, 2, -2],
                  opacity: hoveredCluster === cluster.id ? 1 : 0.6
                }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Floating Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-8 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: hoveredCluster ? 1 : 0, 
            y: hoveredCluster ? 0 : 10 
          }}
          className="bg-white px-4 py-1.5 rounded-full shadow-sm font-handwriting text-sm text-[var(--slate)] whitespace-nowrap"
        >
          {hoveredCluster ? clusters.find(c => c.id === hoveredCluster)?.label : ''}
        </motion.div>
      </div>
    </div>
  );
}

export default function Community() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="community" className="w-full bg-[var(--cream)] py-32 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[40px] md:text-[52px] font-serif text-[var(--ink)] mb-8 leading-tight"
            >
              The internet,<br />smaller again.
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="font-sans text-[18px] md:text-[20px] text-[var(--slate)] leading-relaxed space-y-6"
            >
              <motion.p variants={textVariants}>
                We weren't meant to hold the opinions of 8 billion people in our pockets. 
                <span className="text-[var(--ink)]"> The scale of modern social media is inherently dysregulating.</span>
              </motion.p>
              <motion.p variants={textVariants}>
                MOSAIC replaces the infinite global town square with intimate architecture.
                <span className="text-[var(--ink)]"> Circles. Rooms. Clusters. Temporary communities. Interest islands.</span>
              </motion.p>
              <motion.p variants={textVariants}>
                The internet becoming known, not broadcasted. No large follower counts visible anywhere.
              </motion.p>
            </motion.div>
          </div>

          {/* Right: Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <NodeGraph />
          </motion.div>

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Circles', desc: 'Small, trusted, intimate spaces for your closest people. Like a group chat that can breathe.', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800' },
            { title: 'Rooms', desc: 'Temporary, topic-based gatherings. Pop up for an event, fade away naturally when it\'s over.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
            { title: 'Interest Islands', desc: 'Discover new people through shared taste, not viral algorithms. Wander through connected passions.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800' }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative bg-[#050505] p-8 rounded-[32px] border border-white/10 overflow-hidden group min-h-[280px] flex flex-col justify-end shadow-lg"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
                <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-[28px] text-[var(--ink)] mb-3">{card.title}</h3>
                <p className="font-sans text-[15px] text-[var(--slate)] leading-relaxed group-hover:text-[var(--ink)] transition-colors duration-300">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
