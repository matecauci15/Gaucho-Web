
// import React, { useState, useEffect } from 'react';
// import { Globe, Bot, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
// import ofi from '../assets/ofi.png'
// import manos from '../assets/manos.png'
// import amc from '../assets/amc.png'
// import lab from '../assets/lab.png'
// import equipo from '../assets/equipo.png'


// interface Proyecto {
//   id: number;
//   titulo: string;
//   fecha?: string;
//   descripcion: string;
//   tecnologias?: string[];
//   icono: React.ReactNode;
// }

// interface Paso {
//   numero: number;
//   titulo: string;
//   descripcion?: string;
// }

// interface Foto {
//   id: number;
//   alt: string;
//   url: string;  // Esta sería una URL real en producción
// }

// const proyectos: Proyecto[] = [
//   {
//     id: 1,
//     titulo: "Automatización por WhatsApp para Comercios",
//     fecha: "2024",
//     descripcion: "Pedidos, consultas y confirmaciones automatizadas. Reducción del 70% en tareas operativas repetitivas.",
//     tecnologias: ["WhatsApp API", "Node.js", "Dialogflow"],
//     icono: <MessageSquare size={24} />
//   },
//   {
//     id: 2,
//     titulo: "Chatbot para Servicios Profesionales",
//     fecha: "2024",
//     descripcion: "Respuestas guiadas, derivación automática y toma de turnos. Atención fluida y sin fricciones.",
//     tecnologias: ["React", "OpenAI", "Calendly API"],
//     icono: <Bot size={24} />
//   },
//   {
//     id: 3,
//     titulo: "Sitios Web Integrados a Plataformas",
//     fecha: "2023",
//     descripcion: "Páginas institucionales y portfolios con integración a CRM, turnos y métricas.",
//     tecnologias: ["Next.js", "Tailwind", "Vercel"],
//     icono: <Globe size={24} />
//   },
// ];

// const pasos: Paso[] = [
//   {
//     numero: 1,
//     titulo: "Reunión inicial:",
//     descripcion: "entendemos tu necesidad."
//   },
//   {
//     numero: 2,
//     titulo: "Diagnóstico y propuesta personalizada."
//   },
//   {
//     numero: 3,
//     titulo: "Desarrollo:",
//     descripcion: "fases, entregas y validaciones."
//   },
//   {
//     numero: 4,
//     titulo: "Entrega final y soporte continuo."
//   },
//   {
//     numero: 5,
//     titulo: "Actualizaciones mensuales",
//     descripcion: "(opcional)."
//   }
// ];

// // Fotos del equipo y la oficina para el carrusel
// const fotos: Foto[] = [
//   {
//     id: 1,
//     alt: "Equipo trabajando en la oficina",
//     url: amc
//   },
//   {
//     id: 2,
//     alt: "Espacio de trabajo colaborativo",
//     url: lab
//   },
//   {
//     id: 3,
//     alt: "Reunión de equipo",
//     url: equipo
//   },
//   {
//     id: 4,
//     alt: "Área de descanso",
//     url: manos
//   },
//   {
//     id: 5,
//     alt: "Estación de trabajo",
//     url: ofi
//   }
// ];

// export const ProjectsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'exitos' | 'proceso'>('exitos');
//   const [activeProject, setActiveProject] = useState<Proyecto | null>(proyectos[0]);
//   const [activePhotoIndex, setActivePhotoIndex] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);

//   // Función para navegar al proyecto anterior
//   const goToPrevProject = () => {
//     const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
//     const prevIndex = currentIndex > 0 ? currentIndex - 1 : proyectos.length - 1;
//     setActiveProject(proyectos[prevIndex]);
//   };

//   // Función para navegar al proyecto siguiente
//   const goToNextProject = () => {
//     const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
//     const nextIndex = currentIndex < proyectos.length - 1 ? currentIndex + 1 : 0;
//     setActiveProject(proyectos[nextIndex]);
//   };

