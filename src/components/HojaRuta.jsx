export default function HojaRuta({ lang }) {
    const phases = [
        {
            num: '0',
            color: 'var(--mencia-red)',
            title: { gl: 'Fase 0 (Actual): Laboratorio de IA', es: 'Fase 0 (actual): Laboratorio de IA' },
            desc: { gl: 'Construír, probar e demostrar valor con casos de uso concretos para vencer a resistencia ao cambio.', es: 'Construir, probar y demostrar valor con casos de uso concretos para vencer la resistencia al cambio.' }
        },
        {
            num: '1',
            color: '#3b82f6',
            title: { gl: 'Próximos pasos: Consolidación', es: 'Próximos pasos: Consolidación' },
            desc: { gl: 'Abordar os pasos previos necesarios: definir un marco de gobernanza, un código ético, auditar procesos e deseñar un plan de alfabetización en IA.', es: 'Abordar los pasos previos necesarios: definir un marco de gobernanza, un código ético, auditar procesos y diseñar un plan de alfabetización en IA.' }
        },
        {
            num: '2',
            color: '#22c55e',
            title: { gl: 'Obxectivo final: Escalado', es: 'Objetivo final: Escalamiento' },
            desc: { gl: 'Ofrecer a plataforma MENCIA como un servizo público a todos os concellos da provincia.', es: 'Ofrecer la plataforma MENCIA como un servicio público a todos los ayuntamientos de la provincia.' }
        },
    ];

    return (
        <section id="hoja-ruta" className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '72rem', margin: '0 auto' }}>

                {/* Header — free floating */}
                <div className="reveal-text" style={{ marginBottom: '5rem' }}>
                    <span style={{
                        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                        textTransform: 'uppercase', color: '#cf112d', display: 'block', marginBottom: '1rem'
                    }}>
                        — {lang === 'es' ? 'Roadmap' : 'Roadmap'}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
                        letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '1rem'
                    }}>
                        {lang === 'es'
                            ? 'Nuestra hoja de ruta: de un laboratorio de pruebas a un servicio público provincial'
                            : 'A nosa folla de ruta: dun laboratorio de probas a un servizo público provincial'
                        }
                    </h2>
                </div>

                {/* Top divider */}
                <div style={{ height: '1px', background: 'var(--mencia-border)', marginBottom: '0' }} />

                {/* Phases — editorial list, no glass-panel */}
                <div>
                    {phases.map(({ num, color, title, desc }, i) => (
                        <div
                            key={i}
                            className="reveal-text"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '4rem 1fr',
                                gap: '2rem',
                                padding: '2.5rem 1rem',
                                borderBottom: '1px solid var(--mencia-border)',
                                transition: 'background 0.3s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            {/* Phase number circle — accent kept */}
                            <div style={{
                                width: '2.75rem', height: '2.75rem',
                                background: 'transparent',
                                border: `1.5px solid ${color}`,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: color, fontWeight: 800, fontSize: '1rem',
                                flexShrink: 0, marginTop: '0.1rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {num}
                            </div>

                            {/* Text — breathing freely */}
                            <div>
                                <h3 style={{
                                    fontSize: '1.05rem', fontWeight: 600,
                                    color: 'var(--text-primary)', letterSpacing: '-0.01em',
                                    marginBottom: '0.5rem', lineHeight: 1.3
                                }}>
                                    {lang === 'es' ? title.es : title.gl}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem', color: '#64748b',
                                    lineHeight: 1.75, fontWeight: 400
                                }}>
                                    {lang === 'es' ? desc.es : desc.gl}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div style={{ height: '1px', background: 'var(--mencia-border)' }} />
            </div>
        </section>
    );
}
