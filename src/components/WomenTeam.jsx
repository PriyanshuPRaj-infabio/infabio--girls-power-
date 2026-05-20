import { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// TEAM DATA — edit name, role, and photo for each person
// ─────────────────────────────────────────────────────────────────────────────
const profiles = [
  {
    id: 2,
    photo: '/team/Mounica.png',
    name: 'Monika',
    role: 'Talent Executive',
    gradientFrom: '#fda4af',
    gradientTo: '#fec7d7',
    border: 'rgba(253,164,175,0.25)',
  },
  {
    id: 3,
    photo: '/team/priyanka.png',
    name: 'Priyanka',
    role: 'Frontend Executive',
    gradientFrom: '#c084fc',
    gradientTo: '#e9d5ff',
    border: 'rgba(192,132,252,0.25)',
  },
  {
    id: 1,
    photo: '/team/chhavi.jpeg',
    name: 'Chhavi',
    role: 'Founder & Digital Head',
    gradientFrom: '#6366f1',
    gradientTo: '#818cf8',
    border: 'rgba(99,102,241,0.25)',
    isFounder: true,
  },
  {
    id: 5,
    photo: '/team/vanshika.png',
    name: 'Vanshika',
    role: 'Co-Founder & Design Head',
    gradientFrom: '#db2777',
    gradientTo: '#fda4af',
    border: 'rgba(219,39,119,0.25)',
    isFounder: true,
  },
  {
    id: 4,
    photo: '/team/Ayushi.png',
    name: 'Ayushi',
    role: 'Marketing Executive',
    gradientFrom: '#818cf8',
    gradientTo: '#a5b4fc',
    border: 'rgba(129,140,248,0.25)',
  },
];

// ─── Minimal profile card: full photo + name + role ───────────────────────────
function ProfileCard({ profile }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (py - 0.5) * -16, ry: (px - 0.5) * 16 });
    setSpot({ x: px * 100, y: py * 100, opacity: 1 });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
    setSpot(s => ({ ...s, opacity: 0 }));
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ zIndex: 20, scale: 1.05 }}
      className={`flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer relative transition-all duration-350 group ${
        profile.isFounder 
          ? 'w-[325px] h-[460px] border-2 border-white/20 hover:border-white/40 ring-1 ring-white/10' 
          : 'w-[290px] h-[410px] border border-white/5 hover:border-white/25'
      }`}
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: '900px',
        boxShadow: isHovered
          ? (profile.isFounder 
              ? `0 32px 80px ${profile.border}, 0 0 50px ${profile.border}, 0 4px 20px rgba(0,0,0,0.15)` 
              : `0 24px 64px ${profile.border}, 0 0 35px ${profile.border}, 0 4px 16px rgba(0,0,0,0.12)`)
          : (profile.isFounder 
              ? `0 24px 64px ${profile.border}, 0 0 30px ${profile.border}, 0 2px 12px rgba(0,0,0,0.1)` 
              : `0 16px 56px ${profile.border}, 0 2px 12px rgba(0,0,0,0.08)`)
      }}
    >
      {/* ── Founder/Co-Founder Badge ── */}
      {profile.isFounder && (
        <div 
          className="absolute top-4 right-4 z-20 px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase text-white shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)`,
          }}
        >
          {profile.role.includes('Co-Founder') ? 'Co-Founder' : 'Founder'}
        </div>
      )}

      {/* ── Full-height photo OR gradient placeholder ── */}
      <div className="absolute inset-0">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full relative flex flex-col items-center justify-center"
            style={{ background: `linear-gradient(160deg, ${profile.gradientFrom} 0%, ${profile.gradientTo} 100%)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-44 h-44 rounded-full border-2 border-white/15 absolute" />
              <div className="w-64 h-64 rounded-full border border-white/08 absolute" />
            </div>
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
              <svg className="w-16 h-16 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs font-sans font-light tracking-widest uppercase mt-5 relative z-10">
              Photo coming soon
            </p>
          </div>
        )}
      </div>

      {/* ── Bottom dark gradient for text legibility ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[42%] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(6,6,16,0.92) 0%, rgba(6,6,16,0.45) 55%, transparent 100%)' }}
      />

      {/* ── Name + Role pinned to bottom ── */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 text-left transition-all duration-300 ${profile.isFounder ? 'px-7 pb-8 group-hover:pb-9' : 'px-6 pb-7 group-hover:pb-8'}`}>
        {/* Coloured accent line above name */}
        <div
          className={`rounded-full mb-3 transition-all duration-500 ${profile.isFounder ? 'h-[3px] w-12 group-hover:w-20' : 'h-[3px] w-10 group-hover:w-16'}`}
          style={{ background: `linear-gradient(90deg, ${profile.gradientFrom}, ${profile.gradientTo})` }}
        />
        <h3 className={`font-display font-light text-white leading-tight tracking-tight transition-colors duration-300 ${profile.isFounder ? 'text-2xl' : 'text-xl'}`}>
          {profile.name}
        </h3>
        <p className={`font-sans font-light mt-1.5 transition-colors duration-300 ${profile.isFounder ? 'text-[13px]' : 'text-xs'}`} style={{ color: profile.gradientTo }}>
          {profile.role}
        </p>
      </div>

      {/* ── Spotlight shimmer on mouse hover ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl z-30 transition-opacity duration-200"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(220px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.16), ${profile.gradientTo}1e, transparent 75%)`,
        }}
      />
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function WomenTeam() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isHoveredJoin, setIsHoveredJoin] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent will-change-transform"
      style={{ height: '100vh' }}
      id="team"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-indigo-950/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-pink-950/10 blur-[130px] rounded-full" />
      </div>

      {/* Fixed heading */}
      <div
        className="absolute top-0 left-0 right-0 z-20 pt-10 pb-5 bg-transparent"
      >
        <div className="container mx-auto flex items-end justify-between px-6">
          <div className="text-left">
            <span className="eyebrow mb-3 inline-block">Meet The Team</span>
            <h2 className="text-5xl md:text-[3.5rem] font-display font-light text-white mt-2 leading-tight">
              Women who makes it happen at <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">Infabio</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 pb-2 text-slate-400 text-sm font-sans font-light">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-lg"
            >
              →
            </motion.div>
            <span>Scroll to meet them</span>
          </div>
        </div>
        <div className="container mx-auto mt-4 px-6">
          <div className="h-px bg-white/5 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6366f1] to-[#fda4af] rounded-full"
              style={{ width: '40%', animation: 'shimmer 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="flex items-center gap-7 h-full pl-[5vw] pr-[5vw]"
        style={{ width: 'max-content', paddingTop: '140px' }}
      >
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}

        {/* Final "Join Us" card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setIsHoveredJoin(true)}
          onMouseLeave={() => setIsHoveredJoin(false)}
          className="w-[260px] h-[410px] flex-shrink-0 rounded-3xl flex flex-col items-center justify-center text-center p-8 cursor-pointer border border-white/5 hover:border-white/20 group relative overflow-hidden transition-all duration-350"
          style={{
            background: 'linear-gradient(160deg, #6366f1 0%, #fda4af 100%)',
            boxShadow: isHoveredJoin 
              ? '0 28px 75px rgba(99,102,241,0.4), 0 0 35px rgba(253,164,175,0.3)' 
              : '0 20px 60px rgba(99,102,241,0.25)',
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-105">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-display font-light text-white mb-3 leading-snug">
            Could be you!
          </h3>
          <p className="text-slate-100 text-sm leading-relaxed mb-8 font-sans font-light">
            We're always looking for passionate women to join our growth team.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-950 font-bold px-7 py-3 rounded-xl text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Join Infabio →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
