import './Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {['Landing Page', 'E-commerce', 'Sistema Web'].map((item, index) => (
          <div className="project-card" key={index}>
            <div className="project-overlay">
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
