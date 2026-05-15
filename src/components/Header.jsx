import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 py-2" : "bg-white border-b border-slate-100 py-4"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/infabio-logo.png"
            alt="Infabio Logo"
            className="w-auto h-10 object-contain transition-all"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Industries', 'Case Studies', 'Insights'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group py-2">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:block text-sm font-semibold text-gray-600 hover:text-brandBlue transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="hidden md:flex btn-primary text-sm px-6 py-2.5 rounded-xl"
          >
            Book Free Strategy Call
          </a>
        </div>
      </div>
    </motion.header>
  );
}
