
// import React, { useState, useEffect } from 'react';
// import { Menu, X, Code, Home, User, Mail } from 'lucide-react';
// // import logo from "../assets/logoGaucho.png"
// import gaucho from "../assets/gaucho.png"
// import { Link } from 'react-router-dom';
// import iso5 from "../assets/iso5.png"

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (event: React.MouseEvent, section: string) => {
//     event.preventDefault();
//     const target = document.getElementById(section);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { name: "Inicio", icon: Home, section: "bann" },
//     { name: "Nosotros", icon: User, section: "about" },
//     { name: "Proyectos", icon: Code, section: "projects" },
//     { name: "Contacto", icon: Mail, section: "contact" }
//   ];

//   return (
//     <nav className={`
//       fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
//       ${isScrolled 
//         ? 'bg-gradient-to-r from-black/70 via-black/80 to-black/70 backdrop-blur-lg shadow-2xl' 
//         : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to={"/Gaucho-Lab"} className="flex items-center">
//         <img src={gaucho} alt="Gaucho Logo" className='h-10'/>
//         </Link>
//         {/* Logo with enhanced styling */}
//         {/* <a 
//           href="#home" 
//           onClick={(e) => scrollToSection(e, "home")}
//           className="
//             text-2xl font-extrabold 
//             bg-gradient-to-r from-[#73a9d8] to-white 
//             bg-clip-text text-transparent 
//             hover:from-white hover:to-[#73a9d8] 
//             transition-all duration-500 
//             transform hover:scale-105
//             flex items-center gap-2
//           "
//         >
//           GAUCHO LAB
//         </a> */}

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={`#${item.section}`}
//               onClick={(e) => scrollToSection(e, item.section)}
//               className="
//                 group flex items-center gap-2
//                 text-white hover:text-white 
//                 transition-all duration-300 
//                 relative
//                 before:absolute before:bottom-[-4px] before:left-0 before:w-0 
//                 before:h-[2px] before:bg-gradient-to-r before:from-[#f8bc47] before:to-[#f8bc47] 
//                 hover:before:w-full before:transition-all before:duration-300
//               "
//             >
//               <item.icon 
//                 className="text-white group-hover:text-[#F8Be47] transition-colors" 
//                 size={20} 
//               />
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`
//               text-gray-300 hover:text-white 
//               transition-all duration-300 
//               transform ${isMenuOpen ? "rotate-90" : ""}
//               hover:scale-110
//             `}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="
//             absolute top-full left-0 w-full 
//             bg-gradient-to-br from-black/90 via-black/95 to-black/90 
//             backdrop-blur-lg 
//             md:hidden 
//             shadow-2xl
//             animate-slide-in-down
//           ">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={`#${item.section}`}
//                 onClick={(e) => scrollToSection(e, item.section)}
//                 className="
//                   flex items-center gap-3 
//                   px-4 py-3 
//                   text-gray-300 hover:text-white 
//                   hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 
//                   transition-all duration-300
//                 "
//               >
//                 <item.icon 
//                   className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
//                   size={20} 
//                 />
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code, Home, User, Mail, ArrowUp } from 'lucide-react';
import gaucho from "../assets/gaucho.png";
import iso1 from "../assets/iso_1.png";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showTopButton, setShowTopButton] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowTopButton(window.scrollY > 300);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (event: React.MouseEvent, section: string) => {
    event.preventDefault();
  
    const sectionRoutes = ['banner', 'about', 'projects', 'contact', 'technologies', 'home', 'blog'];
    const currentSection = location.pathname.replace('/', '');
  
    const isInLanding = sectionRoutes.includes(currentSection) || location.pathname === '/';
  
    if (!isInLanding) {
      // Si estás fuera del landing (ej: blog detail), redirige a la sección
      navigate(`/${section}`);
    } else {
      // Ya estás en el landing, scroll dentro del DOM
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, '', `/${section}`);
      }
    }
  
    setIsMenuOpen(false);
  };
  const navItems = [
    { name: "Inicio", icon: Home, section: "banner" },
    { name: "Nosotros", icon: User, section: "about" },
    { name: "Proyectos", icon: Code, section: "projects" },
    { name: "Contacto", icon: Mail, section: "contact" }
  ];

  const logoImage = windowWidth < 768 ? iso1 : gaucho;
  const logoAlt = windowWidth < 768 ? "ISO5 Logo" : "Gaucho Logo";

  return (
    <>
      <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out uppercase font-mono text-[14px]
        ${isScrolled ? 'bg-[#222221] backdrop-blur-lg shadow-2xl' : 'bg-transparent'}
      `}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none"
            aria-label="Back to top"
          >
            <img src={logoImage} alt={logoAlt} className='h-10' />
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.section}`}
                onClick={(e) => scrollToSection(e, item.section)}
                className="
                  group flex gap-2
                  text-white hover:text-white 
                  transition-all duration-300 
                  relative
                  before:absolute before:bottom-[-4px] before:left-0 before:w-0 
                  before:h-[2px] before:bg-gradient-to-r before:from-[#f8bc47] before:to-[#f8bc47] 
                  hover:before:w-full before:transition-all before:duration-300
                "
              >
                <item.icon className="text-[#F2BF5D] group-hover:text-[#F2BF5D] transition-colors" size={18} />
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                text-gray-300 hover:text-white 
                transition-all duration-300 
                transform ${isMenuOpen ? "rotate-90" : ""}
                hover:scale-110
              `}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="
              absolute top-full left-0 w-full 
              bg-gradient-to-br from-black/90 via-black/95 to-black/90 
              backdrop-blur-lg 
              md:hidden 
              shadow-2xl
              animate-slide-in-down
            ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.section}`}
                  onClick={(e) => scrollToSection(e, item.section)}
                  className="
                    flex items-center gap-3 
                    px-4 py-3 
                    text-gray-300 hover:text-white 
                    hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 
                    transition-all duration-300
                  "
                >
                  <item.icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 z-50
          w-12 h-12 rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-[#f8bc47] to-[#f8bc47]/80
          text-white shadow-lg
          hover:scale-110 transition-all duration-300
          ${showTopButton ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Navbar;
