import { useEffect, useRef } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const position = useRef(0)

  const testimonials = [
    {
      name: 'Cristiano Maffort',
      text: 'A Prismae elevou nossa presença digital com um site rápido, elegante e extremamente profissional.'
    },
    {
      name: 'Daniela Kupsch',
      text: 'Equipe atenciosa e processo muito organizado. O resultado ficou acima das nossas expectativas.'
    },
    {
      name: 'Edson',
      text: 'Desde o lançamento, percebemos melhoria na performance e na conversão. Recomendo sem dúvida.'
    }
  ]

  useEffect(() => {
    const track = trackRef.current

    const animate = () => {
      position.current -= 0.45

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

  return (
    <section className="testimonials" id="avaliacoes-clientes">
      <h2>O que nossos clientes dizem</h2>

      <div className="testimonials-carousel">
        <div className="testimonials-track" ref={trackRef}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <p>{testimonial.text}</p>
              <h3>{testimonial.name}</h3>
            </article>
          ))}
        </div>

        <div className="testimonials-fade-left"></div>
        <div className="testimonials-fade-right"></div>
      </div>
    </section>
  )
}