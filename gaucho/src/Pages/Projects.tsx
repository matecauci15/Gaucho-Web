
// import React, { useState } from 'react';
// import { Globe, Bot, MessageSquare} from 'lucide-react';

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

// export const ProjectsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'exitos' | 'proceso'>('exitos');
//   const [activeProject, setActiveProject] = useState<Proyecto | null>(proyectos[0]);

//   return (
//     <div className="min-h-screen bg-[#1a1a1a] py-25 px-6 font-mono">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex space-x-4 mb-8" >
//           <button 
//             onClick={() => setActiveTab('exitos')}
//             className={`px-4 py-2 text-lg font-bold tracking-tight ${activeTab === 'exitos' ? 'text-white border-b-2 border-[#F2BF5D]' : 'text-white'}`}
//           >
//             CASOS DE ÉXITO
//           </button>
//           <button 
//             onClick={() => setActiveTab('proceso')}
//             className={`px-4 py-2 text-lg font-bold tracking-tight ${activeTab === 'proceso' ? 'text-white border-b-2 border-[#F2BF5D]' : 'text-white'}`}
//           >
//             NUESTRO PROCESO
//           </button>
//         </div>
        
//         {activeTab === 'exitos' ? (
//           <div>
//             <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">
//               CASOS DE ÉXITO
//             </h1>
            
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Navegación de proyectos */}
//               <div className="lg:col-span-1 space-y-2 z-10">
//                 {proyectos.map((proyecto) => (
//                   <button
//                     key={proyecto.id}
//                     onClick={() => setActiveProject(proyecto)}
//                     className={`w-full text-left p-4 rounded transition-all flex items-center shadow-md ${
//                       activeProject?.id === proyecto.id 
//                         ? 'bg-white border-l-4 border-[#F2BF5D] text-[#73a9d8]' 
//                         : 'bg-[#5b92c0] border-l-4 border-transparent text-white hover:border-[#F2BF5D] hover:bg-[#6499c9]'
//                     }`}
//                   >
//                     <div className="mr-3 text-white">
//                       {proyecto.icono}
//                     </div>
//                     <div>
//                       <p className="font-medium">{proyecto.titulo}</p>
//                       {proyecto.fecha && <p className="text-sm text-gray-100">{proyecto.fecha}</p>}
//                     </div>
//                   </button>
//                 ))}
//               </div>
              
//               {/* Detalle del proyecto activo */}
//               <div className="lg:col-span-2 bg-white rounded-lg p-8 border border-[#5b92c0] shadow-md z-10">
//                 {activeProject && (
//                   <div className="h-full flex flex-col">
//                     <div className="flex items-center mb-6">
//                       <div className="p-3 rounded-full bg-[#73a9d8]/20 text-[#73a9d8] mr-4">
//                         {activeProject.icono}
//                       </div>
//                       <div>
//                         <h2 className="text-2xl font-bold text-[#73a9d8]">{activeProject.titulo}</h2>
//                         {activeProject.fecha && <p className="text-[#F2BF5D] text-sm">{activeProject.fecha}</p>}
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <h3 className="text-gray-800 text-lg mb-2 font-semibold">Descripción</h3>
//                       <p className="text-gray-700 leading-relaxed">{activeProject.descripcion}</p>
//                     </div>
                    
//                     {activeProject.tecnologias && (
//                       <div className="mt-auto">
//                         <h3 className="text-gray-800 text-lg mb-2 font-semibold">Tecnologías</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {activeProject.tecnologias.map((tech, i) => (
//                             <span key={i} className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm">
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

//             {/* <div className="mt-12 bg-white border border-[#5b92c0] p-6 rounded-lg text-center shadow-md">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Nos involucramos de principio a fin</h3>
//               <p className="text-[#F2BF5D] text-2xl font-bold">PARA QUE TU SISTEMA FUNCIONE COMO UN RELOJ.</p>
//             </div> */}
//           </div>
//         ) : (
//           <div>
//             <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">
//               NUESTRO PROCESO DE TRABAJO<span className="text-[#F2BF5D]">_</span>
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div className="space-y-6">
//                 {pasos.map((paso) => (
//                   <div key={paso.numero} className="flex">
//                     <div className="w-12 h-12 rounded-full bg-[#F2BF5D] flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
//                       {paso.numero}
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white font-bold mt-3">
//                         {paso.titulo} 
//                         {paso.descripcion && <span className="font-normal text-gray-100"> {paso.descripcion}</span>}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-center">
//                 <div className="p-8 rounded-lg border border-white bg-white flex flex-col items-center shadow-md">
//                   <div className="bg-gray-800 p-4 rounded-lg mb-4 w-58 h-46 flex items-center justify-center">
//                     <p className="text-white font-mono">Gaucho./ab</p>
//                   </div>
//                   <div className="w-56 h-4 bg-[#73a9d8]/20 rounded-b-lg"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



