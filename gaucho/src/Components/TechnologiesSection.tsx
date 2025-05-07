import { useState } from 'react';

// Lista más completa de tecnologías con categorías
const techCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: "R", color: "#61DAFB" },
      { name: "Vue", icon: "V", color: "#4FC08D" },
      { name: "Angular", icon: "A", color: "#DD0031" },
      { name: "TypeScript", icon: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "T", color: "#06B6D4" }
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "N", color: "#339933" },
      { name: "Python", icon: "P", color: "#3776AB" },
      { name: "Go", icon: "G", color: "#00ADD8" },
      { name: "Java", icon: "J", color: "#007396" },
      { name: "PHP", icon: "P", color: "#777BB4" }
    ]
  },
  {
    name: "Bases de Datos",
    technologies: [
      { name: "MongoDB", icon: "M", color: "#47A248" },
      { name: "PostgreSQL", icon: "P", color: "#336791" },
      { name: "MySQL", icon: "M", color: "#4479A1" },
      { name: "Redis", icon: "R", color: "#DC382D" },
      { name: "Firebase", icon: "F", color: "#FFCA28" }
    ]
  },
  {
    name: "DevOps",
    technologies: [
      { name: "Docker", icon: "D", color: "#2496ED" },
      { name: "Kubernetes", icon: "K", color: "#326CE5" },
      { name: "AWS", icon: "A", color: "#FF9900" },
      { name: "Azure", icon: "A", color: "#0078D4" },
      { name: "CI/CD", icon: "CI", color: "#43A047" }
    ]
  }
];

export const TechnologiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-10 overflow-hidden bg-[#80A8D6] -mt-8 md:-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título con efectos visuales */}
        <div className="flex justify-center mb-2 md:mb-6">
          <div className="inline-flex items-center">
            <h2 className="text-2xl sm:text-4xl font-mono text-white mx-4 sm:mx-6 font-bold relative">
              <span className="relative inline-block">
                TECNOLOGÍAS
              </span>
            </h2>
          </div>
        </div>

        {/* Selector de categorías */}
        <div className="flex justify-center mb-5 md:mb-8 overflow-x-auto pb-2">
          <div className="inline-flex border border-white bg-white rounded-lg backdrop-blur-sm overflow-hidden">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-3 sm:px-6 py-2 md:py-3 transition-all duration-300 text-xs sm:text-sm uppercase ${
                  activeCategory === index
                    ? "bg-[#80A8D6] text-white border-b-2 border-[#F2BF5D]"
                    : "bg-white text-[#80A8D6] hover:bg-[#80A8D6] hover:text-white"
                }`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de tecnologías con animación y efectos */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
          {techCategories[activeCategory].technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1a1a1a] border border-[#80A8D6]/30 mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#80A8D6]/20 relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                  style={{ background: tech.color }}
                ></div>
                <span 
                  className="text-[#80A8D6] font-bold text-xl sm:text-2xl group-hover:text-white transition-colors duration-300"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
              </div>
              <span className="text-white uppercase text-sm sm:text-base font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
              {/* Línea animada debajo del nombre de la tecnología */}
              <div className="h-0.5 w-0 bg-[#F8BC47] mt-1 group-hover:w-15 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Decoraciones de fondo */}
        {/* <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#80A8D6]/5 blur-3xl -z-10"></div> */}
        {/* <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#F8BC47]/5 blur-3xl -z-10"></div> */}
      </div>
      <div className="absolute mt-15 md:mt-7 left-0 right-0 h-3 bg-gradient-to-b from-[#80A8D6] to-[#2b2b2c] opacity-100"></div>
      {/* Línea de separación al final */}
    </section>
  );
};