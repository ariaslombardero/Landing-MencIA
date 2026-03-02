import { ExternalLink, Radar, Calculator, Map, BarChart3, Table2 } from 'lucide-react';

const SIMULATORS = [
    {
        icon: Radar,
        title: { gl: 'Radar estratéxico', es: 'Radar estratégico' },
        file: 'radar-estrategico.html',
        color: '#ef4444',
        desc: { gl: 'Visualiza a posición de MencIA fronte á administración tradicional.', es: 'Visualiza la posición de MencIA frente a la administración tradicional.' },
    },
    {
        icon: Calculator,
        title: { gl: 'Calculadora de impacto verde', es: 'Calculadora de impacto verde' },
        file: 'calculadora-impacto-verde.html',
        color: '#22c55e',
        desc: { gl: 'Compara o consumo enerxético entre modelos locais e na nube.', es: 'Compara el consumo energético entre modelos locales y en la nube.' },
    },
    {
        icon: BarChart3,
        title: { gl: 'Comparador de tarefas', es: 'Comparador de tareas' },
        file: 'comparador-tareas.html',
        color: '#eab308',
        desc: { gl: 'Funcionalidade real fronte a escaparate tecnolóxico.', es: 'Funcionalidad real frente a escaparate tecnológico.' },
    },
    {
        icon: Table2,
        title: { gl: 'Táboa periódica de IA', es: 'Tabla periódica de IA' },
        file: 'tabla-periodica-ia.html',
        color: '#a855f7',
        desc: { gl: 'Catálogo visual de todas as ferramentas do ecosistema MencIA.', es: 'Catálogo visual de todas las herramientas del ecosistema MencIA.' },
    },
];

export default function Laboratorio({ lang }) {
    return (
        <section id="simulaciones" className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--mencia-border)', overflow: 'hidden', minHeight: '60vh' }}>
            <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="reveal-text" style={{ marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--mencia-border)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Laboratorio MencIA
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '40rem' }}>
                        {lang === 'es'
                            ? 'Conoce nuestro conjunto de aplicaciones y asistentes visitando nuestros simuladores interactivos.'
                            : 'Coñece o noso conxunto de aplicacións e asistentes visitando os nosos simuladores interactivos.'
                        }
                    </p>

                </div>

                {/* Simulator Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30rem), 1fr))', gap: '1.5rem' }}>
                    {SIMULATORS.map(({ icon: Icon, title, file, color, desc }, i) => (
                        <a
                            key={i}
                            href={`/simuladores/${file}?lang=${lang}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sim-link glass-panel reveal-text"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="sim-gradient" style={{ background: `linear-gradient(135deg, ${color}08, ${color}15)` }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '3rem', height: '3rem', background: `${color}15`, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${color}30` }}>
                                    <Icon size={22} color={color} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                                        {lang === 'es' ? title.es : title.gl}
                                    </h4>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                        {lang === 'es' ? desc.es : desc.gl}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink size={16} color="var(--text-muted)" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
