import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Menu, X, Globe, Check } from 'lucide-react';

const NAV_ITEMS = [
    { id: 'dilema', gl: 'O contexto', es: 'El contexto', en: 'Context' },
    { id: 'solucion', gl: 'A estratexia', es: 'La estrategia', en: 'Strategy' },
    { id: 'ferramentas', gl: 'Ferramentas', es: 'Herramientas', en: 'Tools' },
    { id: 'aliñacion', gl: 'Aliñación', es: 'Alineación', en: 'Alignment' },
    { id: 'hoja-ruta', gl: 'Folla de ruta', es: 'Hoja de ruta', en: 'Roadmap' },
    { id: 'archivos', gl: 'Arquivos', es: 'Archivos', en: 'Files' },
    { id: 'simulaciones', gl: 'Laboratorio', es: 'Laboratorio', en: 'Laboratory' },
];

export default function Navbar({ lang, setLang, lightMode, toggleLightMode }) {
    const [activeSection, setActiveSection] = useState('');
    const [themeTooltip, setThemeTooltip] = useState(false);
    const [langTooltip, setLangTooltip] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
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
                        {lang === 'en' ? item.en : (lang === 'es' ? item.es : item.gl)}
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
                            ? (lang === 'en' ? 'Dark mode' : (lang === 'es' ? 'Modo oscuro' : 'Modo escuro'))
                            : (lang === 'en' ? 'Light mode' : (lang === 'es' ? 'Modo claro' : 'Modo claro'))
                        }
                    </div>
                </div>

                {/* Language Switcher Dropdown */}
                <div
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', borderLeft: '1px solid var(--mencia-border)' }}
                    onMouseEnter={() => { setLangTooltip(true); setLangMenuOpen(true); }}
                    onMouseLeave={() => { setLangTooltip(false); setLangMenuOpen(false); }}
                >
                    <button
                        className="theme-toggle"
                        aria-label="Cambiar idioma"
                        onClick={(e) => {
                            e.preventDefault();
                            setLangMenuOpen(!langMenuOpen);
                        }}
                    >
                        <Globe size={18} />
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
                        opacity: langTooltip && !langMenuOpen ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}>
                        {lang === 'en'
                            ? 'Change language'
                            : (lang === 'es' ? 'Cambiar idioma' : 'Cambiar idioma')
                        }
                    </div>

                    {/* Menu Dropdown */}
                    <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 5px)',
                        right: 0,
                        background: lightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: lightMode ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        padding: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '130px',
                        opacity: langMenuOpen ? 1 : 0,
                        visibility: langMenuOpen ? 'visible' : 'hidden',
                        transform: langMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                        zIndex: 110,
                    }}>
                        <button
                            onClick={() => { setLang('gl'); setLangMenuOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px',
                                background: 'transparent', border: 'none', cursor: 'pointer',
                                color: lang === 'gl' ? 'var(--mencia-red)' : 'var(--text-primary)',
                                fontWeight: lang === 'gl' ? 600 : 400,
                                fontSize: '0.875rem', textAlign: 'left',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = lightMode ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            Galego {lang === 'gl' && <Check size={14} color="var(--mencia-red)" />}
                        </button>
                        <button
                            onClick={() => { setLang('es'); setLangMenuOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px',
                                background: 'transparent', border: 'none', cursor: 'pointer',
                                color: lang === 'es' ? 'var(--mencia-red)' : 'var(--text-primary)',
                                fontWeight: lang === 'es' ? 600 : 400,
                                fontSize: '0.875rem', textAlign: 'left',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = lightMode ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            Español {lang === 'es' && <Check size={14} color="var(--mencia-red)" />}
                        </button>
                        <button
                            onClick={() => { setLang('en'); setLangMenuOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px',
                                background: 'transparent', border: 'none', cursor: 'pointer',
                                color: lang === 'en' ? 'var(--mencia-red)' : 'var(--text-primary)',
                                fontWeight: lang === 'en' ? 600 : 400,
                                fontSize: '0.875rem', textAlign: 'left',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = lightMode ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            English {lang === 'en' && <Check size={14} color="var(--mencia-red)" />}
                        </button>
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
                        {lang === 'en' ? item.en : (lang === 'es' ? item.es : item.gl)}
                    </a>
                ))}
            </div>
        </nav>
    );
}
