
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gaucho from '../assets/gaucho.png';

// Datos del equipo con URLs de imágenes de Pexels
const teamMembers = [
  { 
    name: 'Mateo Caucino', 
    role: 'Fundador & Desarrollador Principal',
    expertise: ['Arquitectura Cloud', 'Integración IA'],
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    name: 'Luciana Gomez', 
    role: 'Especialista en Automatización',
    expertise: ['Automatización', 'IA'],
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    name: 'Nando Pereira', 
    role: 'Desarrollador Backend',
    expertise: ['Microservicios', 'Ciberseguridad'],
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    name: 'Elena Ruiz', 
    role: 'Desarrolladora Frontend',
    expertise: ['React', 'UI/UX'],
    imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    name: 'Carlos Méndez', 
    role: 'UX/UI Designer',
    expertise: ['Diseño UX', 'Prototipado'],
    imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    name: 'Sofía Torres', 
    role: 'Project Manager',
    expertise: ['Agile', 'Gestión de Equipo'],
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const About: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleMember = (index: number) => {
    if (expandedMember === index) {
      setExpandedMember(null);
    } else {
      setExpandedMember(index);
    }
  };

  return (
    <section className="bg-[#1A1A1A] py-20 px-6 font-mono">
      {/* Logo y tag */}
      <div className="flex flex-col items-center mb-25">
        <img src={gaucho} alt='Logo Gaucho Lab' className='w-70 h-20' />
        <div className="max-w-53 px-4 py-1 mt-4 text-sm font-medium bg-[#80A8D6] rounded-full text-white">
          SOFTWARE & AUTOMATION
        </div>
      </div>
      
      {/* Contenido principal en layout horizontal */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Columna izquierda: Descripción */}
          <div className="md:w-1/2">
            <div className='mb-10 font-extrabold text-5xl text-white'>
              <h1>QUIENES SOMOS</h1>
            </div>
            <div className="mb-16">
              <p className="text-white/80 leading-relaxed border-l-4 border-[#F2BF5D] pl-4">
                En Gaucho Lab creamos soluciones tecnológicas para
                mejorar la eficiencia de empresas y emprendimientos.
                Somos un equipo joven, multidisciplinario, con base en
                Rosario, que combina creatividad, estrategia y desarrollo
                para resolver desafíos con software, automatizaciones y
                bots inteligentes.
              </p>
            </div>
          </div>
          
          {/* Columna derecha: Equipo */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center"
                >
                  {/* Imagen circular */}
                  <div 
                    onClick={() => toggleMember(index)}
                    className="cursor-pointer transition-all duration-300 hover:scale-105 text-center z-10"
                  >
                    <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-[#80A8D6] hover:border-[#F2BF5D] mx-auto">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Mostrar nombre sólo cuando no está expandido */}
                    {expandedMember !== index && (
                      <>
                        <h4 className="text-white text-center mt-2 mb-1 font-medium">
                          {member.name}
                        </h4>
                        <div className="flex justify-center">
                          <ChevronDown 
                            size={16} 
                            className="text-[#80A8D6]" 
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Información expandible */}
                  <div 
                    className={`bg-[#80a8d6] overflow-hidden transition-all duration-300 max-w-full w-full rounded-2xl ${
                      expandedMember === index ? 'max-h-48 opacity-100 -mt-10 ' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-3 mt-6 px-2">
                      {/* Nombre movido al desplegable */}
                      <h4 className="text-white text-center font-bold mb-1">
                        {member.name}
                      </h4>
                      <p className="text-white text-sm text-center mb-2">{member.role}</p>
                      <div className="flex flex-wrap justify-center gap-2 ">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-[#1A1A1A]/20 text-white rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Separador */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#80A8D6]/30 to-transparent mt-10"></div>
      </div>
    </section>
  );
};