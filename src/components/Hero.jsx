import { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import GridBackground from './GridBackground';
import MarqueeTicker from './MarqueeTicker';

const tickerItems = [
  'Performance Marketing', 'SEO & Growth', 'AI Automation',
  'Branding & Positioning', 'Lead Generation', 'Conversion Ops',
  'Social Media Strategy', 'Women-Powered', 'Budget Defence',
];

// ── Stats data matching the screenshot ─────────────────────────────────────
const stats = [
  { value: '500+', label: 'Brands Protected', iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0', bgFrom: '#faf5ff', bgTo: '#e9d5ff', iconBg: '#c084fc' },
  { value: '₹240Cr+', label: 'Budget Defended', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', bgFrom: '#fff1f2', bgTo: '#ffe4e6', iconBg: '#fda4af' },
  { value: '94%', label: 'Success Rate', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', bgFrom: '#fce7f3', bgTo: '#fbcfe8', iconBg: '#db2777' },
  { value: '3', label: 'Continents', iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', bgFrom: '#e0e7ff', bgTo: '#c7d2fe', iconBg: '#6366f1' },
];

// ── Holographic Female Silhouette & Neural Artwork ───────────────────────
function HolographicFeminineArtwork() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none select-none overflow-visible flex items-center justify-center">
      <svg className="w-[130%] h-[130%] max-w-[700px] max-h-[700px] animate-spin-slow" viewBox="0 0 500 500" fill="none">
        {/* Outer cosmic orbits */}
        <circle cx="250" cy="250" r="220" stroke="url(#femOrbit1)" strokeWidth="1" strokeDasharray="5 15" opacity="0.35" />
        <circle cx="250" cy="250" r="180" stroke="url(#femOrbit2)" strokeWidth="1.5" strokeDasharray="20 40" opacity="0.55" />
        <circle cx="250" cy="250" r="140" stroke="url(#femOrbit3)" strokeWidth="1" strokeDasharray="2 6" opacity="0.45" />

        {/* Pulsing network vectors representing digital intelligence */}
        <path d="M 250,30 L 250,470 M 30,250 L 470,250" stroke="rgba(192, 132, 252, 0.15)" strokeWidth="1" />
        <path d="M 94.5,94.5 L 405.5,405.5 M 94.5,405.5 L 405.5,94.5" stroke="rgba(253, 164, 175, 0.12)" strokeWidth="1" />

        {/* Elegant female silhouette contour line art overlay */}
        <g transform="translate(100, 80) scale(1.2)" className="animate-pulse" style={{ animationDuration: '6s' }}>
          <path
            d="M 60,30 C 70,10 95,5 110,25 C 120,40 120,60 115,75 C 110,90 100,100 95,115 C 90,130 92,150 85,165 C 80,175 70,185 58,188 C 45,190 32,180 35,165 C 38,150 48,140 45,125 C 42,110 30,105 25,90 C 20,75 25,60 38,48 C 45,40 52,40 60,30 Z"
            stroke="url(#femLineGrad)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Intelligence spark chakra node */}
          <circle cx="95" cy="55" r="4.5" fill="#fda4af" />
          <circle cx="95" cy="55" r="11" stroke="#fda4af" strokeWidth="1" opacity="0.6" className="animate-ping" style={{ animationDuration: '3s' }} />

          {/* Heart core node */}
          <circle cx="68" cy="115" r="4" fill="#c084fc" />
          {/* Base ambition node */}
          <circle cx="55" cy="155" r="3.5" fill="#6366f1" />
        </g>

        {/* Orbiting telemetry nodes */}
        <g className="origin-center animate-spin" style={{ animationDuration: '35s' }}>
          <circle cx="250" cy="70" r="5" fill="#fda4af" />
          <circle cx="70" cy="250" r="4" fill="#c084fc" />
          <circle cx="250" cy="430" r="6" fill="#6366f1" />
          <circle cx="430" cy="250" r="3.5" fill="#db2777" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="femLineGrad" x1="20" y1="20" x2="130" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="femOrbit1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="femOrbit2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fda4af" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="femOrbit3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── Animated stats dashboard card (matches the screenshot) ──────────────────
function StatsDashboard() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (py - 0.5) * -12, ry: (px - 0.5) * 12 });
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
        y: [0, -15, 0],
        rotate: [0, 0.4, 0, -0.4, 0],
      }}
      transition={{
        rotateX: { type: 'spring', stiffness: 200, damping: 22 },
        rotateY: { type: 'spring', stiffness: 200, damping: 22 },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' },
        rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-[530px] mx-auto relative"
    >
      {/* Outer elegant glow ring */}
      <div
        className="absolute -inset-4 rounded-[2.5rem] pointer-events-none blur-[24px]"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(253,164,175,0.12) 100%)',
        }}
      />

      {/* Outer glassmorphism dashboard shell */}
      <div
        className="bg-[#050713]/60 backdrop-blur-2xl rounded-3xl p-7 relative overflow-hidden"
        style={{
          boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 12px 32px rgba(192,132,252,0.06)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Mouse spotlight overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(192, 132, 252, 0.08), transparent 70%)`
          }}
        />

        {/* Elegant top gradient rose-gold border bar */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue rounded-full opacity-70" />

        {/* 2×2 stat grid */}
        <div className="grid grid-cols-2 gap-5 mb-5 mt-3 relative z-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-5 flex flex-col gap-3 bg-[#0a0d20]/50 border border-white/5 relative overflow-hidden group hover:border-white/15 transition-all duration-500"
            >
              {/* Soft interior glow dot */}
              <div
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: s.iconBg }}
              />

              {/* Icon Sphere */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${s.iconBg}20, ${s.iconBg}05)`,
                  border: `1px solid ${s.iconBg}30`,
                  boxShadow: `0 0 15px ${s.iconBg}20`
                }}
              >
                <svg className="w-5 h-5" style={{ color: s.iconBg }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                </svg>
              </div>
              {/* Value with luxury typography */}
              <div className="text-[1.85rem] font-sans font-black text-white leading-none tracking-tight relative z-10">{s.value}</div>
              {/* Label */}
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 leading-tight relative z-10">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-5 flex items-center gap-3 relative z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cyber Telemetry Engine Active</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Holographic Capital Protection Radar Grid ─────────────────────────────
function HolographicRadar() {
  return (
    <svg
      className="w-full h-full max-w-[600px] max-h-[600px]"
      style={{ animation: 'spin 65s linear infinite' }}
      viewBox="0 0 400 400"
      fill="none"
    >
      {/* Sonar rings */}
      <circle cx="200" cy="200" r="180" stroke="rgba(99,102,241,0.12)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="200" cy="200" r="140" stroke="rgba(253,164,175,0.12)" strokeWidth="1.2" strokeDasharray="6 10" />
      <circle cx="200" cy="200" r="100" stroke="rgba(192,132,252,0.18)" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="rgba(253,164,175,0.2)" strokeWidth="1.5" strokeDasharray="12 6" />

      {/* Radar sweeping sonar beam */}
      <g className="origin-center animate-spin" style={{ animationDuration: '8s' }}>
        <line x1="200" y1="200" x2="200" y2="20" stroke="url(#radarSweep)" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="200,200 200,20 240,30" fill="url(#radarFade)" opacity="0.2" />
      </g>

      {/* Reticle Crosshairs */}
      <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* Target Telemetry Nodes */}
      {/* Node 1: Budget Shield */}
      <g className="animate-pulse">
        <circle cx="280" cy="120" r="5" fill="#c084fc" />
        <circle cx="280" cy="120" r="10" stroke="#c084fc" strokeWidth="1" opacity="0.4" />
        <text x="294" y="124" fill="#94a3b8" className="text-[6.5px] font-mono tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>BUDGET DEFENCE: ACTIVE</text>
      </g>

      {/* Node 2: ROI trajectory */}
      <g className="animate-pulse" style={{ animationDelay: '1.2s' }}>
        <circle cx="110" cy="270" r="5" fill="#fda4af" />
        <circle cx="110" cy="270" r="10" stroke="#fda4af" strokeWidth="1" opacity="0.4" />
        <text x="124" y="274" fill="#94a3b8" className="text-[6.5px] font-mono tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>ROI ENGINE: 12X ROAS</text>
      </g>

      {/* Node 3: Ad-Waste Lock */}
      <g className="animate-pulse" style={{ animationDelay: '2.4s' }}>
        <circle cx="120" cy="100" r="4.5" fill="#db2777" />
        <circle cx="120" cy="100" r="9" stroke="#db2777" strokeWidth="1" opacity="0.4" />
        <text x="134" y="104" fill="#94a3b8" className="text-[6.5px] font-mono tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>AD-WASTE INTERCEPTED</text>
      </g>

      {/* Linear gradients definitions */}
      <defs>
        <linearGradient id="radarSweep" x1="200" y1="200" x2="200" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="100%" stopColor="#fda4af" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="radarFade" x1="200" y1="200" x2="240" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center pt-36 pb-16 overflow-hidden bg-transparent"
        id="hero"
      >
        {/* Subtle geometric grid matrix */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-[2]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />

        <motion.div
          style={{ y: bgY, opacity: fade, scale }}
          className="absolute inset-0 z-[2] pointer-events-none"
        >
          <div className="absolute inset-0 opacity-[0.015]"
            style={{ backgroundImage: "url('/hero_defence_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </motion.div>

        {/* Ambient volumetric backdrop glows for the hero text */}
        <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-950/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 left-[20%] w-[35%] h-[35%] rounded-full bg-purple-950/10 blur-[130px] pointer-events-none" />

        <div className="container mx-auto relative z-10 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">

            {/* ── LEFT: Luxury Editorial Typography Column ── */}
            <motion.div style={{ opacity: fade }} className="lg:col-span-7 space-y-10 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow inline-flex items-center gap-2 border border-white/10 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(192,132,252,0.1)] hover:border-white/15 transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-brandBlue animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  India's First All Women-Powered Agency
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-light leading-[1.03] text-white tracking-tight"
              >
                India's First <br />
                <span className="italic font-normal text-transparent bg-clip-text bg-brand-gradient pr-4">
                  All Women-Powered
                </span><br />
                Marketing Defence Agency
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-slate-300 font-sans font-light leading-relaxed max-w-2xl"
              >
                Built by women. Powered by strategy. Open to all brands — with a special heart for women-led founders.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="pl-6 border-l-2 border-brandBlue bg-white/[0.01] py-4 pr-6 rounded-r-2xl backdrop-blur-md border-y border-r border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
              >
                <p className="font-bold text-white text-lg">Smarter ads. Better ROI. Real growth.</p>
                <p className="text-slate-400 text-sm mt-1.5 leading-relaxed font-sans font-light">
                  We don't believe in burning budgets to "test things." We believe in strategic marketing that saves money and delivers results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-5 pt-3"
              >
                <MagneticButton className="flex items-center justify-center">
                  <a href="#contact" className="btn-primary text-xs px-9 py-4 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.25)] uppercase tracking-widest font-black">
                    Book Free Strategy Call
                  </a>
                </MagneticButton>
                <MagneticButton className="flex items-center justify-center">
                  <a href="#services" className="btn-secondary text-xs px-9 py-4 rounded-2xl border border-white/5 hover:border-white/15 uppercase tracking-widest font-black">
                    Let's Grow Your Brand →
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Editorial trust numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center gap-12 pt-6 border-t border-white/5"
              >
                {[{ n: '50+', l: 'Brands Scaled' }, { n: '40%', l: 'Ad Waste Reduced' }, { n: '12x', l: 'Average ROAS' }].map(s => (
                  <div key={s.l} className="group cursor-pointer">
                    <div className="text-4xl font-light font-display text-brand bg-clip-text bg-gradient-to-r from-brandBlue to-brandOrange leading-none transition-transform duration-500 group-hover:scale-105 italic">{s.n}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Abstract Holographic Telemetry Artwork Column ── */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
              {/* High-tech glow backdrop */}
              <div className="absolute w-[120%] h-[120%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />

              {/* Custom Female-Inspired Neural Holographic Artwork */}
              <HolographicFeminineArtwork />

              {/* Holographic Sonar Sweep */}
              <div className="absolute -inset-16 pointer-events-none z-0 flex items-center justify-center overflow-visible opacity-50 mix-blend-screen">
                <HolographicRadar />
              </div>

              <div className="w-full relative z-10 transform translate-y-3 hover:translate-y-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
                <StatsDashboard />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee ticker strip below hero */}
      <div className="border-y border-white/5 py-7 bg-white/[0.005] backdrop-blur-md relative z-10">
        <MarqueeTicker items={tickerItems} speed={36} />
      </div>
    </>
  );
}