import React, { useState } from 'react';
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
    titulo: "Reunión inicial:",
    descripcion: "entendemos tu necesidad."
  },
  {
    numero: 2,
    titulo: "Diagnóstico y propuesta personalizada."
  },
  {
    numero: 3,
    titulo: "Desarrollo:",
    descripcion: "fases, entregas y validaciones."
  },
  {
    numero: 4,
    titulo: "Entrega final y soporte continuo."
  },
  {
    numero: 5,
    titulo: "Actualizaciones mensuales",
    descripcion: "(opcional)."
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
    <div className="min-h-screen bg-[#2b2b2c] py-16 px-4 sm:px-6 md:px-8 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Tabs de navegación principal */}
        <div className="flex border-b border-gray-800 mb-8 md:mb-10 md:mt-10">
          <button
            onClick={() => setActiveTab("exitos")}
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight mr-6 transition-all ${
              activeTab === "exitos"
                ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            CASOS DE ÉXITO
          </button>
          <button
            onClick={() => setActiveTab("proceso")}
            className={`px-4 py-3 text-base sm:text-lg font-bold tracking-tight transition-all ${
              activeTab === "proceso"
                ? "text-white border-b-2 border-[#F2BF5D] -mb-px"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            NUESTRO PROCESO
          </button>
        </div>

        {activeTab === "exitos" ? (
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start font-mono">
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
                        : "bg-[#5b92c0] border-l-4 border-transparent text-white hover:border-[#F2BF5D] hover:bg-[#6499c9]"
                    }`}
                  >
                    <div
                      className={`mr-3 ${
                        activeProject?.id === proyecto.id
                          ? "text-[#73a9d8]"
                          : "text-white"
                      }`}
                    >
                      {proyecto.icono}
                    </div>
                    <div>
                      <p className="font-medium">{proyecto.titulo}</p>
                      {proyecto.fecha && (
                        <p
                          className={`text-sm ${
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
              <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-8 border border-[#5b92c0] shadow-md">
                {activeProject && (
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-[#73a9d8]/20 text-[#73a9d8] mr-4">
                        {activeProject.icono}
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#73a9d8]">
                          {activeProject.titulo}
                        </h2>
                        {activeProject.fecha && (
                          <p className="text-[#F2BF5D] text-sm">
                            {activeProject.fecha}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-gray-800 text-lg mb-2 font-semibold">
                        Descripción
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {activeProject.descripcion}
                      </p>
                    </div>

                    {activeProject.tecnologias && (
                      <div className="mt-auto">
                        <h3 className="text-gray-800 text-lg mb-2 font-semibold">
                          Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tecnologias.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Vista para móvil - Sistema de cards navegables */}
            <div className="md:hidden">
              {activeProject && (
                <div className="bg-white rounded-lg overflow-hidden border border-[#5b92c0] shadow-md">
                  {/* Cabecera del proyecto */}
                  <div className="bg-[#73a9d8] p-4 flex items-center">
                    <div className="p-2 rounded-full bg-white/20 text-white mr-3">
                      {activeProject.icono}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-white">
                        {activeProject.titulo}
                      </h2>
                      {activeProject.fecha && (
                        <p className="text-white/80 text-sm">
                          {activeProject.fecha}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="text-gray-800 text-lg mb-2 font-semibold">
                        Descripción
                      </h3>
                      <p className="text-gray-700">
                        {activeProject.descripcion}
                      </p>
                    </div>

                    {activeProject.tecnologias && (
                      <div>
                        <h3 className="text-gray-800 text-lg mb-2 font-semibold">
                          Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tecnologias.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm"
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
                      className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors border-r border-gray-200"
                    >
                      <ChevronLeft size={18} className="mr-1" /> Anterior
                    </button>
                    <button
                      onClick={goToNextProject}
                      className="flex-1 py-3 flex items-center justify-center text-[#73a9d8] font-medium hover:bg-gray-50 transition-colors"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white tracking-tight text-center md:text-start font-mono">
              NUESTRO PROCESO DE TRABAJO
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:max-w-6xl max-w-xs mx-auto">
              {/* Proceso con cajas numeradas como en la imagen */}
              <div className="flex flex-col space-y-6">
                {pasos.map((paso) => (
                  <div
                    key={paso.numero}
                    className="flex relative font-mono"
                  >
                    {/* Caja de contenido (detrás) */}
                    <div
                      className="bg-white text-sm md:text-lg  rounded-lg md:p-4 md:pl-20 md:ml-8 p-3 pl-15 ml-4 w-full shadow-md"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <p className="font-medium">
                        {paso.titulo}
                        {paso.descripcion && (
                          <span className="font-normal text-gray-600">
                            {" "}
                            {paso.descripcion}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Caja numerada (encima) */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-13 h-13 flex items-center justify-center bg-[#F2BF5D] text-white text-3xl font-bold rounded-lg shadow-lg border-2 border-white">
                        {paso.numero}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ilustración en la derecha */}
              <div className="flex justify-center items-center">
                <div className="p-5 md:p-8 rounded-lg border border-white bg-white flex flex-col items-center shadow-lg max-w-md w-full">
                  <div className="bg-gray-800 p-6 rounded-lg mb-4 w-full flex items-center justify-center aspect-video">
                    <p className="text-white font-mono">Gaucho./ab</p>
                  </div>
                  <div className="w-full h-4 bg-[#73a9d8]/20 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-[#80A8D6] via-[#f8bc47] to-white opacity-50 md:mt-32 mt-25"></div> */}
    </div>
    
  );
};