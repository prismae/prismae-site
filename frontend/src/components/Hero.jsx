import './Hero.css'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    hero.classList.add('show')
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">PRISMAE • 2026</span>

        <h1>
          Transformando ideias em<br />
          <span>experiências digitais</span>
        </h1>

        <p>
          Criamos sites modernos, rápidos e inteligentes
          focados em conversão e experiência.
        </p>

        <a href="#contact" className="hero-btn">
          Vamos conversar
        </a>
      </div>

      <div className="hero-rgb-line"></div>
    </section>
  )
}
