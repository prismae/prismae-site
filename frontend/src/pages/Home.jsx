import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
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

      {/* PRICING */}
      <section>
        <Pricing />
      </section>

      {/* TESTIMONIALS */}
      <section>
        <Testimonials />
      </section>
      
      {/* CONTACT */}
      <section>
        <Contact />
      </section>
    </main>
  )
}
