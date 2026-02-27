import { Flag, Leaf, ThermometerSun, Globe } from 'lucide-react';

const CARDS = [
    { icon: Flag, color: '#eab308', border: 'border-yellow-500', shadow: 'rgba(234,179,8,0.2)', title: { gl: 'Proxecto ALIA e OpenEuroLLM', es: 'Proyecto ALIA y OpenEuroLLM' }, desc: { gl: 'MencIA contribúe ao ecosistema de modelos de linguaxe en castelán e linguas cooficiais (proxecto ALIA) e fomenta a creación de grandes modelos de linguaxe europeos de código aberto (OpenEuroLLM), impulsando a soberanía do dato.', es: 'MencIA contribuye al ecosistema de modelos de lenguaje en castellano y lenguas cooficiales (proyecto ALIA) y fomenta la creación de grandes modelos de lenguaje europeos de código abierto (OpenEuroLLM), impulsando la soberanía del dato.' } },
    { icon: Leaf, color: '#22c55e', border: 'border-green-500', shadow: 'rgba(34,197,94,0.2)', title: { gl: 'Algoritmos verdes e Green in AI', es: 'Algoritmos verdes y Green in AI' }, desc: { gl: "Aliñado co Plan nacional de algoritmos verdes. A nosa filosofía 'Green in AI' prioriza a eficiencia enerxética mediante a especialización de tarefas, usando modelos pequenos (SLM) que reducen drasticamente a carga computacional e o consumo de auga.", es: "Alineado con el Plan nacional de algoritmos verdes. Nuestra filosofía 'Green in AI' prioriza la eficiencia energética mediante la especialización de tareas, usando modelos pequeños (SLM) que reducen drásticamente la carga computacional y el consumo de agua." } },
    { icon: ThermometerSun, color: 'var(--mencia-red)', border: 'border-red', shadow: 'rgba(207,17,45,0.2)', title: { gl: 'Pacto de estado climático', es: 'Pacto de estado climático' }, desc: { gl: 'Unha resposta tecnolóxica á emerxencia climática. O modelo evita o desperdicio de recursos dixitais mediante a centralización do cómputo na Deputación e a reutilización de hardware nos pequenos concellos, garantindo a cohesión dixital sostible.', es: 'Una respuesta tecnológica a la emergencia climática. El modelo evita el desperdicio de recursos digitales mediante la centralización del cómputo en la Diputación y la reutilización de hardware en los pequeños ayuntamientos, garantizando la cohesión digital sostenible.' } },
    { icon: Globe, color: '#3b82f6', border: 'border-blue-500', shadow: 'rgba(59,130,246,0.2)', title: { gl: "Estratexia UE 'Apply AI'", es: "Estrategia UE 'Apply AI'" }, desc: { gl: "Un modelo exemplar para o sector público europeo baseado no principio 'AI First'. MencIA integra a intelixencia artificial no núcleo dos procesos administrativos de forma soberana, servindo como unha solución replicable para a 'caixa de ferramentas' da UE.", es: "Un modelo ejemplar para el sector público europeo basado en el principio 'AI First'. MencIA integra la inteligencia artificial en el núcleo de los procesos administrativos de forma soberana, sirviendo como una solución replicable para la 'caja de herramientas' de la UE." } },
];

export default function Alineacion({ lang }) {
    return (
        <section id="aliñacion" className="section section-light" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container">
                <div className="reveal-text" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                        {lang === 'es' ? 'Alineación nacional y europea' : 'Aliñación nacional e europea'}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {lang === 'es' ? 'No es una iniciativa aislada, sino la materialización de las grandes estrategias.' : 'Non é unha iniciativa illada, senón a materialización das grandes estratexias.'}
                    </p>
                </div>

                {/* Pixel Perfect cards from Landingfusionadav2 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))', gap: '2rem', maxWidth: '72rem', margin: '0 auto' }}>
                    {CARDS.map(({ icon: Icon, color, shadow, title, desc }, i) => (
                        <div key={i} className="alignment-card reveal-text" style={{ borderTop: `6px solid ${color}`, boxShadow: `0 -10px 40px -15px ${shadow}` }}>
                            <div className="icon-box" style={{ background: `${color}15`, border: `1px solid ${color}40` }}>
                                <Icon size={28} color={color} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                                {lang === 'es' ? title.es : title.gl}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 500 }}>
                                {lang === 'es' ? desc.es : desc.gl}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
