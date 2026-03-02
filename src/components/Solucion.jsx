import { GitBranch, ShieldCheck, Settings2, Coins, Compass, Zap, UserCheck, Scale } from 'lucide-react';

export default function Solucion({ lang }) {
    return (
        <>
            {/* 2. A SOLUCIÓN */}
            <section id="solucion" className="section section-light" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
                        {/* Left: Title */}
                        <div className="reveal-text" style={{ flex: '1 1 28rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mencia-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '10px', marginBottom: '1rem' }}>
                                <GitBranch size={12} />
                                {lang === 'en' ? 'The third way' : (lang === 'es' ? 'La tercera vía' : 'A terceira vía')}
                            </div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                {lang === 'en' ? 'Realistic technological sovereignty' : (lang === 'es' ? 'Soberanía tecnológica realista' : 'Soberanía tecnolóxica realista')}
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                {lang === 'en'
                                    ? <>MencIA is a model that combines control and innovation, betting on open-source and open-weight Artificial Intelligence in our own infrastructure.</>
                                    : (lang === 'es'
                                        ? <>MencIA es un modelo que combina control e innovación, apostando por Inteligencia Artificial de código abierto y pesos abiertos en infraestructuras propias.</>
                                        : <>MencIA é un modelo que combina control e innovación, apostando por Intelixencia Artificial de código aberto e pesos abertos en infraestruturas propias.</>)
                                }
                            </p>
                        </div>

                        {/* Right: Feature Cards */}
                        <div style={{ flex: '1 1 28rem', display: 'grid', gap: '1rem' }}>
                            {[
                                { icon: ShieldCheck, color: '#3b82f6', title: { gl: 'Control de datos', es: 'Control de datos', en: 'Data control' }, desc: { gl: 'A información sensible nunca abandona os nosos servidores. Privacidade absoluta.', es: 'La información sensible nunca abandona nuestros servidores. Privacidad absoluta.', en: 'Sensitive information never leaves our servers. Absolute privacy.' } },
                                { icon: Settings2, color: '#22c55e', title: { gl: 'Adaptabilidade real', es: 'Adaptabilidad real', en: 'Real adaptability' }, desc: { gl: 'As ferramentas personalízanse ás necesidades locais, non ao revés.', es: 'Las herramientas se personalizan a las necesidades locales, no al revés.', en: 'Tools are customized to local needs, not the other way around.' } },
                                { icon: Coins, color: 'var(--mencia-red)', title: { gl: 'Sustentabilidade económica', es: 'Sostenibilidad económica', en: 'Economic sustainability' }, desc: { gl: 'Eliminamos custos de licenzas e investimos en activos propios.', es: 'Eliminamos costes de licencias e invertimos en activos propios.', en: 'We eliminate license costs and invest in our own assets.' } },
                            ].map(({ icon: Icon, color, title, desc }, i) => (
                                <div key={i} className="glass-panel reveal-text" style={{ padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ marginTop: '0.25rem', background: `${color}15`, padding: '0.5rem', borderRadius: '0.375rem', color }}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{lang === 'en' ? title.en : (lang === 'es' ? title.es : title.gl)}</h4>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{lang === 'en' ? desc.en : (lang === 'es' ? desc.es : desc.gl)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRINCIPIO REITOR */}
            <section id="principio-reitor" className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="glass-panel reveal-text" style={{ borderRadius: '1.5rem', padding: 'clamp(2.5rem, 4vw, 4rem)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(to right, var(--bg-card), var(--bg-secondary))' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', background: 'var(--mencia-red)', opacity: 0.05, filter: 'blur(120px)' }}></div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', position: 'relative', zIndex: 10 }}>
                            {/* Left */}
                            <div style={{ flex: '1 1 24rem' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(207,17,45,0.3)', background: 'rgba(207,17,45,0.1)', fontSize: '10px', fontWeight: 700, color: 'var(--mencia-red)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                    <Compass size={12} />
                                    {lang === 'en' ? 'Guiding principle' : (lang === 'es' ? 'Principio rector' : 'Principio reitor')}
                                </div>
                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
                                    {lang === 'en' ? 'AI as a copilot' : (lang === 'es' ? 'La IA como copiloto' : 'A IA como copiloto')}
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {lang === 'en'
                                        ? 'Our model enhances human capabilities, it does not replace them. It guarantees trust and responsibility at all times.'
                                        : (lang === 'es'
                                            ? 'Nuestro modelo potencia las capacidades humanas, no las sustituye. Garantiza la confianza y la responsabilidad en todo momento.'
                                            : 'O noso modelo potencia as capacidades humanas, non as substitúe. Garante a confianza e a responsabilidade en todo momento.')
                                    }
                                </p>
                            </div>

                            {/* Right */}
                            <div style={{ flex: '1 1 24rem', display: 'grid', gap: '1.5rem', width: '100%' }}>
                                {[
                                    { icon: Zap, color: '#facc15', title: { gl: 'Administración aumentada', es: 'Administración aumentada', en: 'Augmented administration' }, desc: { gl: 'Liberamos aos empregados de tarefas repetitivas para que se centren no traballo de alto valor.', es: 'Liberamos a los empleados de tareas repetitivas para que se centren en el trabajo de alto valor.', en: 'We free employees from repetitive tasks so they can focus on high-value work.' } },
                                    { icon: UserCheck, color: 'var(--mencia-red)', title: { gl: 'Supervisión humana innegociable', es: 'Supervisión humana innegociable', en: 'Non-negotiable human oversight' }, desc: { gl: 'A decisión final sempre é dunha persoa. Ningunha acción legal execútase de forma autónoma.', es: 'La decisión final siempre es de una persona. Ninguna acción legal se ejecuta de forma autónoma.', en: 'The final decision is always made by a person. No legal action is executed autonomously.' } },
                                    { icon: Scale, color: '#3b82f6', title: { gl: 'Gobernanza por deseño', es: 'Gobernanza por diseño', en: 'Governance by design' }, desc: { gl: 'Usamos a regulación (RIA, RXPD) como manual para construír sistemas seguros dende o inicio.', es: 'Usamos la regulación (RIA, RGPD) como manual para construir sistemas seguros desde el inicio.', en: 'We use regulation (AIA, GDPR) as a manual to build secure systems from the ground up.' } },
                                ].map(({ icon: Icon, color, title, desc }, i) => (
                                    <div key={i}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--mencia-border)' }}>
                                                <Icon size={20} color={color} />
                                            </div>
                                            <div>
                                                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{lang === 'en' ? title.en : (lang === 'es' ? title.es : title.gl)}</h4>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lang === 'en' ? desc.en : (lang === 'es' ? desc.es : desc.gl)}</p>
                                            </div>
                                        </div>
                                        {i < 2 && <div style={{ height: '1px', background: 'var(--mencia-border)', marginTop: '1.5rem' }}></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
