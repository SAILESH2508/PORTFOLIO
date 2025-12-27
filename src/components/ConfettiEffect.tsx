import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
}

export default function ConfettiEffect({ trigger }: { trigger: boolean }) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (trigger) {
      const colors = ['#3B82F6', '#EF4444', '#8B5CF6', '#F59E0B', '#10B981'];
      const newConfetti: Confetti[] = [];
      
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setConfetti(newConfetti);
      
      setTimeout(() => {
        setConfetti([]);
      }, 3000);
    }
  }, [trigger]);

  if (confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`
          }}
        />
      ))}
    </div>
  );
}
