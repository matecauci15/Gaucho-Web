// import { Code, Database, Brain, ArrowRight, ExternalLink, Bot } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export const HomePage: React.FC = () => {
//   const [typedText, setTypedText] = useState("");
//   const [activeTab, setActiveTab] = useState("web");

//   useEffect(() => {
//     // Efecto de escritura
//     const fullText = "Construyendo la tecnología del mañana hoy";
//     let currentIndex = 0;
    
//     const typingInterval = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setTypedText(fullText.substring(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
        
//         setTimeout(() => {
//           currentIndex = 0;
//           const resetInterval = setInterval(() => {
//             if (currentIndex <= fullText.length) {
//               setTypedText(fullText.substring(0, currentIndex));
//               currentIndex++;
//             } else {
//               clearInterval(resetInterval);
//             }
//           }, 100);
//         }, 2000);
//       }
//     }, 100);

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, []);

//   const tabContent = {
//     web: {
//       title: "Desarrollo Web",
//       description: "Creamos aplicaciones web modernas, responsivas y escalables que brindan una experiencia de usuario excepcional.",
//       features: ["Frontend React/Vue/Angular", "Backend Node.js/Python", "Bases de datos SQL/NoSQL", "APIs RESTful y GraphQL"]
//     },
//     automation: {
//       title: "Automatización",
//       description: "Optimizamos los procesos empresariales mediante la automatización inteligente, reduciendo costos y mejorando la eficiencia.",
//       features: ["Automatización de procesos", "Integración de sistemas", "ETL y procesamiento de datos", "Gestión de flujos de trabajo"]
//     },
//     ai: {
//       title: "Inteligencia Artificial",
//       description: "Implementamos soluciones de IA que analizan datos, identifican patrones y generan insights para impulsar tu negocio.",
//       features: ["Machine Learning", "Procesamiento de lenguaje natural", "Análisis predictivo", "Visión por computadora"]
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#2c2c2b] font-mono overflow-hidden text-white">
//         {/* Hero Section - Split Design */}
//       <div className="relative min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 min-h-screen items-center py-12 md:py-24">
//             {/* Left Column - Content */}
//             <div className="mb-8 md:mb-0 flex flex-col justify-center w-full">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
//                 <span className="text-white">SOLUCIONES</span>
//                 <br />
//                 <span className="bg-white bg-clip-text text-transparent">
//                   TECNOLÓGICAS
//                 </span>
//               </h1>

//               <div className="h-8 mb-4 md:mb-6">
//                 <p className="text-base sm:text-lg">
//                   &gt; <span className="text-[#80A8D6]">{typedText}</span>
//                   <span className="animate-pulse">_</span>
//                 </p>
//               </div>

//               <p className="text-white/70 mb-6 md:mb-8 text-sm sm:text-base">
//                 Aplicaciones web modernas, automatización de procesos e
//                 integración de inteligencia artificial para impulsar tu negocio.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                 <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#80A8D6] text-white hover:bg-[#80A8D6]/80 transition-all duration-300 flex items-center justify-center sm:justify-start">
//                   Comenzar <ArrowRight className="ml-2" size={18} />
//                 </button>
//                 <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-transparent border border-white/30 text-white hover:bg-white/5 transition-all duration-300">
//                   Ver demos
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Terminal-like Interface */}
//             <div className="rounded-lg overflow-hidden border border-[#80A8D6]/30 shadow-2xl shadow-[#80A8D6]/10 bg-black/70 backdrop-blur-sm w-full">
//               <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
//                 <div className="ml-2 text-xs text-white/60">terminal</div>
//               </div>

