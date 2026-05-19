import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function FounderMessage() {
  return (
    <section className="section-slate py-28 relative overflow-hidden bg-transparent" id="founder-message">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-950/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-950/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 text-left md:text-center"
        >
          <span className="eyebrow mb-5 inline-block">From Our Team</span>
          <h2 className="text-5xl md:text-[4rem] font-display font-light text-white mt-4 leading-tight">
            A Message From <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">Infabio</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <SpotlightCard
            glowColor="rgba(99,102,241,0.18)"
            tiltStrength={4}
            className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-12 md:p-16 relative overflow-hidden text-left"
            style={{ boxShadow: '0 30px 70px rgba(0,0,0,0.65)' }}
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] via-[#fda4af] to-[#6366f1] rounded-t-3xl shadow-[0_2px_15px_rgba(99,102,241,0.3)]" />

            {/* Decorative quote mark */}
            <div
              className="absolute top-8 right-10 text-[8rem] leading-none font-serif text-white/5 pointer-events-none select-none"
              aria-hidden
            >
              "
            </div>

            {/* Logo */}
            <div className="inline-flex mb-8">
              <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center justify-center shadow-[0_4px_25px_rgba(255,255,255,0.06)]">
                <img src="/infabio-logo.png" alt="Infabio" className="h-7 w-auto object-contain" />
              </div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-12 font-sans font-light">
              <p>
                We started Infabio with a simple belief:{' '}
                <strong className="text-white font-semibold">
                  Businesses deserve marketing partners who genuinely care about results — not just spending budgets.
                </strong>
              </p>
              <p>
                As a women-powered agency, we bring strategy, empathy, precision, and accountability into every project we touch.
              </p>
              <p className="font-display font-light text-white italic text-xl md:text-2xl leading-snug">
                "We're here to build brands thoughtfully, profitably, and sustainably."
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#fda4af] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-light text-white text-base">The Infabio Team</p>
                <p className="text-slate-400 text-sm font-sans font-light">India's First Women-Powered Growth Agency</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
