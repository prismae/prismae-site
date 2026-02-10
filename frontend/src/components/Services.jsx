import './Services.css'
import RGBLine from './RGBLine'

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      desc: 'Layouts modernos focados em experiência e identidade.'
    },
    {
      title: 'Desenvolvimento',
      desc: 'Sites rápidos, escaláveis e bem estruturados.'
    },
    {
      title: 'Performance',
      desc: 'Otimização para SEO, velocidade e conversão.'
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
