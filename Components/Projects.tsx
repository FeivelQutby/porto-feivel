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
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                }}>
                    Selected Work
                </span>
                <span style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-typewriter)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888',
                }}>
                    {projects.length} projects
                </span>
            </div>

            {/* Columns */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
            }}>
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        ref={el => { colRefs.current[i] = el }}
                        style={{
                            padding: '24px 28px',
                            borderRight: i < projects.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14,
                        }}
                    >
                        {/* Image placeholder */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            background: '#e8e6e0',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 10,
                            fontFamily: 'var(--font-typewriter)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#aaa',
                        }}>
                            Preview
                        </div>

                        {/* Project number */}
                        <span style={{
                            fontSize: 10,
                            fontFamily: 'var(--font-typewriter)',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#888',
                            borderTop: '1.5px solid #888',
                            paddingTop: 3,
                            display: 'inline-block',
                        }}>
                            No. {project.id}
                        </span>

                        {/* Title */}
                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 18,
                            fontWeight: 700,
                            lineHeight: 1.2,
                            color: '#0a0a0a',
                        }}>
                            {project.title}
                        </h3>

                        {/* Desc */}
                        <p style={{
                            fontSize: 12,
                            color: '#666',
                            lineHeight: 1.65,
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
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: 10,
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
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
                                fontSize: 10,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
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