//   // Funciones para el carrusel de fotos
//   const goToPrevPhoto = () => {
//     setActivePhotoIndex((prevIndex) => 
//       prevIndex > 0 ? prevIndex - 1 : fotos.length - 1
//     );
//   };

//   const goToNextPhoto = () => {
//     setActivePhotoIndex((prevIndex) => 
//       prevIndex < fotos.length - 1 ? prevIndex + 1 : 0
//     );
//   };

//   const goToPhoto = (index: number) => {
//     setActivePhotoIndex(index);
//   };

//   // Autoplay para el carrusel
//   useEffect(() => {
//     let interval: ReturnType<typeof setInterval>;
    
//     if (autoplay && activeTab === 'proceso') {
//       interval = setInterval(() => {
//         goToNextPhoto();
//       }, 5000); // Cambiar foto cada 5 segundos
//     }
    
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [autoplay, activePhotoIndex, activeTab]);

//   // Pausar autoplay al hacer hover en el carrusel
//   const handleMouseEnter = () => setAutoplay(false);
//   const handleMouseLeave = () => setAutoplay(true);

  
//   return (
//     <div className="min-h-screen bg-[#2b2b2c] py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Tabs de navegación principal */}
//         <div className="flex border-b border-gray-800 mb-8 md:mb-10 md:mt-10">
//           <button
//             onClick={() => setActiveTab("exitos")}
//             className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight mr-6 transition-all font-[Montserrat] uppercase ${
//               activeTab === "exitos"
//                 ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
//                 : "text-gray-400 hover:text-gray-200"
//             }`}
//           >
//             CASOS DE ÉXITO
//           </button>
//           <button
//             onClick={() => setActiveTab("proceso")}
//             className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight transition-all font-[Montserrat] uppercase ${
//               activeTab === "proceso"
//                 ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
//                 : "text-gray-400 hover:text-gray-200"
//             }`}
//           >
//             NUESTRO PROCESO
//           </button>
//         </div>

//         {activeTab === "exitos" ? (
//           <div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start uppercase font-[Montserrat]">
//               CASOS DE ÉXITO
//             </h1>

//             {/* Vista para tablets/desktop - Lista lateral */}
//             <div className="hidden md:grid md:grid-cols-3 gap-8">
//               <div className="md:col-span-1 space-y-3">
//                 {proyectos.map((proyecto) => (
//                   <button
//                     key={proyecto.id}
//                     onClick={() => setActiveProject(proyecto)}
//                     className={`w-full text-left p-4 rounded-lg transition-all flex items-center shadow-md ${
//                       activeProject?.id === proyecto.id
//                         ? "bg-white border-l-4 border-[#F2BF5D] text-[#73a9d8]"
//                         : "bg-[#73a9d8] border-l-4 border-transparent text-white hover:border-[#F2BF5D] hover:bg-[#6499c9]"
//                     }`}
//                   >
//                     <div
//                       className={`mr-3 ${
//                         activeProject?.id === proyecto.id
//                           ? "text-[#F2BF5D]"
//                           : "text-white"
//                       }`}
//                     >
//                       {proyecto.icono}
//                     </div>
//                     <div>
//                       <p className="font-medium font-[Montserrat] uppercase">{proyecto.titulo}</p>
//                       {proyecto.fecha && (
//                         <p
//                           className={`text-sm font-[Montserrat] ${
//                             activeProject?.id === proyecto.id
//                               ? "text-gray-500"
//                               : "text-gray-100"
//                           }`}
//                         >
//                           {proyecto.fecha}
//                         </p>
//                       )}
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               {/* Detalle del proyecto activo para desktop */}
//               <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-8 border border-[#5b92c0] shadow-md">
//                 {activeProject && (
//                   <div className="h-full flex flex-col">
//                     <div className="flex items-center mb-6">
//                       <div className="p-3 rounded-full bg-[#73a9d8]/20 text-[#F8BC47] mr-4">
//                         {activeProject.icono}
//                       </div>
//                       <div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-[#73a9d8] font-[Montserrat] uppercase">
//                           {activeProject.titulo}
//                         </h2>
//                         {activeProject.fecha && (
//                           <p className="text-[#F8BC47] text-sm font-[Montserrat]">
//                             {activeProject.fecha}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-gray-800 text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                         Descripción
//                       </h3>
//                       <p className="text-gray-700 leading-relaxed font-[JetBrains Mono]">
//                         {activeProject.descripcion}
//                       </p>
//                     </div>

