import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contexto from './components/Contexto';
import Solucion from './components/Solucion';
import Arquitectura from './components/Arquitectura';
import Alineacion from './components/Alineacion';
import HojaRuta from './components/HojaRuta';
import Laboratorio from './components/Laboratorio';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState('gl');
  const [lightMode, setLightMode] = useState(false);
  const hasAnimated = useRef(false);

  // Toggle light mode
  const toggleLightMode = useCallback(() => {
    setLightMode((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
  }, [lightMode]);

  // Preloader complete → animate hero & navbar
  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Small delay so elements are mounted
    requestAnimationFrame(() => {
      gsap.to('#navbar', { y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.to('.hero-element', { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 });
    });
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Delay slightly to ensure all elements are rendered
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-text').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (loading) return;

    let lenis;
    let rafId;

    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default;
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.log('Lenis not available, using native scroll.');
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [loading]);

  return (
    <>
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay"></div>

      {/* Preloader */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
      />

      {/* Main Content */}
      <main>
        <Hero lang={lang} />
        <Contexto lang={lang} />
        <Solucion lang={lang} />
        <Arquitectura lang={lang} />
        <Alineacion lang={lang} />
        <HojaRuta lang={lang} />
        <Laboratorio lang={lang} />
      </main>

      <Footer lang={lang} lightMode={lightMode} />
    </>
  );
}
