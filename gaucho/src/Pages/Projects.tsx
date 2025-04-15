
import React, { useState } from 'react';
import { Globe, Bot, MessageSquare} from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-25 px-6 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-4 mb-8" >
          <button 
            onClick={() => setActiveTab('exitos')}
            className={`px-4 py-2 text-lg font-bold tracking-tight ${activeTab === 'exitos' ? 'text-white border-b-2 border-[#F2BF5D]' : 'text-white'}`}
          >
            CASOS DE ÉXITO
          </button>
          <button 
            onClick={() => setActiveTab('proceso')}
            className={`px-4 py-2 text-lg font-bold tracking-tight ${activeTab === 'proceso' ? 'text-white border-b-2 border-[#F2BF5D]' : 'text-white'}`}
          >
            NUESTRO PROCESO
          </button>
        </div>
        
        {activeTab === 'exitos' ? (
          <div>
            <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">
              CASOS DE ÉXITO
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Navegación de proyectos */}
              <div className="lg:col-span-1 space-y-2 z-10">
                {proyectos.map((proyecto) => (
                  <button
                    key={proyecto.id}
                    onClick={() => setActiveProject(proyecto)}
                    className={`w-full text-left p-4 rounded transition-all flex items-center shadow-md ${
                      activeProject?.id === proyecto.id 
                        ? 'bg-white border-l-4 border-[#F2BF5D] text-[#73a9d8]' 
                        : 'bg-[#5b92c0] border-l-4 border-transparent text-white hover:border-[#F2BF5D] hover:bg-[#6499c9]'
                    }`}
                  >
                    <div className="mr-3 text-white">
                      {proyecto.icono}
                    </div>
                    <div>
                      <p className="font-medium">{proyecto.titulo}</p>
                      {proyecto.fecha && <p className="text-sm text-gray-100">{proyecto.fecha}</p>}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Detalle del proyecto activo */}
              <div className="lg:col-span-2 bg-white rounded-lg p-8 border border-[#5b92c0] shadow-md z-10">
                {activeProject && (
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-[#73a9d8]/20 text-[#73a9d8] mr-4">
                        {activeProject.icono}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#73a9d8]">{activeProject.titulo}</h2>
                        {activeProject.fecha && <p className="text-[#F2BF5D] text-sm">{activeProject.fecha}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-gray-800 text-lg mb-2 font-semibold">Descripción</h3>
                      <p className="text-gray-700 leading-relaxed">{activeProject.descripcion}</p>
                    </div>
                    
                    {activeProject.tecnologias && (
                      <div className="mt-auto">
                        <h3 className="text-gray-800 text-lg mb-2 font-semibold">Tecnologías</h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tecnologias.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-[#73a9d8]/10 text-[#73a9d8] border border-[#73a9d8]/30 rounded text-sm">
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

            {/* <div className="mt-12 bg-white border border-[#5b92c0] p-6 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nos involucramos de principio a fin</h3>
              <p className="text-[#F2BF5D] text-2xl font-bold">PARA QUE TU SISTEMA FUNCIONE COMO UN RELOJ.</p>
            </div> */}
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">
              NUESTRO PROCESO DE TRABAJO<span className="text-[#F2BF5D]">_</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {pasos.map((paso) => (
                  <div key={paso.numero} className="flex">
                    <div className="w-12 h-12 rounded-full bg-[#F2BF5D] flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                      {paso.numero}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-bold mt-3">
                        {paso.titulo} 
                        {paso.descripcion && <span className="font-normal text-gray-100"> {paso.descripcion}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="p-8 rounded-lg border border-white bg-white flex flex-col items-center shadow-md">
                  <div className="bg-gray-800 p-4 rounded-lg mb-4 w-58 h-46 flex items-center justify-center">
                    <p className="text-white font-mono">Gaucho./ab</p>
                  </div>
                  <div className="w-56 h-4 bg-[#73a9d8]/20 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};