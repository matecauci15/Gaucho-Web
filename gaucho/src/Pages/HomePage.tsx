
import { Code, Database, Brain, ArrowRight, ExternalLink, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Efecto de escritura
    const fullText = "Construyendo la tecnología del mañana hoy";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        setTimeout(() => {
          currentIndex = 0;
          const resetInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.substring(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(resetInterval);
            }
          }, 100);
        }, 2000);
      }
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typingInterval);
    };
  }, []);

  const tabContent = {
    web: {
      title: "Desarrollo Web",
      description: "Creamos aplicaciones web modernas, responsivas y escalables que brindan una experiencia de usuario excepcional.",
      features: ["Frontend React/Vue/Angular", "Backend Node.js/Python", "Bases de datos SQL/NoSQL", "APIs RESTful y GraphQL"]
    },
    automation: {
      title: "Automatización",
      description: "Optimizamos los procesos empresariales mediante la automatización inteligente, reduciendo costos y mejorando la eficiencia.",
      features: ["Automatización de procesos", "Integración de sistemas", "ETL y procesamiento de datos", "Gestión de flujos de trabajo"]
    },
    ai: {
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA que analizan datos, identifican patrones y generan insights para impulsar tu negocio.",
      features: ["Machine Learning", "Procesamiento de lenguaje natural", "Análisis predictivo", "Visión por computadora"]
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] font-mono relative overflow-hidden text-white">
      {/* Mouse follower */}
      <div
        className="fixed w-46 h-46 rounded-full opacity-20 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(128, 168, 214, 0.5) 0%, rgba(128, 168, 214, 0.2) 50%, rgba(0,0,0,0) 70%)",
          left: `${mousePosition.x - 90}px`,
          top: `${mousePosition.y - 90}px`,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Hero Section - Split Design */}
      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12 min-h-screen items-center py-24">
            {/* Left Column - Content */}
            <div className="mb-12 md:mb-0 flex flex-col justify-center">
              <div className="inline-block max-w-53 px-4 py-1 mb-4 text-sm font-medium bg-[#80A8D6] rounded-full text-white">
                SOFTWARE & AUTOMATION
              </div>

              <h1 className="text-5xl font-bold mb-6">
                <span className="text-white">SOLUCIONES</span>
                <br />
                <span className="bg-gradient-to-r from-[#80A8D6] to-white bg-clip-text text-transparent">
                  TECNOLÓGICAS
                </span>
              </h1>

              <div className="h-8 mb-6">
                <p className="text-lg">
                  &gt; <span className="text-[#80A8D6]">{typedText}</span>
                  <span className="animate-pulse">_</span>
                </p>
              </div>

              <p className="text-white/70 mb-8">
                Aplicaciones web modernas, automatización de procesos e
                integración de inteligencia artificial para impulsar tu negocio.
              </p>

              <div className="flex gap-4 mb-6">
                <button className="px-6 py-3 rounded-full bg-[#80A8D6] text-white hover:bg-[#80A8D6]/80 transition-all duration-300 flex items-center">
                  Comenzar <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="px-6 py-3 rounded-full bg-transparent border border-white/30 text-white hover:bg-white/5 transition-all duration-300">
                  Ver demos
                </button>
              </div>
            </div>

            {/* Right Column - Terminal-like Interface */}
            <div className="rounded-lg overflow-hidden border border-[#80A8D6]/30 shadow-2xl shadow-[#80A8D6]/10 bg-black/70 backdrop-blur-sm">
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                <div className="ml-2 text-xs text-white/60">terminal</div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="flex">
                  <span className="text-[#80A8D6]">$ </span>
                  <span className="ml-2 text-white">
                    npm install @innovation/tech-stack
                  </span>
                </div>
                <div className="mt-2 text-green-400">
                  + Installing dependencies...
                </div>
                <div className="mt-1 text-white/60">+ react@18.2.0</div>
                <div className="text-white/60">+ typescript@5.2.2</div>
                <div className="text-white/60">+ tailwindcss@3.3.3</div>
                <div className="mt-2 text-green-400">
                  + Added 1274 packages in 32s
                </div>

                <div className="mt-4 flex">
                  <span className="text-[#80A8D6]">$ </span>
                  <span className="ml-2 text-white">npm run build</span>
                </div>
                <div className="mt-2 text-white/60">
                  Creating optimized production build...
                </div>
                <div className="mt-1 text-white/60">
                  ✓ Compiled successfully
                </div>
                <div className="mt-2 text-green-400">
                  Build complete. The dist directory is ready to be deployed.
                </div>

                <div className="mt-4 flex">
                  <span className="text-[#80A8D6]">$ </span>
                  <span className="ml-2 text-white">npm run start</span>
                </div>
                <div className="mt-2 text-white/60">
                  Starting development server...
                </div>
                <div className="mt-1 text-green-400">
                  Server running at http://localhost:3000
                </div>

                <div className="mt-4 flex items-center">
                  <span className="text-[#80A8D6]">$ </span>
                  <span className="ml-2 text-white">_</span>
                  <span className="ml-1 w-2 h-5 bg-white/70 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Tab Style */}
      <section className="py-20 relative bg-[#80A8D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-white bg-clip-text text-transparent text-5xl font-extrabold uppercase">
              Nuestros Servicios
            </span>
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
  <div className="inline-flex border border-white/30 rounded-lg backdrop-blur-sm overflow-hidden">
    {Object.keys(tabContent).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-14 py-3 transition-all duration-300 ${
          activeTab === tab
            ? "bg-transparent text-white border-b-2 border-[#F8BC47]"
            : "bg-white text-[#80A8D6] hover:bg-transparent hover:text-white"
        }`}
      >
        {tab === "web"
          ? "Web"
          : tab === "automation"
          ? "Automatización"
          : "IA"}
      </button>
    ))}
  </div>
</div>

          {/* Automation Highlight Box - Added as requested */}
          {activeTab === "automation" && (
            <div
              className="absolute top-40 right-12 max-w-xs bg-white backdrop-blur-md p-6 rounded-3xl shadow-lg z-10 transform"
              style={{
                boxShadow:
                  "-5px 5px 0 0 #80A8D6, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-[#80A8D6]">
                  POR QUÉ ES EL MOMENTO DE AUTOMATIZAR?
                </h3>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={50} className="text-[#F8BC47] border-2 rounded-full p-2" />
                </div>
              </div>
              <ul className="list-inside pl-0">
                <li className="text-[#1a1a1a] text-sm mb-1">
              <span className="mr-3 text-[#80A8D6]">〉</span>
                  Ahorro de tiempo y recursos
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                <span className="mr-3 text-[#80A8D6]">〉</span>
                  Atención al cliente inmediata, 24/7
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                <span className="mr-3 text-[#80A8D6]">〉</span>
                  Recopilación de datos en tiempo real
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                <span className="mr-3 text-[#80A8D6]">〉</span>
                  Escalabilidad sin límites
                </li>
              </ul>
            </div>
          )}

          {/* Tab Content */}
          <div className="bg-white border border-white/30 rounded-xl p-8 shadow-lg">
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#80A8D6]">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-[#1a1a1a]/80 mb-6">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <ul className="space-y-3">
                  {tabContent[
                    activeTab as keyof typeof tabContent
                  ].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-3 text-[#80A8D6]">〉</span>
                      <span className="text-[#1a1a1a]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="flex items-center text-[#80A8D6] hover:text-[#1a1a1a] transition-colors duration-300">
                    Explorar{" "}
                    {tabContent[activeTab as keyof typeof tabContent].title}{" "}
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex justify-center mt-8 md:mt-0">
                {activeTab === "web" && (
                  <div className="h-64 w-64 rounded-full  border-3 border-[#F8BC47] flex items-center justify-center relative">
                    <Code size={64} className="text-[#F8BC47]" />
                    {/* Círculos orbitando */}
                    <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1a1a1a]/20 border border-[#80A8D6]/40"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slower">
                      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-[#1a1a1a]/10 border border-[#80A8D6]/30"></div>
                    </div>
                  </div>
                )}

                {activeTab === "automation" && (
                  <div className="h-64 w-64 rounded-full border-3 border-[#F8BC47] flex items-center justify-center">
                    <Database size={64} className="text-[#F8BC47] " />
                    {/* Elementos flotantes */}
                    <div className="absolute w-8 h-8 rounded-md bg-[#1a1a1a]/20 border border-[#80A8D6]/40 animate-float"></div>
                    <div className="absolute w-6 h-6 rounded-md bg-[#1a1a1a]/10 border border-[#80A8D6]/30 animate-float-delayed"></div>
                  </div>
                )}

                {activeTab === "ai" && (
                  <div className="h-64 w-64 rounded-full border-[#F8BC47] border-3 flex items-center justify-center">
                    <Brain size={64} className="text-[#F8BC47]" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Simple Horizontal Scroll */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center">
              <span className="h-px w-8 bg-[#80A8D6]"></span>
              <h2 className="text-xl font-mono text-white mx-4">TECNOLOGÍAS</h2>
              <span className="h-px w-8 bg-[#80A8D6]"></span>
            </div>
          </div>

          <div className="flex justify-center space-x-8 py-2 overflow-x-auto pb-6">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Python",
              "AWS",
              "Docker",
              "MongoDB",
              "GraphQL",
            ].map((tech) => (
              <div key={tech} className="flex flex-col items-center min-w-max">
                <div className="w-12 h-12 rounded-full bg-[#80A8D6]/10 border border-[#80A8D6]/30 mb-3 flex items-center justify-center">
                  <span className="text-[#80A8D6] font-bold text-lg">
                    {tech.charAt(0)}
                  </span>
                </div>
                <span className="text-white text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#80A8D6] to-transparent"></div>
      </section>
    </div>
  );
};