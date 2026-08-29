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
        <section
            id="hero"
            className="snap-section"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >

            {/* Top meta bar — nameplate */}
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

            {/* Breaking news bar — now doubles as the "Inside This Issue" index / nav */}
            <div
                ref={breakingRef}
                style={{
                    background: '#0a0a0a',
                    padding: '10px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    flexWrap: 'wrap',
                }}
            >
                <span className="issue-label">Inside This Issue</span>

                <nav style={{ display: 'flex', gap: 24 }}>
                    <a href="#work" className="issue-link">Selected Work →</a>
                    <a href="#contact" className="issue-link">Get In Touch →</a>
                </nav>
            </div>

            {/* Masthead — byline, headline, deck */}
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
                    fontSize: 'clamp(40px, 7vw, 64px)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: '0px',
                    color: '#0a0a0a',
                    marginBottom: 16,
                }}>
                    DEVELOPER.<br />
                    TECH MENTOR.<br />
                    BASED IN JAKARTA.
                </h1>

                {/* Deck — the subhead that bridges headline to bio */}
                {/* <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(13px, 1.5vw, 12px)',
                    color: '#444',
                    lineHeight: 1.6,
                    maxWidth: 640,
                    marginBottom: 16,
                }}>
                    Reporting live from the intersection of code and design — turning
                    ambiguous problems into interfaces people actually enjoy using.
                </p> */}

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
                <div className="photo-frame"
                    style={{
                        background: '#e8e6e0',
                        position: 'relative',
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
                        left: 10,
                        overflow: 'hidden',
                    }}>
                        <img
                            src="/ppkoran.jpeg"
                            alt="Profile Image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 40%',
                                filter: 'grayscale(90%) sepia(35%) contrast(1.2) brightness(0.8)',
                            }}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div style={{ background: 'rgba(0,0,0,0.15)' }} />

                {/* Bio */}
                <div
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
                        Every project taught me something I didn't know I needed.
                    </blockquote>

                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="gazette-btn">
                        Download the Gazette (Résumé) ↓
                    </a>

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
                <span></span>
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