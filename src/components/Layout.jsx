import { useEffect } from 'react';
import { ReactLenis as Lenis } from 'lenis/react';
import CustomCursor from './CustomCursor';
import ThreeMeshBackground from './ThreeMeshBackground';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  useEffect(() => {
    // Add lenis class to html
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <Lenis root options={{ smoothTouch: true, wheelMultiplier: 1.2, duration: 1.5 }}>
      <CustomCursor />
      <div className="relative min-h-screen bg-background selection:bg-brandOrange/30 selection:text-white">
        <ThreeMeshBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </Lenis>
  );
}
