'use client'

import { projects, stack, ads, getSectionId } from './Projects'

export default function Footer() {
    const year = new Date().getFullYear()
    const totalPages = projects.length + 2 // Hero + each project + this page
    const lastProject = projects[projects.length - 1]
    const lastProjectHref = `#${getSectionId(projects.length - 1)}`

    return (
        <footer id="contact" className="snap-section footer-page">

            {/* Top bar — continues the running page count from Hero/Work */}
            <div className="footer-topbar">
                <span>Classifieds</span>
                <span>Page {totalPages} of {totalPages}</span>
            </div>

            {/* Header */}
            <div className="footer-header">
                <h2 className="footer-title">The Back Page</h2>
                <span className="footer-subhead">Tech stack, services, and how to reach the desk.</span>
            </div>

            {/* Stack + ads */}
            <div className="footer-main">
                <div className="footer-stack">
                    {stack.map(group => (
                        <div key={group.category} className="footer-stack-group">
                            <span className="footer-stack-label">{group.category}</span>
                            <div className="footer-stack-items">
                                {group.items.map(item => (
                                    <span key={item} className="footer-stack-item">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer-ads">
                    {ads.map((ad, i) => (
                        <a key={i} href={ad.href} className="footer-ad">
                            <span className="footer-ad-label">{ad.label}</span>
                            <span className="footer-ad-headline">{ad.headline}</span>
                            <span className="footer-ad-body">{ad.body}</span>
                            <span className="footer-ad-cta">{ad.cta}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Back to the last project — closes the Prev/Next chain */}
            <div className="work-nav footer-nav">
                <a href={lastProjectHref} className="work-nav-link work-nav-prev">
                    ◀ Prev: {lastProject.title}
                </a>
                <span></span>
            </div>

            {/* Closing bar — name, copyright, real social links */}
            <div className="footer-bottombar">
                <span className="footer-name">Feivel Qutby</span>
                <span className="footer-copyright">© {year} · All rights reserved</span>
                <div className="footer-social">
                    <a href="https://github.com/FeivelQutby" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/feivel-qutby/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:feivelint@gmail.com">Email</a>
                </div>
            </div>

        </footer>
    )
}