export default function Footer({ lang, lightMode }) {
    return (
        <footer className="footer" style={{ padding: '2rem 0', width: '100%', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>
                <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minWidth: '150px' }}>
                    {/* Dark mode: transparent logo */}
                    {!lightMode && (
                        <img
                            src="/logos/mencia-logo-trans-dark.png"
                            alt="MencIA"
                            style={{
                                height: '46px',
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
                                height: '46px',
                                width: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                </div>

                <div style={{ flex: '2 1 400px', textAlign: 'center', minWidth: '300px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                        {lang === 'en'
                            ? '© 2026 MencIA — Artificial Intelligence Strategy · Deputación de Lugo'
                            : (lang === 'es'
                                ? '© 2026 MencIA — Estrategia de Inteligencia Artificial · Deputación de Lugo'
                                : '© 2026 MencIA — Estratexia de Intelixencia Artificial · Deputación de Lugo')
                        }
                    </p>
                </div>

                <div style={{ flex: '1 1 200px', minWidth: '150px' }} className="hidden sm:block"></div>
            </div>
        </footer>
    );
}
