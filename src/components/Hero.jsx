import { ChevronDown } from 'lucide-react';

export default function Hero({ lang }) {
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
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px',
                background: 'var(--mencia-red)',
                borderRadius: '50%',
                opacity: 0.15,
                filter: 'blur(120px)',
            }}></div>

            {/* Content */}
            <div className="hero-element" style={{ zIndex: 10, textAlign: 'center', maxWidth: '64rem', padding: '0 1rem', marginTop: '2.5rem' }}>
                {/* Badge */}
                <div className="hero-element" style={{
                    marginBottom: '1.5rem',
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
                }}>
                    <span className="animate-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
                    {lang === 'es' ? 'Estrategia pública de IA' : 'Estratexia pública de IA'}
                </div>

                {/* Title */}
                <h1 className="hero-element" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                    <span style={{ display: 'block', color: 'var(--text-primary)' }}>
                        Un modelo soberano,
                    </span>
                    <span className="text-shadow-glow" style={{ display: 'block', color: 'var(--mencia-red)' }}>
                        {lang === 'es' ? 'sostenible y estratégico.' : 'sostible e estratéxico.'}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="hero-element" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                    {lang === 'es'
                        ? <>MencIA combina control e innovación desde el sector público.<br />La diferencia entre alquilar una casa o ser el propietario.</>
                        : <>MencIA combina control e innovación dende o sector público.<br />A diferenza entre alugar unha casa ou ser o propietario.</>
                    }
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce-gentle" style={{ position: 'absolute', bottom: '2.5rem', color: 'var(--text-muted)' }}>
                <ChevronDown size={24} />
            </div>
        </section>
    );
}
