'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: '01',
        title: 'Project Title One',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        tags: ['Next.js', 'Postgres'],
        link: '#',
        year: '2024',
    },
    {
        id: '02',
        title: 'Project Title Two',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        tags: ['React', 'Supabase'],
        link: '#',
        year: '2024',
    },
    {
        id: '03',
        title: 'Project Title Three',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2023',
    },
    {
        id: '04',
        title: 'Project Title Four',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2023',
    },
    {
        id: '05',
        title: 'Project Title Five',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2022',
    },
]

const stack = [
    { category: 'Languages', items: ['JavaScript', 'Python', 'C', 'Java', 'Swift'] },
    { category: 'Frameworks', items: ['Next.js', 'React Native', 'Node.js', 'SwiftUI', 'Phaser 3'] },
    { category: 'Tools', items: ['VS Code', 'Git'] },
]

const ads = [
    {
        label: 'Notice',
        headline: 'Available for Hire',
        body: 'Open to full-time roles & freelance projects.',
        cta: 'hello@feivel.dev',
        href: 'mailto:hello@feivel.dev',
    },
    {
        label: 'Services',
        headline: 'Tech Mentoring',
        body: "Need guidance on your project or career? Let's talk.",
        cta: 'Book a session →',
        href: 'mailto:hello@feivel.dev',
    },
    {
        label: 'Classified',
        headline: 'Need a Website?',
        body: 'Fast, clean, and built to last. No templates.',
        cta: 'Get in touch →',
        href: 'mailto:hello@feivel.dev',
    },
]

// Layout pattern per row — berulang
// 'lead' = span 2 col + gambar besar, 'secondary' = 1 col teks only
// Row 1: lead + secondary
// Row 2: secondary + secondary + secondary  
// Row 3: lead + secondary
// dst

