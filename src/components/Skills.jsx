import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Mongoose', 'Cloudinary'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB Atlas', 'Mongoose', 'Aggregation Pipelines', 'SQL'],
  },
  {
    title: 'AI / ML',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Supervised & Unsupervised Learning', 'PCA', 'Feature Engineering'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'npm'],
  },
]

export default function Skills() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current.children,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" style={{ padding: '96px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--brand)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Expertise
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginTop: 16,
          }}>
            Technical Toolbox
          </h2>
        </div>

        <div
          ref={gridRef}
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              style={{
                padding: 28,
                border: '1px solid rgba(20, 18, 16, 0.1)',
                borderRadius: 'var(--radius-eight)',
                background: 'white',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 76, 30, 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 18, 16, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h4 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: 20,
              }}>
                {cat.title}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(skill => (
                  <span key={skill} className="pill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          #skills { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
