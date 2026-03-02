import { Download, BookOpen, Layers, ExternalLink } from 'lucide-react';

export default function ArchivosDesclasificados({ lang }) {
    const archivos = [
        {
            id: 'presentacion',
            title: lang === 'es' ? 'Dossier estratégico' : 'Dossier estratéxico',
            desc: lang === 'es'
                ? 'La presentación completa de la arquitectura y la visión del proyecto MencIA. El soporte visual detallado que sirve como base a nuestra experiencia inmersiva, perfecto para su análisis en profundidad.'
                : 'A presentación completa da arquitectura e a visión do proxecto MencIA. O soporte visual detallado que serve como base á nosa experiencia inmersiva, perfecto para a súa análise en profundidade.',
            icon: Layers,
            accentColor: '#ef4444',
            file: '/docs/dossier-tecnico.pdf',
            pages: '24',
            label: lang === 'es' ? 'DOSSIER' : 'DOSSIER',
        },
        {
            id: 'comic',
            title: lang === 'es' ? 'El cómic de MencIA' : 'O cómic de MencIA',
            desc: lang === 'es'
                ? 'Historia ilustrada sobre digitalización pública y sus desafíos. Un relato visual que explica el problema del feudalismo digital y la propuesta soberana.'
                : 'Historia ilustrada sobre dixitalización pública e os seus desafíos. Un relato visual que explica o problema do feudalismo dixital e a proposta soberana.',
            icon: BookOpen,
            accentColor: '#3b82f6',
            file: '/docs/comic-mencia.pdf',
            pages: '8',
            label: lang === 'es' ? 'CÓMIC' : 'CÓMIC',
        },
        {
            id: 'paper',
            title: lang === 'es' ? 'Publicación científica' : 'Publicación científica',
            desc: lang === 'es'
                ? <>El artículo de investigación original que fundamenta la arquitectura técnica de MencIA: ejecución local de modelos de lenguaje de código abierto para entidades de gobierno.<br /><br /><span style={{ opacity: 0.7, fontSize: '0.8em', fontStyle: 'italic' }}>Referencia: Rivera-Capón, P., Arias-Lombardero, J.A., & Fariña-Verea, N. (2025). Gobernanza algorítmica local: diseño e implementación de un stack de IA soberana en código abierto para entidades supramunicipales. Revista de Internet, Derecho y Política (IDP), (43). UOC.</span></>
                : <>O artigo de investigación orixinal que fundamenta a arquitectura técnica de MencIA: execución local de modelos de linguaxe de código aberto para entidades de goberno.<br /><br /><span style={{ opacity: 0.7, fontSize: '0.8em', fontStyle: 'italic' }}>Referencia: Rivera-Capón, P., Arias-Lombardero, J.A., & Fariña-Verea, N. (2025). Gobernanza algorítmica local: deseño e implementación dun stack de IA soberana en código aberto para entidades supramunicipais. Revista de Internet, Derecho y Política (IDP), (43). UOC.</span></>,
            icon: BookOpen,
            accentColor: '#10b981',
            file: 'https://doi.org/10.7238/idp.v0i43.9800300',
            pages: '15',
            label: lang === 'es' ? 'PAPER ACADÉMICO' : 'PAPER ACADÉMICO',
        },
    ];

    return (
        <section id="archivos" className="section section-narrative-dark" style={{
            paddingTop: '8rem', paddingBottom: '8rem',
            overflow: 'hidden', position: 'relative'
        }}>
            {/* Ambient glow — very subtle */}
            <div style={{
                position: 'absolute', top: '40%', left: '50%', width: '700px', height: '500px',
                background: 'radial-gradient(ellipse, rgba(207,17,45,0.03) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)', pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto' }}>

                {/* Header */}
                <div className="reveal-text" style={{ marginBottom: '5rem' }}>
                    <span style={{
                        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                        textTransform: 'uppercase', color: '#cf112d', display: 'block', marginBottom: '1rem'
                    }}>
                        — {lang === 'es' ? 'Documentación' : 'Documentación'}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em',
                        fontWeight: 700, color: '#f8fafc', marginBottom: '1rem'
                    }}>
                        {lang === 'es' ? 'Archivos desclasificados' : 'Arquivos desclasificados'}
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: 400, maxWidth: '40rem' }}>
                        {lang === 'es'
                            ? 'Material estratégico y divulgativo de MencIA. De dominio público.'
                            : 'Material estratéxico e divulgativo de MencIA. De dominio público.'
                        }
                    </p>
                </div>

                {/* Horizontal rule */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '0' }} />

                {/* Document list — flat editorial style */}
                <div>
                    {archivos.map((archivo, i) => {
                        const Icon = archivo.icon;
                        return (
                            <a
                                key={archivo.id}
                                href={archivo.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reveal-text"
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                onMouseEnter={e => {
                                    e.currentTarget.querySelector('.doc-row').style.background = 'rgba(255,255,255,0.02)';
                                    e.currentTarget.querySelector('.doc-number').style.color = archivo.accentColor;
                                    e.currentTarget.querySelector('.doc-download').style.opacity = '1';
                                    e.currentTarget.querySelector('.doc-download').style.color = archivo.accentColor;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.querySelector('.doc-row').style.background = 'transparent';
                                    e.currentTarget.querySelector('.doc-number').style.color = 'rgba(255,255,255,0.15)';
                                    e.currentTarget.querySelector('.doc-download').style.opacity = '0.5';
                                    e.currentTarget.querySelector('.doc-download').style.color = '#64748b';
                                }}
                            >
                                <div
                                    className="doc-row"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '3rem 3.5rem 1fr auto',
                                        alignItems: 'center',
                                        gap: '2rem',
                                        padding: '2rem 1.5rem',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        transition: 'background 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {/* Index number */}
                                    <span
                                        className="doc-number"
                                        style={{
                                            fontSize: '1.75rem', fontWeight: 800,
                                            color: 'rgba(255,255,255,0.15)',
                                            fontVariantNumeric: 'tabular-nums',
                                            lineHeight: 1, transition: 'color 0.3s ease',
                                            letterSpacing: '-0.04em'
                                        }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Icon */}
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: `${archivo.accentColor}12`,
                                        border: `1px solid ${archivo.accentColor}25`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon size={20} color={archivo.accentColor} strokeWidth={1.5} />
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                                            <span style={{
                                                fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.18em',
                                                textTransform: 'uppercase', color: archivo.accentColor
                                            }}>
                                                {archivo.label}
                                            </span>
                                            <span style={{ fontSize: '0.6rem', color: '#475569', letterSpacing: '0.1em' }}>
                                                {archivo.pages} {lang === 'es' ? 'págs.' : 'páxs.'}
                                            </span>
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.125rem', fontWeight: 600, color: '#f1f5f9',
                                            letterSpacing: '-0.02em', marginBottom: '0.35rem', lineHeight: 1.3
                                        }}>
                                            {archivo.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.875rem', color: '#64748b',
                                            lineHeight: 1.6, fontWeight: 400, maxWidth: '52rem'
                                        }}>
                                            {archivo.desc}
                                        </p>
                                    </div>

                                    {/* Download CTA — pill button siempre visible */}
                                    <div
                                        className="doc-download"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                                            letterSpacing: '0.12em', color: archivo.accentColor,
                                            border: `1px solid ${archivo.accentColor}35`,
                                            borderRadius: '9999px',
                                            padding: '0.45rem 0.9rem',
                                            background: `${archivo.accentColor}08`,
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap', flexShrink: 0,
                                            opacity: 0.7,
                                        }}
                                    >
                                        <Download size={13} />
                                        <span>{lang === 'es' ? 'Descargar' : 'Descargar'}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Footer note */}
                <div style={{
                    marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                    color: '#334155', fontSize: '0.75rem'
                }}>
                    <ExternalLink size={12} />
                    <span>{lang === 'es' ? 'Documentos de dominio público. Distribución libre.' : 'Documentos de dominio público. Distribución libre.'}</span>
                </div>
            </div>
        </section>
    );
}
