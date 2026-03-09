import { useState } from 'react'
import resumePdf from '../assets/Resume_Ronit.pdf'

export default function Contact() {
  const [emailHover, setEmailHover] = useState(false)

  return (
    <>
      <section id="contact" style={{
        padding: '128px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            marginBottom: 48,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
          }}>
            Let's Build <br />Something.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a
              href="mailto:ronitagrawal9921@gmail.com"
              style={{
                position: 'relative',
                padding: '32px 48px',
                background: emailHover ? 'var(--brand)' : 'white',
                border: '1px solid rgba(20, 18, 16, 0.1)',
                borderRadius: 'var(--radius-eight)',
                transition: 'all 0.5s',
                width: '100%',
                maxWidth: 640,
                textDecoration: 'none',
                display: 'block',
                textAlign: 'left',
              }}
              onMouseEnter={() => setEmailHover(true)}
              onMouseLeave={() => setEmailHover(false)}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                color: emailHover ? 'rgba(255,255,255,0.8)' : '#aaa',
                display: 'block',
                marginBottom: 8,
                fontSize: '0.85rem',
                transition: 'color 0.5s',
              }}>
                Email me at
              </span>
              <span style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                color: emailHover ? 'white' : 'var(--ink)',
                transition: 'color 0.5s',
              }}>
                ronitagrawal9921@gmail.com
              </span>
              <div style={{
                position: 'absolute',
                right: 32,
                top: '50%',
                transform: `translateY(-50%) translateX(${emailHover ? '16px' : '0'})`,
                fontSize: '2rem',
                color: emailHover ? 'white' : 'var(--brand)',
                transition: 'all 0.5s',
              }}>
                →
              </div>
            </a>

            <div style={{
              display: 'flex',
              gap: 48,
              marginTop: 64,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {[
                { label: 'GITHUB', href: 'https://github.com/Ronit178693' },
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/ronit-agrawal-b99313308/' },
                { label: 'RESUME', href: resumePdf },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    borderBottom: '1px solid var(--ink)',
                    paddingBottom: 4,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: 'var(--ink)',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--brand)'; e.target.style.borderColor = 'var(--brand)' }}
                  onMouseLeave={(e) => { e.target.style.color = 'var(--ink)'; e.target.style.borderColor = 'var(--ink)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Large BG Monogram */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '30vw',
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          opacity: 0.03,
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}>
          RONIT
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 48px',
        borderTop: '1px solid rgba(20, 18, 16, 0.05)',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          opacity: 0.5,
        }}
          className="footer-inner"
        >
          <p>© 2024 RONIT AGRAWAL. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH CODE &amp; CURIOSITY.</p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 80px 24px !important; }
          .footer-inner {
            flex-direction: column !important;
            gap: 4px;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