//               <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm">
//                 <div className="flex">
//                   <span className="text-[#80A8D6]">$ </span>
//                   <span className="ml-2 text-white">
//                     npm install @innovation/tech-stack
//                   </span>
//                 </div>
//                 <div className="mt-2 text-green-400">
//                   + Installing dependencies...
//                 </div>
//                 <div className="mt-1 text-white/60">+ react@18.2.0</div>
//                 <div className="text-white/60">+ typescript@5.2.2</div>
//                 <div className="text-white/60">+ tailwindcss@3.3.3</div>
//                 <div className="mt-2 text-green-400">
//                   + Added 1274 packages in 32s
//                 </div>

//                 <div className="mt-4 flex">
//                   <span className="text-[#80A8D6]">$ </span>
//                   <span className="ml-2 text-white">npm run build</span>
//                 </div>
//                 <div className="mt-2 text-white/60">
//                   Creating optimized production build...
//                 </div>
//                 <div className="mt-1 text-white/60">
//                   ✓ Compiled successfully
//                 </div>
//                 <div className="mt-2 text-green-400">
//                   Build complete. The dist directory is ready to be deployed.
//                 </div>

//                 <div className="mt-4 flex">
//                   <span className="text-[#80A8D6]">$ </span>
//                   <span className="ml-2 text-white">npm run start</span>
//                 </div>
//                 <div className="mt-2 text-white/60">
//                   Starting development server...
//                 </div>
//                 <div className="mt-1 text-green-400">
//                   Server running at http://localhost:3000
//                 </div>

//                 <div className="mt-4 flex items-center">
//                   <span className="text-[#80A8D6]">$ </span>
//                   <span className="ml-2 text-white">_</span>
//                   <span className="ml-1 w-2 h-5 bg-white/70 animate-pulse"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section - Tab Style */}
//       <section className="py-12 sm:py-16 md:py-20 bg-[#80A8D6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
//             <span
//               className="bg-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold font-mono uppercase"
//               style={{
//                 fontFamily: "'JetBrains Mono', monospace",
//               }}
//             >
//               Nuestros Servicios
//             </span>
//           </h2>

