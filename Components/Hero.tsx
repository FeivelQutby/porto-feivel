'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const breakingRef = useRef<HTMLDivElement>(null)
    const headlineRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.1 })

        tl.fromTo(
            breakingRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
            .fromTo(
                headlineRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.2'
            )
            .fromTo(
                bodyRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.3'
            )
    }, [])

    return (
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Top meta bar */}
            <div style={{
                padding: '12px 32px',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-typewriter)',
                fontSize: 10,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888',
            }}>
                <span>Vol. 1 No. 1</span>
                <span>feivelqutby.dev</span>
                <span>Est. 2022</span>
            </div>

            {/* Breaking news bar */}
            <div
                ref={breakingRef}
                style={{
                    background: '#0a0a0a',
                    padding: '10px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                }}
            >
                <span style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#f5f4f0',
                    border: '1px solid #f5f4f0',
                    padding: '3px 8px',
                    whiteSpace: 'nowrap',
                }}>
                    Breaking news
                </span>
                <span style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#f5f4f0',
                    opacity: 0.7,
                }}>
                    Wednesday, April 22, 2026 · Jakarta, Indonesia
                </span>
            </div>

            {/* Masthead — headline */}
            <div
                ref={headlineRef}
                style={{
                    padding: '24px 32px 20px',
                    borderBottom: '3px solid #0a0a0a',
                }}
            >
                <hr style={{ border: 'none', borderTop: '1px solid #0a0a0a', marginBottom: 12 }} />

                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(40px, 7vw, 88px)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: '-3px',
                    color: '#0a0a0a',
                    marginBottom: 12,
                }}>
                    Tech Mentor.<br />
                    Developer.<br />
                    Based in Jakarta.
                </h1>

                <hr style={{ border: 'none', borderTop: '1px solid #0a0a0a', marginBottom: 0 }} />

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: 6,
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888',
                }}>
                    <span></span>
                    <span>Page 1 of 1</span>
                </div>
            </div>

            {/* Hero body */}
            <div
                ref={bodyRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1px 1fr',
                    flex: 1,
                    minHeight: 0,
                }}>

                {/* Foto */}
                <div
                    style={{
                        background: '#e8e6e0',
                        position: 'relative',
                        minHeight: 300,
                    }}
                >
                    <span style={{
                        position: 'absolute',
                        bottom: 16,
                        left: 20,
                        fontFamily: 'var(--font-typewriter)',
                        fontSize: 9,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#aaa',
                        zIndex: 1,
                    }}>
                        Fig. 01 — Profile
                    </span>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'hidden',
                    }}>
                        <img
                            src="/profile.jpeg"
                            alt="Feivel Qutby"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 40%',
                                filter: 'grayscale(30%) sepia(70%) contrast(1.2) brightness(0.9) saturate(0.8)',
                            }}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div style={{ background: 'rgba(0,0,0,0.15)' }} />

                {/* Bio */}
                <div
                    ref={bodyRef}
                    style={{
                        padding: '48px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 24,
                    }}
                >
                    <span style={{
                        fontFamily: 'var(--font-typewriter)',
                        fontSize: 10,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#888',
                        borderTop: '2px solid #888',
                        paddingTop: 4,
                        display: 'inline-block',
                    }}>
                        About
                    </span>

                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(22px, 2.5vw, 32px)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: '#0a0a0a',
                    }}>
                        Feivel Qutby
                    </h2>

                    <blockquote style={{
                        borderLeft: '3px solid #0a0a0a',
                        paddingLeft: 16,
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12,
                        fontStyle: 'italic',
                        color: '#444',
                        lineHeight: 1.7,
                        margin: 0,
                    }}>
                        I build clean, fast web apps.
                    </blockquote>

                    <div style={{
                        display: 'flex',
                        gap: 20,
                        fontFamily: 'var(--font-typewriter)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        paddingTop: 16,
                        borderTop: '0.5px solid rgba(0,0,0,0.15)',
                    }}>
                        <a href="https://github.com/FeivelQutby" target="_blank" rel="noreferrer" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>Github</a>
                        <a href="https://www.linkedin.com/in/feivel-qutby/" target="_blank" rel="noreferrer" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>LinkedIn</a>
                        <a href="mailto:feivelint@gmail.com" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>Email</a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid rgba(0,0,0,0.15)',
                padding: '8px 32px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <span style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#aaa',
                }}>
                </span>
                <span style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#aaa',
                }}>
                    ↓ scroll for work
                </span>
            </div>

        </section>
    )
}