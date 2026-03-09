export default function About() {
  return (
    <section id="about" style={{
      padding: '96px 48px',
      background: 'var(--ink)',
      color: 'var(--paper)',
    }}>
      <div className="about-container" style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        gap: 64,
        alignItems: 'center',
      }}>
        {/* Image Column */}
        <div style={{ width: '50%', flexShrink: 0 }} className="about-image-col">
          <div style={{ position: 'relative' }}>
            <img
              alt="Ronit Agrawal"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6SerWMLza1xcwiShp65zf7RNUttbYkheggeeUo9h0_XknC_8usBtg9uPXpuhf5InJOEccXxTdTte8RTGHqiiMou6t17wjWmodTPJMp-ywWHHJndfK3AG7MKGtPSj8uK9AZiNlWZ2fsPe3rXJQP7HyPNwdH-0iEXy_4JiUPfx1Jw9Nx9qFXuXh9ilXd0is9SjfXOsjxf6DMa_tE4IyEJJGMeYSEgWLvc5qkmJHz5B0SMHBmnG9l5wb3_cq_bLWVtYyrNnifHxSM9Yh"
              style={{
                borderRadius: 'var(--radius-eight)',
                filter: 'grayscale(100%)',
                transition: 'all 0.7s',
                width: '100%',
              }}
              onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
            />
            <div style={{
              position: 'absolute',
              bottom: -24,
              right: -24,
              background: 'var(--brand)',
              padding: '32px 40px',
              borderRadius: 'var(--radius-eight)',
            }}>
              <p style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                lineHeight: 1.2,
                color: 'white',
              }}>
                "I'm a <br />Second-year <br />who ships."
              </p>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div style={{ width: '50%' }} className="about-text-col">
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--brand)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Background
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginTop: 16,
            marginBottom: 32,
            lineHeight: 1.05,
          }}>
            Engineering with <br />Heart.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: '1.15rem', fontWeight: 300, opacity: 0.9, lineHeight: 1.7 }}>
            <p>
              Based in the intersection of design and data, I build digital experiences that are as performant as they are beautiful.
            </p>
            <p>
              I'm currently a first-year student obsessed with the potential of Generative AI and distributed systems. When I'm not coding, you'll find me exploring abstract architecture or pushing pixels.
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--brand)',
              paddingTop: 16,
              fontWeight: 400,
            }}>
              Currently: Open for 2026 Internships.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column !important;
          }
          .about-image-col, .about-text-col {
            width: 100% !important;
          }
          #about { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
