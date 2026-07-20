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
      highlight: true,
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
      <div className="pricing-header">
        <h2>Planos</h2>
        <p className="pricing-lead">
          Escolha o ponto de partida ideal para o seu projeto. Cada plano é adaptado
          às necessidades do seu negócio — fale com a gente para receber uma proposta sob medida.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.color} ${plan.highlight ? 'highlight' : ''}`}
          >
            {plan.highlight && <span className="pricing-badge">Mais procurado</span>}

            <h3>{plan.name}</h3>
            <p className="subtitle">{plan.subtitle}</p>

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
              Falar com a Prismae
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        Valores personalizados conforme o escopo do projeto. Entre em contato para um orçamento sem compromisso.
      </p>

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
              <p className="pricing-modal-plan">Plano selecionado: <strong>{planoSelecionado}</strong></p>

              <div className="pricing-modal-actions">

                <a
                  href={`https://wa.me/31975025644?text=Quero%20saber%20mais%20sobre%20o%20plano%20${planoSelecionado}`}
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
