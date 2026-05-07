import { motion } from 'framer-motion';
import { IconCreditCard, IconUsers, IconHeartHandshake, IconPalette } from '@tabler/icons-react';

const models = [
  { title: 'Subscription', icon: IconCreditCard, desc: 'Fair, transparent monthly access. You are the customer, not the product.' },
  { title: 'Cooperative Ownership', icon: IconUsers, desc: 'Users as stakeholders. A platform that answers to its community, not distant shareholders.' },
  { title: 'Creator Memberships', icon: IconHeartHandshake, desc: 'Direct patronage for the people who make the space beautiful and meaningful.' },
  { title: 'Premium Personalization', icon: IconPalette, desc: 'Aesthetic themes, custom typography, and layout tools. Pay for beauty, not algorithmic favor.' },
];

export default function BusinessModel() {
  return (
    <section id="monetization" className="w-full bg-[var(--cream)] py-32 px-6">
      <div className="max-w-[900px] mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-serif text-[var(--ink)] mb-6">
            Ads corrupt incentives.
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[var(--slate)] max-w-[700px] mx-auto leading-relaxed">
            MOSAIC never sells your attention to advertisers. The product is your emotional atmosphere — and we protect it.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-[#0F0F12] p-8 rounded-[32px] border border-white/5 flex flex-col items-start shadow-[0_0_40px_rgba(139,92,246,0.05)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[var(--moss)] mb-6 border border-white/10 shadow-sm">
                  <Icon size={24} stroke={1.5} />
                </div>
                <h3 className="font-serif text-[24px] text-[var(--ink)] mb-3">{model.title}</h3>
                <p className="font-sans text-[15px] text-[var(--slate)] leading-relaxed">{model.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-handwriting text-[28px] md:text-[32px] text-[var(--ember)] text-center px-8 py-4 rounded-full border border-[var(--ember)]/20 bg-[var(--ember)]/5"
        >
          Never: surveillance advertising.
        </motion.div>

      </div>
    </section>
  );
}
