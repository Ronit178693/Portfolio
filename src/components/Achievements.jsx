import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hackathonCert from '../assets/Ronit Agrawal.pdf'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    emoji: '🏆',
    title: 'Smart BU Hackathon 2024',
    subtitle: 'University Level Smart India Hackathon',
    details: 'Rank 90 out of 400+ teams · Team CodeHand · Bennett University · Aug–Sept 2024',
    issuedBy: 'Ministry of Education, MoE Innovation Cell, AICTE, Bennett University',
    verifyLink: hackathonCert,
  },
  {
    emoji: '🎓',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    subtitle: 'Certificate of Completion',
    details: 'Dr. Angela Yu · 62 hours · Completed March 2026',
    issuedBy: 'Udemy',
    verifyLink: 'https://ude.my/UC-b6f736da-f003-423c-ba60-25af121567a2',
  },
]

export default function Achievements() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="achievements" style={{ padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--brand)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Recognition
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginTop: 16,
          }}>
            Certifications &amp; Achievements
          </h2>
        </div>

        <div
          ref={gridRef}
          className="achievements-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 32,
          }}
        >
          {achievements.map((a) => (
            <div
              key={a.title}
              style={{
                padding: 32,
                background: 'white',
                border: '1px solid rgba(20, 18, 16, 0.1)',
                borderLeft: '4px solid var(--brand)',
                borderRadius: 'var(--radius-eight)',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="achievement-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(232, 76, 30, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{a.emoji}</div>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '1.3rem',
                marginBottom: 4,
              }}>
                {a.title}
              </h3>
              <p style={{
                color: 'var(--brand)',
                fontWeight: 500,
                marginBottom: 16,
                fontSize: '0.95rem',
              }}>
                {a.subtitle}
              </p>
              <p style={{
                color: '#666',
                marginBottom: 24,
                lineHeight: 1.6,
                fontSize: '0.9rem',
              }}>
                {a.details}
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  color: '#aaa',
                  display: 'block',
                  marginBottom: 4,
                }}>
                  Issued by
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    opacity: 0.8,
                  }}>
                    {a.issuedBy}
                  </p>
                  {a.verifyLink && (
                    <a
                      href={a.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--brand)',
                        borderBottom: '1px solid var(--brand)',
                        paddingBottom: 2,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      VERIFY
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
          #achievements { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
