import { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GridBackground from './GridBackground';
import MarqueeTicker from './MarqueeTicker';

const tickerItems = [
  'Performance Marketing', 'SEO & Growth', 'AI Automation',
  'Branding & Positioning', 'Lead Generation', 'Conversion Ops',
  'Social Media Strategy', 'Women-Powered', 'Budget Defence',
];

// ── Stats data matching the screenshot ─────────────────────────────────────
const stats = [
  { value: '500+', label: 'Brands Protected', iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0', bgFrom: '#dbeafe', bgTo: '#bfdbfe', iconBg: '#2563EB' },
  { value: '₹240Cr+', label: 'Budget Defended', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', bgFrom: '#ffedd5', bgTo: '#fed7aa', iconBg: '#F97316' },
  { value: '94%', label: 'Success Rate', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', bgFrom: '#fce7f3', bgTo: '#fbcfe8', iconBg: '#be185d' },
  { value: '3', label: 'Continents', iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', bgFrom: '#dbeafe', bgTo: '#bfdbfe', iconBg: '#2563EB' },
];

// ── Animated stats dashboard card (matches the screenshot) ──────────────────
function StatsDashboard() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (py - 0.5) * -14, ry: (px - 0.5) * 14 });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{
        rotateX: tilt.rx,
        rotateY: tilt.ry,
        y: [0, -20, 0],
        rotate: [0, 0.6, 0, -0.6, 0],
      }}
      transition={{
        rotateX: { type: 'spring', stiffness: 200, damping: 22 },
        rotateY: { type: 'spring', stiffness: 200, damping: 22 },
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' },
        rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: '1100px' }}
      initial={{ opacity: 0, y: 80, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-[560px] mx-auto relative"
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-3 rounded-[2rem] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(249,115,22,0.10) 100%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Outer card */}
      <div
        className="bg-white rounded-3xl p-7 relative"
        style={{
          boxShadow: '0 40px 100px rgba(37,99,235,0.18), 0 12px 32px rgba(0,0,0,0.09)',
          border: '1px solid rgba(37,99,235,0.08)',
        }}
      >
        {/* Subtle top gradient bar */}
        <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue rounded-full opacity-60" />

        {/* 2×2 stat grid */}
        <div className="grid grid-cols-2 gap-5 mb-6 mt-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: `linear-gradient(135deg, ${s.bgFrom}, ${s.bgTo})` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: s.iconBg }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                </svg>
              </div>
              {/* Value */}
              <div className="text-[2rem] font-display font-black text-textMain leading-none">{s.value}</div>
              {/* Label */}
              <div className="text-sm font-medium text-textMuted leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider + status */}
        <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-sm font-semibold text-textMuted tracking-wide">AI Defense System Active</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-4 overflow-hidden bg-white"
        id="hero"
      >
        {/* Interactive dot grid */}
        <GridBackground className="opacity-70" />

        {/* Soft gradient blobs */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue-100/50 blur-[130px]" />
          <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[130px]" />
        </div>

        <motion.div
          style={{ y: bgY, opacity: fade, scale }}
          className="absolute inset-0 z-[2]"
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url('/hero_defence_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </motion.div>

        <div className="container mx-auto relative z-10 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">

            {/* ── LEFT: Copy ── */}
            <motion.div style={{ opacity: fade }} className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="eyebrow inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-brandBlue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  India's First Women-Powered Agency
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.12 }}
                className="text-5xl md:text-6xl lg:text-[4.1rem] font-display font-black leading-[1.09] text-textMain"
              >
                India's First <br />
                <span className="text-brand">Women-Powered</span><br />
                Marketing Defence Agency
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.26 }}
                className="text-xl md:text-2xl text-textBody font-medium leading-relaxed max-w-xl"
              >
                Built by women. Powered by strategy. Open to all brands — with a special heart for women-led founders.
              </motion.p>

              {/* Removed: "Just like women..." and "Less waste..." lines */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="pl-5 border-l-4 border-brandBlue/30"
              >

                <p className="font-bold text-textMain">Smarter ads. Better ROI. Real growth.</p>
                <p className="text-textMuted text-sm">We don't believe in burning budgets to "test things." We believe in strategic marketing that saves money and delivers results.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.54 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a href="#contact" className="btn-primary text-base">Book Free Strategy Call</a>
                <a href="#services" className="btn-secondary text-base">Let's Grow Your Brand →</a>
              </motion.div>

              {/* Trust numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 pt-2"
              >
                {[{ n: '50+', l: 'Brands Scaled' }, { n: '40%', l: 'Ad Waste Reduced' }, { n: '12x', l: 'Average ROAS' }].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-black text-brand leading-none">{s.n}</div>
                    <div className="text-xs text-textMuted font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Stats Dashboard Card ── */}
            <div className="lg:col-span-6 hidden lg:flex items-center justify-center">
              <StatsDashboard />
            </div>

          </div>
        </div>
      </section>

      {/* Marquee ticker strip below hero */}
      <div className="section-slate border-y border-gray-100 py-5">
        <MarqueeTicker items={tickerItems} speed={55} />
      </div>
    </>
  );
}
