// // import React, { useState, useEffect } from 'react';
// import React, { useState} from 'react';
// import { Globe, Bot, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';


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

// const proyectos: Proyecto[] = [
//   {
//     id: 1,
//     titulo: "Automatización por WhatsApp para Comercios",
//     fecha: "2024",
//     descripcion: "Pedidos, consultas y confirmaciones automatizadas. Reducción del 70% en tareas operativas repetitivas.",
//     tecnologias: ["WhatsApp API", "Node.js"],
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
//     titulo: "Reunión inicial",
//     descripcion: "entendemos tu necesidad."
//   },
//   {
//     numero: 2,
//     titulo: "Diagnóstico y propuesta personalizada"
//   },
//   {
//     numero: 3,
//     titulo: "Desarrollo de la propuesta y validaciones",
//     descripcion: "fases, entregas y validaciones."
//   },
//   {
//     numero: 4,
//     titulo: "Entrega Final"
//   },
//   {
//     numero: 5,
//     titulo: "Actualizaciones y mejora continua",  
//   }
// ];

// export const ProjectsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'exitos' | 'proceso'>('exitos');
//   const [activeProject, setActiveProject] = useState<Proyecto | null>(proyectos[0]);
  
//   const goToPrevProject = () => {
//     const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
//     const prevIndex = currentIndex > 0 ? currentIndex - 1 : proyectos.length - 1;
//     setActiveProject(proyectos[prevIndex]);
//   };

//   const goToNextProject = () => {
//     const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
//     const nextIndex = currentIndex < proyectos.length - 1 ? currentIndex + 1 : 0;
//     setActiveProject(proyectos[nextIndex]);
//   };

  
//   return (
//     <div className="min-h-screen bg-[#2b2b2c] py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Tabs de navegación principal */}
//         <div className="flex border-b border-gray-800 mb-8 md:mb-10 md:mt-10">
//           <button
//             onClick={() => setActiveTab("exitos")}
//             className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight mr-6 transition-all  uppercase 
//               ${
//                 activeTab === "exitos"
//                   ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
//                   : "text-gray-400 hover:text-gray-200"
//               }`}
//             style={{
//               fontFamily: "'JetBrains Mono', monospace",
//             }}
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
//             style={{
//               fontFamily: "'JetBrains Mono', monospace",
//             }}
//           >
//             NUESTRO PROCESO
//           </button>
//         </div>

//         {activeTab === "exitos" ? (
//           <div>
//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start uppercase"
//               style={{
//                 fontFamily: "'JetBrains Mono', monospace",
//               }}
//             >
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
//                       <p
//                         className="font-medium uppercase text-lg"
//                         style={{
//                           fontFamily: "'JetBrains Mono', monospace",
//                         }}
//                       >
//                         {proyecto.titulo}
//                       </p>
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
//               <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-8 border border-[#73a9d8] shadow-md">
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
//                       <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                         Descripción
//                       </h3>
//                       <p className="text-gray-700 leading-relaxed font-[Montserrat]">
//                         {activeProject.descripcion}
//                       </p>

//                       {/* Botón solo para el proyecto de WhatsApp */}
//                     </div>

//                     {activeProject.tecnologias && (
//                       <div className="mt-auto">
//                         <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
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
//                     {activeProject.id === 1 && (
//                       <div className="mt-60 absolute right-50 ">
//                         <a
//                           href="https://dev.gauchoapp.gaucholab.com/login?from=%2F"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-block bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
//                         >
//                           Ver Demo
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Vista para móvil - Sistema de cards navegables */}
//             <div className="md:hidden">
//               {activeProject && (
//                 <div className="bg-white rounded-lg overflow-hidden border border-[#73a9d8] shadow-md">
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
//                       <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
//                         Descripción
//                       </h3>
//                       <p className="text-gray-700 font-[JetBrains Mono]">
//                         {activeProject.descripcion}
//                       </p>

//                       {/* Botón solo para el proyecto de WhatsApp en móvil */}
//                       {activeProject.id === 1 && (
//                         <div className="mt-4">
//                           <a
//                             href="https://dev.gauchoapp.gaucholab.com/login?from=%2F"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-block bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
//                           >
//                             Ver Demo
//                           </a>
//                         </div>
//                       )}
//                     </div>

