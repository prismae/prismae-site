import './Hero.css'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    hero.classList.add('show')
  }, [])

  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <span className="hero-tag">
          <span className="hero-tag-dot"></span>
          PRISMAE • DESENVOLVIMENTO WEB
        </span>

        <h1>
          Transformando ideias em<br />
          <span>experiências digitais</span>
        </h1>

        <p>
          Criamos sites modernos, rápidos e inteligentes
          focados em conversão e experiência.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-btn">
            Vamos conversar
          </a>
          <a href="#projects" className="hero-btn-ghost">
            Ver projetos
          </a>
        </div>
      </div>

      <div className="hero-rgb-line"></div>
    </section>
  )
}
