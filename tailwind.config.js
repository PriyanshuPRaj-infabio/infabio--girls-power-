/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        // Official Infabio Brand Colors
        background: '#FFFFFF',
        surface: '#F8FAFC',
        textMain: '#0F172A',       // slate-900 — headings
        textBody: '#374151',       // gray-700 — body copy
        textMuted: '#6B7280',      // gray-500 — secondary text
        // Brand Accent Colors
        brandBlue: '#2563EB',      // blue-600 — primary accent
        brandOrange: '#F97316',    // orange-500 — secondary accent
        // Legacy names kept for compatibility
        accentCyan: '#2563EB',
        accentPurple: '#2563EB',
        accentPeach: '#F97316',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        'float-slow': 'float 8s ease-in-out 0.5s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rotation, 0deg))' },
          '50%': { transform: 'translateY(-18px) rotate(calc(var(--rotation, 0deg) + 1.5deg))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(249,115,22,0.08) 100%)',
        'hero-glow': 'radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(249,115,22,0.10) 0%, transparent 60%)',
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(37, 99, 235, 0.15)',
        'brand-orange': '0 4px 24px rgba(249, 115, 22, 0.15)',
        'card': '0 2px 16px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 20px 60px rgba(37, 99, 235, 0.18)',
        'card-hover-orange': '0 20px 60px rgba(249, 115, 22, 0.18)',
      },
    },
  },
  plugins: [],
}
