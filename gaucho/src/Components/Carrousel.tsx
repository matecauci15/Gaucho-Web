// import React, { useState, useEffect } from 'react';

// // Importa tus imágenes
// import ofi from '../assets/ofi.png'
// import manos from '../assets/manos.png'
// import amc from '../assets/amc.png'
// import lab from '../assets/lab.png'
// import equipo from '../assets/equipo.png'

// export const Carousel: React.FC = () => {

//   const images = [
//     { src: ofi, alt: 'Oficina', name: 'ofi' },
//     { src: manos, alt: 'Manos', name: 'manos' },
//     { src: amc, alt: 'AMC', name: 'amc' },
//     { src: lab, alt: 'Laboratorio', name: 'lab' },
//     { src: equipo, alt: 'Equipo', name: 'equipo' }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Auto-play del carrusel
//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 4000); // Cambia cada 2 segundos

//       return () => clearInterval(interval);
//     }
//   }, [isHovered, images.length]);

//   // Función para obtener la posición de cada imagen
//   const getImagePosition = (index: number) => {
//     const totalImages = images.length;
//     const relativeIndex = (index - currentIndex + totalImages) % totalImages;
//     // const centerIndex = Math.floor(totalImages / 2);
    
//     if (relativeIndex === 0) {
//       return 'center';
//     } else if (relativeIndex === 1 || relativeIndex === totalImages - 1) {
//       return relativeIndex === 1 ? 'right' : 'left';
//     } else if (relativeIndex === 2 || relativeIndex === totalImages - 2) {
//       return relativeIndex === 2 ? 'far-right' : 'far-left';
//     } else {
//       return 'hidden';
//     }
//   };

//   // Estilos para cada posición
//   const getPositionStyle = (position: string) => {
//     const baseStyle = "absolute transition-all duration-500 ease-in-out cursor-pointer";
    
//     switch (position) {
//       case 'center':
//         return `${baseStyle} left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-96 h-72 opacity-100 scale-110`;
//       case 'left':
//         return `${baseStyle} left-16 top-1/2 transform -translate-y-1/2 z-20 w-56 h-42 opacity-75 scale-90`;
//       case 'right':
//         return `${baseStyle} right-16 top-1/2 transform -translate-y-1/2 z-20 w-56 h-42 opacity-75 scale-90`;
//       case 'far-left':
//         return `${baseStyle} left-4 top-1/2 transform -translate-y-1/2 z-10 w-40 h-30 opacity-40 scale-75`;
//       case 'far-right':
//         return `${baseStyle} right-4 top-1/2 transform -translate-y-1/2 z-10 w-40 h-30 opacity-40 scale-75`;
//       default:
//         return `${baseStyle} opacity-0 scale-50`;
//     }
//   };

//   const handleImageClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-8">
//       {/* Carrusel Principal */}
//       <div 
//         className="relative h-96 overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
        
//         {/* Imágenes */}
//         {images.map((image, index) => {
//           const position = getImagePosition(index);
//           return (
//             <div
//               key={index}
//               className={getPositionStyle(position)}
//               onClick={() => handleImageClick(index)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               />
//               {position === 'center' && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-xl">
//                   <h3 className="text-white text-xl font-bold text-center">
//                     {image.alt}
//                   </h3>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         {/* Botones de navegación */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//         >
//           <svg className="w-6 h-6 text-[#f8bc47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
        
//         <button
//           onClick={handleNext}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//         >
//           <svg className="w-6 h-6 text-[#f8bc47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Indicadores */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? 'bg-[#f8bc47] scale-125'
//                 : 'bg-gray-300 hover:bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Información adicional */}
//       <div className="mt-6 text-center">
//         <p className="text-xs text-gray-500 mt-1">
//           {currentIndex + 1} de {images.length}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from 'react';

// Importa tus imágenes
import ofi from '../assets/ofi.png'
import manos from '../assets/manos.png'
import amc from '../assets/amc.png'
import lab from '../assets/lab.png'
import equipo from '../assets/equipo.png'