//                     {activeProject.tecnologias && (
//                       <div>
//                         <h3 className="text-[#73a9d8] text-lg mb-2 font-semibold font-[Montserrat] uppercase">
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
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start">
//               NUESTRO PROCESO DE TRABAJO
//             </h1>

//             <div className="max-w-6xl mx-auto mt-20">
//               {/* Fila superior - 3 pasos */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-16">
//                 {pasos.slice(0, 3).map((paso) => (
//                   <div
//                     key={paso.numero}
//                     className="flex flex-col items-center group hover:transform hover:scale-[1.02] transition-all duration-300"
//                   >
//                     {/* Contenedor principal con fondo sutil */}
//                     <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
//                       {/* Número en la parte superior */}
//                       <div
//                         className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl  rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
//                         style={{ fontFamily: "'Montserrat', sans-serif" }}
//                       >
//                         {paso.numero}
//                       </div>

//                       {/* Contenido del paso */}
//                       <div className="mt-4">
//                         <h3 className="uppercase text-white font-bold text-base md:text-lg mb-3 group-hover:text-[#F2BF5D] transition-colors duration-300">
//                           {paso.titulo}
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Fila inferior - 2 pasos centrados */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 max-w-3xl mx-auto ">
//                 {pasos.slice(3, 5).map((paso) => (
//                   <div
//                     key={paso.numero}
//                     className="flex h-32 content-center flex-col items-center group hover:transform hover:scale-[1.02] transition-all duration-300"
//                   >
//                     {/* Contenedor principal con fondo sutil */}
//                     <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
//                       {/* Número en la parte superior */}
//                       <div
//                         className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl  rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
//                         style={{ fontFamily: "'Montserrat', sans-serif" }}
//                       >
//                         {paso.numero}
//                       </div>

//                       {/* Contenido del paso */}
//                       <div className="mt-6">
//                         <h3 className="uppercase text-white font-bold text-base md:text-lg mb-3 group-hover:text-[#F2BF5D] transition-colors duration-300">
//                           {paso.titulo}
//                         </h3>
//                         {paso.descripcion && (
//                           <p
//                             className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
//                             style={{ fontFamily: "'Montserrat', sans-serif" }}
//                           >
//                             {paso.descripcion}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Globe, Bot, MessageSquare, ChevronRight, ChevronLeft, Play, ExternalLink } from 'lucide-react';
import demo from '../assets/demo.mp4';

interface Link {
  url: string;
  label: string;
}

interface Demo {
  type: 'video' | 'link' | 'whatsapp' | 'links';
  url?: string;
  videoUrl?: string;
  whatsappNumber?: string;
  links?: Link[];
  label?: string;
}

interface Proyecto {
  id: number;
  titulo: string;
  fecha?: string;
  descripcion: string;
  tecnologias?: string[];
  icono: React.ReactNode;
  demo?: Demo;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Automatización por WhatsApp y CRM para Comercios",
    fecha: "2024",
    descripcion: "Pedidos, consultas y confirmaciones automatizadas. Reducción del 70% en tareas operativas repetitivas.",
    tecnologias: ["WhatsApp API", "Node.js"],
    icono: <MessageSquare size={24} />,
    demo: {
      type: 'video',
      videoUrl: demo,
      label: 'Ver Demo en Video'
    }
  },
  {
    id: 2,
    titulo: "Chatbot para Servicios Profesionales",
    fecha: "2024",
    descripcion: "Respuestas guiadas, derivación automática y toma de turnos. Atención fluida y sin fricciones.",
    tecnologias: ["React", "OpenAI"],
    icono: <Bot size={24} />,
    demo: {
      type: 'whatsapp',
      whatsappNumber: '5491157431471', // Reemplaza con tu número real
      label: 'EBC Chatbot'
    },
    
  },
  {
    id: 3,
    titulo: "Sitios Web Integrados a Plataformas",
    fecha: "2023",
    descripcion: "Páginas institucionales y portfolios con integración a CRM, turnos y métricas.",
    tecnologias: ["Next.js", "Tailwind", "Vercel"],
    icono: <Globe size={24} />,
    demo: {
      type: 'links',
      links: [
        { url: 'https://amoseba.com.ar', label: 'Amoseba' },
        { url: 'https://mgagroup.com.ar', label: 'MGA Group' },
        { url: 'https://petitfinancieros.com.ar', label: 'Petit Financieros' },
        { url: 'https://juegos.petitfinancieros.com.ar', label: 'Juegos' },
        { url: 'https://cursos.petitfinancieros.com.ar', label: 'Cursos' },
        { url: 'https://electrobatrosario.com', label: 'Electro Bato Rosario' }
      ]
    }
  }
];

