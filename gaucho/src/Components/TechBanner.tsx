
import React, { useState, useEffect } from "react";
import { Brain, Globe, Code, Bot } from "lucide-react";
import iso5 from "../assets/ISO5-8.png";

export const TechBanner: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Efecto para la nueva animación de fade-in con escala
  useEffect(() => {
    // Iniciar con opacidad 0
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
      title: "Automatizaciónes & Chat Bots",
      description:
        "Soluciones de IA y chatbots personalizados para automatizar procesos y mejorar la experiencia de usuario",
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description:
        "Sitios web y landing pages de alto impacto optimizados para captación y conversión",
    },
    {
      icon: Code,
      title: "Apps & Sistemas a Medida",
      description: "Software y aplicaciones personalizadas que automatizan y optimizan los procesos de su negocio",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#2c2c2b] text-cyan-400 overflow-hidden">
      <img
        src={iso5}
        alt="Marca de agua Gaucho"
        className="
          absolute z-0 pointer-events-none
          top-1/2
          left-1/2 md:left-[70%]
          -translate-x-1/2 md:translate-x-0
          -translate-y-1/2
          max-w-none
        "
      />

      <div className="container mx-auto px-4 relative z-10 pt-36 flex flex-col items-center text-center md:text-left md:items-start mb-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 
              className="text-6xl font-bold mb-4 leading-tight text-white uppercase transition-all duration-1000 transform"
              style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'}) scale(${animationComplete ? 1 : 0.95})`
              }}
            >
              Tecnología que trabaja <span className="font-extrabold text-[#80A8D6]">POR VOS</span>
            </h1>
            <p 
              className="text-xl text-white mb-6 transition-all duration-1000 delay-200"
              style={{ 
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'})`
              }}
            >
              Transformando los límites de la innovación mediante sistemas de
              inteligencia computacional de próxima generación.
            </p>
            <div 
              className="flex space-x-4 transition-all duration-1000 delay-300"
              style={{ 
                opacity: opacity,
                transform: `translateY(${animationComplete ? '0' : '20px'})`
              }}
            >
              <button className="group border-3 border-[#80A8D6] hover:bg-[#80A8D6] text-white px-6 py-3 rounded-full transition-all flex items-center shadow-lg">
                <Bot className="mr-2 text-[#F2BF5D] group-hover:text-white transition-colors duration-300" />
                Iniciar Transformación
              </button>
              <button className="group border-3 border-[#80A8D6] hover:bg-[#80A8D6] text-white px-6 py-3 rounded-full transition-all flex items-center shadow-lg">
                <Code className="mr-2 text-[#F2BF5D] group-hover:text-white transition-colors duration-300" />{" "}
                Explorar Tecnologías
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border-3 border-[#80A8D6] p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:border-cyan-200"
                style={{ 
                  opacity: opacity,
                  transitionDelay: `${400 + index * 100}ms`,
                  transform: animationComplete ? 'translateX(0)' : 'translateX(50px)'
                }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="mr-4 text-[#F2BF5D]" size={40} />
                  <h3 
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#80A8D6] via-[#f8bc47] to-white opacity-50"></div>
    </div>
  );
};