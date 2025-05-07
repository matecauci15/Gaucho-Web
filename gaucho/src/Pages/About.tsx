
// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import gaucho from '../assets/gaucho.png';
// import mate from '../assets/mate.jpeg';


// // Datos del equipo con URLs de imágenes de Pexels
// const teamMembers = [
//   { 
//     name: 'Mateo Caucino', 
//     role: 'Fundador & Desarrollador Principal',
//     expertise: ['Arquitectura Cloud', 'Integración IA'],
//     imageUrl: mate
//   },
//   { 
//     name: 'Agustin Caucino', 
//     role: 'Especialista en Automatización',
//     expertise: ['Automatización', 'IA'],
//     imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Francisco Baeck', 
//     role: 'Desarrollador Backend',
//     expertise: ['Microservicios', 'Ciberseguridad'],
//     imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Francisco Caucino', 
//     role: 'Desarrolladora Frontend',
//     expertise: ['React', 'UI/UX'],
//     imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Tomas Caucino', 
//     role: 'UX/UI Designer',
//     expertise: ['Diseño UX', 'Prototipado'],
//     imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Fernando Darder', 
//     role: 'Project Manager',
//     expertise: ['Agile', 'Gestión de Equipo'],
//     imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
//   }
// ];

// export const About: React.FC = () => {
//   const [expandedMember, setExpandedMember] = useState<number | null>(null);

//   const toggleMember = (index: number) => {
//     if (expandedMember === index) {
//       setExpandedMember(null);
//     } else {
//       setExpandedMember(index);
//     }
//   };

//   return (
//     <section className="bg-[#1A1A1A] py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-mono">
//       {/* Logo y tag */}
//       <div className="flex flex-col items-center mb-16 sm:mb-20">
//         <img src={gaucho} alt='Logo Gaucho Lab' className='w-52 sm:w-64 md:w-70 h-auto' />
//         <div className="px-4 py-1 mt-4 text-sm font-medium bg-[#80A8D6] rounded-full text-white">
//           SOFTWARE & AUTOMATION
//         </div>
//       </div>
      
//       {/* Contenido principal en layout horizontal */}
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-8 md:gap-12">
//           {/* Columna izquierda: Descripción */}
//           <div className="md:w-1/2">
//             <div className='mb-6 sm:mb-10 font-extrabold text-3xl sm:text-4xl md:text-5xl text-white'>
//               <h1>QUIENES SOMOS</h1>
//             </div>
//             <div className="mb-10 md:mb-16">
//               <p className="text-white/80 leading-relaxed border-l-4 border-[#F2BF5D] pl-4 text-sm sm:text-base">
//                 En Gaucho Lab creamos soluciones tecnológicas para
//                 mejorar la eficiencia de empresas y emprendimientos.
//                 Somos un equipo joven, multidisciplinario, con base en
//                 Rosario, que combina creatividad, estrategia y desarrollo
//                 para resolver desafíos con software, automatizaciones y
//                 bots inteligentes.
//               </p>
//             </div>
//           </div>
          
//           {/* Columna derecha: Equipo */}
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//               {teamMembers.map((member, index) => (
//                 <div 
//                   key={index}
//                   className="flex flex-col items-center mb-6 sm:mb-0"
//                 >
//                   {/* Imagen circular */}
//                   <div 
//                     onClick={() => toggleMember(index)}
//                     className="cursor-pointer transition-all duration-300 hover:scale-105 text-center z-10"
//                   >
//                     <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full overflow-hidden  border-2 border-[#80A8D6] hover:border-[#F2BF5D] mx-auto">
//                       <img 
//                         src={member.imageUrl} 
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
                    
//                     {/* Mostrar nombre sólo cuando no está expandido */}
//                     {expandedMember !== index && (
//                       <>
//                         <h4 className="text-white text-center mt-2 mb-1 font-medium text-xs sm:text-sm md:text-base">
//                           {member.name}
//                         </h4>
//                         <div className="flex justify-center">
//                           <ChevronDown 
//                             size={16} 
//                             className="text-[#80A8D6]" 
//                           />
//                         </div>
//                       </>
//                     )}
//                   </div>
                  