//                     {activeProject.tecnologias && (
//                       <div className="mt-auto">
//                         <h3 className="text-gray-800 text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                           Tecnologías
//                         </h3>
//                         <div className="flex flex-wrap gap-2">
//                           {activeProject.tecnologias.map((tech, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm font-[JetBrains Mono]"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Vista para móvil - Sistema de cards navegables */}
//             <div className="md:hidden">
//               {activeProject && (
//                 <div className="bg-white rounded-lg overflow-hidden border border-[#5b92c0] shadow-md">
//                   {/* Cabecera del proyecto */}
//                   <div className="bg-[#73a9d8] p-4 flex items-center">
//                     <div className="p-2 rounded-full bg-white/20 text-white mr-3">
//                       {activeProject.icono}
//                     </div>
//                     <div className="flex-1">
//                       <h2 className="text-lg font-bold text-white font-[Montserrat] uppercase">
//                         {activeProject.titulo}
//                       </h2>
//                       {activeProject.fecha && (
//                         <p className="text-white/80 text-sm font-[Montserrat]">
//                           {activeProject.fecha}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Contenido del proyecto */}
//                   <div className="p-5">
//                     <div className="mb-5">
//                       <h3 className="text-gray-800 text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                         Descripción
//                       </h3>
//                       <p className="text-gray-700 font-[JetBrains Mono]">
//                         {activeProject.descripcion}
//                       </p>
//                     </div>

//                     {activeProject.tecnologias && (
//                       <div>
//                         <h3 className="text-gray-800 text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                           Tecnologías
//                         </h3>
//                         <div className="flex flex-wrap gap-2">
//                           {activeProject.tecnologias.map((tech, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm font-[JetBrains Mono]"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Navegación entre proyectos */}
//                   <div className="flex border-t border-gray-200">
//                     <button
//                       onClick={goToPrevProject}
//                       className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors border-r border-gray-200 font-[Montserrat]"
//                     >
//                       <ChevronLeft size={18} className="mr-1" /> Anterior
//                     </button>
//                     <button
//                       onClick={goToNextProject}
//                       className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors font-[Montserrat]"
//                     >
//                       Siguiente <ChevronRight size={18} className="ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Indicador de posición */}
//               <div className="flex justify-center mt-4">
//                 {proyectos.map((proyecto) => (
//                   <button
//                     key={proyecto.id}
//                     onClick={() => setActiveProject(proyecto)}
//                     className={`mx-1 w-2 h-2 rounded-full transition-all ${
//                       activeProject?.id === proyecto.id
//                         ? "bg-[#F2BF5D] w-6"
//                         : "bg-gray-500 hover:bg-gray-400"
//                     }`}
//                     aria-label={`Ver proyecto ${proyecto.titulo}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start ">
//               NUESTRO PROCESO DE TRABAJO
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
//               {/* Proceso con cajas numeradas */}
//               <div className="flex flex-col space-y-8">
//                 {pasos.map((paso) => (
//                   <div
//                     key={paso.numero}
//                     className="flex items-center hover:transform hover:scale-[1.01] transition-transform duration-200"
//                   >
//                     {/* Contenedor de enumeración (caja numerada) */}
//                     <div className="z-10 shrink-0">
//                       <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white text-[#F2BF5D] text-xl md:text-3xl font-bold rounded-lg shadow-lg border-3  transition-colors duration-200 ">
//                         {paso.numero}
//                       </div>
//                     </div>