interface Paso {
  numero: number;
  titulo: string;
  descripcion?: string;
}

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

// Componente para renderizar el demo según su tipo
const DemoButton: React.FC<{ demo: Demo }> = ({ demo }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (demo.type === 'video') {
    return (
      <>
        <button
          onClick={() => setShowVideo(true)}
          className="inline-flex items-center gap-2 bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
        >
          <Play size={16} /> {demo.label || 'Ver Demo'}
        </button>

        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(false)}>
            <div className="bg-black rounded-lg overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-white font-bold">Demo en Video</h3>
                <button onClick={() => setShowVideo(false)} className="text-gray-400 hover:text-white">✕</button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={demo.videoUrl}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (demo.type === 'whatsapp') {
    return (
      <a
        href={`https://wa.me/${demo.whatsappNumber}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20este%20servicio`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 font-[Montserrat] uppercase text-sm shadow-md hover:shadow-lg"
      >
        <MessageSquare size={16} /> {demo.label || 'Chatear'}
      </a>
    );
  }

  if (demo.type === 'links') {
    return (
      <div className="flex flex-wrap gap-2">
        {demo.links?.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#F2BF5D] hover:bg-[#F8BC47] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 font-[Montserrat] text-sm shadow-md hover:shadow-lg"
          >
            {link.label} <ExternalLink size={14} />
          </a>
        ))}
      </div>
    );
  }

  return null;
};

export const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exitos' | 'proceso'>('exitos');
  const [activeProject, setActiveProject] = useState<Proyecto | null>(proyectos[0]);
  
  const goToPrevProject = () => {
    const currentIndex = proyectos.findIndex(p => p.id === activeProject?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : proyectos.length - 1;
    setActiveProject(proyectos[prevIndex]);
  };

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
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight mr-6 transition-all uppercase ${
              activeTab === "exitos"
                ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CASOS DE ÉXITO
          </button>
          <button
            onClick={() => setActiveTab("proceso")}
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight transition-all uppercase ${
              activeTab === "proceso"
                ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            NUESTRO PROCESO
          </button>
        </div>

        {activeTab === "exitos" ? (
          <div>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
                    </div>

                    {activeProject.tecnologias && (
                      <div className="mb-6">
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

                    {activeProject.demo && (
                      <div className="mt-auto pt-6 border-t border-gray-200">
                        <h3 className="text-[#73a9d8] text-lg mb-3 font-semibold font-[Montserrat] uppercase">
                          Acceso
                        </h3>
                        <DemoButton demo={activeProject.demo} />
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
                    </div>

                    {activeProject.tecnologias && (
                      <div className="mb-5">
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

                    {activeProject.demo && (
                      <div className="py-4 border-t border-gray-200 mt-5">
                        <h3 className="text-[#73a9d8] text-lg mb-3 font-semibold font-[Montserrat] uppercase">
                          Acceso
                        </h3>
                        <DemoButton demo={activeProject.demo} />
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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
                    <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                      <div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {paso.numero}
                      </div>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 max-w-3xl mx-auto">
                {pasos.slice(3, 5).map((paso) => (
                  <div
                    key={paso.numero}
                    className="flex h-32 content-center flex-col items-center group hover:transform hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="relative h-32 content-center bg-[#73A9D8] backdrop-blur-sm border border-white/20 rounded-xl p-6 w-full text-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                      <div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#73A9D8] group-hover:bg-white group-hover:text-[#F2BF5D] group-hover:border-[#F2BF5D] text-white text-xl md:text-3xl rounded-lg shadow-lg border-2 border-white group-hover:shadow-xl transition-shadow duration-300 z-10"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {paso.numero}
                      </div>

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
};