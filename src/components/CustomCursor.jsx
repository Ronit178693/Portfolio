import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const outlineRef = useRef(null)

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches
        if (isMobile) return

        const dot = dotRef.current
        const outline = outlineRef.current

        const onMouseMove = (e) => {
            gsap.to(dot, { x: e.clientX - 4, y: e.clientY - 4, duration: 0 })
            gsap.to(outline, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 })
        }

        const addHoverListeners = () => {
            document.querySelectorAll('a, button').forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(outline, { scale: 1.5, backgroundColor: 'rgba(232, 76, 30, 0.1)', duration: 0.3 })
                })
                link.addEventListener('mouseleave', () => {
                    gsap.to(outline, { scale: 1, backgroundColor: 'transparent', duration: 0.3 })
                })
            })
        }

        window.addEventListener('mousemove', onMouseMove)

        const observer = new MutationObserver(addHoverListeners)
        observer.observe(document.body, { childList: true, subtree: true })
        addHoverListeners()

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className="cursor-dot" style={{ display: 'none' }} />
            <div ref={outlineRef} className="cursor-outline" style={{ display: 'none' }} />
            <style>{`
        @media (min-width: 769px) {
          .cursor-dot, .cursor-outline { display: block !important; }
        }
      `}</style>
        </>
    )
}
