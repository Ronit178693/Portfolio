import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import resumePdf from '../assets/Resume_Ronit.pdf'

export default function Hero() {
  const canvasRef = useRef(null)
  const heroTextRef = useRef(null)

  useEffect(() => {
    // Three.js Wireframe Icosahedron — BIGGER SIZE
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.z = 3.5

    // Larger icosahedron: 2.2 instead of 1.5
    const geometry = new THREE.IcosahedronGeometry(2.2, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xE84C1E,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      mesh.rotation.y += 0.004
      mesh.rotation.x += 0.002

      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }

      renderer.render(scene, camera)
    }
    animate()

    // Mouse tracking for mesh
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      gsap.to(mesh.rotation, {
        y: x * 2,
        x: y * 2,
        duration: 2,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', onMouseMove)

    // GSAP hero text entrance
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        const children = heroTextRef.current.children
        gsap.fromTo(children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        )
      }
    })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      ctx.revert()
    }
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      padding: '128px 48px 80px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
        width: '100%',
      }}
        className="hero-grid"
      >
        <div ref={heroTextRef} style={{ zIndex: 10 }}>
          {/* Improved stacking: each line is a separate block for cleaner visual hierarchy */}
          <h1 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 36,
            letterSpacing: '-0.03em',
          }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            }}>
              Full-Stack
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            }}>
              Developer &amp;
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
              color: 'var(--brand)',
            }}>
              ML Builder.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            fontWeight: 300,
            marginBottom: 48,
            maxWidth: 480,
            lineHeight: 1.7,
            color: 'rgba(20, 18, 16, 0.75)',
          }}>
            I build things for the web — and teach machines to think. Bridging the gap between robust engineering and intelligent systems.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a
              href="#work"
              onClick={(e) => handleClick(e, '#work')}
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '16px 32px',
                borderRadius: 'var(--radius-eight)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.background = 'var(--brand)'}
              onMouseLeave={(e) => e.target.style.background = 'var(--ink)'}
            >
              View My Work
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Ronit_Agrawal_Resume.pdf"
              style={{
                background: 'var(--brand)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: 'var(--radius-eight)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 76, 30, 0.35)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <a
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
              style={{
                border: '1px solid var(--ink)',
                color: 'var(--ink)',
                padding: '16px 32px',
                borderRadius: 'var(--radius-eight)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--paper)' }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--ink)' }}
            >
              About Me
            </a>
          </div>
        </div>

        <div style={{ height: 600, maxHeight: '75vh', position: 'relative' }} className="hero-canvas-wrap">
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-canvas-wrap {
            min-height: 300px !important;
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