//                   {/* Información expandible */}
//                   <div 
//                     className={`bg-[#80a8d6] overflow-hidden transition-all duration-300 max-w-full w-full rounded-2xl ${
//                       expandedMember === index ? 'max-h-48 opacity-100 -mt-10' : 'max-h-0 opacity-0'
//                     }`}
//                   >
//                     <div className="py-3 mt-6 px-2">
//                       {/* Nombre movido al desplegable */}
//                       <h4 className="text-white text-center font-bold mb-1 text-xs sm:text-sm md:text-base">
//                         {member.name}
//                       </h4>
//                       <p className="text-white text-xs sm:text-sm text-center mb-2">{member.role}</p>
//                       <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
//                         {member.expertise.map((skill, i) => (
//                           <span key={i} className="text-xs px-2 py-1 bg-[#1A1A1A]/20 text-white rounded">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Separador */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-[#80A8D6]/30 to-transparent mt-8 sm:mt-10"></div>
//       </div>
//     </section>
//   );
// };



// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import gaucho from '../assets/gaucho.png';
// import mate from '../assets/mate.jpg';
// import agus from '../assets/agustin.jpeg';
// import { useInView } from 'react-intersection-observer';
// import franb from '../assets/franb.jpeg';


// // Datos del equipo con URLs de imágenes de Pexels
// const teamMembers = [
//   { 
//     name: 'Mateo Caucino', 
//     role: 'Fundador & Desarrollador Principal',
//     expertise: ['Desarrollo Web', 'Integración IA'],
//     imageUrl: mate
//   },
//   { 
//     name: 'Agustin Caucino', 
//     role: 'Especialista en Automatización',
//     expertise: ['Automatización', 'IA'],
//     imageUrl: agus
//   },
//   { 
//     name: 'Francisco Baeck', 
//     role: 'Desarrollador Backend',
//     expertise: ['Microservicios', 'Ciberseguridad'],
//     imageUrl: franb
//   },
//   { 
//     name: 'Francisco Caucino', 
//     role: 'Desarrolladora Frontend',
//     expertise: ['React', 'UI/UX'],
//     imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Tomas Caucino', 
//     role: 'UX/UI Designer',
//     expertise: ['Diseño UX', 'Prototipado'],
//     imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Fernando Darder', 
//     role: 'Project Manager',
//     expertise: ['Agile', 'Gestión de Equipo'],
//     imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   { 
//     name: 'Nacho Gentile', 
//     role: 'Project Manager',
//     expertise: ['Agile', 'Gestión de Equipo'],
//     imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
//   }
// ];

// export const About: React.FC = () => {
//   const [expandedMember, setExpandedMember] = useState<number | null>(null);
//   const { ref: borderRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });


//   const toggleMember = (index: number) => {
//     if (expandedMember === index) {
//       setExpandedMember(null);
//     } else {
//       setExpandedMember(index);
//     }
//   };

//   return (
//     <section className="bg-[#2c2c2b] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ">
//       {/* Logo y tag */}
//       <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
//         <img
//           src={gaucho}
//           alt="Logo Gaucho Lab"
//           className="w-52 sm:w-64 md:w-72 h-auto"
//         />
//         <div className="px-4 py-1 mt-2 text-lg font-medium bg-[#80A8D6] rounded-full text-white font-mono">
//           SOFTWARE & AUTOMATION
//         </div>
//       </div>

//       {/* Contenido principal en layout horizontal */}
//       <div className="max-w-[1230px] mx-auto">
//         <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
//           {/* Columna izquierda: Descripción */}
//           <div className="md:w-1/2">
//             <div
//               className="mb-6 sm:mb-8 md:mb-10 font-bold text-4xl sm:text-4xl md:text-5xl text-white lg:text-5xl md:text-start text-center"
//               style={{
//                 fontFamily: "'JetBrains Mono, monospace",
//               }}
//             >
//               <h1>QUIENES SOMOS</h1>
//             </div>
//             <div
//               ref={borderRef}
//               className={`relative text-white max-w-lg leading-relaxed pl-6 text-sm sm:text-base md:text-[17px] ${
//                 inView ? "animate-border-slide" : ""
//               }`}
//               style={{ fontFamily: "'Montserrat', sans-serif" }}
//             >
//               En Gaucho Lab creamos soluciones tecnológicas para mejorar la
//               eficiencia de empresas y emprendimientos. Somos un equipo joven,
//               multidisciplinario, con base en Rosario, que combina creatividad,
//               estrategia y desarrollo para resolver desafíos con software,
//               automatizaciones y bots inteligentes.
//             </div>
//           </div>

