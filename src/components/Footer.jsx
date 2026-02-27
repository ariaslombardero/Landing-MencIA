export default function Footer({ lang, lightMode }) {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Dark mode: transparent logo */}
                    {!lightMode && (
                        <img
                            src="/logos/mencia-logo-trans-dark.png"
                            alt="MencIA"
                            style={{
                                height: '28px',
                                width: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                    {/* Light mode: transparent logo */}
                    {lightMode && (
                        <img
                            src="/logos/mencia-logo-trans-light.png"
                            alt="MencIA"
                            style={{
                                height: '28px',
                                width: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    {lang === 'es'
                        ? '© 2025 MencIA — Estrategia de Inteligencia Artificial · Deputación de Lugo'
                        : '© 2025 MencIA — Estratexia de Intelixencia Artificial · Deputación de Lugo'
                    }
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#hero" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', transition: 'color 0.3s' }}>
                        {lang === 'es' ? 'Inicio' : 'Inicio'}
                    </a>
                    <a href="#simulaciones" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', transition: 'color 0.3s' }}>
                        {lang === 'es' ? 'Simuladores' : 'Simuladores'}
                    </a>
                </div>
            </div>
        </footer>
    );
}
