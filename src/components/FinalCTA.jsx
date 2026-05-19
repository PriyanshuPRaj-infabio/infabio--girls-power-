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
      className="py-32 relative overflow-hidden bg-transparent"
      id="contact"
    >
      {/* Cinematic portal gradients behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-indigo-950/20 to-pink-950/15 blur-[160px] pointer-events-none z-0" />
      
      {/* Animated micro-grid line texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <span className="eyebrow inline-block">Ready to Start?</span>
          
          <h2 className="text-5xl md:text-8xl font-display font-light text-white leading-[1.05] tracking-tight">
            Ready to grow <br />
            <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">
              smarter?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 font-sans font-light leading-relaxed max-w-xl mx-auto">
            Let's build marketing systems that save money and drive real business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <motion.a
              href="mailto:hello@infabio.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-sm px-10 py-5 shadow-[0_15px_30px_rgba(99,102,241,0.25)] rounded-xl font-bold uppercase tracking-wider"
            >
              Book a Free Consultation →
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="btn-secondary text-sm px-10 py-5 rounded-xl font-bold uppercase tracking-wider border border-white/10 bg-white/[0.03]"
            >
              Start Your Growth Journey
            </motion.a>
          </div>

          {/* Glowing Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-16">
            {badges.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <SpotlightCard
                  glowColor={b.color === 'orange' ? 'rgba(253,164,175,0.22)' : 'rgba(99,102,241,0.22)'}
                  tiltStrength={10}
                  className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 flex items-center gap-5 hover:border-white/10 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] h-full text-left"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5"
                    style={{
                      background: b.color === 'orange'
                        ? 'linear-gradient(135deg, rgba(253,164,175,0.15), rgba(253,164,175,0.03))'
                        : 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.03))',
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={b.color === 'orange' ? '#fda4af' : '#6366f1'} strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={b.iconPath} />
                    </svg>
                  </div>
                  <span className="text-sm font-sans font-light text-slate-300 leading-snug text-left">{b.text}</span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