//           {/* Columna derecha: Equipo */}
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-2 md:grid-cols-4 md:items-center gap-4 sm:gap-5 md:gap-4 lg:gap-6">
//               {teamMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center mb-6 sm:mb-0"
//                 >
//                   {/* Contenedor con hover group para afectar todos los elementos */}
//                   <div
//                     onClick={() => toggleMember(index)}
//                     className="cursor-pointer group transition-all duration-300 hover:scale-105 text-center z-10"
//                   >
//                     <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden border-2 border-[#80A8D6] group-hover:border-[#F2BF5D] mx-auto shadow-lg">
//                       <img
//                         src={member.imageUrl}
//                         alt={member.name}
//                         className="w-full h-full object-cover filter grayscale group-hover:grayscale transition-all duration-500 transform group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Mostrar nombre sólo cuando no está expandido */}
//                     {expandedMember !== index && (
//                       <>
//                         <h4 className="text-white text-center mt-2 mb-1 font-medium text-xs sm:text-sm truncate max-w-full">
//                           {member.name}
//                         </h4>
//                         <div className="flex justify-center">
//                           <ChevronDown
//                             size={16}
//                             className="text-[#80A8D6] animate-bounce transition-transform duration-300 group-hover:scale-155 group-hover:text-[#F2BF5D]"
//                           />
//                         </div>
//                       </>
//                     )}
//                   </div>

//                   {/* Información expandible */}
//                   <div
//                     className={`bg-[#80a8d6] overflow-hidden transition-all duration-300 max-w-full w-full rounded-2xl shadow-md ${
//                       expandedMember === index
//                         ? "opacity-100 -mt-10 pt-10"
//                         : "max-h-0 opacity-0"
//                     }`}
//                     style={{
//                       maxHeight: expandedMember === index ? "200px" : "0px",
//                     }}
//                   >
//                     <div className="py-3 px-2">
//                       {/* Nombre movido al desplegable */}
//                       <h4 className="text-white text-center font-bold mb-1 text-xs sm:text-sm">
//                         {member.name}
//                       </h4>
//                       <p className="text-white text-xs text-center mb-2">
//                         {member.role}
//                       </p>
//                       <div className="flex flex-wrap justify-center gap-1">
//                         {member.expertise.map((skill, i) => (
//                           <span
//                             key={i}
//                             className="text-xs px-2 py-1 bg-[#1A1A1A]/20 text-white rounded"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Separador */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-[#80A8D6]/30 to-transparent mt-8 sm:mt-10 md:mt-12"></div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gaucho from '../assets/gaucho.png';
import mate from '../assets/mate.jpg';
import agus from '../assets/agustin.jpeg';
import { useInView } from 'react-intersection-observer';
import franb from '../assets/franb.jpeg';
import fran from '../assets/fran.jpg';
import tomi from '../assets/tomi.jpeg';
import fer from '../assets/fer.jpeg';
import nacho from '../assets/nachito.jpeg';
// Datos del equipo con URLs de imágenes de Pexels
const teamMembers = [
  { 
    name: 'Mateo Caucino', 
    role: 'Fundador & Desarrollador Principal',
    expertise: ['Desarrollo Web', 'Integración IA'],
    imageUrl: mate
  },
  { 
    name: 'Agustin Caucino', 
    role: 'Especialista en Automatización',
    expertise: ['Automatización', 'IA'],
    imageUrl: agus
  },
  { 
    name: 'Francisco Baeck', 
    role: 'Desarrollador Backend',
    expertise: ['Microservicios', 'Ciberseguridad'],
    imageUrl: franb
  },
  { 
    name: 'Francisco Caucino', 
    role: 'Desarrolladora Frontend',
    expertise: ['React', 'UI/UX'],
    imageUrl: fran
  },
  { 
    name: 'Tomas Caucino', 
    role: 'UX/UI Designer',
    expertise: ['Diseño UX', 'Prototipado'],
    imageUrl: tomi
  },
  { 
    name: 'Fernando Darder', 
    role: 'Project Manager',
    expertise: ['Agile', 'Gestión de Equipo'],
    imageUrl: fer
  },
  { 
    name: 'Nacho Gentile', 
    role: 'Project Manager',
    expertise: ['Agile', 'Gestión de Equipo'],
    imageUrl: nacho
  }
];

