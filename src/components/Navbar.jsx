import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
    { id: 'dilema', gl: 'O contexto', es: 'El contexto' },
    { id: 'solucion', gl: 'A estratexia', es: 'La estrategia' },
    { id: 'ferramentas', gl: 'Ferramentas', es: 'Herramientas' },
    { id: 'aliñacion', gl: 'Aliñación', es: 'Alineación' },
    { id: 'hoja-ruta', gl: 'Folla de ruta', es: 'Hoja de ruta' },
    { id: 'archivos', gl: 'Arquivos', es: 'Archivos' },
    { id: 'simulaciones', gl: 'Laboratorio', es: 'Laboratorio' },
];

export default function Navbar({ lang, setLang, lightMode, toggleLightMode }) {
    const [activeSection, setActiveSection] = useState('');
    const [themeTooltip, setThemeTooltip] = useState(false);
    const [langTooltip, setLangTooltip] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
        let current = '';
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200) current = section.id;
        }
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Auto-hide tooltips after showing
    useEffect(() => {
        if (themeTooltip) {
            const timer = setTimeout(() => setThemeTooltip(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [themeTooltip]);

    useEffect(() => {
        if (langTooltip) {
            const timer = setTimeout(() => setLangTooltip(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [langTooltip]);

    return (
        <nav className="navbar" id="navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} aria-label="Inicio">
                    {/* Dark mode: transparent PNG with white/red letters */}
                    {!lightMode && (
                        <img
                            src="/logos/mencia-logo-trans-dark.png"
                            alt="MencIA"
                            style={{
                                height: '54px',
                                width: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                    {/* Light mode: transparent PNG with dark/red letters */}
                    {lightMode && (
                        <img
                            src="/logos/mencia-logo-trans-light.png"
                            alt="MencIA"
                            style={{
                                height: '54px',
                                width: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="nav-links" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link${activeSection === item.id ? ' active-nav' : ''}`}
                    >
                        {lang === 'es' ? item.es : item.gl}
                    </a>
                ))}
            </div>

            {/* Right Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Theme Toggle with tooltip */}
                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setThemeTooltip(true)}
                    onMouseLeave={() => setThemeTooltip(false)}
                >
                    <button className="theme-toggle" onClick={toggleLightMode} aria-label="Cambiar tema">
                        {lightMode ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                    {/* Tooltip */}
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '8px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(0,0,0,0.85)',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        opacity: themeTooltip ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}>
                        {lightMode
                            ? (lang === 'es' ? 'Modo oscuro' : 'Modo escuro')
                            : (lang === 'es' ? 'Modo claro' : 'Modo claro')
                        }
                    </div>
                </div>

                {/* Language Switcher with tooltip */}
                <div
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '0.75rem', borderLeft: '1px solid var(--mencia-border)' }}
                    onMouseEnter={() => setLangTooltip(true)}
                    onMouseLeave={() => setLangTooltip(false)}
                >
                    <button
                        className={`lang-btn${lang === 'gl' ? ' active' : ''}`}
                        onClick={() => setLang('gl')}
                    >
                        GAL
                    </button>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>/</span>
                    <button
                        className={`lang-btn${lang === 'es' ? ' active' : ''}`}
                        onClick={() => setLang('es')}
                    >
                        ES
                    </button>
                    {/* Tooltip */}
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '8px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(0,0,0,0.85)',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        opacity: langTooltip ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}>
                        {lang === 'es'
                            ? (lang === 'es' ? 'Cambiar idioma' : 'Cambiar idioma')
                            : 'Cambiar idioma'
                        }
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation"
                    style={{ position: 'relative', zIndex: 110 }}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: lightMode ? 'rgba(255, 255, 255, 0.98)' : 'rgba(15, 23, 42, 0.98)',
                zIndex: 105,
                display: mobileMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2.5rem',
                opacity: mobileMenuOpen ? 1 : 0,
                transition: 'opacity 0.3s ease',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
            }}>
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link`}
                        style={{
                            fontSize: '1.75rem',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            color: activeSection === item.id
                                ? 'var(--mencia-red)'
                                : 'var(--text-primary)'
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {lang === 'es' ? item.es : item.gl}
                    </a>
                ))}
            </div>
        </nav>
    );
}
