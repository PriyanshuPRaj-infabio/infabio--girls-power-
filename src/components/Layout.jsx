import { useEffect } from 'react';
import { ReactLenis as Lenis } from 'lenis/react';
import CustomCursor from './CustomCursor';
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
      <div className="relative min-h-screen bg-white selection:bg-blue-100 selection:text-brandBlue">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Lenis>
  );
}
