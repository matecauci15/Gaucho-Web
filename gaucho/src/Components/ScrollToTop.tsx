
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Si estás en un post del blog, no hacer scroll automático
    if (path.startsWith('/blog/')) return;

    const sectionId = path.replace('/', '') || 'banner';
    const target = document.getElementById(sectionId);

    if (target) {
      // Dar tiempo a que se monte el DOM
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

export default ScrollToTop;

