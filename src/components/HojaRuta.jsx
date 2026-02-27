export default function HojaRuta({ lang }) {
    const phases = [
        { num: '0', color: 'var(--mencia-red)', title: { gl: 'Fase 0 (Actual): Laboratorio de IA', es: 'Fase 0 (Actual): Laboratorio de IA' }, desc: { gl: 'Construír, probar e demostrar valor con casos de uso concretos para vencer a resistencia ao cambio. "Empezar a casa polo tellado".', es: 'Construir, probar y demostrar valor con casos de uso concretos para vencer la resistencia al cambio. "Empezar la casa por el tejado".' } },
        { num: '1', color: '#3b82f6', title: { gl: 'Próximos pasos: Consolidación', es: 'Próximos pasos: Consolidación' }, desc: { gl: 'Abordar os pasos previos necesarios: definir un marco de gobernanza, un código ético, auditar procesos e deseñar un plan de alfabetización en IA.', es: 'Abordar los pasos previos necesarios: definir un marco de gobernanza, un código ético, auditar procesos y diseñar un plan de alfabetización en IA.' } },
        { num: '2', color: '#22c55e', title: { gl: 'Obxectivo final: Escalado', es: 'Objetivo final: Escalamiento' }, desc: { gl: 'Ofrecer a plataforma MENCIA como un servizo público a todos os concellos da provincia.', es: 'Ofrecer la plataforma MENCIA como un servicio público a todos los ayuntamientos de la provincia.' } },
    ];

    return (
        <section id="hoja-ruta" className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container">
                <h2 className="reveal-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>
                    {lang === 'es'
                        ? 'Nuestra hoja de ruta: de un laboratorio de pruebas a un servicio público provincial'
                        : 'A nosa folla de ruta: dun laboratorio de probas a un servizo público provincial'
                    }
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))', gap: '2rem', position: 'relative', maxWidth: '72rem', margin: '0 auto' }}>
                    {/* Connection line */}
                    <div style={{ display: 'none', position: 'absolute', top: '3rem', left: 0, width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(207,17,45,0.3), transparent)', zIndex: 0 }}></div>

                    {phases.map(({ num, color, title, desc }, i) => (
                        <div key={i} className="glass-panel reveal-text" style={{ padding: '2rem', position: 'relative', zIndex: 10 }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'white', fontWeight: 700 }}>
                                {num}
                            </div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                {lang === 'es' ? title.es : title.gl}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {lang === 'es' ? desc.es : desc.gl}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
