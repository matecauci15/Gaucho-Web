import { Navbar } from './Components/NavBar'
import { HomePage } from './Pages/HomePage'
import './index.css'
import { Footer } from './Components/Footer'
import { About } from './Pages/About'
import { ProjectsPage } from './Pages/Projects'
import { Contact } from './Pages/Contact'
// import { TechSolutions } from './Pages/techsolutions'
import { TechBanner } from './Components/TechBanner'
import { Particulas } from './Components/Particulas.tsx'

function App() {
  return (
    <div>
      {/* Componente de partículas de fondo para toda la aplicación */}
      <Particulas />
      
      <Navbar />
      <main>
        <section id="bann">
          <TechBanner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="home">
          <HomePage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <Contact />
        </section>
        {/* <section id="bot">
          <TechSolutions />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;