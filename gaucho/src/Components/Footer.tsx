// // footer.tsx
// import { useState, useEffect } from "react";
// import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";
// // import logoGaucho from '../assets/gaucho2.png'

// interface TermsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // Componente Modal para mostrar los Términos y Condiciones
// const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
//   // Bloquear/desbloquear el scroll cuando el modal se abre/cierra
//   useEffect(() => {
//     if (isOpen) {
//       // Guardar la posición actual del scroll
//       const scrollY = window.scrollY;
      
//       // Añadir estilos para bloquear el scroll
//       document.body.style.position = 'fixed';
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.width = '100%';
      
//       // Función de limpieza para restaurar el scroll cuando el componente se desmonte
//       return () => {
//         // Quitar los estilos que bloquean el scroll
//         document.body.style.position = '';
//         document.body.style.top = '';
//         document.body.style.width = '';
        
//         // Restaurar la posición del scroll
//         window.scrollTo(0, scrollY);
//       };
//     }
//   }, [isOpen]);

//   // Si el modal no está abierto, no renderizar nada
//   if (!isOpen) return null;

//   // Evitar que el evento de clic se propague al fondo
//   const stopPropagation = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={stopPropagation}
//       >
//         <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
//           <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
//           <button 
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//           >
//             ×
//           </button>
//         </div>
        
//         <div className="p-6 text-gray-700 space-y-6">
//           <p className="text-sm text-gray-500">Last updated: February 06, 2025</p>
//           <p>
//             This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
//             information when you use our service and informs you about your privacy rights and how the law protects you.
//           </p>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Interpretation and Definitions</h3>
//           <h4 className="text-xl font-medium mt-6">Interpretation</h4>
//           <p>
//             The words with capitalized initials have meanings defined under the following conditions.
//           </p>
//           <h4 className="text-xl font-medium mt-6">Definitions</h4>
//           <ul className="list-disc list-inside mt-4 space-y-2">
//             <li><strong>Account:</strong> A unique account created for you to access our service.</li>
//             <li><strong>Company:</strong> Refers to Gaucho Lab.</li>
//             <li><strong>Cookies:</strong> Small files placed on your device containing details of your browsing history.</li>
//             <li><strong>Country:</strong> Refers to Argentina.</li>
//             <li><strong>Device:</strong> Any device that can access the service, such as a computer or mobile phone.</li>
//             <li><strong>Personal Data:</strong> Any information that relates to an identifiable individual.</li>
//             <li><strong>Service:</strong> Refers to the Website.</li>
//             <li><strong>Website:</strong> Refers to Gaucho Lab, accessible from <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">here</a>.</li>
//             <li><strong>You:</strong> The individual accessing or using the service.</li>
//           </ul>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Collecting and Using Your Personal Data</h3>
//           <p>We may ask you to provide personally identifiable information, including:</p>
//           <ul className="list-disc list-inside mt-4 space-y-2">
//             <li>Email address</li>
//             <li>First name and last name</li>
//             <li>Phone number</li>
//             <li>Usage Data</li>
//           </ul>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Tracking Technologies and Cookies</h3>
//           <p>We use cookies and similar tracking technologies to track the activity on our service.</p>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Use of Your Personal Data</h3>
//           <p>
//             The company may use personal data to provide and maintain our service, manage your account, and contact you.
//           </p>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Security of Your Personal Data</h3>
//           <p>
//             The security of your personal data is important to us, but remember that no method of transmission over the internet is 100% secure.
//           </p>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Changes to This Privacy Policy</h3>
//           <p>We may update our Privacy Policy from time to time. Please review it periodically for any changes.</p>
//           <h3 className="text-2xl font-semibold mt-8 border-b pb-2">Contact Us</h3>
//           <p>If you have any questions, you can contact us:</p>
//           <ul className="list-disc list-inside mt-4 space-y-2">
//             <li>By email: info@gaucholab.com</li>
//             <li>By visiting our website: <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">Gaucho Web</a></li>
//             <li>By phone: 549 341 397 7076</li>
//           </ul>
//         </div>
        
//         <div className="sticky bottom-0 bg-white p-4 border-t text-right z-10">
//           <button 
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
//           >
//             Cerrar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Footer = () => {
//   const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  
//   const openTermsModal = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setIsTermsModalOpen(true);
//   };

