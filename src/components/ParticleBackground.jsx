import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.3
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.opacity = Math.random() * 0.6 + 0.1
                this.pulse = Math.random() * Math.PI * 2
                this.pulseSpeed = Math.random() * 0.02 + 0.005
                // Some particles are blue, some are white
                this.isBlue = Math.random() > 0.7
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.pulse += this.pulseSpeed
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset()
                }
            }
            draw() {
                const pulseFactor = Math.sin(this.pulse) * 0.3 + 0.7
                const alpha = this.opacity * pulseFactor
                if (this.isBlue) {
                    ctx.fillStyle = `rgba(67, 97, 238, ${alpha})`
                    ctx.shadowColor = 'rgba(67, 97, 238, 0.5)'
                    ctx.shadowBlur = 6
                } else {
                    ctx.fillStyle = `rgba(200, 200, 220, ${alpha})`
                    ctx.shadowColor = 'transparent'
                    ctx.shadowBlur = 0
                }
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size * pulseFactor, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            resize()
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200)
            particles = Array.from({ length: count }, () => new Particle())
        }

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(67, 97, 238, ${0.08 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            drawConnections()
            animId = requestAnimationFrame(animate)
        }

        init()
        animate()
        window.addEventListener('resize', init)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', init)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    )
}
