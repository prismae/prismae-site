import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: 'START',
      subtitle: 'Presença Digital Básica',
      color: 'start',
      projectPrice: 'R$ 2.000 a R$ 2.999',
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
      projectPrice: 'R$ 3.000 a R$ 5.999',
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
      projectPrice: 'R$ 6.000 a R$ 12.000+',
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

            <a
              className="pricing-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prismae.contato@gmail.com&subject=Solicitação%20de%20Orçamento"
              target="_blank"
            >
            Solicitar Orçamento
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}