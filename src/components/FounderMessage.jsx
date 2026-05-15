import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function FounderMessage() {
  return (
    <section className="section-slate py-28 relative overflow-hidden" id="founder-message">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-50/60 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-50/50 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-5 inline-block">From Our Team</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain mt-4 leading-tight">
            A Message From <span className="text-brand">Infabio</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <SpotlightCard
            glowColor="rgba(37,99,235,0.14)"
            tiltStrength={6}
            className="bg-white border border-gray-100 rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.10)' }}
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue rounded-t-3xl" />

            {/* Decorative quote mark */}
            <div
              className="absolute top-8 right-10 text-[8rem] leading-none font-serif text-brandBlue/06 pointer-events-none select-none"
              aria-hidden
            >
              "
            </div>

            {/* Logo */}
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 mb-10 flex items-center justify-center overflow-hidden">
              <img src="/infabio-logo.png" alt="Infabio" className="w-10 h-10 object-contain" />
            </div>

            <div className="space-y-6 text-lg md:text-xl text-textBody leading-relaxed max-w-3xl mb-12">
              <p>
                We started Infabio with a simple belief:{' '}
                <strong className="text-textMain">
                  Businesses deserve marketing partners who genuinely care about results — not just spending budgets.
                </strong>
              </p>
              <p>
                As a women-powered agency, we bring strategy, empathy, precision, and accountability into every project we touch.
              </p>
              <p className="font-bold text-textMain italic text-xl md:text-2xl leading-snug">
                "We're here to build brands thoughtfully, profitably, and sustainably."
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brandBlue to-brandOrange flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-black text-textMain text-base">The Infabio Team</p>
                <p className="text-textMuted text-sm">India's First Women-Powered Growth Agency</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