//   return (
//     <>
//       <footer className="bg-[#73A9D8] text-white py-8">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
//           {/* Top section with horizontal layout */}
//           <div className="flex flex-col md:flex-row justify-between items-start mb-8">
//             {/* Left side - Logo */}
//             <Link to='/'>
//               <div className="mb-6 md:mb-0">
//                 <h2 className="text-3xl font-mono font-bold text-white justify-center text-center items-center">Gaucho<span className="text-[#F2BF5D]">.</span>/ab</h2>
//                 {/* <img src={logoGaucho} alt="" className="h-20 w-auto" /> */}
//                 <div className="mt-2 bg-white text-[#73A9D8] px-4 py-1 text-sm font-mono rounded-full inline-block">
//                   SOFTWARE & AUTOMATION
//                 </div>
//               </div>
//             </Link>
            
//             {/* Center and right - Contact information */}
//             <div className="grid grid-cols-2 items-center justify-center align-middle md:grid-cols-2 gap-x-1 mt-10 gap-y-6 w-full md:w-[70%] md:ml-auto">
//               {/* Left column - Social media and Phone */}
//               <div className="flex flex-col items-start space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <Instagram size={22} className="text-white" />
//                   </div>
//                   <span>Instagram</span>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <Facebook size={22} className="text-white" />
//                   </div>
//                   <span>Facebook</span>
//                 </div>

                
                
//                 <div className="flex items-center gap-3">
                  
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <Phone size={22} className="text-white" />
//                   </div>
//                   <span>+54 341 3292024</span>
//                 </div>
//               </div>
              
//               {/* Right column - Email and Address */}
//               <div className="flex flex-col items-start space-y-4">

//               <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <Linkedin size={22} className="text-white" />
//                   </div>
//                   <span>GauchoLab</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <Mail size={22} className="text-white" />
//                   </div>
//                   <span>info@gaucholab.com</span>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D] rounded-md flex items-center justify-center">
//                     <MapPin size={22} className="text-white" />
//                   </div>
//                   <div>
//                     <div>España 810</div>
//                     <div>Rosario, Santa Fe, Argentina</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation links */}
//           <div className="border-t border-white/20 pt-6">
//             <nav className="flex flex-wrap justify-center gap-6 mb-4">
//               <Link to="/Gaucho-Lab/" className="text-white hover:text-[#F2BF5D] transition-colors">
//                 Inicio
//               </Link>
//               <span className="text-white">-</span>
//               <Link to="/Gaucho-Lab/about" className="text-white hover:text-[#F2BF5D] transition-colors">
//                 Nosotros
//               </Link>
//               <span className="text-white">-</span>
//               <Link to="/Gaucho-Lab/proyectos" className="text-white hover:text-[#F2BF5D] transition-colors">
//                 Proyectos
//               </Link>
//               <span className="text-white">-</span>
//               <Link to="/Gaucho-Lab/contact" className="text-white hover:text-[#F2BF5D] transition-colors">
//                 Contacto
//               </Link>
//               <span className="text-white">-</span>
//               <a 
//                 href="#" 
//                 onClick={openTermsModal} 
//                 className="text-white hover:text-[#F2BF5D] transition-colors"
//               >
//                 Términos y Condiciones
//               </a>
//             </nav>
            
//             {/* Copyright */}
//             <div className="text-center text-white/90 text-sm">
//               <p>© {new Date().getFullYear()} Gaucho Lab. Construyendo el futuro con código, un proyecto a la vez.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
      
//       {/* Modal de términos y condiciones */}
//       <TermsModal 
//         isOpen={isTermsModalOpen} 
//         onClose={() => setIsTermsModalOpen(false)} 
//       />
//     </>
//   );
// };

// export default Footer;


// footer.tsx



// import { useState, useEffect } from "react";
// import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";

// interface TermsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // Componente Modal para mostrar los Términos y Condiciones
// const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
//   useEffect(() => {
//     if (isOpen) {
//       const scrollY = window.scrollY;
      
//       document.body.style.position = 'fixed';
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.width = '100%';
      
//       return () => {
//         document.body.style.position = '';
//         document.body.style.top = '';
//         document.body.style.width = '';
//         window.scrollTo(0, scrollY);
//       };
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const stopPropagation = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={stopPropagation}
//       >
//         <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
//           <h2 className="text-xl md:text-2xl font-bold text-gray-800">Privacy Policy</h2>
//           <button 
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
//           >
//             ×
//           </button>
//         </div>
        
