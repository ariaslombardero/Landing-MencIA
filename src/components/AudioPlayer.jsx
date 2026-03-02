import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

export default function AudioPlayer({ lang }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = new Audio('/media/bso-mencia.wav');
        audio.loop = true;
        audio.volume = 0.35;
        audioRef.current = audio;

        // Escucha el evento del hint en el Hero
        const handlePlayBso = () => {
            if (!audio.paused) return; // ya sonando
            audio.play().then(() => setIsPlaying(true)).catch(() => { });
        };
        window.addEventListener('mencia:play-bso', handlePlayBso);

        return () => {
            window.removeEventListener('mencia:play-bso', handlePlayBso);
            if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
        };
    }, []);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 100,
                display: 'flex', alignItems: 'center', gap: '0',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
        >
            {/* Expandable label */}
            <div style={{
                overflow: 'hidden',
                maxWidth: isHovered || isPlaying ? '140px' : '0px',
                opacity: isHovered || isPlaying ? 1 : 0,
                transition: 'max-width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
                whiteSpace: 'nowrap'
            }}>
                <div style={{
                    background: isPlaying ? 'rgba(207,17,45,0.15)' : 'rgba(15,23,42,0.85)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: isPlaying ? '1px solid rgba(207,17,45,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    borderRight: 'none',
                    borderRadius: '1.5rem 0 0 1.5rem',
                    padding: '0.625rem 1rem 0.625rem 1.25rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem'
                }}>
                    {/* Mini equalizer in label */}
                    {isPlaying && (
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
                            {[60, 100, 50, 80].map((h, i) => (
                                <span key={i} style={{
                                    width: '2.5px', background: '#cf112d', borderRadius: '1px',
                                    height: `${h}%`,
                                    animation: `eqBounce 0.6s ${i * 0.15}s ease-in-out infinite alternate`
                                }}></span>
                            ))}
                        </div>
                    )}
                    <span style={{
                        fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: isPlaying ? '#cf112d' : 'rgba(255,255,255,0.7)'
                    }}>
                        {isPlaying ? 'BSO ♪' : 'BSO'}
                    </span>
                </div>
            </div>

            {/* Main circular button */}
            <button
                onClick={togglePlay}
                aria-label="Toggle Music"
                title={isPlaying
                    ? (lang === 'en' ? 'Pause BSO' : (lang === 'es' ? 'Pausar BSO' : 'Pausar BSO'))
                    : (lang === 'en' ? 'Play immersive BSO' : (lang === 'es' ? 'Reproducir BSO inmersiva' : 'Reproducir BSO inmersiva'))}
                style={{
                    width: '3.25rem', height: '3.25rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isPlaying
                        ? 'linear-gradient(135deg, rgba(207,17,45,0.3), rgba(207,17,45,0.15))'
                        : 'rgba(15,23,42,0.85)',
                    border: isPlaying
                        ? '1px solid rgba(207,17,45,0.5)'
                        : '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    color: isPlaying ? '#fff' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isPlaying
                        ? '0 0 25px rgba(207,17,45,0.3), 0 4px 15px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.4)',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    flexShrink: 0
                }}
            >
                {isPlaying ? (
                    <Pause size={20} />
                ) : (
                    <Music size={20} />
                )}
            </button>

            <style>{`
                @keyframes eqBounce {
                    0% { height: 25%; }
                    100% { height: 100%; }
                }
            `}</style>
        </div>
    );
}
