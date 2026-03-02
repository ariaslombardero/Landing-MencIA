import { Flag, Leaf, ThermometerSun, Globe } from 'lucide-react';

const CARDS = [
    { icon: Flag, color: '#eab308', title: { gl: 'Proxecto ALIA e OpenEuroLLM', es: 'Proyecto ALIA y OpenEuroLLM' }, desc: { gl: 'MencIA contribúe ao ecosistema de modelos de linguaxe en castelán e linguas cooficiais (proxecto ALIA) e fomenta a creación de grandes modelos de linguaxe europeos de código aberto (OpenEuroLLM), impulsando a soberanía do dato.', es: 'MencIA contribuye al ecosistema de modelos de lenguaje en castellano y lenguas cooficiales (proyecto ALIA) y fomenta la creación de grandes modelos de lenguaje europeos de código abierto (OpenEuroLLM), impulsando la soberanía del dato.' } },
    { icon: Leaf, color: '#22c55e', title: { gl: 'Algoritmos verdes e Green in AI', es: 'Algoritmos verdes y Green in AI' }, desc: { gl: "Aliñado co Plan nacional de algoritmos verdes. A nosa filosofía 'Green in AI' prioriza a eficiencia enerxética mediante a especialización de tarefas, usando modelos pequenos (SLM) que reducen drasticamente a carga computacional e o consumo de auga.", es: "Alineado con el Plan nacional de algoritmos verdes. Nuestra filosofía 'Green in AI' prioriza la eficiencia energética mediante la especialización de tareas, usando modelos pequeños (SLM) que reducen drásticamente la carga computacional y el consumo de agua." } },
    { icon: ThermometerSun, color: '#ef4444', title: { gl: 'Pacto de Estado fronte á emerxencia climática', es: 'Pacto de Estado frente a la emergencia climática' }, desc: { gl: 'Unha resposta tecnolóxica á emerxencia climática. O modelo evita o desperdicio de recursos dixitais mediante a centralización do cómputo na Deputación e a reutilización de hardware nos pequenos concellos, garantindo a cohesión dixital sostible.', es: 'Una respuesta tecnológica a la emergencia climática. El modelo evita el desperdicio de recursos digitales mediante la centralización del cómputo en la Diputación y la reutilización de hardware en los pequeños ayuntamientos, garantizando la cohesión digital sostenible.' } },
    { icon: Globe, color: '#3b82f6', title: { gl: "Estratexia UE 'Apply AI'", es: "Estrategia UE 'Apply AI'" }, desc: { gl: "Un modelo exemplar para o sector público europeo baseado no principio 'AI First'. MencIA integra a intelixencia artificial no núcleo dos procesos administrativos de forma soberana, servindo como unha solución replicable para a 'caixa de ferramentas' da UE.", es: "Un modelo ejemplar para el sector público europeo basado en el principio 'AI First'. MencIA integra la inteligencia artificial en el núcleo de los procesos administrativos de forma soberana, sirviendo como una solución replicable para la 'caja de herramientas' de la UE." } },
];

export default function Alineacion({ lang }) {
    return (
        <section id="aliñacion" className="section section-narrative-dark" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Very subtle background glow */}
            <div style={{
                position: 'absolute', top: 0, right: 0, width: '800px', height: '800px',
                background: 'rgba(49,46,129,0.04)', borderRadius: '50%',
                filter: 'blur(150px)', transform: 'translate(50%, -50%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto' }}>

                {/* Section header — free-floating, no box */}
                <div className="reveal-text" style={{ marginBottom: '5rem' }}>
                    <span style={{
                        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                        textTransform: 'uppercase', color: '#cf112d', display: 'block', marginBottom: '1rem'
                    }}>
                        — {lang === 'es' ? 'Marco estratégico' : 'Marco estratéxico'}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em',
                        fontWeight: 700, color: '#f8fafc', marginBottom: '1rem'
                    }}>
                        {lang === 'es' ? 'Alineación estratégica' : 'Aliñación estratéxica'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 400, maxWidth: '44rem' }}>
                        {lang === 'es'
                            ? 'MencIA no es una iniciativa aislada, es la materialización de las grandes estrategias nacionales y europeas.'
                            : 'MencIA non é unha iniciativa illada, é a materialización das grandes estratexias nacionais e europeas.'}
                    </p>
                </div>

                {/* Top divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '0' }} />

                {/* Items — free-floating editorial grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30rem), 1fr))',
                    gap: '0'
                }}>
                    {CARDS.map(({ icon: Icon, color, title, desc }, i) => (
                        <div
                            key={i}
                            className="reveal-text"
                            style={{
                                padding: '2.5rem 2rem',
                                borderBottom: '1px solid rgba(255,255,255,0.06)',
                                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                transition: 'background 0.3s ease',
                                position: 'relative', overflow: 'hidden',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            {/* Número decorativo de fondo — texture editorial */}
                            <span style={{
                                position: 'absolute', bottom: '-0.5rem', right: '1rem',
                                fontSize: '7rem', fontWeight: 800, lineHeight: 1,
                                color: 'var(--text-muted)',
                                opacity: 0.15,
                                letterSpacing: '-0.08em', userSelect: 'none',
                                pointerEvents: 'none',
                            }}>
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Icon accent */}
                            <div style={{
                                width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                                border: `1px solid ${color}30`, color: color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: `${color}08`, marginBottom: '1.25rem'
                            }}>
                                <Icon size={20} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.05rem', fontWeight: 600, color: '#f1f5f9',
                                lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '0.75rem'
                            }}>
                                {lang === 'es' ? title.es : title.gl}
                            </h3>

                            {/* Body */}
                            <p style={{
                                color: 'var(--text-muted)', fontSize: '0.9rem',
                                lineHeight: 1.75, fontWeight: 400
                            }}>
                                {lang === 'es' ? desc.es : desc.gl}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            </div>
        </section>
    );
}
