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
