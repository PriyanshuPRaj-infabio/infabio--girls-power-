import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const badges = [
  {
    text: "India's First Women-Powered Agency",
    color: 'blue',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    text: 'Built by women. Powered by strategy.',
    color: 'orange',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
  },
  {
    text: 'Smarter marketing. Better ROI.',
    color: 'blue',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

export default function FinalCTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="contact"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFF7ED 100%)' }}
    >
      <div className="absolute -top-20 left-0 w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-orange-200/30 blur-[100px] pointer-events-none" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="eyebrow mb-6 inline-block">Ready to Start?</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-textMain leading-tight mt-4 mb-8">
            Ready to grow{' '}
            <span className="text-brand">smarter?</span>
          </h2>
          <p className="text-xl md:text-2xl text-textBody font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's build marketing systems that save money and drive real business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-16">
            <motion.a
              href="mailto:hello@infabio.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-lg px-10 py-5 shadow-2xl"
            >
              Book a Free Consultation →
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-lg px-10 py-5"
            >
              Start Your Growth Journey
            </motion.a>
          </div>

          {/* Trust badges — SVG icons, no emojis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {badges.map((b, i) => (
              <SpotlightCard
                key={b.text}
                glowColor={b.color === 'orange' ? 'rgba(249,115,22,0.18)' : 'rgba(37,99,235,0.18)'}
                tiltStrength={8}
                className="bg-white/80 border border-white rounded-xl p-5 flex items-center gap-4 backdrop-blur-sm"
                style={{ boxShadow: '0 4px 20px rgba(15,23,42,0.08)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: b.color === 'orange'
                      ? 'linear-gradient(135deg,#ffedd5,#fed7aa)'
                      : 'linear-gradient(135deg,#dbeafe,#bfdbfe)',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke={b.color === 'orange' ? '#F97316' : '#2563EB'} strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.iconPath} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-textBody leading-snug text-left">{b.text}</span>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
