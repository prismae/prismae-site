import { useEffect, useRef } from 'react'
import './Projects.css'

export default function Projects() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)

  const position = useRef(0)
  const velocity = useRef(0.8)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const lastX = useRef(0)

  const items = [
    'Landing Page',
    'E-commerce',
    'Dashboard',
    'Site Institucional',
    'Sistema Web Simples',
    'Tema WordPress'
  ]

  useEffect(() => {
    const track = trackRef.current

    const animate = () => {
      if (!isDragging.current) {
        position.current -= velocity.current
      }

      const width = track.scrollWidth / 2

      if (Math.abs(position.current) >= width) {
        position.current += width
      }

      track.style.transform = `translateX(${position.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  useEffect(() => {
    const track = trackRef.current

    const onDown = (e) => {
      isDragging.current = true
      startX.current = e.pageX || e.touches[0].pageX
      lastX.current = startX.current
      velocity.current = 0
    }

    const onMove = (e) => {
      if (!isDragging.current) return
      const x = e.pageX || e.touches[0].pageX
      const delta = x - lastX.current
      position.current += delta
      velocity.current = delta * 0.1
      lastX.current = x
    }

    const onUp = () => {
      isDragging.current = false
      velocity.current = 1
    }

    track.addEventListener('mousedown', onDown)
    track.addEventListener('touchstart', onDown)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)

    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)

    return () => {
      track.removeEventListener('mousedown', onDown)
      track.removeEventListener('touchstart', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <section className="projects" id="projects">
      <h2>Projetos</h2>

      <div className="carousel">
        <div className="projects-track" ref={trackRef}>
          {[...items, ...items].map((item, index) => (
            <div className="project-card" key={index}>
              <div className="project-overlay">
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-left"></div>
        <div className="fade-right"></div>
      </div>
    </section>
  )
}
