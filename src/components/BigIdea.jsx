import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const problems  = ['Chase impressions', 'Increase spend without strategy', 'Focus on reports instead of revenue'];
const solutions = ['Lower unnecessary spending', 'Improve customer acquisition', 'Increase conversion rates', 'Generate sustainable growth'];

export default function BigIdea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftX  = useTransform(scrollYProgress, [0.1, 0.5], [-60, 0]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section ref={ref} className="section-slate py-28 relative overflow-hidden" id="big-idea">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow mb-5 inline-block">The Big Idea</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain leading-tight mt-4">
            Most agencies spend your money.{' '}
            <span className="text-brand">We protect it.</span>
          </h2>
        </motion.div>

        {/* Comparison cards — scroll-driven entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Problem card */}
          <motion.div style={{ x: leftX, opacity }}>
            <SpotlightCard
              glowColor="rgba(239,68,68,0.12)"
              tiltStrength={10}
              className="bg-white border border-red-100 rounded-2xl p-10 h-full"
              style={{ boxShadow: '0 4px 24px rgba(239,68,68,0.08)' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">✕</div>
                <h3 className="text-xl font-display font-bold text-red-600 uppercase tracking-wider">Many agencies</h3>
              </div>
              <ul className="space-y-5">
                {problems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-4 text-textBody font-medium"
                  >
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>

          {/* Solution card */}
          <motion.div style={{ x: rightX, opacity }}>
            <SpotlightCard
              glowColor="rgba(37,99,235,0.16)"
              tiltStrength={10}
              className="bg-white border border-blue-100 rounded-2xl p-10 h-full relative"
              style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.10)' }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandBlue to-brandOrange rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brandBlue font-bold">✓</div>
                <h3 className="text-xl font-display font-bold text-brandBlue uppercase tracking-wider">At Infabio</h3>
              </div>
              <p className="text-textMain font-bold mb-6">
                We treat your marketing budget like our own.{' '}
                <span className="text-textBody font-medium">Every campaign is designed to:</span>
              </p>
              <ul className="space-y-4">
                {solutions.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-4 text-textBody font-medium"
                  >
                    <span className="text-brandBlue mt-0.5 flex-shrink-0 font-black">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-textMuted max-w-2xl mx-auto">
            Because growth without profitability{' '}
            <span className="text-brand underline decoration-brandOrange underline-offset-6">is not growth.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
