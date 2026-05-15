import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const steps = [
  { number: '01', title: 'Understand', desc: 'We study your brand, audience, and business goals deeply.',                             color: 'blue'   },
  { number: '02', title: 'Strategize', desc: 'We create a clear, data-backed growth plan.',                                          color: 'orange' },
  { number: '03', title: 'Execute',    desc: 'From ads to content to automation — we build everything with precision.',               color: 'blue'   },
  { number: '04', title: 'Optimize',   desc: 'We continuously improve campaigns to maximize ROI.',                                   color: 'orange' },
  { number: '05', title: 'Scale',      desc: 'Once profitable systems are working, we scale sustainably.',                           color: 'blue'   },
];

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="section-white py-28 relative overflow-hidden" id="process">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-blue-50/60 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="eyebrow mb-5 inline-block">How We Work</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain mt-4 leading-tight">
            Our <span className="text-brand">Growth Process</span>
          </h2>
        </div>

        {/* Steps layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated scroll-driven vertical line */}
          <div className="absolute left-[2.125rem] top-7 bottom-7 w-[2px] bg-gray-100 hidden md:block">
            <motion.div
              style={{ height: lineH, originY: 0 }}
              className="w-full rounded-full bg-gradient-to-b from-brandBlue via-brandOrange to-brandBlue"
            />
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-6 group"
              >
                {/* Number bubble */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`relative z-10 flex-shrink-0 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center font-display font-black text-base text-white shadow-lg ${step.color === 'orange'
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600'
                    : 'bg-gradient-to-br from-blue-500 to-blue-700'
                  }`}
                >
                  {step.number}
                  {/* Pulse ring */}
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-20 ${step.color === 'orange' ? 'bg-orange-400' : 'bg-blue-500'}`} style={{ animationDuration: `${3 + i * 0.4}s` }} />
                </motion.div>

                {/* Card */}
                <SpotlightCard
                  glowColor={step.color === 'orange' ? 'rgba(249,115,22,0.18)' : 'rgba(37,99,235,0.18)'}
                  tiltStrength={8}
                  className="flex-1 bg-white border border-gray-100 rounded-2xl p-7 group-hover:shadow-xl transition-shadow"
                  style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
                >
                  <h3 className="text-2xl font-display font-bold text-textMain mb-2">{step.title}</h3>
                  <p className="text-textBody leading-relaxed">{step.desc}</p>
                  <div className={`mt-5 h-[3px] w-0 group-hover:w-full transition-all duration-600 rounded-full ${step.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`} />
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