function getLayout(index: number): 'lead' | 'secondary' {
    const pattern = ['lead', 'secondary', 'secondary', 'secondary', 'secondary', 'lead', 'secondary', 'secondary']
    return pattern[index % pattern.length] as 'lead' | 'secondary'
}

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const rowRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        rowRefs.current.forEach((row, i) => {
            if (!row) return
            gsap.set(row, { opacity: 0, y: 30 })
            ScrollTrigger.create({
                trigger: row,
                start: 'top 88%',
                onEnter: () => {
                    gsap.to(row, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        delay: i * 0.08,
                    })
                },
                once: true,
            })
        })
        return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
    }, [])

    // Group projects into rows: first row = 1 lead + 1 secondary, rest = 3 secondary per row
    const rows: { type: 'mixed' | 'triple', projects: typeof projects }[] = []
    let i = 0
    // Row 1: lead (idx 0) + secondary (idx 1)
    if (projects.length >= 1) {
        rows.push({ type: 'mixed', projects: projects.slice(0, Math.min(2, projects.length)) })
        i = 2
    }
    // remaining rows: 3 per row
    while (i < projects.length) {
        rows.push({ type: 'triple', projects: projects.slice(i, i + 3) })
        i += 3
    }

    return (
        <section id="work" className="snap-section" ref={sectionRef} style={{ borderTop: '3px solid #0a0a0a' }}>

            {/* Header */}
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
                    textTransform: 'uppercase',
                    color: '#888',
                }}>
                    {projects.length} projects
                </span>
            </div>

            {/* Main grid — articles + sidebar */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 200px',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
            }}>

                {/* Articles */}
                <div>
                    {rows.map((row, ri) => (
                        <div
                            key={ri}
                            ref={el => { rowRefs.current[ri] = el }}
                            style={{
                                borderBottom: ri < rows.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                            }}
                        >
                            {row.type === 'mixed' ? (
                                // Row 1: lead story (2/3) + secondary (1/3)
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 1px 1fr',
                                }}>
                                    {/* Lead — gambar + headline besar */}
                                    {row.projects[0] && (
                                        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                            {/* Byline */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{
                                                    fontFamily: 'var(--font-typewriter)',
                                                    fontSize: 9,
                                                    letterSpacing: '0.14em',
                                                    textTransform: 'uppercase',
                                                    color: '#888',
                                                    borderTop: '1.5px solid #888',
                                                    paddingTop: 3,
                                                    display: 'inline-block',
                                                }}>
                                                    No. {row.projects[0].id} · {row.projects[0].year}
                                                </span>
                                                <div style={{ display: 'flex', gap: 4 }}>
                                                    {row.projects[0].tags.map(tag => (
                                                        <span key={tag} style={{
                                                            fontFamily: 'var(--font-typewriter)',
                                                            fontSize: 8,
                                                            letterSpacing: '0.06em',
                                                            textTransform: 'uppercase',
                                                            color: '#888',
                                                            border: '0.5px solid rgba(0,0,0,0.2)',
                                                            padding: '2px 5px',
                                                        }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Image */}
                                            <div style={{
                                                width: '100%',
                                                aspectRatio: '3/2',
                                                background: '#e2e0da',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.12 }}>
                                                    <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                    <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                </svg>
                                                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', position: 'relative' }}>Preview</span>
                                            </div>

                                            {/* Caption */}
                                            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: 9, color: '#aaa', letterSpacing: '0.06em' }}>
                                                Fig. {row.projects[0].id} — {row.projects[0].title}
                                            </span>

                                            {/* Headline */}
                                            <h3 style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: 26,
                                                fontWeight: 900,
                                                lineHeight: 1.1,
                                                letterSpacing: '-0.5px',
                                                color: '#0a0a0a',
                                            }}>
                                                {row.projects[0].title}
                                            </h3>

                                            {/* Body — 2 kolom teks kayak koran */}
                                            <p style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 11,
                                                color: '#444',
                                                lineHeight: 1.75,
                                                columns: 2,
                                                columnGap: 20,
                                            }}>
                                                {row.projects[0].desc}
                                            </p>

                                            <a href={row.projects[0].link} style={{
                                                fontFamily: 'var(--font-typewriter)',
                                                fontSize: 10,
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: '#0a0a0a',
                                                textDecoration: 'none',
                                                borderBottom: '0.5px solid #0a0a0a',
                                                paddingBottom: 1,
                                                alignSelf: 'flex-start',
                                            }}>
                                                Read more →
                                            </a>
                                        </div>
                                    )}

                                    <div style={{ background: 'rgba(0,0,0,0.12)' }} />

                                    {/* Secondary — teks only */}
                                    {row.projects[1] && (
                                        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                            <span style={{
                                                fontFamily: 'var(--font-typewriter)',
                                                fontSize: 9,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: '#888',
                                                borderTop: '1.5px solid #888',
                                                paddingTop: 3,
                                                display: 'inline-block',
                                            }}>
                                                No. {row.projects[1].id} · {row.projects[1].year}
                                            </span>

                                            <h3 style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: 18,
                                                fontWeight: 700,
                                                lineHeight: 1.2,
                                                color: '#0a0a0a',
                                            }}>
                                                {row.projects[1].title}
                                            </h3>

                                            <p style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 11,
                                                color: '#555',
                                                lineHeight: 1.7,
                                                flex: 1,
                                            }}>
                                                {row.projects[1].desc}
                                            </p>

                                            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                                                {row.projects[1].tags.map(tag => (
                                                    <span key={tag} style={{
                                                        fontFamily: 'var(--font-typewriter)',
                                                        fontSize: 8,
                                                        letterSpacing: '0.06em',
                                                        textTransform: 'uppercase',
                                                        color: '#888',
                                                        border: '0.5px solid rgba(0,0,0,0.2)',
                                                        padding: '2px 5px',
                                                    }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <a href={row.projects[1].link} style={{
                                                fontFamily: 'var(--font-typewriter)',
                                                fontSize: 10,
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: '#0a0a0a',
                                                textDecoration: 'none',
                                                borderBottom: '0.5px solid #0a0a0a',
                                                paddingBottom: 1,
                                                alignSelf: 'flex-start',
                                            }}>
                                                View →
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Triple row: 3 kolom equal, teks semua + image kecil
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(${row.projects.length}, 1fr)`,
                                }}>
                                    {row.projects.map((project, pi) => (
                                        <div
                                            key={project.id}
                                            style={{
                                                padding: '20px 24px',
                                                borderRight: pi < row.projects.length - 1 ? '0.5px solid rgba(0,0,0,0.12)' : 'none',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10,
                                            }}
                                        >
                                            {/* Image kecil */}
                                            <div style={{
                                                width: '100%',
                                                aspectRatio: '16/7',
                                                background: '#e2e0da',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.12 }}>
                                                    <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                    <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0a0a0a" strokeWidth="0.5" />
                                                </svg>
                                                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', position: 'relative' }}>Preview</span>
                                            </div>

                                            <span style={{
                                                fontFamily: 'var(--font-typewriter)',
                                                fontSize: 9,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: '#888',
                                                borderTop: '1.5px solid #888',
                                                paddingTop: 3,
                                                display: 'inline-block',
                                            }}>
                                                No. {project.id} · {project.year}
                                            </span>

                                            <h3 style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                lineHeight: 1.2,
                                                color: '#0a0a0a',
                                            }}>
                                                {project.title}
                                            </h3>

                                            <p style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 10,
                                                color: '#555',
                                                lineHeight: 1.7,
                                                flex: 1,
                                            }}>
                                                {project.desc}
                                            </p>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTop: '0.5px solid rgba(0,0,0,0.1)' }}>
                                                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                                                    {project.tags.map(tag => (
                                                        <span key={tag} style={{
                                                            fontFamily: 'var(--font-typewriter)',
                                                            fontSize: 8,
                                                            letterSpacing: '0.06em',
                                                            textTransform: 'uppercase',
                                                            color: '#888',
                                                            border: '0.5px solid rgba(0,0,0,0.2)',
                                                            padding: '2px 5px',
                                                        }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a href={project.link} style={{
                                                    fontFamily: 'var(--font-typewriter)',
                                                    fontSize: 9,
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
                            )}
                        </div>
                    ))}
                </div>

                {/* Column filler — stack + ads */}
                <div style={{
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    borderLeft: '0.5px solid rgba(0,0,0,0.12)',
                }}>
                    {stack.map((group, gi) => (
                        <div key={group.category}>
                            <span style={{
                                fontFamily: 'var(--font-typewriter)',
                                fontSize: 9,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: '#888',
                                borderTop: '2px solid #888',
                                paddingTop: 3,
                                marginTop: gi === 0 ? 0 : 16,
                                marginBottom: 10,
                                display: 'block',
                            }}>
                                {group.category}
                            </span>
                            {group.items.map(item => (
                                <span key={item} style={{
                                    fontFamily: 'var(--font-typewriter)',
                                    fontSize: 11,
                                    color: '#0a0a0a',
                                    padding: '7px 0',
                                    borderBottom: '0.5px solid rgba(0,0,0,0.12)',
                                    display: 'block',
                                    lineHeight: 1,
                                }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}

                    <div style={{ borderTop: '3px solid #0a0a0a', marginTop: 24, marginBottom: 16 }} />

                    {ads.map((ad, i) => (
                        <a key={i} href={ad.href} style={{
                            display: 'block',
                            border: '1px solid #0a0a0a',
                            padding: '12px',
                            marginBottom: 10,
                            textDecoration: 'none',
                            color: 'inherit',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-typewriter)',
                                fontSize: 8,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: '#888',
                                display: 'block',
                                marginBottom: 6,
                                borderBottom: '0.5px solid rgba(0,0,0,0.12)',
                                paddingBottom: 4,
                            }}>
                                {ad.label}
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 13,
                                fontWeight: 700,
                                color: '#0a0a0a',
                                display: 'block',
                                lineHeight: 1.2,
                                marginBottom: 6,
                            }}>
                                {ad.headline}
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 10,
                                color: '#555',
                                lineHeight: 1.5,
                                display: 'block',
                                marginBottom: 8,
                            }}>
                                {ad.body}
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-typewriter)',
                                fontSize: 9,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: '#0a0a0a',
                                borderBottom: '0.5px solid #0a0a0a',
                                paddingBottom: 1,
                            }}>
                                {ad.cta}
                            </span>
                        </a>
                    ))}
                </div>

            </div>

        </section>
    )
}