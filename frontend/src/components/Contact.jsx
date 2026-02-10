import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert('Mensagem enviada!')
    }, 1200)
  }

  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem" required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  )
}
