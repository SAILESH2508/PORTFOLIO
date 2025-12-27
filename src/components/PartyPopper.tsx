import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
}

export default function PartyPopper() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showEffect, setShowEffect] = useState(true);

  useEffect(() => {
    const colors = ['#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899'];
    const shapes: Array<'circle' | 'square' | 'triangle' | 'star'> = ['circle', 'square', 'triangle', 'star'];
    const newParticles: Particle[] = [];

    // Create particles from multiple points
    const sources = [
      { x: 20, y: 50 },
      { x: 80, y: 50 },
      { x: 50, y: 30 }
    ];

    sources.forEach((source) => {
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 * i) / 20;
        newParticles.push({
          id: Date.now() + i + source.x,
          x: source.x,
          y: source.y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          velocityX: Math.cos(angle) * (Math.random() * 3 + 2),
          velocityY: Math.sin(angle) * (Math.random() * 3 + 2) - 2,
          rotation: Math.random() * 360,
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
    });

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setShowEffect(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showEffect) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-particle-burst"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            '--velocity-x': `${particle.velocityX}vw`,
            '--velocity-y': `${particle.velocityY}vh`,
            borderRadius: particle.shape === 'circle' ? '50%' : particle.shape === 'square' ? '0' : '0',
            clipPath: particle.shape === 'triangle'
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
              : particle.shape === 'star'
                ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                : 'none'
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