export const Carousel: React.FC = () => {

  const images = [
    { src: ofi, alt: 'Oficina', name: 'ofi' },
    { src: manos, alt: 'Manos', name: 'manos' },
    { src: amc, alt: 'AMC', name: 'amc' },
    { src: lab, alt: 'Laboratorio', name: 'lab' },
    { src: equipo, alt: 'Equipo', name: 'equipo' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  // Función para obtener la posición de cada imagen
  const getImagePosition = (index: number) => {
    const totalImages = images.length;
    const relativeIndex = (index - currentIndex + totalImages) % totalImages;
    
    if (relativeIndex === 0) {
      return 'center';
    } else if (relativeIndex === 1 || relativeIndex === totalImages - 1) {
      return relativeIndex === 1 ? 'right' : 'left';
    } else if (relativeIndex === 2 || relativeIndex === totalImages - 2) {
      return relativeIndex === 2 ? 'far-right' : 'far-left';
    } else {
      return 'hidden';
    }
  };

  // Estilos para cada posición - completamente responsive
  const getPositionStyle = (position: string) => {
    const baseStyle = "absolute transition-all duration-500 ease-in-out cursor-pointer";
    
    switch (position) {
      case 'center':
        return `${baseStyle} left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 
                w-64 h-48 sm:w-72 sm:h-56 md:w-96 md:h-72 lg:w-[28rem] lg:h-80 xl:w-[32rem] xl:h-96 
                opacity-100 scale-110`;
      case 'left':
        return `${baseStyle} left-2 sm:left-4 md:left-12 lg:left-16 xl:left-20 top-1/2 transform -translate-y-1/2 z-20 
                w-32 h-28 sm:w-40 sm:h-32 md:w-56 md:h-42 lg:w-64 lg:h-48 xl:w-72 xl:h-56
                opacity-90 scale-90`;
      case 'right':
        return `${baseStyle} right-2 sm:right-4 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 z-20 
                w-32 h-28 sm:w-40 sm:h-32 md:w-56 md:h-42 lg:w-64 lg:h-48 xl:w-72 xl:h-56
                opacity-90 scale-90`;
      case 'far-left':
        return `${baseStyle} left-0 sm:left-1 md:left-3 lg:left-4 xl:left-6 top-1/2 transform -translate-y-1/2 z-10 
                w-20 h-16 sm:w-24 sm:h-20 md:w-40 md:h-30 lg:w-44 lg:h-32 xl:w-48 xl:h-36
                opacity-80 scale-75`;
      case 'far-right':
        return `${baseStyle} right-0 sm:right-1 md:right-3 lg:right-4 xl:right-6 top-1/2 transform -translate-y-1/2 z-10 
                w-20 h-16 sm:w-24 sm:h-20 md:w-40 md:h-30 lg:w-44 lg:h-32 xl:w-48 xl:h-36
                opacity-80 scale-75`;
      default:
        return `${baseStyle} opacity-0 scale-50`;
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8 lg:py-12">
      {/* Carrusel Principal */}
      <div 
        className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Imágenes */}
        {images.map((image, index) => {
          const position = getImagePosition(index);
          return (
            <div
              key={index}
              className={getPositionStyle(position)}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl 
                          shadow-lg hover:shadow-xl transition-all duration-300 ${
                  position === 'center' 
                    ? '' 
                    : position === 'left' || position === 'right'
                    ? 'grayscale-[0.3] brightness-75 contrast-75 blur-[0.5px]'
                    : 'grayscale-[0.6] brightness-50 contrast-50 blur-[1px]'
                }`}
              />
              {position === 'center' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent 
                               p-2 sm:p-3 md:p-4 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl">
                  <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                    {image.alt}
                  </h3>
                </div>
              )}
            </div>
          );
        })}

        {/* Botones de navegación - Solo visible en desktop */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-40 
                     bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full 
                     p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110
                     hidden md:block"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#f8bc47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-40 
                     bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full 
                     p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110
                     hidden md:block"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#f8bc47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores - Responsive */}
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#f8bc47] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Información adicional - Responsive */}
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          {currentIndex + 1} de {images.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;