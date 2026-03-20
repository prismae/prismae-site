import { useState } from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Contact.css'

export default function Contact() {
  const [open, setOpen] = useState(false)

  const whatsappNumber = '5531975025644'

  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>
      <p className="contact-text">
        Fale com a Prismae pelos nossos canais oficiais e escolha a melhor forma de iniciar seu projeto.
      </p>

      <button className="contact-button" onClick={() => setOpen(true)}>
        Entrar em contato
      </button>

      {open && (
        <div className="contact-modal-overlay" onClick={() => setOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Escolha uma das opções</h3>

            <div className="contact-modal-actions">
              <a
                className="contact-modal-btn whatsapp"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
                WhatsApp
              </a>

              <a
                className="contact-modal-btn gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prismae.contato@gmail.com&subject=Solicitação%20de%20Orçamento"
                target="_blank"
              >
                <MdEmail className="icon" />
                Gmail
              </a>

              <a
                className="contact-modal-btn phone"
                href="tel:+5531975025644"
              >
                <FaPhoneAlt className="icon" />
                Ligar agora
              </a>
            </div>

            <button className="contact-close-btn" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}