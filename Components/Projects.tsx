'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: '01',
        title: 'Project Title One',
        desc: 'Short description. What it does, what you built it with.',
        tags: ['Next.js', 'Postgres'],
        link: '#',
    },
    {
        id: '02',
        title: 'Project Title Two',
        desc: 'Short description. What it does, what you built it with.',
        tags: ['React', 'Supabase'],
        link: '#',
    },
    {
        id: '03',
        title: 'Project Title Three',
        desc: 'Short description. What it does, what you built it with.',
        tags: ['Node.js', 'Docker'],
        link: '#',
    },
]

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const colRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        colRefs.current.forEach((col, i) => {
            if (!col) return
            gsap.fromTo(
                col,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: {
                        trigger: col,
                        start: 'top 85%',
                    },
                }
            )

            // hover effect
            const onEnter = () => gsap.to(col, { y: -4, duration: 0.3, ease: 'power2.out' })
            const onLeave = () => gsap.to(col, { y: 0, duration: 0.3, ease: 'power2.out' })
            col.addEventListener('mouseenter', onEnter)
            col.addEventListener('mouseleave', onLeave)
        })
    }, [])

    return (
        <section ref={sectionRef} style={{ borderTop: '3px solid #0a0a0a' }}>

            {/* Section header */}
            <div style={{
                padding: '20px 32px 16px',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
            }}>
                <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                }}>
                    Selected Work
                </span>
                <span style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: '#888',
                }}>
                    {projects.length} projects
                </span>
            </div>

            {/* Columns */}
            <div
                className="projects-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    borderBottom: '1px solid rgba(0,0,0,0.15)',
                }}>
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        ref={el => { colRefs.current[i] = el }}
                        style={{
                            padding: '28px',
                            borderRight: i < projects.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                            display: 'flex',
                            flexDirection: 'column' as const,
                            gap: 14,
                            cursor: 'none',
                        }}
                    >
                        {/* Image */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            background: '#e2e0da',
                            borderRadius: 2,
                            overflow: 'hidden',
                            position: 'relative' as const,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* Grid lines biar keliatan kayak layout koran */}
                            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15 }}>
                                <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0a0a0a" strokeWidth="0.5" />
                            </svg>
                            <span style={{
                                fontFamily: 'var(--font-typewriter)',
                                fontSize: 9,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase' as const,
                                color: '#aaa',
                                position: 'relative' as const,
                            }}>
                                Preview
                            </span>
                        </div>

                        {/* Number */}
                        <span style={{
                            fontFamily: 'var(--font-typewriter)',
                            fontSize: 10,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase' as const,
                            color: '#888',
                            borderTop: '1.5px solid #888',
                            paddingTop: 4,
                            display: 'inline-block',
                        }}>
                            No. {project.id}
                        </span>

                        {/* Title */}
                        <h3 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 20,
                            fontWeight: 700,
                            lineHeight: 1.2,
                            color: '#0a0a0a',
                        }}>
                            {project.title}
                        </h3>

                        {/* Desc */}
                        <p style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 11,
                            color: '#666',
                            lineHeight: 1.7,
                            flex: 1,
                        }}>
                            {project.desc}
                        </p>

                        {/* Tags + link */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 12,
                            borderTop: '0.5px solid rgba(0,0,0,0.12)',
                        }}>
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontFamily: 'var(--font-typewriter)',
                                        fontSize: 9,
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase' as const,
                                        color: '#888',
                                        border: '0.5px solid rgba(0,0,0,0.2)',
                                        padding: '2px 6px',
                                        borderRadius: 2,
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} style={{
                                fontFamily: 'var(--font-typewriter)',
                                fontSize: 10,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase' as const,
                                color: '#0a0a0a',
                                textDecoration: 'none',
                                borderBottom: '0.5px solid #0a0a0a',
                                paddingBottom: 1,
                            }}>
                                View →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}