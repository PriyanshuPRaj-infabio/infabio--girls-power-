import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Founders() {
  return (
    <section className="section-slate py-28 relative overflow-hidden" id="founders">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-50/70 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="premium-card p-10 md:p-16 relative overflow-hidden max-w-5xl mx-auto"
          style={{ boxShadow: '0 30px 80px rgba(37,99,235,0.12)' }}
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue" />
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-50/40 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow mb-6">For Women Founders</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-textMain leading-tight mt-4 mb-8">
              Built for ambitious{' '}
              <span className="text-brand">women founders.</span>
            </h2>

            <div className="space-y-5 text-lg text-textBody leading-relaxed mb-10">
              <p>Starting and scaling a business is hard. Especially when every rupee matters.</p>
              <p>That's why we create marketing systems that help women-led brands:</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Grow confidently', 'Scale sustainably', 'Build authority', 'Compete smarter'].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${i % 2 === 0 ? 'bg-brandBlue' : 'bg-brandOrange'}`} />
                  <span className="font-bold text-textMain">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-2xl font-display font-bold text-textMain mb-10 border-l-4 border-brandOrange pl-6">
              "You focus on your vision.{' '}
              <span className="text-brandBlue">We'll handle the growth engine."</span>
            </p>

            <MagneticButton className="btn-primary text-base">
              Let's Build Your Brand Together →
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
