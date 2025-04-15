
import React, { useEffect, useRef } from "react";

export const Particulas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuración de partículas
    const particlesArray: Particle[] = [];
    const particleCount = 72;
    const colors = ["#80A8D6", "#F2BF5D", "#00F0FF", "#FFFFFF"];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      blinking: boolean;
      blinkRate: number;
      blinkPhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.blinking = Math.random() > 0.7; // Solo algunas partículas parpadean
        this.blinkRate = Math.random() * 0.05 + 0.01;
        this.blinkPhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebotar en los bordes
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;

        // Efecto de parpadeo para algunas partículas
        if (this.blinking) {
          this.blinkPhase += this.blinkRate;
          this.opacity = 0.2 + Math.abs(Math.sin(this.blinkPhase)) * 0.6;
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color.replace(")", `,${this.opacity})`);
        ctx!.fill();
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    // Dibujar conexiones entre partículas cercanas
    function connectParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const opacity = 2 - (distance / maxDistance);
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(128, 168, 214, ${opacity * 0.2})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx!.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    // Función de animación
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Actualizar y dibujar partículas
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};