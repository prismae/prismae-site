import { useState } from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Contact.css'

export default function Contact() {
  const [open, setOpen] = useState(false)

  const whatsappNumber = '5531999999999'

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
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Escolha uma das opções</h3>

            <div className="modal-actions">
              <a
                className="modal-btn whatsapp"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
                WhatsApp
              </a>

              <a
                className="modal-btn gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prismae.contato@gmail.com&subject=Solicitação%20de%20Orçamento"
                target="_blank"
              >
                <MdEmail className="icon" />
                Gmail
              </a>

              <a
                className="modal-btn phone"
                href="tel:+5531999999999"
              >
                <FaPhoneAlt className="icon" />
                Ligar agora
              </a>
            </div>

            <button className="close-btn" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}