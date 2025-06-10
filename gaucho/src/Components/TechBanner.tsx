import React, { useState, useEffect } from "react";
import { Brain, Globe, Code, Bot } from "lucide-react";
import iso5 from "../assets/ISO5-8.png";
import { Link } from "react-router-dom";

export const TechBanner: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Efecto para la nueva animación de fade-in con escala
  useEffect(() => {
    setOpacity(0);
    
    // Animar hacia opacidad 1 después de un pequeño retraso
    const timer = setTimeout(() => {
      setOpacity(1);
      setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const techFeatures = [
    {
      icon: Brain,
      title: "Gaucho App",
      description:
        "Diseñada para automatizar el seguimiento de clientes y escalar la comunicación digital",
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description:
        "Creamos sitios web optimizados para captar más clientes y potenciar tu presencia online",
      // El sitio web ideal para tu negocio
    },
    {
      icon: Code,
      title: "Desarrollos a medida",
      description:
        "Construimos el sistema que se adapta a las necesidades de tu negocio",
    },
  ];

  //   const techFeatures = [
  //   {
  //     icon: Brain,
  //     title: "Automatizaciónes",
  //     description:
  //       "Soluciones de IA y chatbots personalizados para automatizar procesos y mejorar la experiencia de usuario",
  //   },
  //   {
  //     icon: Globe,
  //     title: "Desarrollo Web",
  //     description:
  //       "Sitios web y landing pages de alto impacto optimizados para captación y conversión",
  //   },
  //   {
  //     icon: Code,
  //     title: "Apps & Sistemas a Medida",
  //     description: "Software y aplicaciones personalizadas que automatizan y optimizan los procesos de su negocio",
  //   },
  // ];


  return (
    <div className="relative w-full min-h-screen bg-[#2c2c2b]  overflow-hidden">
      {/* Importación de fuentes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600&display=swap');
          `,
        }}
      />
      
      <img
        src={iso5}
        alt="Marca de agua Gaucho"
        className="
          absolute z-0 pointer-events-none opacity-50
          top-1/2
          left-1/2 md:left-[85%]
          -translate-x-1/2 md:-translate-x-1/3
          -translate-y-1/2
          max-w-none
          w-full md:w-3/4 lg:w-1/2
        "
      />

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-28 lg:pt-36 flex flex-col items-center text-center md:text-left md:items-start mb-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 
              className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight text-white uppercase transition-all duration-1000 transform  "
              style={{ 
                fontFamily: "'JetBrains Mono', monospace",
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'}) scale(${animationComplete ? 1 : 0.95})`
              }}
            >
              {/* Tecnología que trabaja <span className="font-extrabold text-[#80A8D6]">POR VOS</span> */}
               {/* <span className="font-extrabold text-[#80A8D6]">Tecnología</span> al servicio de tu  negocio */}
              Tecnología al servicio de <br />   <span className="font-extrabold text-[#73A9D8]">tu negocio</span>
            </h1>
            <p 
              className="sm:text-md text-xs md:text-[17px] text-white mb-6 mt-4 md:mb-6 transition-all duration-1000 delay-200"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'})`
              }}
            >
              {/* Transformando los límites de la innovación mediante sistemas <br /> de
              inteligencia computacional de próxima generación. */}
              Mejorá y automatizá la comunicación con tus clientes
            </p>
            <div 
              className="flex items-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-300"
              style={{ 
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'})`
              }}
            >
<Link to="/contact">
  <button className="group border-2 md:border-3 border-[#73A9D8] hover:bg-[#73A9D8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all flex items-center justify-center shadow-lg text-sm md:text-sm sm:text-base uppercase"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
    <Bot className="mr-2 text-[#F2BF5D] group-hover:text-white transition-colors duration-300" size={22} />
    Iniciar Transformación
  </button>
</Link>

<Link to="/projects">
  <button className="group border-2 md:border-3 border-[#73A9D8] hover:bg-[#73A9D8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all flex items-center justify-center shadow-lg text-sm sm:text-base uppercase md:text-sm"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
    <Code className="mr-2 text-[#F2BF5D] group-hover:text-white transition-colors duration-300" size={22} />{" "}
    Explorar Tecnologías
  </button>
</Link>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border-2 md:border-3 border-[#73A9D8] p-4 md:p-6 rounded-xl transform transition-all duration-300 hover:scale-105"
                style={{ 
                  opacity: opacity,
                  transitionDelay: `${400 + index * 100}ms`,
                  transform: animationComplete ? 'translateX(0)' : 'translateX(50px)'
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-2 md:mb-4">
                  <div className="flex justify-center mb-2 sm:mb-0">
                    <feature.icon className="sm:mr-4 text-[#F2BF5D]" size={28} />
                  </div>
                  <h3 
                    className="text-center sm:text-left text-lg md:text-xl font-semibold text-white uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#80A8D6] via-[#f8bc47] to-white opacity-50"></div>
    </div>
  );
};