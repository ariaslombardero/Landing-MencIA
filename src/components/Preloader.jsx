import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
    const preloaderRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => onComplete?.(),
        });

        tl.to(lineRef.current, { width: '100%', duration: 1.5, ease: 'power2.inOut' })
            .to(preloaderRef.current, { y: '-100%', duration: 1, ease: 'power4.inOut' });
    }, [onComplete]);

    return (
        <div className="preloader" ref={preloaderRef}>
            <img
                src="/logos/mencia-logo-trans-dark.png"
                alt="MencIA"
                style={{ height: '48px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="loader-line-track">
                <div className="loader-line" ref={lineRef}></div>
            </div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#6b7280', letterSpacing: '0.15em' }}>
                CARGANDO SISTEMA...
            </div>
        </div>
    );
}
