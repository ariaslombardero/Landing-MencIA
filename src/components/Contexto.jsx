import { Lock, PauseCircle, X, AlertCircle, Castle, Skull } from 'lucide-react';

export default function Contexto({ lang }) {
    return (
        <section id="dilema" className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '8rem', borderBottom: '1px solid var(--mencia-border)', zIndex: 20 }}>
            <div className="container">
                {/* Header */}
                <div className="reveal-text" style={{ textAlign: 'center', maxWidth: '50rem', margin: '0 auto 5rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                        {lang === 'es' ? 'La encrucijada de la administración' : 'A encrucillada da administración'}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {lang === 'es'
                            ? 'Las administraciones públicas se encuentran atrapadas entre dos caminos que llevan al fracaso. Uno nos hace dependientes; el otro, irrelevantes.'
                            : 'As administracións públicas atópanse atrapadas entre dous camiños que levan ao fracaso. Un fainos dependentes; o outro, irrelevantes.'
                        }
                    </p>
                </div>

                {/* Two Cards (Pixel Perfect from Landingfusionadav2) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))', gap: '2rem', maxWidth: '72rem', margin: '0 auto' }}>
                    {/* Via 1: Feudalismo Digital */}
                    <div className="context-card reveal-text" style={{ borderLeft: '6px solid var(--mencia-red)', boxShadow: '0 0 40px -15px rgba(207, 17, 45, 0.2)' }}>
                        <div className="watermark"><Castle size={192} color="var(--mencia-red)" /></div>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', border: '1px solid rgba(207,17,45,0.3)', color: 'var(--mencia-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(207,17,45,0.05)' }}>
                                    <Lock size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                                    {lang === 'es' ? 'Vía 1: Feudalismo digital' : 'Vía 1: Feudalismo dixital'}
                                </h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                                {lang === 'es' ? 'Dependencia de soluciones propietarias.' : 'Dependencia de solucións propietarias.'}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                {(lang === 'es'
                                    ? ['Se cede el control de los datos.', 'Tecnología "caja negra".', 'Costes recurrentes y crecientes.']
                                    : ['Cédese o control dos datos.', 'Tecnoloxía "caixa negra".', 'Custos recorrentes e crecentes.']
                                ).map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        <X size={16} color="var(--mencia-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--mencia-red)', fontStyle: 'italic', opacity: 0.9 }}>
                                {lang === 'es' ? '"Les entregamos las llaves de nuestra casa."' : '"Entregámoslles as chaves da nosa casa."'}
                            </p>
                        </div>
                    </div>

                    {/* Via 2: O val dos pilotos */}
                    <div className="context-card reveal-text" style={{ borderLeft: '6px solid #475569', boxShadow: '0 0 40px -15px rgba(100,116,139,0.1)' }}>
                        <div className="watermark"><Skull size={192} color="#94a3b8" /></div>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', border: '1px solid rgba(71,85,105,0.3)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(100,116,139,0.05)' }}>
                                    <PauseCircle size={20} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                                    {lang === 'es' ? 'Vía 2: El valle de los pilotos' : 'Vía 2: O val dos pilotos'}
                                </h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                                {lang === 'es' ? 'Inmovilismo o experimentos aislados.' : 'Inmobilismo ou experimentos illados.'}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                {(lang === 'es'
                                    ? ['Prudencia excesiva.', 'Pilotos que nunca escalan.', 'Sin transformación real.']
                                    : ['Prudencia excesiva.', 'Pilotos que nunca escalan.', 'Sen transformación real.']
                                ).map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        <AlertCircle size={16} color="#64748b" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b', fontStyle: 'italic', opacity: 0.9 }}>
                                {lang === 'es' ? '"La tecnología funciona, pero no transforma."' : '"A tecnoloxía funciona, pero non transforma."'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
