import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>
      <p className="contact-text">
        Fale com a Prismae pelos nossos canais oficiais e escolha a melhor forma de iniciar seu projeto.
      </p>

      <a
        className="contact-button"
        href="https://linktr.ee/prismae.contato"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entrar em contato
      </a>
    </section>
  )
}