//                     {/* Contenedor de descripción (caja de contenido) */}
//                     <div
//                       className="bg-white text-xs border-[#73a9d8] md:text-lg rounded-lg py-4 px-5 ml-4 w-110 shadow-md flex items-center justify-center"
//                       style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                       <p className="font-medium">
//                         {paso.titulo}
//                         {paso.descripcion && (
//                           <span className="font-normal">
//                             {" "}
//                             {paso.descripcion}
//                           </span>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Carrusel de fotos - Reemplaza la ilustración anterior */}
//               <div
//                 className="relative overflow-hidden rounded-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* Carrusel de imágenes */}
//                 <div>
//                   {/* Contenedor del carrusel con altura fija */}
//                   <div className="relative h-64 mt-1 md:h-98 overflow-hidden rounded-lg">
//                     {/* Imágenes del carrusel con transición suave */}
//                     <div className="relative h-full w-full">
//                       {fotos.map((foto, index) => (
//                         <div
//                           key={foto.id}
//                           className={`absolute inset-0 transition-opacity duration-500 ${
//                             index === activePhotoIndex
//                               ? "opacity-100"
//                               : "opacity-0"
//                           }`}
//                         >
//                           <img
//                             src={foto.url}
//                             alt={foto.alt}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     {/* Controles de navegación (ya no son necesarios aquí, los eliminamos) */}
//                     {/* Los controles ahora están junto a los indicadores en el contenedor blanco */}
//                   </div>

//                   {/* Contenedor blanco separado para indicadores de posición */}
//                   <div className="bg-white p-2 mt-2 rounded-lg">
//                     <div className="flex justify-center items-center">
//                       {/* Botón izquierdo */}
//                       <button
//                         onClick={goToPrevPhoto}
//                         className="mx-2 text-gray-300 hover:text-[#F2BF5D] rounded-full p-1 transition-all"
//                         aria-label="Foto anterior"
//                       >
//                         <ChevronLeft size={20} />
//                       </button>

//                       {/* Indicadores */}
//                       {fotos.map((foto, index) => (
//                         <button
//                           key={foto.id}
//                           onClick={() => goToPhoto(index)}
//                           className={`mx-1 w-2 h-2 rounded-full transition-all ${
//                             index === activePhotoIndex
//                               ? "bg-[#F2BF5D] w-6"
//                               : "bg-gray-300 hover:bg-gray-400"
//                           }`}
//                           aria-label={`Ver foto ${foto.alt}`}
//                         />
//                       ))}

//                       {/* Botón derecho */}
//                       <button
//                         onClick={goToNextPhoto}
//                         className="mx-2 text-gray-300 hover:text-[#F2BF5D] rounded-full p-1 transition-all"
//                         aria-label="Siguiente foto"
//                       >
//                         <ChevronRight size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
import React, { useState} from 'react';
import { Globe, Bot, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';


interface Proyecto {
  id: number;
  titulo: string;
  fecha?: string;
  descripcion: string;
  tecnologias?: string[];
  icono: React.ReactNode;
}

interface Paso {
  numero: number;
  titulo: string;
  descripcion?: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Automatización por WhatsApp para Comercios",
    fecha: "2024",
    descripcion: "Pedidos, consultas y confirmaciones automatizadas. Reducción del 70% en tareas operativas repetitivas.",
    tecnologias: ["WhatsApp API", "Node.js", "Dialogflow"],
    icono: <MessageSquare size={24} />
  },
  {
    id: 2,
    titulo: "Chatbot para Servicios Profesionales",
    fecha: "2024",
    descripcion: "Respuestas guiadas, derivación automática y toma de turnos. Atención fluida y sin fricciones.",
    tecnologias: ["React", "OpenAI", "Calendly API"],
    icono: <Bot size={24} />
  },
  {
    id: 3,
    titulo: "Sitios Web Integrados a Plataformas",
    fecha: "2023",
    descripcion: "Páginas institucionales y portfolios con integración a CRM, turnos y métricas.",
    tecnologias: ["Next.js", "Tailwind", "Vercel"],
    icono: <Globe size={24} />
  },
];

