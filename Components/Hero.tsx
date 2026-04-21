'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const wrapRef = useRef<HTMLDivElement>(null)
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 })

        // paper fold: kedua panel terbuka dari tengah
        tl.fromTo(
            leftRef.current,
            { rotateY: -90, transformOrigin: 'right center', opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        ).fromTo(
            rightRef.current,
            { rotateY: 90, transformOrigin: 'left center', opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            '<'
        )
    }, [])

    return (
        <section
            ref={wrapRef}
            style={{
                perspective: '1200px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Masthead */}
            <div style={{
                borderBottom: '3px solid #0a0a0a',
                padding: '20px 32px 14px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 10,
                    fontFamily: 'var(--font-typewriter)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 8,
                }}>
                    <span>Vol. 01 · No. 001</span>
                    <span>yourname.dev</span>
                    <span>Est. 2022</span>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #0a0a0a', marginBottom: 8 }} />

                <h1 className="serif" style={{
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    fontWeight: 900,
                    textAlign: 'center',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    marginBottom: 8,
                }}>
                    FEIVEL QUTBY
                </h1>

                <hr style={{ border: 'none', borderTop: '1px solid #0a0a0a', marginBottom: 0 }} />

                <p style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-typewriter)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#888',
                    textAlign: 'center',
                    padding: '6px 0 0',
                }}>
                    Indie Developer, Tech Mentor, Writer
                </p>
            </div>

            {/* Hero body — paper fold */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                flex: 1,
            }}>
                {/* Foto */}
                <div
                    ref={leftRef}
                    style={{
                        background: '#e8e6e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px 40px',
                    }}
                >
                    <div style={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        border: '1px solid #aaa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#aaa',
                        fontSize: 11,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                    }}>
                        Photo
                    </div>
                </div>

                {/* Divider */}
                <div style={{ background: 'rgba(0,0,0,0.15)' }} />

                {/* Bio */}
                <div
                    ref={rightRef}
                    style={{
                        padding: '60px 36px',
                        display: 'flex',
                        flexDirection: 'column' as const,
                        justifyContent: 'center',
                        gap: 20,
                    }}
                >
                    <span style={{
                        fontSize: 10,
                        fontFamily: 'var(--font-typewriter)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase' as const,
                        color: '#888',
                        borderTop: '2px solid #888',
                        paddingTop: 3,
                        display: 'inline-block',
                    }}>
                        About
                    </span>

                    <h2 className="serif" style={{
                        fontSize: 'clamp(22px, 3vw, 30px)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                    }}>
                        Tech Mentor.<br />
                        Developer.<br />
                        Based in Jakarta.
                    </h2>

                    <p style={{
                        fontSize: 13,
                        color: '#555',
                        lineHeight: 1.7,
                        maxWidth: 280,
                    }}>
                        I build fast, accessible web apps. Currently open to new opportunities.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: 20,
                        fontSize: 11,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        fontFamily: 'var(--font-typewriter)',
                        paddingTop: 12,
                        borderTop: '0.5px solid rgba(0,0,0,0.15)',
                    }}>
                        <a href="https://github.com" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>Github</a>
                        <a href="https://linkedin.com" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>LinkedIn</a>
                        <a href="mailto:you@email.com" style={{ color: '#555', textDecoration: 'none', borderBottom: '0.5px solid #aaa', paddingBottom: 1 }}>Email</a>
                    </div>
                </div>
            </div>


            <div style={{
                borderTop: '0.5px solid rgba(0,0,0,0.15)',
                fontSize: 10,
                fontFamily: 'var(--font-typewriter)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#aaa',
                textAlign: 'center',
                padding: '10px 0',
            }}>
            </div>
        </section>
    )
}