//         <div className="p-4 md:p-6 text-gray-700 space-y-4 md:space-y-6">
//           <p className="text-sm text-gray-500">Last updated: February 06, 2025</p>
//           <p className="text-sm md:text-base">
//             This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
//             information when you use our service and informs you about your privacy rights and how the law protects you.
//           </p>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Interpretation and Definitions</h3>
//           <h4 className="text-base md:text-xl font-medium mt-4 md:mt-6">Interpretation</h4>
//           <p className="text-sm md:text-base">
//             The words with capitalized initials have meanings defined under the following conditions.
//           </p>
//           <h4 className="text-base md:text-xl font-medium mt-4 md:mt-6">Definitions</h4>
//           <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base">
//             <li><strong>Account:</strong> A unique account created for you to access our service.</li>
//             <li><strong>Company:</strong> Refers to Gaucho Lab.</li>
//             <li><strong>Cookies:</strong> Small files placed on your device containing details of your browsing history.</li>
//             <li><strong>Country:</strong> Refers to Argentina.</li>
//             <li><strong>Device:</strong> Any device that can access the service, such as a computer or mobile phone.</li>
//             <li><strong>Personal Data:</strong> Any information that relates to an identifiable individual.</li>
//             <li><strong>Service:</strong> Refers to the Website.</li>
//             <li><strong>Website:</strong> Refers to Gaucho Lab, accessible from <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">here</a>.</li>
//             <li><strong>You:</strong> The individual accessing or using the service.</li>
//           </ul>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Collecting and Using Your Personal Data</h3>
//           <p className="text-sm md:text-base">We may ask you to provide personally identifiable information, including:</p>
//           <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base">
//             <li>Email address</li>
//             <li>First name and last name</li>
//             <li>Phone number</li>
//             <li>Usage Data</li>
//           </ul>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Tracking Technologies and Cookies</h3>
//           <p className="text-sm md:text-base">We use cookies and similar tracking technologies to track the activity on our service.</p>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Use of Your Personal Data</h3>
//           <p className="text-sm md:text-base">
//             The company may use personal data to provide and maintain our service, manage your account, and contact you.
//           </p>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Security of Your Personal Data</h3>
//           <p className="text-sm md:text-base">
//             The security of your personal data is important to us, but remember that no method of transmission over the internet is 100% secure.
//           </p>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Changes to This Privacy Policy</h3>
//           <p className="text-sm md:text-base">We may update our Privacy Policy from time to time. Please review it periodically for any changes.</p>
//           <h3 className="text-lg md:text-2xl font-semibold mt-6 md:mt-8 border-b pb-2">Contact Us</h3>
//           <p className="text-sm md:text-base">If you have any questions, you can contact us:</p>
//           <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base">
//             <li>By email: info@gaucholab.com</li>
//             <li>By visiting our website: <a className="text-blue-600 hover:underline" href="https://matecauci15.github.io/Gaucho-Lab/">Gaucho Web</a></li>
//             <li>By phone: 549 341 397 7076</li>
//           </ul>
//         </div>
        
//         <div className="sticky bottom-0 bg-white p-4 border-t text-right z-10">
//           <button 
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm md:text-base"
//           >
//             Cerrar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Footer = () => {
//   const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  
//   const openTermsModal = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setIsTermsModalOpen(true);
//   };

//   return (
//     <>
//       <footer className="w-full bg-[#73A9D8] text-white relative z-10">
//         <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
//           {/* Mobile-first Layout */}
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            
//             {/* Logo Section */}
//             <div className="text-center sm:text-left lg:col-span-1">
//               <Link to='/'>
//                 <div className="mb-4">
//                   <h2 className="text-2xl sm:text-3xl font-mono font-bold md:ml-[10px] text-white">
//                     Gaucho<span className="text-[#F2BF5D]">.</span>/ab
//                   </h2>
//                   <div className="mt-2 bg-white text-[#73A9D8] px-3 py-1 text-xs sm:text-sm font-mono rounded-full inline-block">
//                     SOFTWARE & AUTOMATION
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             {/* Contact Section */}
//             <div className="text-center sm:text-left">
//               <h4 className="uppercase  text-lg font-semibold mb-2">Contacto</h4>
//               <div className=" inline-block text-left">
//                 <a 
//                   href="mailto:info@gaucholab.com"
//                   className="flex items-center gap-3 hover:text-[#F2BF5D] hover:bg-white/85  transition-colors duration-300 p-2 rounded-lg group"
//                 >
//                   <div className="w-8 h-8 border-1 border-[#F2BF5D]  rounded-full flex items-center justify-center  transition-colors flex-shrink-0">
//                     <Mail size={16} className="" />
//                   </div>
//                   <span className="text-sm">info@gaucholab.com</span>
//                 </a>
                
