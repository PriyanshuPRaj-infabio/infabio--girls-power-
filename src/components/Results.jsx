import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const stats = [
  { n: 40,   suffix: '%', label: 'Reduced ad waste',          sub: 'By up to 40% through smarter tracking',        color: 'blue'   },
  { n: 3,    suffix: 'x', label: 'Conversion Rate Increase',  sub: 'Through smarter, high-intent funnels',          color: 'orange' },
  { n: 50,   suffix: '+', label: 'Brands Scaled',             sub: 'Across multiple industries and verticals',      color: 'blue'   },
  { n: 100,  suffix: '%', label: 'Budget Accountability',     sub: 'Every rupee tracked and optimised daily',       color: 'orange' },
];

function AnimatedCounter({ target, suffix, color, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span className={`text-6xl font-display font-black leading-none ${color === 'orange' ? 'text-brandOrange' : 'text-brandBlue'}`}>
      {count}{suffix}
    </span>
  );
}

export default function Results() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-white py-28 relative overflow-hidden" id="results">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-blue-50/60 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-5 inline-block">Social Proof</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain mt-4 leading-tight">
            Real Growth. <span className="text-brand">Real Impact.</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 rounded-full bg-gradient-to-r from-brandBlue to-brandOrange mx-auto mt-6"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <SpotlightCard
              key={i}
              glowColor={s.color === 'orange' ? 'rgba(249,115,22,0.22)' : 'rgba(37,99,235,0.22)'}
              tiltStrength={14}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center cursor-default"
              style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl ${s.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`} />
                <div className="mt-2 mb-2">
                  <AnimatedCounter target={s.n} suffix={s.suffix} color={s.color} inView={inView} />
                </div>
                <div className="font-bold text-textMain text-sm uppercase tracking-widest mb-1 mt-2">{s.label}</div>
                <div className="text-textMuted text-xs leading-relaxed">{s.sub}</div>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>

        {/* Proof list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Reduced ad waste by up to 40%',
              'Increased conversion rates through smarter funnels',
              'Helped brands scale with sustainable acquisition systems',
              'Built long-term growth strategies instead of short-term hacks',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
              >
                <span className="text-brandBlue font-black text-lg flex-shrink-0">✓</span>
                <span className="text-textBody font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-display font-bold text-textMuted italic">"We don't promise viral."</p>
            <p className="text-2xl font-display font-bold text-textMain mt-2">We promise strategic growth that lasts.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
