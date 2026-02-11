import './Header.css'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <img className="logo" src="public/images/logo.jpeg"></img>

        <nav className="nav">
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#contact" className="cta">Contato</a>
        </nav>
      </div>
    </header>
  )
}
