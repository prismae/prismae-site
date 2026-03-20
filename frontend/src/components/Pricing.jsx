import './Pricing.css'
import { useState } from 'react'

export default function Pricing() {
  const [modal, setModal] = useState(false)
  const [planoSelecionado, setPlanoSelecionado] = useState('')

  const plans = [
    {
      name: 'START',
      subtitle: 'Presença Digital Básica',
      color: 'start',
      projectPrice: 'R$ 2.000,00 a R$ 3000,00',
      hosting: 'R$ 59,99 / mês',
      maintenance: 'R$ 49,00 a R$ 99,99 / mês',
      features: [
        'Site institucional (até 5 páginas)',
        'Design responsivo',
        'Canal de contato externo',
        'Publicação e configuração inicial',
        'Hospedagem'
      ]
    },
    {
      name: 'PRO',
      subtitle: 'Site Profissional Completo',
      color: 'pro',
      projectPrice: 'R$ 3.499,99 a R$ 7000,00',
      hosting: 'R$ 59,99 / mês',
      maintenance: 'R$ 100,00 a R$ 199,99 / mês',
      features: [
        'Site completo (8 a 12 páginas)',
        'Identidade visual profissional',
        'Animações e interações',
        'Integração com canais de atendimento',
        'SEO básico',
        'Responsividade total',
        'Hospedagem'
      ]
    },
    {
      name: 'PREMIUM',
      subtitle: 'Sistema ou Plataforma Completa',
      color: 'premium',
      projectPrice: 'R$ 8.000,00 a R$ 12.000,00+',
      hosting: 'R$ 59,99 / mês',
      maintenance: 'R$ 200,00 a R$ 800,00+ / mês',
      features: [
        'Sistema Web (React + Python)',
        'Painel administrativo',
        'Banco de dados',
        'Controle de usuários',
        'Relatórios e dashboards',
        'Segurança e otimização',
        'Hospedagem'
      ]
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <h2>Pacotes & Preços</h2>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.color}`}
          >
            <h3>{plan.name}</h3>
            <p className="subtitle">{plan.subtitle}</p>

            <div className="price-section">
              <h4>{plan.projectPrice}</h4>
              <p><strong>Hospedagem:</strong> {plan.hosting}</p>
              <p><strong>Manutenção:</strong> {plan.maintenance}</p>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button
              className="pricing-button"
              onClick={() => {
                setPlanoSelecionado(plan.name)
                setModal(true)
              }}
            >
              Solicitar Orçamento
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
        {modal && (
          <div
            className="pricing-modal-overlay"
            onClick={() => setModal(false)}
          >
            <div
              className="pricing-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Solicitar Orçamento</h3>

              <div className="pricing-modal-actions">

                <a
                  href={`https://wa.me/31975025644?text=Quero%20orçamento%20do%20plano%20${planoSelecionado}`}
                  target="_blank"
                  className="pricing-modal-btn pricing-whatsapp"
                >
                  WhatsApp
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=prismae.contato@gmail.com&subject=Orçamento%20${planoSelecionado}`}
                  target="_blank"
                  className="pricing-modal-btn pricing-gmail"
                >
                  Gmail
                </a>

              </div>

              <button
                className="pricing-close"
                onClick={() => setModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
    </section>
  )
}