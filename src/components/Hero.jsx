import { ChevronDown, Music2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero({ lang }) {
    const [hintVisible, setHintVisible] = useState(true);
    const [hintOpacity, setHintOpacity] = useState(0);

    useEffect(() => {
        // Fade-in después de 1s
        const showTimer = setTimeout(() => setHintOpacity(1), 1000);
        return () => clearTimeout(showTimer);
    }, []);

    const handleBsoHint = () => {
        window.dispatchEvent(new CustomEvent('mencia:play-bso'));
        // Eliminado: setHintOpacity(0) y setHintVisible(false) para que siga visible
    };


    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                backgroundColor: 'var(--bg-primary)',
                overflow: 'hidden',
            }}
        >
            {/* Grid pattern */}
            <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2, transform: 'perspective(500px) rotateX(20deg) scale(1.5)' }}></div>

            {/* Red glow */}
            <div className="hero-bg-glow" style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px',
                background: 'var(--mencia-red)',
                borderRadius: '50%',
                opacity: 0.07,
                filter: 'blur(120px)',
            }}></div>

            {/* Content */}
            <div className="hero-element" style={{ zIndex: 10, textAlign: 'center', maxWidth: '64rem', padding: '0 1rem', marginTop: '2.5rem' }}>
                {/* Single Top Badge */}
                <div className="hero-element" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--mencia-border)',
                    background: 'rgba(255,255,255,0.05)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#f87171',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    backdropFilter: 'blur(8px)',
                    marginBottom: '1.5rem',
                }}>
                    <span className="animate-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
                    {lang === 'en' ? 'Public AI Strategy' : (lang === 'es' ? 'Estrategia pública de IA' : 'Estratexia pública de IA')}
                </div>

                {/* Title */}
                <h1 className="hero-element" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                    <span style={{ display: 'block', color: 'var(--text-primary)' }}>
                        {lang === 'en' ? 'A sovereign model,' : 'Un modelo soberano,'}
                    </span>
                    <span className="text-shadow-glow" style={{ display: 'block', color: 'var(--mencia-red)' }}>
                        {lang === 'en' ? 'sustainable and strategic.' : (lang === 'es' ? 'sostenible y estratégico.' : 'sostible e estratéxico.')}
                    </span>
                </h1>

                {/* Award Badge centered below title */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7430267421929906176/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-element award-badge"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.25rem 0.8rem',
                            borderRadius: '9999px',
                            border: '1px solid rgba(234, 179, 8, 0.3)',
                            background: 'rgba(234, 179, 8, 0.04)',
                            fontSize: '0.71rem',
                            fontWeight: 600,
                            color: '#eab308',
                            letterSpacing: '0.04em',
                            backdropFilter: 'blur(8px)',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(234, 179, 8, 0.08)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(234, 179, 8, 0.1)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(234, 179, 8, 0.04)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span style={{ fontSize: '13px' }}>🏆</span>
                        {lang === 'en' ? 'Award-winning strategy by the Spanish Quality Association' : (lang === 'es' ? 'Estrategia premiada por la Asociación Española para la Calidad' : 'Estratexia premiada pola Asociación Española para a Calidade')}
                    </a>
                </div>

                {/* Subtitle */}
                <p className="hero-element" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                    {lang === 'en'
                        ? <>MencIA combines control and innovation from the public sector.<br />The difference between renting a house or being the owner.</>
                        : (lang === 'es'
                            ? <>MencIA combina control e innovación desde el sector público.<br />La diferencia entre alquilar una casa o ser el propietario.</>
                            : <>MencIA combina control e innovación dende o sector público.<br />A diferenza entre alugar unha casa ou ser o propietario.</>)
                    }
                </p>

                {/* BSO Hint — auto-dismiss */}
                {hintVisible && (
                    <button
                        onClick={handleBsoHint}
                        className="hero-element hover:border-red-500/30 hover:bg-red-500/5 transition-all"
                        style={{
                            marginTop: '2rem',
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: 'transparent',
                            border: '1px solid var(--mencia-border)',
                            borderRadius: '9999px',
                            padding: '0.45rem 1rem 0.45rem 0.75rem',
                            cursor: 'pointer',
                            opacity: hintOpacity,
                            transition: 'all 0.6s ease',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        }}
                        aria-label={lang === 'en' ? 'Enable background music' : 'Activar música de fondo'}
                    >
                        <Music2 size={13} color="#f87171" className="animate-pulse" />
                        <span style={{
                            fontSize: '0.72rem', fontWeight: 500,
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.01em'
                        }}>
                            {lang === 'en'
                                ? 'Enable our original soundtrack for an immersive experience'
                                : (lang === 'es'
                                    ? 'Activa nuestra banda sonora original para una experiencia inmersiva'
                                    : 'Activa a nosa banda sonora orixinal para unha experiencia inmersiva')
                            }
                        </span>
                    </button>
                )}
            </div>

            {/* Scroll indicator */}
            <button
                className="animate-bounce-gentle"
                onClick={() => document.getElementById('dilema')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    color: 'var(--text-muted)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                }}
                aria-label="Ir a la siguiente sección"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
}
