import { Cpu, BrainCircuit, AppWindow, Grid, MousePointerClick, MessageCircle, Mail, Mic, Scale as ScaleIcon, Newspaper, Briefcase, Users, GraduationCap, HelpCircle } from 'lucide-react';

export default function Arquitectura({ lang }) {
    return (
        <>
            {/* 4. ARQUITECTURA */}
            <section id="arquitectura" className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--mencia-border)', borderBottom: '1px solid var(--mencia-border)' }}>
                <div className="container">
                    <div className="reveal-text" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
                            {lang === 'es' ? 'El laboratorio de IA: de la trinchera a la estrategia' : 'O laboratorio de IA: da trincheira á estratexia'}
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto' }}>
                            {lang === 'es' ? 'Construimos un ecosistema simple y potente, instalado en servidores propios con tres piezas clave de código abierto.' : 'Construímos un ecosistema simple e potente, instalado en servidores propios con tres pezas clave de código aberto.'}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))', gap: '2rem', position: 'relative', maxWidth: '72rem', margin: '0 auto' }}>
                        {/* Connection line */}
                        <div style={{ display: 'none', position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(207,17,45,0.3), transparent)', transform: 'translateY(-50%)', zIndex: 0 }}></div>

                        {[
                            { icon: Cpu, color: 'var(--mencia-red)', shadow: 'rgba(207,17,45,0.2)', label: { gl: 'Infraestrutura GPU', es: 'Infraestructura GPU' }, title: { gl: '1. O motor', es: '1. El motor' }, desc: { gl: 'Executa modelos de código aberto e de pesos abertos de forma local utilizando ferramentas como Ollama. Potencia bruta baixo o noso control.', es: 'Ejecuta modelos de código abierto y de pesos abiertos de forma local utilizando herramientas como Ollama. Potencia bruta bajo nuestro control.' }, labelColor: 'var(--mencia-red)' },
                            { icon: BrainCircuit, color: '#9333ea', shadow: 'rgba(147,51,234,0.2)', label: { gl: 'Orquestración RAG', es: 'Orquestación RAG' }, title: { gl: '2. O cerebro', es: '2. El cerebro' }, desc: { gl: 'Langchain actúa como orquestador. Conecta o motor coas ferramentas e as nosas propias bases de datos mediante sistemas RAG.', es: 'Langchain actúa como orquestador. Conecta el motor con las herramientas y nuestras propias bases de datos mediante sistemas RAG.' }, labelColor: '#a855f7' },
                            { icon: AppWindow, color: '#3b82f6', shadow: 'rgba(59,130,246,0.2)', label: { gl: 'Interfaces de usuario', es: 'Interfaces de usuario' }, title: { gl: '3. As ferramentas', es: '3. Las herramientas' }, desc: { gl: 'Aplicacións a medida que se executan en contedores Docker con interfaces amigables para o funcionario (Open WebUI, Streamlit).', es: 'Aplicaciones a medida que se ejecutan en contenedores Docker con interfaces amigables para el funcionario (Open WebUI, Streamlit).' }, labelColor: '#3b82f6' },
                        ].map(({ icon: Icon, color, shadow, label, title, desc, labelColor }, i) => (
                            <div key={i} className="glass-panel reveal-text" style={{ padding: '2rem', position: 'relative', zIndex: 10, textAlign: 'center' }}>
                                <div style={{ width: '4rem', height: '4rem', background: color, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: `0 8px 20px ${shadow}`, color: 'white' }}>
                                    <Icon size={32} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{lang === 'es' ? title.es : title.gl}</h3>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: labelColor, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>{lang === 'es' ? label.es : label.gl}</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{lang === 'es' ? desc.es : desc.gl}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FERRAMENTAS */}
            <section id="ferramentas" className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', overflow: 'hidden' }}>
                <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="reveal-text" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(207,17,45,0.3)', background: 'rgba(207,17,45,0.1)', fontSize: '10px', fontWeight: 700, color: 'var(--mencia-red)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                            <Grid size={12} />
                            {lang === 'es' ? 'Casos de uso reales' : 'Casos de uso reais'}
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
                            {lang === 'es' ? 'Herramientas de MencIA' : 'Ferramentas de MencIA'}
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto' }}>
                            {lang === 'es' ? 'Ejemplos de aplicaciones en producción, diseñadas para resolver problemas reales con mínima fricción.' : 'Exemplos de aplicacións en produción, deseñadas para resolver problemas reais con mínima fricción.'}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))', gap: '4rem', maxWidth: '72rem', margin: '0 auto' }}>
                        {/* Aplicaciones 3 clics */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ background: 'rgba(59,130,246,0.2)', padding: '0.5rem', borderRadius: '0.5rem', color: '#3b82f6', display: 'flex' }}><MousePointerClick size={20} /></span>
                                {lang === 'es' ? "Aplicaciones '3 clics'" : "Aplicacións '3 clics'"}
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: '1rem' }}>
                                {[
                                    { icon: Mail, title: { gl: 'Xestión de email', es: 'Gestión de email' }, desc: { gl: 'Analiza e resume correos. Transforma unha hora diaria en cinco minutos.', es: 'Analiza y resume correos. Transforma una hora diaria en cinco minutos.' } },
                                    { icon: Mic, title: { gl: 'Transcriptor', es: 'Transcriptor' }, desc: { gl: 'Converte plenos e reunións en texto (galego/castelán) para actas.', es: 'Convierte plenos y reuniones en texto (gallego/castellano) para actas.' } },
                                    { icon: ScaleIcon, title: { gl: 'Monitor BOE', es: 'Monitor BOE' }, desc: { gl: 'Automatiza a detección de edictos concursais para recadación.', es: 'Automatiza la detección de edictos concursales para recaudación.' } },
                                    { icon: Newspaper, title: { gl: 'Notas de prensa', es: 'Notas de prensa' }, desc: { gl: 'Xera borradores adestrados co histórico de noticias da entidade.', es: 'Genera borradores entrenados con el histórico de noticias de la entidad.' } },
                                ].map(({ icon: Icon, title, desc }, i) => (
                                    <div key={i} className="glass-panel reveal-text" style={{ padding: '1.25rem' }}>
                                        <div style={{ color: '#3b82f6', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Icon size={16} />
                                            {lang === 'es' ? title.es : title.gl}
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lang === 'es' ? desc.es : desc.gl}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Asistentes conversacionales */}
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ background: 'rgba(34,197,94,0.2)', padding: '0.5rem', borderRadius: '0.5rem', color: '#22c55e', display: 'flex' }}><MessageCircle size={20} /></span>
                                {lang === 'es' ? 'Asistentes conversacionales' : 'Asistentes conversacionais'}
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: '1rem' }}>
                                {[
                                    { icon: Briefcase, title: { gl: 'Contratación', es: 'Contratación' }, desc: { gl: 'Resolve dúbidas sobre a LCSP e revisa pregos de condicións.', es: 'Resuelve dudas sobre la LCSP y revisa pliegos de condiciones.' } },
                                    { icon: Users, title: { gl: 'Función pública', es: 'Función pública' }, desc: { gl: 'Experto en normativa de persoal. Consulta só leis pechadas.', es: 'Experto en normativa de personal. Consulta solo leyes cerradas.' } },
                                    { icon: GraduationCap, title: { gl: 'Profesor IA', es: 'Profesor IA' }, desc: { gl: 'Forma aos empregados explicando ferramentas con exemplos sinxelos.', es: 'Forma a los empleados explicando herramientas con ejemplos sencillos.' } },
                                    { icon: HelpCircle, title: { gl: 'Asistente CAU', es: 'Asistente CAU' }, desc: { gl: 'Soporte técnico virtual baseado nos manuais oficiais do servizo.', es: 'Soporte técnico virtual basado en los manuales oficiales del servicio.' } },
                                ].map(({ icon: Icon, title, desc }, i) => (
                                    <div key={i} className="glass-panel reveal-text" style={{ padding: '1.25rem' }}>
                                        <div style={{ color: '#22c55e', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Icon size={16} />
                                            {lang === 'es' ? title.es : title.gl}
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lang === 'es' ? desc.es : desc.gl}</p>
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
