import './Services.css'
import RGBLine from './RGBLine'

export default function Services() {
  const services = [
    {
      title: 'Sites Institucionais',
      desc: 'Criação de sites profissionais para empresas, escolas, ONGs e profissionais autônomos, com design moderno e responsivo.'
    },
    {
      title: 'Landing Pages',
      desc: 'Páginas estratégicas focadas em conversão, ideais para campanhas, captação de leads e divulgação de serviços.'
    },
    {
      title: 'Web Design',
      desc: 'Layouts modernos focados em experiência e identidade.'
    },
    {
      title: 'Manutenção e Suporte',
      desc: 'Correções, atualizações e suporte técnico contínuo para garantir o funcionamento e segurança do seu site.'
    },
    {
      title: 'Hospedagem e Publicação',
      desc: 'Configuração, publicação e hospedagem do seu projeto, deixando tudo pronto para funcionar na internet.'
    },
    {
      title: 'SEO e Performance',
      desc: 'Otimização básica para melhorar velocidade, posicionamento no Google e desempenho geral do site.'
    }
  ]

  return (
    <section className="services" id="services">
      <h2>Serviços</h2>
      <RGBLine width={160} />

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}