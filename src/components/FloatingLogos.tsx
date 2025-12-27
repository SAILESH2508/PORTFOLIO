import { useEffect, useState } from 'react';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import DjangoLogo from './logos/DjangoLogo';
import JavaScriptLogo from './logos/JavaScriptLogo';
import JavaLogo from './logos/JavaLogo';

interface FloatingLogo {
  id: number;
  Component: React.FC<{ size?: number }>;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export default function FloatingLogos() {
  const [logos, setLogos] = useState<FloatingLogo[]>([]);

  useEffect(() => {
    const logoComponents = [PythonLogo, ReactLogo, DjangoLogo, JavaScriptLogo, JavaLogo];
    const newLogos: FloatingLogo[] = [];

    for (let i = 0; i < 20; i++) {
      newLogos.push({
        id: i,
        Component: logoComponents[Math.floor(Math.random() * logoComponents.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10
      });
    }

    setLogos(newLogos);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="absolute animate-float"
          style={{
            left: `${logo.left}%`,
            top: `${logo.top}%`,
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.duration}s`
          }}
        >
          <logo.Component size={40} />
        </div>
      ))}
    </div>
  );
}
