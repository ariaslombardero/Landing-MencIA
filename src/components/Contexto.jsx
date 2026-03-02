import { Lock, PauseCircle, X, AlertCircle, Castle, Skull } from 'lucide-react';

export default function Contexto({ lang }) {
    return (
        <section id="dilema" className="section section-dark section-narrative-dark" style={{ paddingTop: '10rem', paddingBottom: '10rem', zIndex: 20, overflow: 'hidden', position: 'relative' }}>

            {/* Subtle background glows — pure CSS inline */}
            <div style={{
                position: 'absolute', top: '50%', left: '25%', width: '500px', height: '500px',
                background: 'rgba(127,29,29,0.1)', borderRadius: '50%', filter: 'blur(120px)',
                transform: 'translateY(-50%)', pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute', top: '50%', right: '25%', width: '400px', height: '400px',
                background: 'rgba(30,58,138,0.1)', borderRadius: '50%', filter: 'blur(100px)',
                transform: 'translateY(-50%)', pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header Editorial */}
                <div className="reveal-text" style={{ textAlign: 'center', maxWidth: '54rem', margin: '0 auto 6rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em', fontWeight: 700, color: '#f8fafc', lineHeight: 1.1 }}>
                        {lang === 'es' ? 'La encrucijada de la administración' : 'A encrucillada da administración'}
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 400 }}>
                        {lang === 'es'
                            ? 'Las administraciones públicas se encuentran atrapadas entre dos caminos que llevan al fracaso. Uno nos hace dependientes; el otro, irrelevantes.'
                            : 'As administracións públicas atópanse atrapadas entre dous camiños que levan ao fracaso. Un fainos dependentes; o outro, irrelevantes.'
                        }
                    </p>
                </div>

                {/* Cards Editorial Dark Glassmorphism */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30rem), 1fr))', gap: '2.5rem', maxWidth: '78rem', margin: '0 auto' }}>

                    {/* Via 1: Feudalismo Digital */}
                    <div className="reveal-text"
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '3rem',
                            transition: 'transform 0.5s ease',
                            cursor: 'default'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.querySelector('.hover-glow').style.opacity = '1';
                            e.currentTarget.querySelector('.watermark-icon').style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.querySelector('.hover-glow').style.opacity = '0';
                            e.currentTarget.querySelector('.watermark-icon').style.transform = 'scale(1)';
                        }}
                    >

                        {/* Hover glow red */}
                        <div className="hover-glow" style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom right, rgba(220,38,38,0.05), transparent)',
                            opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none'
                        }}></div>

                        {/* Watermark icon */}
                        <div className="watermark-icon" style={{
                            position: 'absolute', right: '-2rem', bottom: '-2rem',
                            opacity: 0.03, transition: 'transform 0.7s ease', pointerEvents: 'none'
                        }}>
                            <Castle size={280} color="#f8fafc" />
                        </div>

                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', border: '1px solid rgba(207,17,45,0.4)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(207,17,45,0.1)', boxShadow: 'inset 0 0 20px rgba(207,17,45,0.2)' }}>
                                    <Lock size={28} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '0.25rem' }}>
                                        {lang === 'es' ? 'VÍA 1' : 'VÍA 1'}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.02em', color: '#f8fafc', lineHeight: 1 }}>
                                        {lang === 'es' ? 'Feudalismo digital' : 'Feudalismo dixital'}
                                    </h3>
                                </div>
                            </div>

                            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.6 }}>
                                {lang === 'es' ? 'Dependencia absoluta de soluciones propietarias cerradas.' : 'Dependencia absoluta de solucións propietarias pechadas.'}
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                                {(lang === 'es'
                                    ? ['Se cede el control total de los datos.', 'Operamos a través de "cajas negras".', 'Costes de alquiler recurrentes y crecientes.']
                                    : ['Cédese o control total dos datos.', 'Operamos a través de "caixas negras".', 'Custos de aluguer recorrentes e crecentes.']
                                ).map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.05rem', color: '#94a3b8', fontWeight: 300 }}>
                                        <X size={20} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                                <p style={{ fontSize: '1rem', fontWeight: 300, color: '#ef4444', fontStyle: 'italic', letterSpacing: '0.02em' }}>
                                    {lang === 'es' ? '"Entregamos las llaves de nuestra institución."' : '"Entregamos as chaves da nosa institución."'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Via 2: O val dos pilotos */}
                    <div className="reveal-text"
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '3rem',
                            transition: 'transform 0.5s ease',
                            cursor: 'default'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.querySelector('.hover-glow').style.opacity = '1';
                            e.currentTarget.querySelector('.watermark-icon').style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.querySelector('.hover-glow').style.opacity = '0';
                            e.currentTarget.querySelector('.watermark-icon').style.transform = 'scale(1)';
                        }}
                    >

                        {/* Hover glow subtle */}
                        <div className="hover-glow" style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom right, rgba(71,85,105,0.05), transparent)',
                            opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none'
                        }}></div>

                        {/* Watermark icon */}
                        <div className="watermark-icon" style={{
                            position: 'absolute', right: '-2rem', bottom: '-2rem',
                            opacity: 0.03, transition: 'transform 0.7s ease', pointerEvents: 'none'
                        }}>
                            <Skull size={280} color="#f8fafc" />
                        </div>

                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', border: '1px solid rgba(148,163,184,0.3)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(148,163,184,0.05)', boxShadow: 'inset 0 0 20px rgba(148,163,184,0.1)' }}>
                                    <PauseCircle size={28} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.25rem' }}>
                                        {lang === 'es' ? 'VÍA 2' : 'VÍA 2'}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.02em', color: '#f8fafc', lineHeight: 1 }}>
                                        {lang === 'es' ? 'El valle de los pilotos' : 'O val dos pilotos'}
                                    </h3>
                                </div>
                            </div>

                            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.6 }}>
                                {lang === 'es' ? 'Estancamiento disfrazado de innovación.' : 'Estancamento disfrazado de innovación.'}
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                                {(lang === 'es'
                                    ? ['Prudencia excesiva que paraliza la acción.', 'Pilotos tecnológicos que nunca escalan.', 'Inversión sin transformación real.']
                                    : ['Prudencia excesiva que paraliza a acción.', 'Pilotos tecnolóxicos que nunca escalan.', 'Investimento sen transformación real.']
                                ).map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.05rem', color: '#94a3b8', fontWeight: 300 }}>
                                        <AlertCircle size={20} color="#94a3b8" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                                <p style={{ fontSize: '1rem', fontWeight: 300, color: '#94a3b8', fontStyle: 'italic', letterSpacing: '0.02em' }}>
                                    {lang === 'es' ? '"La tecnología funciona, pero no somos capaces de integrarla."' : '"A tecnoloxía funciona, pero non somos capaces de integrala."'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
