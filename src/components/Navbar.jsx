import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import resumePdf from '../assets/Resume_Ronit.pdf'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: '24px 48px',
        mixBlendMode: 'difference',
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'var(--paper)',
            letterSpacing: '-0.04em',
            textDecoration: 'none',
          }}
        >
          RA.
        </a>

        <div className="nav-links-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--paper)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--paper)'}
          >
            Resume
          </a>
          {['Work', 'Skills', 'About', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, `#${link.toLowerCase()}`)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--paper)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--paper)'}
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          style={{
            background: 'var(--brand)',
            color: 'white',
            padding: '10px 24px',
            borderRadius: 'var(--radius-eight)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            textDecoration: 'none',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Hire Me
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          nav { padding: 20px 24px !important; }
        }
      `}</style>
    </nav>
  )
}
