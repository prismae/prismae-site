import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: "START",
      subtitle: "Presença Digital Básica",
      color: "start",
      projectPrice: "R$ 1.200 a R$ 2.500",
      hosting: "R$ 59,99 / mês",
      maintenance: "R$ 300 a R$ 600 / ano",
      features: [
        "Site institucional (até 5 páginas)",
        "Design responsivo",
        "Formulário de contato",
        "Publicação e configuração inicial",
        "Hospedagem"
      ]
    },
    {
      name: "PRO",
      subtitle: "Site Profissional Completo",
      color: "pro",
      projectPrice: "R$ 2.500 a R$ 4.000",
      hosting: "R$ 59,99 / mês",
      maintenance: "R$ 800 a R$ 1.500 / ano",
      features: [
        "Site completo (8 a 12 páginas)",
        "Identidade visual profissional",
        "Animações e interações",
        "Formulários avançados",
        "SEO básico",
        "Responsividade total",
        "Hospedagem"
      ]
    },
    {
      name: "PREMIUM",
      subtitle: "Sistema ou Plataforma Completa",
      color: "premium",
      projectPrice: "R$ 6.000 a R$ 12.000+",
      hosting: "R$ 59,99 / mês",
      maintenance: "A partir de R$ 2.000 / ano",
      features: [
        "Sistema Web (React + Python)",
        "Painel administrativo",
        "Banco de dados",
        "Controle de usuários",
        "Relatórios e dashboards",
        "Segurança e otimização",
        "Hospedagem"
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

            <button>Solicitar Orçamento</button>
          </div>
        ))}
      </div>
    </section>
  )
}