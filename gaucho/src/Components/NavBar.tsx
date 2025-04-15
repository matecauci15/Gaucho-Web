
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Mail } from 'lucide-react';
// import logo from "../assets/logoGaucho.png"
import gaucho from "../assets/gaucho.png"
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (event: React.MouseEvent, section: string) => {
    event.preventDefault();
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Inicio", icon: Home, section: "bann" },
    { name: "Nosotros", icon: User, section: "about" },
    { name: "Proyectos", icon: Code, section: "projects" },
    { name: "Contacto", icon: Mail, section: "contact" }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
      ${isScrolled 
        ? 'bg-gradient-to-r from-black/70 via-black/80 to-black/70 backdrop-blur-lg shadow-2xl' 
        : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/Gaucho-Lab"} className="flex items-center">
        <img src={gaucho} alt="Gaucho Logo" className='h-10'/>
        </Link>
        {/* Logo with enhanced styling */}
        {/* <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "home")}
          className="
            text-2xl font-extrabold 
            bg-gradient-to-r from-[#73a9d8] to-white 
            bg-clip-text text-transparent 
            hover:from-white hover:to-[#73a9d8] 
            transition-all duration-500 
            transform hover:scale-105
            flex items-center gap-2
          "
        >
          GAUCHO LAB
        </a> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.section}`}
              onClick={(e) => scrollToSection(e, item.section)}
              className="
                group flex items-center gap-2
                text-white hover:text-white 
                transition-all duration-300 
                relative
                before:absolute before:bottom-[-4px] before:left-0 before:w-0 
                before:h-[2px] before:bg-gradient-to-r before:from-[#f8bc47] before:to-[#f8bc47] 
                hover:before:w-full before:transition-all before:duration-300
              "
            >
              <item.icon 
                className="text-white group-hover:text-[#F8Be47] transition-colors" 
                size={20} 
              />
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
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
                <item.icon 
                  className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
                  size={20} 
                />
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;