'use client'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" className="snap-section" style={{
            borderTop: '3px solid #0a0a0a',
            padding: '20px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>

            {/* Kiri — nama */}
            <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: '-0.5px',
                color: '#0a0a0a',
            }}>
                Feivel Qutby
            </span>

            {/* Tengah — copyright */}
            <span style={{
                fontFamily: 'var(--font-typewriter)',
                fontSize: 10,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888',
            }}>
                © {year} · All rights reserved
            </span>

            {/* Kanan — links */}
            <div style={{
                display: 'flex',
                gap: 20,
                fontFamily: 'var(--font-typewriter)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
            }}>
                <a href="https://github.com/FeivelQutby" target="_blank" rel="noreferrer" style={{
                    color: '#888',
                    textDecoration: 'none',
                    borderBottom: '0.5px solid transparent',
                    paddingBottom: 1,
                    transition: 'color 0.2s, border-color 0.2s',
                }}
                    onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = '#0a0a0a';
                        (e.target as HTMLElement).style.borderBottomColor = '#0a0a0a'
                    }}
                    onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = '#888';
                        (e.target as HTMLElement).style.borderBottomColor = 'transparent'
                    }}
                >
                    Github
                </a>
                <a href="https://www.linkedin.com/in/feivel-qutby/" target="_blank" rel="noreferrer" style={{
                    color: '#888',
                    textDecoration: 'none',
                    borderBottom: '0.5px solid transparent',
                    paddingBottom: 1,
                    transition: 'color 0.2s, border-color 0.2s',
                }}
                    onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = '#0a0a0a';
                        (e.target as HTMLElement).style.borderBottomColor = '#0a0a0a'
                    }}
                    onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = '#888';
                        (e.target as HTMLElement).style.borderBottomColor = 'transparent'
                    }}
                >
                    LinkedIn
                </a>
                <a href="mailto:feivelint@gmail.com" style={{
                    color: '#888',
                    textDecoration: 'none',
                    borderBottom: '0.5px solid transparent',
                    paddingBottom: 1,
                    transition: 'color 0.2s, border-color 0.2s',
                }}
                    onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = '#0a0a0a';
                        (e.target as HTMLElement).style.borderBottomColor = '#0a0a0a'
                    }}
                    onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = '#888';
                        (e.target as HTMLElement).style.borderBottomColor = 'transparent'
                    }}
                >
                    Email
                </a>
            </div>

        </footer>
    )
}