export const About: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const { ref: borderRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });


  const toggleMember = (index: number) => {
    if (expandedMember === index) {
      setExpandedMember(null);
    } else {
      setExpandedMember(index);
    }
  };

  // Función para renderizar un miembro del equipo
  const renderTeamMember = (member: typeof teamMembers[0], index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center mb-6 sm:mb-0"
      >
        {/* Contenedor con hover group para afectar todos los elementos */}
        <div
          onClick={() => toggleMember(index)}
          className="cursor-pointer group transition-all duration-300 hover:scale-105 text-center z-10"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 rounded-full overflow-hidden border-2 border-[#F2BF5D] group-hover:border-[#80A8D6] mx-auto shadow-lg">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale transition-all duration-500 transform group-hover:scale-110 "
            />
          </div>

          {/* Mostrar nombre sólo cuando no está expandido */}
          {expandedMember !== index && (
            <>
              <h4 className="text-white text-center mt-2 mb-1 font-medium text-xs sm:text-sm truncate max-w-full uppercase">
                {member.name}
              </h4>
              <div className="flex justify-center">
                <ChevronDown
                  size={16}
                  className="text-[#F2BF5D] animate-bounce transition-transform duration-300 group-hover:scale-155 group-hover:text-[#80A8D6]"
                />
              </div>
            </>
          )}
        </div>

        {/* Información expandible */}
        <div
          className={`bg-[#80a8d6] overflow-hidden transition-all duration-300 max-w-full w-full rounded-2xl shadow-md ${
            expandedMember === index
              ? "opacity-100 -mt-10 pt-10"
              : "max-h-0 opacity-0"
          }`}
          style={{
            maxHeight: expandedMember === index ? "200px" : "0px",
          }}
        >
          <div className="py-3 px-2">
            {/* Nombre movido al desplegable */}
            <h4 className="text-white text-center font-bold mb-1 text-xs sm:text-sm uppercase">
              {member.name}
            </h4>
            <p className="text-white text-xs text-center mb-2">
              {member.role}
            </p>
            <div className="flex flex-wrap justify-center gap-1">
              {member.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-[#1A1A1A]/20 text-white rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#2c2c2b] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ">
      {/* Logo y tag */}
      <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
        <img
          src={gaucho}
          alt="Logo Gaucho Lab"
          className="w-52 sm:w-64 md:w-72 h-auto"
        />
        <div className="px-8 py-1 mt-2 text-lg font-medium bg-white rounded-full text-[#80A8D6] font-mono">
          SOFTWARE & AUTOMATION
        </div>
      </div>

      {/* Contenido principal en layout horizontal */}
      <div className="max-w-[1900px] mx-auto">
        <div className="mt-25 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Columna izquierda: Descripción */}
          <div className="md:w-1/2 ml-15 mt-0">
            <div
              className="mb-4 lg:mt-15 sm:mb-8 md:mb-4 lg:ml-5 font-bold text-4xl sm:text-4xl md:text-5xl text-white lg:text-5xl md:text-start text-center"
              style={{
                fontFamily: "'JetBrains Mono, monospace",
              }}
            >
              <h1>QUIENES SOMOS</h1>
            </div>
            <div
              ref={borderRef}
              className={`relative text-white max-w-lg leading-relaxed pl-6 text-sm sm:text-base md:text-[17px] ${
                inView ? "animate-border-slide" : ""
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              En Gaucho Lab creamos soluciones tecnológicas para mejorar la
              eficiencia de empresas y emprendimientos. Somos un equipo joven,
              multidisciplinario, con base en Rosario, que combina creatividad,
              estrategia y desarrollo para resolver desafíos con software,
              automatizaciones y bots inteligentes.
            </div>
          </div>

          {/* Columna derecha: Equipo */}
          <div className="md:w-1/2">
            <div className="flex flex-col gap-12">
              {/* Primera fila: 4 personas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-4 lg:gap-6">
                {teamMembers.slice(0, 4).map((member, index) => 
                  renderTeamMember(member, index)
                )}
              </div>
              
              {/* Segunda fila: 3 personas centradas */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-6 md:mx-auto md:w-3/4">
                {teamMembers.slice(4).map((member, index) => 
                  renderTeamMember(member, index + 4)
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="absolute md:mt-17 mt-10 left-0 right-0 h-3 bg-gradient-to-t from-[#80A8D6] to-[#2b2b2c] opacity-100"></div>
    </section>
  );
};