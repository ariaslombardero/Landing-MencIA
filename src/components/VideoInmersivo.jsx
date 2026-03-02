import { useState, useRef, useEffect } from 'react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

export default function VideoInmersivo({ lang }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [pulseScale, setPulseScale] = useState(1);
    const videoRef = useRef(null);
    const previewRef = useRef(null);

    // Gentle pulsing animation for the play button
    useEffect(() => {
        if (isPlaying) return;
        let frame;
        const animate = () => {
            const t = Date.now() / 1000;
            setPulseScale(1 + Math.sin(t * 2) * 0.06);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [isPlaying]);

    const openPlayer = () => {
        setIsPlaying(true);
        document.body.style.overflow = 'hidden';
    };

    const closePlayer = () => {
        if (videoRef.current) videoRef.current.pause();
        setIsPlaying(false);
        document.body.style.overflow = 'auto';
    };

    const toggleMute = () => {
        if (videoRef.current) videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // ─── FULLSCREEN CINEMATIC PLAYER ───
    if (isPlaying) {
        return (
            <div style={{
                position: 'fixed', inset: 0, zIndex: 200,
                background: 'rgba(0,0,0,0.97)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: 'fadeIn 0.4s ease'
            }}>
                {/* Ambient glow behind video */}
                <div style={{
                    position: 'absolute', width: '120%', height: '120%',
                    background: 'radial-gradient(ellipse at center, rgba(207,17,45,0.08) 0%, transparent 60%)',
                    pointerEvents: 'none'
                }}></div>

                {/* Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    style={{
                        maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain',
                        borderRadius: '1rem', boxShadow: '0 0 80px rgba(207,17,45,0.15), 0 40px 80px rgba(0,0,0,0.8)',
                        position: 'relative', zIndex: 5
                    }}
                    src="/media/mencia-bg.mp4"
                    onEnded={closePlayer}
                />

                {/* Controls overlay */}
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 210, display: 'flex', gap: '0.75rem' }}>
                    <button onClick={toggleMute} aria-label="Toggle mute" style={{
                        padding: '0.875rem', background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '50%', color: '#fff', cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}>
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button onClick={closePlayer} aria-label="Close video" style={{
                        padding: '0.875rem', background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '50%', color: '#fff', cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}>
                        <X size={20} />
                    </button>
                </div>

                {/* Bottom branding */}
                <div style={{
                    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                    zIndex: 210, display: 'flex', alignItems: 'center', gap: '0.75rem',
                    opacity: 0.4
                }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        MencIA • {lang === 'es' ? 'Experiencia Audiovisual' : 'Experiencia Audiovisual'}
                    </span>
                </div>
            </div>
        );
    }

    // ─── INLINE CINEMATIC PREVIEW CARD ───
    return (
        <section style={{ padding: '2rem 1.5rem 6rem', position: 'relative' }}>
            {/* Ambient background glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '70%', height: '120%',
                background: 'radial-gradient(ellipse at center, rgba(207,17,45,0.06) 0%, transparent 70%)',
                pointerEvents: 'none', zIndex: 0
            }}></div>

            <div
                onClick={openPlayer}
                style={{
                    maxWidth: '64rem', margin: '0 auto',
                    borderRadius: '1.5rem', overflow: 'hidden',
                    position: 'relative', aspectRatio: '16/9',
                    cursor: 'pointer', zIndex: 1,
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px rgba(207,17,45,0.1)',
                    transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 0 0 1px rgba(207,17,45,0.2), 0 50px 100px -20px rgba(0,0,0,0.7), 0 0 80px -10px rgba(207,17,45,0.2)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px rgba(207,17,45,0.1)';
                }}
            >
                {/* Video preview (frozen frame with blur) */}
                <video
                    ref={previewRef}
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        position: 'absolute', inset: 0
                    }}
                    src="/media/mencia-bg.mp4"
                    muted playsInline preload="metadata"
                />

                {/* Dark cinematic overlay */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.8) 100%)'
                }}></div>

                {/* Vignette */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 3,
                    boxShadow: 'inset 0 0 120px rgba(0,0,0,0.6)',
                    pointerEvents: 'none'
                }}></div>

                {/* Top corner branding */}
                <div style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 8,
                    display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.5
                }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cf112d' }}></div>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        MencIA
                    </span>
                </div>

                {/* Center content — solo el play button */}
                <div style={{
                    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', zIndex: 10,
                }}>
                    {/* Pulsing play button with glass effect */}
                    <div style={{ position: 'relative' }}>
                        {/* Outer pulse ring */}
                        <div style={{
                            position: 'absolute', inset: '-1rem',
                            borderRadius: '50%', border: '1px solid rgba(207,17,45,0.3)',
                            transform: `scale(${pulseScale})`,
                            opacity: 2 - pulseScale,
                            transition: 'transform 0.1s linear',
                            pointerEvents: 'none'
                        }}></div>
                        {/* Second pulse ring */}
                        <div style={{
                            position: 'absolute', inset: '-2rem',
                            borderRadius: '50%', border: '1px solid rgba(207,17,45,0.15)',
                            transform: `scale(${1 + (pulseScale - 1) * 1.5})`,
                            opacity: (2 - pulseScale) * 0.5,
                            transition: 'transform 0.1s linear',
                            pointerEvents: 'none'
                        }}></div>

                        {/* Main button */}
                        <div style={{
                            width: '5.5rem', height: '5.5rem', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 40px rgba(207,17,45,0.2), inset 0 0 30px rgba(255,255,255,0.03)',
                            transition: 'all 0.4s ease'
                        }}>
                            <Play size={28} fill="rgba(255,255,255,0.9)" color="rgba(255,255,255,0.9)" style={{ marginLeft: '4px' }} />
                        </div>
                    </div>
                </div>

                {/* Title — inferior izquierda sobre el gradiente oscuro */}
                <div style={{
                    position: 'absolute', bottom: '4.5rem', left: '2rem', zIndex: 10,
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', fontWeight: 200, color: '#fff',
                        letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.6rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.8)'
                    }}>
                        {lang === 'es' ? 'La visión de MencIA' : 'A visión de MencIA'}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.4)' }}></div>
                        <span style={{
                            fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                            textTransform: 'uppercase', letterSpacing: '0.2em'
                        }}>
                            {lang === 'es' ? 'Reproducir' : 'Reproducir'}
                        </span>
                    </div>
                </div>

                {/* Bottom gradient fade with logos */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 8,
                    padding: '2rem 1.5rem 1.25rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
                }}>
                    <img src="/logos/mencia-logo-trans-dark.png" alt="MencIA" style={{ height: '1.5rem', opacity: 0.4 }} />
                    <img src="/logos/mencia-banner-red.jpg" alt="Deputación de Lugo" style={{ height: '1.5rem', opacity: 0.4, borderRadius: '3px' }} />
                </div>
            </div>

            {/* CSS keyframes injected once */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </section>
    );
}
