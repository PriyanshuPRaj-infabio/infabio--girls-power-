import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG icon paths — no emojis
const services = [
  {
    title: 'AI-Powered Performance Marketing',
    desc: 'Ads that focus on profitability — not vanity metrics. We construct bidding protocols, algorithmic audience targeting, and real-time budget routing across ad channels.',
    color: 'blue',
    stat: '12x ROAS',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    chartType: 'bars',
  },
  {
    title: 'SEO & Organic Growth',
    desc: 'Get discovered by the right audience consistently. Our organic search pipelines deliver authority matrices, technical indexing optimization, and premium search results.',
    color: 'orange',
    stat: '#1 Rankings',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    chartType: 'wave',
  },
  {
    title: 'Branding & Positioning',
    desc: 'Build a brand people trust, remember, and choose. We synthesize premium visual identities, precise editorial messaging, and unforgettable startup stories.',
    color: 'blue',
    stat: 'Premium Brand',
    iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    chartType: 'circles',
  },
  {
    title: 'Website Design & Conversion',
    desc: 'Beautiful websites designed to convert visitors into customers. Combining responsive layouts, framer motion depth dynamics, and technical conversion principles.',
    color: 'orange',
    stat: '3x Conversion',
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    chartType: 'funnel',
  },
  {
    title: 'AI Automation Systems',
    desc: 'Save time. Reduce manual work. Scale efficiently. Build integrated database flows, custom AI-driven customer replies, and automated lead processing routers.',
    color: 'blue',
    stat: '80% Time Saved',
    iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    chartType: 'nodes',
  },
  {
    title: 'Social Media Strategy',
    desc: 'Content that builds authority and drives engagement. Dynamic publishing loops, visually breathtaking designs, and targeted editorial marketing calendars.',
    color: 'orange',
    stat: '10x Reach',
    iconPath: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    chartType: 'wave',
  },
  {
    title: 'Funnel & Lead Generation',
    desc: 'Turn attention into predictable revenue. Engineering structured lead captures, targeted automated sequences, and high-performance pipeline analytics.',
    color: 'blue',
    stat: 'Predictable ROI',
    iconPath: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
    chartType: 'funnel',
  },
];

