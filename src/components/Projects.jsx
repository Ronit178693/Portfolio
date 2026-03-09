import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Cravora',
    category: 'Full-Stack · MERN',
    description: 'A premium food discovery and delivery marketplace. Built with a focus on seamless user experience and real-time order tracking systems.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://cravora-chi.vercel.app/',
    image: '/cravora-banner.png',
    reversed: false,
  },
  {
    title: 'Ledgerly',
    category: 'FinTech · SaaS',
    description: 'Automated financial tracking for small businesses. Leveraging AI to categorize expenses and predict quarterly cashflow patterns.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://ledgerly-fe9e.vercel.app/',
    // Captured live screenshot of deployed Ledgerly
    image: '/ledgerly-banner.png',
    reversed: true,
  },
  {
    title: 'Smart Sales',
    category: 'ML · Analytics',
    description: 'Predictive analytics dashboard for retail chains. Providing actionable insights by analyzing historical sales data with XGBoost models.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    liveUrl: null,
    image: '/smart-sales-banner.png',
    reversed: false,
  },
]

function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const inner = innerRef.current
    if (!card || !inner) return

    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })

    // 3D tilt on image banner — increased rotation and adding scale
    const onMouseMove = (e) => {
      const rect = inner.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      // Dividing by a smaller number (15 instead of 25) means a steeper tilt
      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15

      gsap.to(inner, {
        rotateX,
        rotateY,
        scale: 1.03, // Slight scale up when hovering inside
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const onMouseLeave = () => {
      gsap.to(inner, {
        rotateX: 0,
        rotateY: 0,
        scale: 1, // Reset scale
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    inner.addEventListener('mousemove', onMouseMove)
    inner.addEventListener('mouseleave', onMouseLeave)

    return () => {
      inner.removeEventListener('mousemove', onMouseMove)
      inner.removeEventListener('mouseleave', onMouseLeave)
      ctx.revert()
    }
  }, [])

  const bannerContent = (
    <div
      ref={innerRef}
      className="card-inner"
      style={{
        background: '#1a1a1a',
        borderRadius: 'var(--radius-eight)',
        overflow: 'hidden',
        aspectRatio: '16/10',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        transition: 'box-shadow 0.5s',
        perspective: 800,
        cursor: project.liveUrl ? 'pointer' : 'default',
      }}
    >
      <img
        alt={`${project.title} preview`}
        src={project.image}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          transition: 'transform 0.7s, filter 0.7s',
          filter: 'grayscale(30%)',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)'
          e.target.style.filter = 'grayscale(0%)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.filter = 'grayscale(30%)'
        }}
      />
    </div>
  )

  const imageCol = (
    <div
      style={{
        gridColumn: project.reversed ? '6 / span 7' : '1 / span 7',
        order: project.reversed ? 2 : 1,
      }}
      className="project-image-col"
    >
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', textDecoration: 'none' }}
        >
          {bannerContent}
        </a>
      ) : (
        bannerContent
      )}
    </div>
  )

  const textCol = (
    <div style={{ gridColumn: project.reversed ? '1 / span 5' : '8 / span 5', order: project.reversed ? 1 : 2 }}
      className="project-text-col"
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: '#999',
      }}>
        {project.category}
      </span>
      <h3 style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 700,
        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
        margin: '16px 0',
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: '1.05rem',
        color: '#555',
        marginBottom: 32,
        lineHeight: 1.7,
      }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {project.tags.map(tag => (
          <span key={tag} className="pill-tag">{tag}</span>
        ))}
      </div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
            color: 'var(--brand)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            transition: 'gap 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.gap = '14px'}
          onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
        >
          View Live <span>→</span>
        </a>
      )}
    </div>
  )

  return (
    <div
      ref={cardRef}
      className="project-card project-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 48,
        alignItems: 'center',
      }}
    >
      {imageCol}
      {textCol}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" style={{
      padding: '96px 48px',
      background: 'rgba(255,255,255,0.5)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 80 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--brand)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Portfolio Selection
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginTop: 16,
          }}>
            Featured Work
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 128 }}>
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        .card-inner:hover {
          box-shadow: 0 16px 48px rgba(232, 76, 30, 0.15) !important;
        }
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
          .project-image-col, .project-text-col {
            grid-column: 1 / -1 !important;
            order: unset !important;
          }
          #work { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
