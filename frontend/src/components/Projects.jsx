import { useEffect, useRef } from 'react'
import './Projects.css'

export default function Projects() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const position = useRef(0)

  const speed = 1.2 

  const items = [
    'Landing Page',
    'E-commerce',
    'Sistema Web',
    'Dashboard',
    'App Mobile'
  ]

  useEffect(() => {
    const track = trackRef.current

    const animate = () => {
      position.current -= speed

      if (Math.abs(position.current) >= track.scrollWidth / 2) {
        position.current = 0
      }

      track.style.transform = `translateX(${position.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)
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