//           {/* Tab Navigation */}
//           <div className="flex justify-center mb-6 md:mb-10 overflow-x-auto pb-2">
//             <div className="inline-flex border border-white/30 rounded-lg backdrop-blur-sm overflow-hidden">
//               {Object.keys(tabContent).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 sm:px-8 md:px-14 py-2 md:py-3 transition-all duration-300 text-xs sm:text-sm md:text-xl ${
//                     activeTab === tab
//                       ? "bg-transparent text-white border-b-2 border-[#F8BC47]"
//                       : "bg-white text-[#80A8D6] hover:bg-transparent hover:text-white"
//                   }`}
//                 >
//                   {tab === "web"
//                     ? "Web"
//                     : tab === "automation"
//                     ? "Automatización"
//                     : "IA"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Automation Highlight Box - Only visible on larger screens */}
//           {activeTab === "automation" && (
//             <div
//               className="hidden lg:block absolute top-10 -right-5 max-w-xs bg-white backdrop-blur-md p-6 rounded-3xl shadow-lg z-10 transform"
//               style={{
//                 boxShadow:
//                   "-5px 5px 0 0 #80A8D6, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//               }}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <h3
//                   className="text-xl font-bold text-[#80A8D6] font-mono"
//                 >
//                   ¿POR QUÉ ES EL MOMENTO DE AUTOMATIZAR?
//                 </h3>
//                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
//                   <Bot
//                     size={50}
//                     className="text-[#F8BC47] border-2 rounded-full p-2"
//                   />
//                 </div>
//               </div>
//               <ul className="list-inside pl-0">
//                 <li className="text-[#1a1a1a] text-sm mb-1">
//                   <span className="mr-3 text-[#80A8D6]">〉</span>
//                   Ahorro de tiempo y recursos
//                 </li>
//                 <li className="text-[#1a1a1a] text-sm mb-1">
//                   <span className="mr-3 text-[#80A8D6]">〉</span>
//                   Atención al cliente inmediata, 24/7
//                 </li>
//                 <li className="text-[#1a1a1a] text-sm mb-1">
//                   <span className="mr-3 text-[#80A8D6]">〉</span>
//                   Recopilación de datos en tiempo real
//                 </li>
//                 <li className="text-[#1a1a1a] text-sm mb-1">
//                   <span className="mr-3 text-[#80A8D6]">〉</span>
//                   Escalabilidad sin límites
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Mobile Automation Highlight Box */}
//           {activeTab === "automation" && (
//             <div
//               className="lg:hidden bg-white backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-3xl shadow-lg mb-6 mx-auto max-w-md"
//               style={{
//                 boxShadow:
//                   "-3px 3px 0 0 #80A8D6, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//               }}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-base sm:text-lg font-bold text-[#80A8D6]">
//                   ¿POR QUÉ AUTOMATIZAR?
//                 </h3>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
//                   <Bot
//                     size={24}
//                     className="text-[#F8BC47] border-2 rounded-full p-1"
//                   />
//                 </div>
//               </div>
//               <ul className="list-inside pl-0">
//                 <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
//                   <span className="mr-2 text-[#80A8D6]">〉</span>
//                   Ahorro de tiempo y recursos
//                 </li>
//                 <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
//                   <span className="mr-2 text-[#80A8D6]">〉</span>
//                   Atención al cliente 24/7
//                 </li>
//                 <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
//                   <span className="mr-2 text-[#80A8D6]">〉</span>
//                   Datos en tiempo real
//                 </li>
//                 <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
//                   <span className="mr-2 text-[#80A8D6]">〉</span>
//                   Escalabilidad sin límites
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Tab Content */}
//           <div className="bg-white border border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
//             <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
//               <div>
//                 <h3
//                   className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2 sm:mb-4 text-[#80A8D6] font-mono"
//                 >
//                   {tabContent[activeTab as keyof typeof tabContent].title}
//                 </h3>
//                 <p
//                   className="text-sm sm:text-base text-[#1a1a1a]/80 mb-4 sm:mb-6"
//                   style={{
//                     fontFamily: "'Montserrat', sans-serif",
//                   }}
//                 >
//                   {tabContent[activeTab as keyof typeof tabContent].description}
//                 </p>
//                 <ul className="space-y-2 sm:space-y-3">
//                   {tabContent[
//                     activeTab as keyof typeof tabContent
//                   ].features.map((feature, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center font-semibold"
//                       style={{
//                         fontFamily: "'Montserrat', sans-serif",
//                       }}
//                     >
//                       <span className="mr-2 sm:mr-3 text-[#80A8D6]">〉</span>
//                       <span className="text-sm sm:text-base text-[#1a1a1a]/90">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-6 sm:mt-8">
//                   <button className="flex items-center text-[#80A8D6] hover:text-[#1a1a1a] transition-colors duration-300 text-sm sm:text-base">
//                     Explorar{" "}
//                     {tabContent[activeTab as keyof typeof tabContent].title}{" "}
//                     <ExternalLink size={16} className="ml-2" />
//                   </button>
//                 </div>
//               </div>