const pasos: Paso[] = [
  {
    numero: 1,
    titulo: "Reunión inicial",
    descripcion: "entendemos tu necesidad."
  },
  {
    numero: 2,
    titulo: "Diagnóstico y propuesta personalizada"
  },
  {
    numero: 3,
    titulo: "Desarrollo de la propuesta y validaciones",
    descripcion: "fases, entregas y validaciones."
  },
  {
    numero: 4,
    titulo: "Entrega Final"
  },
  {
    numero: 5,
    titulo: "Actualizaciones y mejora continua",  
  }
];

export const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exitos' | 'proceso'>('exitos');
  const [activeProject, setActiveProject] = useState<Proyecto | null>(proyectos[0]);
  
  // Función para navegar al proyecto anterior
  const goToPrevProject = () => {
    const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : proyectos.length - 1;
    setActiveProject(proyectos[prevIndex]);
  };

  // Función para navegar al proyecto siguiente
  const goToNextProject = () => {
    const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
    const nextIndex = currentIndex < proyectos.length - 1 ? currentIndex + 1 : 0;
    setActiveProject(proyectos[nextIndex]);
  };

  
  return (
    <div className="min-h-screen bg-[#2b2b2c] py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Tabs de navegación principal */}
        <div className="flex border-b border-gray-800 mb-8 md:mb-10 md:mt-10">
          <button
            onClick={() => setActiveTab("exitos")}
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight mr-6 transition-all  uppercase 
              ${
                activeTab === "exitos"
                  ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            CASOS DE ÉXITO
          </button>
          <button
            onClick={() => setActiveTab("proceso")}
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight transition-all font-[Montserrat] uppercase ${
              activeTab === "proceso"
                ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            NUESTRO PROCESO
          </button>
        </div>

        {activeTab === "exitos" ? (
          <div>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              CASOS DE ÉXITO
            </h1>

            {/* Vista para tablets/desktop - Lista lateral */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-3">
                {proyectos.map((proyecto) => (
                  <button
                    key={proyecto.id}
                    onClick={() => setActiveProject(proyecto)}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center shadow-md ${
                      activeProject?.id === proyecto.id
                        ? "bg-white border-l-4 border-[#F2BF5D] text-[#73a9d8]"
                        : "bg-[#73a9d8] border-l-4 border-transparent text-white hover:border-[#F2BF5D] hover:bg-[#6499c9]"
                    }`}
                  >
                    <div
                      className={`mr-3 ${
                        activeProject?.id === proyecto.id
                          ? "text-[#F2BF5D]"
                          : "text-white"
                      }`}
                    >
                      {proyecto.icono}
                    </div>
                    <div>
                      <p
                        className="font-medium uppercase text-lg"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {proyecto.titulo}
                      </p>
                      {proyecto.fecha && (
                        <p
                          className={`text-sm font-[Montserrat] ${
                            activeProject?.id === proyecto.id
                              ? "text-gray-500"
                              : "text-gray-100"
                          }`}
                        >
                          {proyecto.fecha}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Detalle del proyecto activo para desktop */}
              <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-8 border border-[#73a9d8] shadow-md">
                {activeProject && (
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-[#73a9d8]/20 text-[#F8BC47] mr-4">
                        {activeProject.icono}
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#73a9d8] font-[Montserrat] uppercase">
                          {activeProject.titulo}
                        </h2>
                        {activeProject.fecha && (
                          <p className="text-[#F8BC47] text-sm font-[Montserrat]">
                            {activeProject.fecha}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
                        Descripción
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-[Montserrat]">
                        {activeProject.descripcion}
                      </p>
                      
                      {/* Botón solo para el proyecto de WhatsApp */}

                    </div>

                    {activeProject.tecnologias && (
                      <div className="mt-auto">
                        <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
                          Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tecnologias.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm font-[JetBrains Mono]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                                          {activeProject.id === 1 && (
                        <div className="mt-60 absolute right-50 ">
                          <a
                            href="https://dev.gauchoapp.gaucholab.com/login?from=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
                          >
                            Ver Demo
                          </a>
                        </div>
                      )}
                  </div>
                  
                )}
                
              </div>
              
            </div>

            {/* Vista para móvil - Sistema de cards navegables */}
            <div className="md:hidden">
              {activeProject && (
                <div className="bg-white rounded-lg overflow-hidden border border-[#73a9d8] shadow-md">
                  {/* Cabecera del proyecto */}
                  <div className="bg-[#73a9d8] p-4 flex items-center">
                    <div className="p-2 rounded-full bg-white/20 text-white mr-3">
                      {activeProject.icono}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-white font-[Montserrat] uppercase">
                        {activeProject.titulo}
                      </h2>
                      {activeProject.fecha && (
                        <p className="text-white/80 text-sm font-[Montserrat]">
                          {activeProject.fecha}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
                        Descripción
                      </h3>
                      <p className="text-gray-700 font-[JetBrains Mono]">
                        {activeProject.descripcion}
                      </p>
                      
                      {/* Botón solo para el proyecto de WhatsApp en móvil */}
                      {activeProject.id === 1 && (
                        <div className="mt-4">
                          <a
                            href="https://dev.gauchoapp.gaucholab.com/login?from=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
                          >
                            Ver Demo
                          </a>
                        </div>
                      )}
                    </div>

                    {activeProject.tecnologias && (
                      <div>
                        <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
                          Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tecnologias.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm font-[JetBrains Mono]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navegación entre proyectos */}
                  <div className="flex border-t border-gray-200">
                    <button
                      onClick={goToPrevProject}
                      className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors border-r border-gray-200 font-[Montserrat]"
                    >
                      <ChevronLeft size={18} className="mr-1" /> Anterior
                    </button>
                    <button
                      onClick={goToNextProject}
                      className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors font-[Montserrat]"
                    >
                      Siguiente <ChevronRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Indicador de posición */}
              <div className="flex justify-center mt-4">
                {proyectos.map((proyecto) => (
                  <button
                    key={proyecto.id}
                    onClick={() => setActiveProject(proyecto)}
                    className={`mx-1 w-2 h-2 rounded-full transition-all ${
                      activeProject?.id === proyecto.id
                        ? "bg-[#F2BF5D] w-6"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    aria-label={`Ver proyecto ${proyecto.titulo}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start">
              NUESTRO PROCESO DE TRABAJO
            </h1>

            <div className="max-w-6xl mx-auto mt-20">
              {/* Fila superior - 3 pasos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-16">
                {pasos.slice(0, 3).map((paso) => (
                  <div
                    key={paso.numero}
                    className="flex flex-col items-center group hover:transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Contenedor principal con fondo sutil */}
                    <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                      {/* Número en la parte superior */}
                      <div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl  rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {paso.numero}
                      </div>

                      {/* Contenido del paso */}
                      <div className="mt-4">
                        <h3 className="uppercase text-white font-bold text-base md:text-lg mb-3 group-hover:text-[#F2BF5D] transition-colors duration-300">
                          {paso.titulo}
                        </h3>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fila inferior - 2 pasos centrados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 max-w-3xl mx-auto ">
                {pasos.slice(3, 5).map((paso) => (
                  <div
                    key={paso.numero}
                    className="flex h-32 content-center flex-col items-center group hover:transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Contenedor principal con fondo sutil */}
                    <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                      {/* Número en la parte superior */}
                      <div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl  rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {paso.numero}
                      </div>

                      {/* Contenido del paso */}
                      <div className="mt-6">
                        <h3 className="uppercase text-white font-bold text-base md:text-lg mb-3 group-hover:text-[#F2BF5D] transition-colors duration-300">
                          {paso.titulo}
                        </h3>
                        {paso.descripcion && (
                          <p
                            className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {paso.descripcion}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//! SECCIÓN ANTERIOR NUESTRO PROCESO DE TRABAJO (COMENTADA) - PARA REFERENCIA

//  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start ">
//               NUESTRO PROCESO DE TRABAJO
//             </h1>

// <div className="grid grid-cols-2 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto mt-20">
//               {/* Columna izquierda - 3 pasos */}
//               <div className="flex flex-col space-y-8 md:space-y-12">
//                 {pasos.slice(0, 3).map((paso) => (
//                   <div
//                     key={paso.numero}
//                     className="flex items-center hover:transform hover:scale-[1.01] transition-transform duration-200"
//                   >
//                     {/* Contenedor de enumeración (caja numerada) */}
//                     <div className="z-10 shrink-0">
//                       <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white text-[#F2BF5D] text-xl md:text-3xl font-bold rounded-lg shadow-lg border-3 transition-colors duration-200">
//                         {paso.numero}
//                       </div>
//                     </div>

//                     {/* Contenedor de descripción (caja de contenido) */}
//                     <div
//                       className="bg-white text-xs border-[#73a9d8] md:text-lg rounded-lg py-4 px-5 ml-4 shadow-md flex items-center justify-center flex-1"
//                       style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                       <p className="font-medium">
//                         {paso.titulo}
//                         {paso.descripcion && (
//                           <span className="font-normal">
//                             {" "}
//                             {paso.descripcion}
//                           </span>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Columna derecha - 2 pasos */}
//               <div className="flex flex-col space-y-8 md:space-y-12 justify-center">
//                 {pasos.slice(3, 5).map((paso) => (
//                   <div
//                     key={paso.numero}
//                     className="flex items-center hover:transform hover:scale-[1.01] transition-transform duration-200"
//                   >
//                     {/* Contenedor de enumeración (caja numerada) */}
//                     <div className="z-10 shrink-0">
//                       <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white text-[#F2BF5D] text-xl md:text-3xl font-bold rounded-lg shadow-lg border-3 transition-colors duration-200">
//                         {paso.numero}
//                       </div>
//                     </div>

//                     {/* Contenedor de descripción (caja de contenido) */}
//                     <div
//                       className="bg-white text-xs border-[#73a9d8] md:text-lg rounded-lg py-4 px-5 ml-4 shadow-md flex items-center justify-center flex-1"
//                       style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                       <p className="font-medium">
//                         {paso.titulo}
//                         {paso.descripcion && (
//                           <span className="font-normal">
//                             {" "}
//                             {paso.descripcion}
//                           </span>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>


//               {/* CARRUSEL: Carrusel de fotos - Reemplaza la ilustración anterior */}
//               {/* <div
//                 className="relative overflow-hidden rounded-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div>
//                   <div className="relative h-64 mt-1 md:h-98 overflow-hidden rounded-lg">
//                     <div className="relative h-full w-full">
//                       {fotos.map((foto, index) => (
//                         <div
//                           key={foto.id}
//                           className={`absolute inset-0 transition-opacity duration-500 ${
//                             index === activePhotoIndex
//                               ? "opacity-100"
//                               : "opacity-0"
//                           }`}
//                         >
//                           <img
//                             src={foto.url}
//                             alt={foto.alt}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="bg-white p-2 mt-2 rounded-lg">
//                     <div className="flex justify-center items-center">
//                       <button
//                         onClick={goToPrevPhoto}
//                         className="mx-2 text-gray-300 hover:text-[#F2BF5D] rounded-full p-1 transition-all"
//                         aria-label="Foto anterior"
//                       >
//                         <ChevronLeft size={20} />
//                       </button>

//                       {fotos.map((foto, index) => (
//                         <button
//                           key={foto.id}
//                           onClick={() => goToPhoto(index)}
//                           className={`mx-1 w-2 h-2 rounded-full transition-all ${
//                             index === activePhotoIndex
//                               ? "bg-[#F2BF5D] w-6"
//                               : "bg-gray-300 hover:bg-gray-400"
//                           }`}
//                           aria-label={`Ver foto ${foto.alt}`}
//                         />
//                       ))}

//                       <button
//                         onClick={goToNextPhoto}
//                         className="mx-2 text-gray-300 hover:text-[#F2BF5D] rounded-full p-1 transition-all"
//                         aria-label="Siguiente foto"
//                       >
//                         <ChevronRight size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
