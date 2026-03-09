import aboutImage from '../assets/Gemini_Generated_Image_r8a19zr8a19zr8a1.png'

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
              src={aboutImage}
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
                "I'm a <br />B.Tech Student <br />who ships."
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
              I am a Computer Science student at <strong>Bennett University</strong> with a drive to architect software that solves real-world problems. My engineering approach sits at the intersection of scale and intelligence—blending robust full-stack systems with data-driven machine learning models.
            </p>
            <p>
              Whether I'm engineering complex peer-to-peer delivery platforms like <em>Cravora</em>, building interactive expense trackers like <em>Ledgerly</em>, or optimizing predictive customer intelligence with scikit-learn, my focus is always on delivering performant, production-ready code. I thrive on architecting RESTful APIs, designing optimized aggregation pipelines, and deploying cross-origin cloud architectures.
            </p>
            <p>
              Beyond the code editor, I actively participate in competitive programming and hackathons, proudly securing a top 90 rank out of 400+ teams at the Smart BU Hackathon. I am deeply obsessed with the potential of Generative AI, distributed networks, and pushing the boundaries of what modern web applications and data pipelines can achieve.
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
