import { motion } from 'framer-motion';
import { IconBell, IconMessageCircle, IconHandStop, IconFlame } from '@tabler/icons-react';

const badNotifs = [
  { text: "YOU'RE MISSING OUT.", icon: IconBell, isCaps: true },
  { text: "283 notifications waiting", icon: IconMessageCircle },
  { text: "You haven't posted in 3 days", icon: IconHandStop },
  { text: "Your streak is at risk!", icon: IconFlame },
];

const goodNotifs = [
  { text: "Someone replied to your journal.", icon: IconMessageCircle },
  { text: "A circle you follow shared something.", icon: IconBell },
  { text: "Welcome back.", icon: IconHandStop },
  { text: "That's all for today.", icon: IconFlame }, // Using Flame icon placeholder, can change
];

function NotificationCard({ notif, isBad, delay }) {
  const Icon = notif.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`w-full flex items-center gap-4 p-4 rounded-2xl border ${
        isBad 
          ? 'bg-red-950/20 border-red-900/30 grayscale-[0.5] opacity-60' 
          : 'bg-white/5 border-white/10 shadow-sm'
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
        isBad ? 'bg-red-900/20 text-red-400' : 'bg-white/5 text-[var(--moss)]'
      }`}>
        <Icon size={20} stroke={1.5} />
      </div>
      <div className="relative">
        <span className={`font-sans text-[15px] ${isBad && notif.isCaps ? 'font-bold tracking-wide' : ''} ${isBad ? 'text-red-900/60' : 'text-[var(--ink)]'}`}>
          {notif.text}
        </span>
        {isBad && (
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="absolute top-1/2 left-0 h-px bg-red-400 -translate-y-1/2"
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Notifications() {
  return (
    <section className="w-full bg-[var(--parchment)] py-32 px-6">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] md:text-[48px] font-serif text-[var(--ink)] mb-20 text-center"
        >
          Your attention is not a resource.
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          
          {/* Bad Column */}
          <div className="flex flex-col gap-4">
            <div className="font-handwriting text-[20px] text-[var(--slate)] mb-4 text-center md:text-left">
              The casino mechanic
            </div>
            {badNotifs.map((notif, i) => (
              <NotificationCard key={i} notif={notif} isBad={true} delay={i * 0.15} />
            ))}
          </div>

          {/* Good Column */}
          <div className="flex flex-col gap-4">
            <div className="font-handwriting text-[20px] text-[var(--moss)] mb-4 text-center md:text-left">
              The breathing space
            </div>
            {goodNotifs.map((notif, i) => (
              <NotificationCard key={i} notif={notif} isBad={false} delay={i * 0.15 + 0.3} />
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[800px] text-center"
        >
          <p className="font-serif text-[28px] md:text-[40px] text-[var(--ink)] leading-[1.2]">
            "Streaks don't exist here. Disappearing for weeks is normal. No punishment for living your life."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
