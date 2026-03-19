import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>PRISMAE</h2>
          <p>Transformando ideias em experiências digitais.</p>
        </div>

        <div className="footer-links">
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PRISMAE. Todos os direitos reservados.
      </div>
    </footer>
    
  )
}