//               <div className="flex justify-center mt-6 md:mt-0">
//                 {activeTab === "web" && (
//                   <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-3 border-[#F8BC47] flex items-center justify-center relative">
//                     <Code size={32} className="sm:hidden text-[#F8BC47]" />
//                     <Code
//                       size={48}
//                       className="hidden sm:block md:hidden text-[#F8BC47]"
//                     />
//                     <Code
//                       size={64}
//                       className="hidden md:block text-[#F8BC47]"
//                     />
//                     {/* Círculos orbitando */}
//                     <div className="absolute w-full h-full animate-spin-slow">
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-[#1a1a1a]/20 border border-[#80A8D6]/40"></div>
//                     </div>
//                     <div className="absolute w-full h-full animate-spin-slower">
//                       <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-[#1a1a1a]/10 border border-[#80A8D6]/30"></div>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "automation" && (
//                   <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-3 border-[#F8BC47] flex items-center justify-center">
//                     <Database size={32} className="sm:hidden text-[#F8BC47]" />
//                     <Database
//                       size={48}
//                       className="hidden sm:block md:hidden text-[#F8BC47]"
//                     />
//                     <Database
//                       size={64}
//                       className="hidden md:block text-[#F8BC47]"
//                     />
//                     {/* Elementos flotantes */}
//                     <div className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md bg-[#1a1a1a]/20 border border-[#80A8D6]/40 animate-float"></div>
//                     <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-md bg-[#1a1a1a]/10 border border-[#80A8D6]/30 animate-float-delayed"></div>
//                   </div>
//                 )}

//                 {activeTab === "ai" && (
//                   <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-3 border-[#F8BC47] flex items-center justify-center">
//                     <Brain size={32} className="sm:hidden text-[#F8BC47]" />
//                     <Brain
//                       size={48}
//                       className="hidden sm:block md:hidden text-[#F8BC47]"
//                     />
//                     <Brain
//                       size={64}
//                       className="hidden md:block text-[#F8BC47]"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
//         <div className=" left-0 right-0 h-3 bg-gradient-to-b from-[#80A8D6] to-[#2b2b2c] opacity-100"></div>
//     </div>
//   );
// };



import {Globe , Brain, ExternalLink, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HomePage: React.FC = () => {
  const [, setTypedText] = useState("");
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
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
    <div className="max-h-screen bg-[#2c2c2b] font-mono overflow-hidden text-white">
      {/* Services Section - Tab Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#80A8D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-4 md:mb-4">
            <span
              className="bg-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold font-mono uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Nuestros Servicios
            </span>
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-6 md:mb-10 overflow-x-auto pb-2">
            <div className="inline-flex border border-white/30 rounded-lg backdrop-blur-sm overflow-hidden">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-8 md:px-14 py-2 md:py-3 transition-all duration-300 text-xs sm:text-sm md:text-xl ${
                    activeTab === tab
                      ? "bg-transparent text-white border-b-2 border-[#F2BF5D] uppercase"
                      : "bg-white text-[#80A8D6] hover:bg-transparent hover:text-white uppercase"
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

          {/* Automation Highlight Box - Only visible on larger screens */}
          {activeTab === "automation" && (
            <div
              className="hidden lg:block absolute top-15 -right-10 max-w-[340px] bg-white backdrop-blur-md p-6 rounded-3xl shadow-lg z-10 transform"
              style={{
                boxShadow:
                  "-5px 5px 0 0 #80A8D6, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex max-w-5xl items-center justify-between mb-3 ">
                <h3 className="text-xl font-bold text-[#80A8D6] font-mono">
                  ¿POR QUÉ ES EL MOMENTO DE AUTOMATIZAR?
                </h3>
 
              </div>
              <ul className="list-inside pl-0"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <li className="text-[#1a1a1a] text-sm mb-1">
                  <span className="mr-3 text-[#F2BF5D]">〉</span>
                  Ahorro de tiempo y recursos
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                  <span className="mr-3 text-[#F2BF5D]">〉</span>
                  Atención al cliente inmediata, 24/7
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                  <span className="mr-3 text-[#F2BF5D]">〉</span>
                  Recopilación de datos en tiempo real
                </li>
                <li className="text-[#1a1a1a] text-sm mb-1">
                  <span className="mr-3 text-[#F2BF5D]">〉</span>
                  Escalabilidad sin límites
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Automation Highlight Box */}
          {activeTab === "automation" && (
            <div
              className="lg:hidden bg-white backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-3xl shadow-lg mb-6 mx-auto max-w-md"
              style={{
                boxShadow:
                  "-3px 3px 0 0 #80A8D6, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-bold text-[#80A8D6]">
                  ¿POR QUÉ AUTOMATIZAR?
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot
                    size={24}
                    className="text-[#F2BF5D] border-2 rounded-full p-1"
                  />
                </div>
              </div>
              <ul className="list-inside pl-0">
                <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
                  <span className="mr-2 text-[#80A8D6]">〉</span>
                  Ahorro de tiempo y recursos
                </li>
                <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
                  <span className="mr-2 text-[#80A8D6]">〉</span>
                  Atención al cliente 24/7
                </li>
                <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
                  <span className="mr-2 text-[#80A8D6]">〉</span>
                  Datos en tiempo real
                </li>
                <li className="text-[#1a1a1a] text-xs sm:text-sm mb-1">
                  <span className="mr-2 text-[#80A8D6]">〉</span>
                  Escalabilidad sin límites
                </li>
              </ul>
            </div>
          )}

          {/* Tab Content */}
          <div className="bg-white border border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-4xl uppercase font-semibold mb-2 sm:mb-4 text-[#80A8D6] font-mono">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p
                  className="text-sm sm:text-base text-[#1a1a1a]/80 mb-4 sm:mb-6"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {tabContent[
                    activeTab as keyof typeof tabContent
                  ].features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <span className="mr-2 sm:mr-3 text-[#F2BF5D]">〉</span>
                      <span className="text-sm sm:text-base text-[#1a1a1a]/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8">
                  <button className="flex items-center text-[#F2BF5D] uppercase hover:text-[#80A8D6] transition-colors duration-300 text-sm sm:text-base">
                    Explorar{" "}
                    {tabContent[activeTab as keyof typeof tabContent].title}{" "}
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6 md:mt-0">
                {activeTab === "web" && (
                  <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-6 border-[#F2BF5D] flex items-center justify-center relative">
                    <Globe size={32} className="sm:hidden text-[#F2BF5D]" />
                    <Globe
                      size={48}
                      className="hidden sm:block md:hidden text-[#F2BF5D]"
                    />
                    <Globe
                      size={64}
                      className="hidden md:block text-[#F2BF5D]"
                    />
                    {/* Círculos orbitando */}
                    <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-[#80A8D6]/20 border border-[#80A8D6]"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slower">
                      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-[#80A8D6]/10 border border-[#80A8D6]"></div>
                    </div>
                  </div>
                )}

                {activeTab === "automation" && (
                  <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-6 border-[#F2BF5D] flex items-center justify-center relative">
                    <Bot size={32} className="sm:hidden text-[#F2BF5D]" />
                    <Bot
                      size={48}
                      className="hidden sm:block md:hidden text-[#F2BF5D]"
                    />
                    <Bot size={64} className="hidden md:block text-[#F2BF5D]" />
                    <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-[#80A8D6]/20 border border-[#80A8D6]"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slower">
                      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-[#80A8D6]/10 border border-[#80A8D6]"></div>
                    </div>
                    {/* Elementos flotantes */}
                    {/* <div className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md bg-[#1a1a1a]/20 border border-[#80A8D6]/40 animate-float"></div>
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-md bg-[#1a1a1a]/10 border border-[#80A8D6]/30 animate-float-delayed"></div> */}
                  </div>
                )}

                {activeTab === "ai" && (
                  <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full border-2 sm:border-6 border-[#F2BF5D] flex items-center justify-center relative">
                    <Brain size={32} className="sm:hidden text-[#F2BF5D]" />
                    <Brain
                      size={48}
                      className="hidden sm:block md:hidden text-[#F2BF5D]"
                    />
                    <Brain
                      size={64}
                      className="hidden md:block text-[#F2BF5D]"
                    />
                                       <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-[#80A8D6]/20 border border-[#80A8D6]"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin-slower">
                      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-[#80A8D6]/10 border border-[#80A8D6]"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className=" left-0 right-0 h-3 bg-gradient-to-b from-[#80A8D6] to-[#2b2b2c] opacity-100"></div> */}
    </div>
  );
};