//                 <a 
//                   href="tel:+543413292024"
//                   className="flex items-center gap-3 hover:text-[#F2BF5D] transition-colors duration-300 p-2 rounded-lg hover:bg-white/85 group"
//                 >
//                   <div className="w-8 h-8 border-1 border-[#F2BF5D] rounded-full flex items-center justify-center  transition-colors flex-shrink-0">
//                     <Phone size={16} className="" />
//                   </div>
//                   <span className="text-sm">+54 341 3292024</span>
//                 </a>
                
//                 <div className="flex items-start gap-3 p-2">
//                   <div className="w-8 h-8 border-1 border-[#F2BF5D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <MapPin size={16} className="" />
//                   </div>
//                   <div className="text-sm">
//                     <div>España 810</div>
//                     <div>Rosario, Santa Fe, Argentina</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media Section */}
//             <div className="text-center sm:text-left">
//               <h4 className="uppercase text-lg font-semibold 2">Redes</h4>
              
//               {/* Mobile: Horizontal icons */}
//               <div className="flex justify-center sm:hidden gap-4 mb-4">
//                 <a
//                   href="https://instagram.com/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
//                 >
//                   <Instagram size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                 </a>
//                 <a
//                   href="https://facebook.com/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
//                 >
//                   <Facebook size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                 </a>
//                 <a
//                   href="https://linkedin.com/company/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
//                 >
//                   <Linkedin size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                 </a>
//               </div>

//               {/* Desktop: Vertical list */}
//               <div className="hidden sm:flex sm:flex-col gap-">
//                 <a
//                   href="https://instagram.com/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
//                 >
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
//                     <Instagram size={18} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                   </div>
//                   <span className="text-sm">Instagram</span>
//                 </a>
//                 <a
//                   href="https://facebook.com/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
//                 >
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
//                     <Facebook size={18} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                   </div>
//                   <span className="text-sm">Facebook</span>
//                 </a>
//                 <a
//                   href="https://linkedin.com/company/gaucholab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
//                 >
//                   <div className="w-10 h-10 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
//                     <Linkedin size={18} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
//                   </div>
//                   <span className="text-sm">LinkedIn</span>
//                 </a>
//               </div>
//             </div>

//             {/* Navigation Section */}
//             <div className="text-center sm:text-left">
//               <h4 className="uppercase text-lg font-semibold  mb-2">Navegación</h4>
              
//               {/* Mobile: Vertical list centered */}
//               <div className="flex flex-col gap-2 sm:hidden items-center">
//                 <Link 
//                   to="/Gaucho-Lab/" 
//                   className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
//                 >
//                   Inicio
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/proyectos" 
//                   className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
//                 >
//                   Proyectos
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/about" 
//                   className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
//                 >
//                   Nosotros
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/contact" 
//                   className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
//                 >
//                   Contacto
//                 </Link>
//               </div>
              
//               {/* Terms link for mobile */}
//               <div className="mt-4 sm:hidden">
//                 <a 
//                   href="#" 
//                   onClick={openTermsModal} 
//                   className="text-sm py-2 px-4 rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 inline-block"
//                 >
//                   Términos y Condiciones
//                 </a>
//               </div>

//               {/* Desktop: Vertical list */}
//               <div className="hidden sm:flex sm:flex-col gap-">
//                 <Link 
//                   to="/Gaucho-Lab/" 
//                   className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
//                 >
//                   Inicio
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/proyectos" 
//                   className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
//                 >
//                   Proyectos
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/about" 
//                   className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
//                 >
//                   Nosotros
//                 </Link>
//                 <Link 
//                   to="/Gaucho-Lab/contact" 
//                   className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
//                 >
//                   Contacto
//                 </Link>
//                 <a 
//                   href="#" 
//                   onClick={openTermsModal} 
//                   className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
//                 >
//                   Términos y Condiciones
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section - Copyright */}
//           <div className="mt-8 md:-mb-8 pt-6 border-t border-white/10">
//             <div className="text-center text-white/90 text-sm">
//               <p>© {new Date().getFullYear()} Gaucho Lab. Construyendo el futuro con código, un proyecto a la vez.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
      
//       {/* Modal de términos y condiciones */}
//       <TermsModal 
//         isOpen={isTermsModalOpen} 
//         onClose={() => setIsTermsModalOpen(false)} 
//       />
//     </>
//   );
// };

