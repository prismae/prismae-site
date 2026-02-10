import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import RGBLine from '../components/RGBLine'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section>
        <Services />
      </section>

      {/* SEPARADOR RGB */}
      <RGBLine width={240} center />

      {/* PROJECTS */}
      <section>
        <Projects />
      </section>

      {/* CONTACT */}
      <section>
        <Contact />
      </section>
    </main>
  )
}
