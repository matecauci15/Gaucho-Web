import { useState, useEffect } from 'react';

export const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-46 h-46 rounded-full opacity-20 pointer-events-none z-10 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(128, 168, 214, 0.5) 0%, rgba(128, 168, 214, 0.2) 50%, rgba(0,0,0,0) 70%)",
        left: `${mousePosition.x - 90}px`,
        top: `${mousePosition.y - 90}px`,
        transition: "left 0s ease-out, top 0s ease-out",
      }}
    />
  );
};