// export default Footer;

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#73A9D8] text-white relative z-10">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        {/* Mobile-first Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Logo Section */}
          <div className="text-center sm:text-left lg:col-span-1">
            <Link to='/'>
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-mono font-bold md:ml-[10px] text-white">
                  Gaucho<span className="text-[#F2BF5D]">.</span>/ab
                </h2>
                <div className="mt-2 bg-white text-[#73A9D8] px-3 py-1 text-xs sm:text-sm font-mono rounded-full inline-block">
                  SOFTWARE & AUTOMATION
                </div>
              </div>
            </Link>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h4 className="uppercase text-lg font-semibold mb-2">Contacto</h4>
            <div className="inline-block text-left">
              <a 
                href="mailto:info@gaucholab.com"
                className="flex items-center gap-3 hover:text-[#F2BF5D] hover:bg-white/85 transition-colors duration-300 p-2 rounded-lg group"
              >
                <div className="w-8 h-8 border-1 border-[#F2BF5D] rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail size={16} className="" />
                </div>
                <span className="text-sm">info@gaucholab.com</span>
              </a>
              
              <a 
                href="tel:+543413292024"
                className="flex items-center gap-3 hover:text-[#F2BF5D] transition-colors duration-300 p-2 rounded-lg hover:bg-white/85 group"
              >
                <div className="w-8 h-8 border-1 border-[#F2BF5D] rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Phone size={16} className="" />
                </div>
                <span className="text-sm">+54 341 3292024</span>
              </a>
              
              <div className="flex items-start gap-3 p-2">
                <div className="w-8 h-8 border-1 border-[#F2BF5D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} className="" />
                </div>
                <div className="text-sm">
                  <div>España 810</div>
                  <div>Rosario, Santa Fe, Argentina</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center sm:text-left">
            <h4 className="uppercase text-lg font-semibold mb-2">Redes</h4>
            
            {/* Mobile: Horizontal icons */}
            <div className="flex justify-center sm:hidden gap-4 mb-4">
              <a
                href="https://instagram.com/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
              >
                <Instagram size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
              </a>
              <a
                href="https://facebook.com/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
              >
                <Facebook size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/company/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center hover:border-[#F2BF5D] hover:bg-[#F2BF5D]/10 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
              </a>
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden sm:flex sm:flex-col">
              <a
                href="https://instagram.com/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
              >
                <div className="w-9 h-9 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
                  <Instagram size={17} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://facebook.com/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
              >
                <div className="w-9 h-9 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
                  <Facebook size={17} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
                </div>
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://linkedin.com/company/gaucholab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F2BF5D] transition-all duration-300 p-2 rounded-lg hover:bg-white/85 group"
              >
                <div className="w-9 h-9 border-2 border-[#F2BF5D]/50 rounded-xl flex items-center justify-center group-hover:border-[#F2BF5D] group-hover:bg-[#F2BF5D]/10 transition-all duration-300">
                  <Linkedin size={17} className="text-white group-hover:text-[#F2BF5D] transition-colors duration-300" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center sm:text-left">
            <h4 className="uppercase text-lg font-semibold mb-2">Navegación</h4>
            
            {/* Mobile: Vertical list centered */}
            <div className="flex flex-col gap-2 sm:hidden items-center">
              <Link 
                to="/Gaucho-Lab/" 
                className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
              >
                Inicio
              </Link>
              <Link 
                to="/Gaucho-Lab/proyectos" 
                className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
              >
                Proyectos
              </Link>
              <Link 
                to="/Gaucho-Lab/about" 
                className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
              >
                Nosotros
              </Link>
              <Link 
                to="/Gaucho-Lab/contact" 
                className="py-2 px-4 text-sm rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 w-full max-w-[200px] text-center"
              >
                Contacto
              </Link>
            </div>
            
            {/* Terms link for mobile */}
            <div className="mt-4 sm:hidden">
              <Link 
                to="/terms" 
                className="text-sm py-2 px-4 rounded-lg hover:bg-white/5 hover:text-[#F2BF5D] transition-all duration-300 inline-block"
              >
                Términos y Condiciones
              </Link>
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden sm:flex sm:flex-col gap-1">
              <Link 
                to="/Gaucho-Lab/" 
                className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
              >
                Inicio
              </Link>
              <Link 
                to="/Gaucho-Lab/proyectos" 
                className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
              >
                Proyectos
              </Link>
              <Link 
                to="/Gaucho-Lab/about" 
                className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
              >
                Nosotros
              </Link>
              <Link 
                to="/Gaucho-Lab/contact" 
                className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
              >
                Contacto
              </Link>
              <Link 
                to="/terms" 
                className="text-sm py-2 px-3 rounded-lg hover:bg-white/85 hover:text-[#F2BF5D] transition-all duration-300"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 md:-mb-8 pt-6 border-t border-white/10">
          <div className="text-center text-white/90 text-sm">
            <p>© {new Date().getFullYear()} Gaucho Lab. Construyendo el futuro con código, un proyecto a la vez.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;