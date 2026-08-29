'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const projects = [
    {
        id: '01',
        title: 'Project Title One',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        body: 'A short but punchy description of what this project does, why it exists, and what problem it solves. Expand this into two or three sentences covering the problem you set out to solve, the approach you took, and the outcome — this is the space for the actual story, not just a tagline.',
        tags: ['Next.js', 'Postgres'],
        link: '#',
        year: '2024',
    },
    {
        id: '02',
        title: 'Project Title Two',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        body: 'A short but punchy description of what this project does, why it exists, and what problem it solves. Expand this into two or three sentences covering the problem you set out to solve, the approach you took, and the outcome — this is the space for the actual story, not just a tagline.',
        tags: ['React', 'Supabase'],
        link: '#',
        year: '2024',
    },
    {
        id: '03',
        title: 'Project Title Three',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        body: 'A short but punchy description of what this project does, why it exists, and what problem it solves. Expand this into two or three sentences covering the problem you set out to solve, the approach you took, and the outcome — this is the space for the actual story, not just a tagline.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2023',
    },
    {
        id: '04',
        title: 'Project Title Four',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        body: 'A short but punchy description of what this project does, why it exists, and what problem it solves. Expand this into two or three sentences covering the problem you set out to solve, the approach you took, and the outcome — this is the space for the actual story, not just a tagline.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2023',
    },
    {
        id: '05',
        title: 'Project Title Five',
        desc: 'A short but punchy description of what this project does, why it exists, and what problem it solves.',
        body: 'A short but punchy description of what this project does, why it exists, and what problem it solves. Expand this into two or three sentences covering the problem you set out to solve, the approach you took, and the outcome — this is the space for the actual story, not just a tagline.',
        tags: ['Node.js', 'Docker'],
        link: '#',
        year: '2022',
    },
]

// Kept for reuse elsewhere (e.g. Footer) now that each project gets its own
// full page and there's no room for a persistent sidebar next to the articles.
export const stack = [
    { category: 'Languages', items: ['JavaScript', 'Python', 'C', 'Java', 'Swift'] },
    { category: 'Frameworks', items: ['Next.js', 'React Native', 'Node.js', 'SwiftUI', 'Phaser 3'] },
    { category: 'Tools', items: ['VS Code', 'Git'] },
]

export const ads = [
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

// The first project keeps id="work" so the Hero's "Selected Work →"
// teaser link still resolves — every project after it gets its own
// #project-XX anchor for direct linking and Prev/Next navigation.
function getSectionId(index: number) {
    return index === 0 ? 'work' : `project-${projects[index].id}`
}

export default function Projects() {
    const pageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        pageRefs.current.forEach((page) => {
            if (!page) return
            const content = page.querySelector('.work-page-content')
            if (!content) return
            gsap.set(content, { opacity: 0, y: 24 })
            ScrollTrigger.create({
                trigger: page,
                start: 'top 70%',
                onEnter: () => gsap.to(content, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
                onEnterBack: () => gsap.to(content, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
            })
        })
        return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
    }, [])

    return (
        <>
            {projects.map((project, index) => {
                const sectionId = getSectionId(index)
                const isFirst = index === 0
                const isLast = index === projects.length - 1

                const prevHref = isFirst ? '#hero' : `#${getSectionId(index - 1)}`
                const prevLabel = isFirst ? 'Back to Front Page' : `Prev: ${projects[index - 1].title}`

                const nextHref = isLast ? '#contact' : `#${getSectionId(index + 1)}`
                const nextLabel = isLast ? 'Get In Touch' : `Next: ${projects[index + 1].title}`

                return (
                    <section
                        key={project.id}
                        id={sectionId}
                        className="snap-section work-page"
                        ref={el => { pageRefs.current[index] = el }}
                    >
                        <div className="work-page-content">

                            {/* Top bar — dateline + running page count across the whole site */}
                            <div className="work-topbar">
                                <span>No. {project.id} · {project.year}</span>
                                <span>Page {index + 2} of {projects.length + 1}</span>
                            </div>

                            {/* Headline block */}
                            <div className="work-header">
                                <span className="work-byline">By Feivel Qutby</span>
                                <h2 className="work-title">{project.title}</h2>
                                <div className="work-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="work-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Image + copy */}
                            <div className="work-main">
                                <div className="work-image">
                                    <svg width="100%" height="100%" className="work-image-grid">
                                        <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                        <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#0a0a0a" strokeWidth="0.5" />
                                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0a0a0a" strokeWidth="0.5" />
                                    </svg>
                                    <span className="work-image-label">Preview</span>
                                </div>
                                <span className="work-caption">Fig. {project.id} — {project.title}</span>

                                <p className="work-desc">{project.body}</p>

                                <a href={project.link} target="_blank" rel="noreferrer" className="work-link">
                                    Read Full Story →
                                </a>
                            </div>

                            {/* Prev / Next — scrolls to the adjacent snap page, no separate carousel logic */}
                            <div className="work-nav">
                                <a href={prevHref} className="work-nav-link work-nav-prev">◀ {prevLabel}</a>
                                <a href={nextHref} className="work-nav-link work-nav-next">{nextLabel} ▶</a>
                            </div>

                        </div>
                    </section>
                )
            })}
        </>
    )
}