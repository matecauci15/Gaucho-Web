
// import { Navbar } from './Components/NavBar'
// import { HomePage } from './Pages/HomePage'
// import './index.css'
// import { Footer } from './Components/Footer'
// import { About } from './Pages/About'
// import { ProjectsPage } from './Pages/Projects'
// import { Contact } from './Pages/Contact'
// import { TechBanner } from './Components/TechBanner'
// import { Particulas } from './Components/Particulas.tsx'
// import { MouseFollower } from './Components/MouseFollower'
// import { TechnologiesSection } from './Components/TechnologiesSection'
// // import { BlogSection } from './Components/BlogSection.tsx'
// import { BlogSection } from './Components/Blog.tsx/BlogSection.tsx';


// function App() {
//   return (
//     <div>
//       {/* Componente de partículas de fondo para toda la aplicación */}
//       <Particulas />
      
//       {/* Mouse follower ahora a nivel de App */}
//       <MouseFollower />
      
//       <Navbar />
//       <main>
//         <section id="bann">
//           <TechBanner />
//         </section>
//         <section id="about">
//           <About />
//         </section>
//         <section id="home">
//           <HomePage />
//         </section>
//         <section id="technologies">
//           <TechnologiesSection />
//         </section>
//         <section id="projects">
//           <ProjectsPage />
//         </section>
//         {/* <section id="Blog">
//           <BlogSection />
//         </section> */}
//         <section id="blog">
//           <BlogSection />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



// // src/App.tsx
// import { Routes, Route } from 'react-router-dom';
// import { Navbar } from './Components/NavBar';
// import { Footer } from './Components/Footer';
// import { Particulas } from './Components/Particulas.tsx';
// import { MouseFollower } from './Components/MouseFollower';
// import { MainPage } from './Pages/MainPage';
// import { BlogDetail } from './Components/Blog.tsx/BlogDetail';
// import './index.css';
// import ScrollToTop  from './Components/ScrollToTop';

// function App() {
//   return (
//     <>
//       <Particulas />
//       <MouseFollower />
//       <Navbar />

//       {/* Componente para hacer scroll al inicio al cambiar de ruta */}
//       <ScrollToTop />

//       <main>
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/blog/:id" element={<BlogDetail />} />
//           <Route path="*" element={<MainPage />} /> {/* ← Añadí esta línea */}
//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;



// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { Particulas } from './Components/Particulas.tsx';
import { MouseFollower } from './Components/MouseFollower';
import { MainPage } from './Pages/MainPage';
// import { BlogDetail } from './Components/Blog.tsx/BlogDetail';
import './index.css';
import ScrollToTop  from './Components/ScrollToTop';
import { TermsPage } from './Pages/TermsPage.tsx';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <>
      <Particulas />
      <MouseFollower />
      <Navbar />

      {/* Componente para hacer scroll al inicio al cambiar de ruta */}
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<MainPage />} /> {/* ← Añadí esta línea */}
          <Route path="/terms" element={<TermsPage />} /> {/* ← Añadí esta línea */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
