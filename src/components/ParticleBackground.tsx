import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = "fixed inset-0 pointer-events-none z-0 opacity-40" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        // Multi-colored particles for "Vibrant" feel
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);

        // Randomly assign colors based on index for variety
        if (i % 3 === 0) {
          gradient.addColorStop(0, 'rgba(30, 58, 138, 0.6)'); // Blue
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)');
        } else if (i % 3 === 1) {
          gradient.addColorStop(0, 'rgba(220, 38, 38, 0.6)'); // Red
          gradient.addColorStop(1, 'rgba(239, 68, 68, 0.2)');

        } else {
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0.6)'); // Bright Blue
          gradient.addColorStop(1, 'rgba(96, 165, 250, 0.2)');
        }

        ctx.fillStyle = gradient;
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, particle2.x, particle2.y);
            // Colorful connections
            lineGradient.addColorStop(0, `rgba(30, 58, 138, ${0.15 * (1 - distance / 120)})`);
            lineGradient.addColorStop(1, `rgba(220, 38, 38, ${0.15 * (1 - distance / 120)})`);
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}
