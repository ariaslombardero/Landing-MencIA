import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete, lang }) {
    const preloaderRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        let isCompleted = false;

        const triggerComplete = () => {
            if (!isCompleted) {
                isCompleted = true;
                onComplete?.();
            }
        };

        const tl = gsap.timeline({
            onComplete: triggerComplete,
        });

        tl.to(lineRef.current, { width: '100%', duration: 1.5, ease: 'power2.inOut' })
            .to(preloaderRef.current, { y: '-100%', duration: 1, ease: 'power4.inOut' });

        // Fallback robusto en caso de que GSAP se bloquee
        const fallbackTimer = setTimeout(triggerComplete, 3000);

        return () => {
            tl.kill();
            clearTimeout(fallbackTimer);
        };
    }, [onComplete]);

    return (
        <div className="preloader" ref={preloaderRef}>
            <img
                src="/logos/mencia-logo-trans-dark.png"
                alt="MencIA"
                style={{
                    height: 'clamp(70px, 12vw, 120px)',
                    width: 'auto',
                    marginBottom: '1.5rem',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.1))'
                }}
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="loader-line-track" style={{ width: 'clamp(200px, 25vw, 400px)', height: '2px' }}>
                <div className="loader-line" ref={lineRef}></div>
            </div>
            <div style={{
                fontSize: 'clamp(11px, 1.2vw, 15px)',
                fontFamily: 'var(--font-mono)',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.35em',
                fontWeight: 600,
                marginTop: '1rem'
            }}>
                {lang === 'en' ? 'SYSTEM LOADING...' : 'CARGANDO SISTEMA...'}
            </div>
        </div>
    );
}
