import { useEffect, useState } from 'react';
import { Sparkles, Code, Rocket } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';

    // Start fading out after 2.5s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Unmount completely after 3.0s
    const timer = setTimeout(() => {
      setShow(false);
      // Restore scroll
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-300 transition-opacity duration-500 ${isFadingOut ? 'animate-fade-out' : ''}`}>
      {/* Exact Match Homepage Animated Particle Constellation */}
      <ParticleBackground className="absolute inset-0 pointer-events-none z-0 opacity-40" />

      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[100px] animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-purple-400/20 rounded-full blur-[120px] animate-float-slow-reverse pointer-events-none"></div>

      {/* Central Content (Floating on background) */}
      <div className="relative text-center space-y-8 max-w-2xl w-full mx-4 flex flex-col items-center animate-scale-in animate-float">
        {/* Glow behind Sparkles */}
        <div className="relative p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-md">
          <div className="absolute inset-0 animate-pulse bg-yellow-400/10 blur-md rounded-2xl"></div>
          <Sparkles className="w-12 h-12 text-yellow-500 relative z-10 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
        </div>

        {/* Text Details */}
        <div className="space-y-4 w-full">
          <p className="text-xs md:text-sm font-extrabold tracking-[0.3em] text-indigo-900/60 uppercase animate-fade-in">
            Welcome to the Portfolio of
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-800 to-purple-800 drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)] animate-gradient py-2">
            SAILESH S
          </h1>

          {/* Capsule Badges (Light Theme matching portfolio cards) */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 w-full">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 border border-blue-300 text-blue-800 shadow-sm hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
              <Code size={16} className="text-blue-700" />
              <span className="text-[11px] md:text-xs font-black tracking-wider uppercase">Python Full Stack Developer</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 border border-purple-300 text-purple-800 shadow-sm hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300">
              <Sparkles size={16} className="text-purple-700" />
              <span className="text-[11px] md:text-xs font-black tracking-wider uppercase">ML & Gen AI Enthusiast</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 border border-teal-300 text-teal-800 shadow-sm hover:border-teal-400 hover:bg-teal-50/50 transition-all duration-300">
              <Rocket size={16} className="text-teal-700 animate-pulse" />
              <span className="text-[11px] md:text-xs font-black tracking-wider uppercase">DevOps Learner</span>
            </div>
          </div>
        </div>

        {/* Premium Glowing Progress Bar Loader */}
        <div className="w-full max-w-[250px] h-[3px] bg-indigo-200 rounded-full overflow-hidden mt-6 relative shadow-inner">
          <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-700 via-purple-700 to-purple-700 rounded-full animate-loader-progress shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
        </div>
      </div>
    </div>
  );
}