function InteractiveChart({ type, activeColor }) {
  const color = activeColor === 'orange' ? '#fda4af' : '#6366f1';
  
  if (type === 'bars') {
    return (
      <svg className="w-full h-32 opacity-90" viewBox="0 0 200 100">
        {[20, 45, 30, 85, 60, 95].map((h, i) => (
          <motion.rect
            key={i}
            x={10 + i * 30}
            y={100 - h}
            width="16"
            height={h}
            rx="3"
            fill={color}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
          />
        ))}
      </svg>
    );
  }

  if (type === 'wave') {
    return (
      <svg className="w-full h-32 opacity-90" viewBox="0 0 200 100">
        <motion.path
          d="M 10 50 Q 50 10 90 50 T 170 50 T 250 50"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="90"
          cy="50"
          r="5"
          fill="#ffffff"
          stroke={color}
          strokeWidth="2"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </svg>
    );
  }

  if (type === 'circles') {
    return (
      <div className="flex items-center justify-center h-32 gap-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
            style={{ borderColor: color, borderWidth: '1.5px' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6 - i * 1.5, ease: 'linear' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'funnel') {
    return (
      <svg className="w-full h-32 opacity-90" viewBox="0 0 200 100">
        <motion.polygon
          points="20,10 180,10 140,40 60,40"
          fill={color}
          opacity="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.6 }}
        />
        <motion.polygon
          points="60,45 140,45 110,85 90,85"
          fill={color}
          opacity="0.35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.line
          x1="100" y1="10" x2="100" y2="90"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>
    );
  }

  // Fallback Nodes
  return (
    <svg className="w-full h-32 opacity-90" viewBox="0 0 200 100">
      <line x1="30" y1="50" x2="100" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="30" y1="50" x2="100" y2="80" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="100" y1="20" x2="170" y2="50" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="100" y1="80" x2="170" y2="50" stroke={color} strokeWidth="1.5" opacity="0.6" />
      {[
        { x: 30, y: 50 },
        { x: 100, y: 20 },
        { x: 100, y: 80 },
        { x: 170, y: 50 },
      ].map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="5"
          fill={color}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="section-white py-32 relative overflow-hidden bg-transparent" id="services">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-indigo-950/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] rounded-full bg-pink-950/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="eyebrow inline-block mb-4">What We Do</span>
          <h2 className="text-5xl md:text-[4rem] font-display font-light text-white leading-tight">
            Services Built for <br />
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal pr-4">
              Real Growth
            </span>
          </h2>
        </div>

        {/* ── EXPANDABLE PANEL CONTAINER ── */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((svc, i) => {
            const isActive = activeIdx === i;
            const stroke = svc.color === 'orange' ? '#fda4af' : '#6366f1';
            const iconBg = svc.color === 'orange'
              ? 'linear-gradient(135deg, rgba(253,164,175,0.15), rgba(253,164,175,0.03))'
              : 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.03))';

            return (
              <div
                key={i}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden relative"
                onClick={() => setActiveIdx(i)}
                style={{
                  borderColor: isActive ? stroke : 'rgba(255,255,255,0.05)',
                  boxShadow: isActive
                    ? `0 20px 45px ${svc.color === 'orange' ? 'rgba(253,164,175,0.12)' : 'rgba(99,102,241,0.12)'}`
                    : '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                {/* Panel row header */}
                <div className="p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 text-left">
                    {/* Index */}
                    <span className="font-display font-light text-xl text-slate-500 tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon sphere */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0 shadow-md"
                      style={{ background: iconBg }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke={stroke} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={svc.iconPath} />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-light text-white leading-snug">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Indicator / Stat Badge */}
                  <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border hidden sm:inline-block ${
                    svc.color === 'orange'
                      ? 'bg-pink-950/30 text-brandOrange border-pink-900/20 shadow-[0_0_10px_rgba(253,164,175,0.1)]'
                      : 'bg-indigo-950/30 text-brandBlue border-indigo-900/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                  }`}>
                    {svc.stat}
                  </span>
                </div>

                {/* Expanding Content Panel */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                    
                    {/* Descriptions */}
                    <div className="md:col-span-7 space-y-6">
                      <p className="text-slate-300 text-base leading-relaxed font-sans font-light">
                        {svc.desc}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <a
                          href="#contact"
                          className="btn-primary text-xs px-6 py-3 rounded-xl uppercase tracking-wider font-bold inline-block"
                        >
                          Book Free Strategy Call →
                        </a>
                      </div>
                    </div>

                    {/* Telemetry Chart Graphic */}
                    <div className="md:col-span-5 bg-[#050713]/55 border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-2xl shadow-inner">
                      <div className="absolute top-3 left-3 text-[10px] font-black text-slate-500 uppercase tracking-widest font-sans">
                        Telemetry Node Active
                      </div>
                      <div className="mt-4">
                        <InteractiveChart type={svc.chartType} activeColor={svc.color} />
                      </div>
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}

          {/* Final "Get Started" modular panel */}
          <div className="bg-[#050713]/60 border border-white/5 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_30px_70px_rgba(0,0,0,0.65)] hover:border-indigo-500/20 transition-all duration-500 relative overflow-hidden group">
            {/* Ambient hover light */}
            <div className="absolute -inset-10 rounded-full bg-brandBlue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex items-center gap-6 relative z-10 text-left">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#fda4af] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-display font-light text-white leading-snug">Ready to start?</h3>
                <p className="text-slate-300 text-sm mt-1 max-w-md font-sans font-light">
                  Book a free strategy call today and let's build your growth engine.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-primary text-xs px-8 py-4 rounded-xl uppercase tracking-wider font-bold relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.25)] flex-shrink-0"
            >
              Book Free Call →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
