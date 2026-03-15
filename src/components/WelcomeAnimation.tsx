import { useEffect, useState } from 'react';
import { Sparkles, Code, Rocket } from 'lucide-react';

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-violet-900 via-fuchsia-900 to-indigo-900 animate-fade-out">
      <div className="text-center space-y-8 animate-scale-in">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <Sparkles className="w-24 h-24 mx-auto text-yellow-400" />
          </div>
          <Sparkles className="w-24 h-24 mx-auto text-yellow-300 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            WELCOME TO MY PORTFOLIO
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 drop-shadow-2xl animate-gradient delay-100">
            SAILESH S
          </h2>
          <div className="flex flex-col items-center gap-4 text-white mt-8">
            <div className="flex items-center gap-4">
              <Code className="animate-bounce drop-shadow-lg text-cyan-400" size={28} />
              <p className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 uppercase tracking-widest">
                Python Full Stack Developer
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-white/20"></div>
              <p className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest">
                ML & Gen AI Enthusiast
              </p>
              <div className="w-8 h-px bg-white/20"></div>
            </div>

            <div className="flex items-center gap-4">
              <Rocket className="animate-bounce drop-shadow-lg text-pink-500" size={28} style={{ animationDelay: '0.2s' }} />
              <p className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 uppercase tracking-widest">
                DevOps Learner
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.8)]" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,114,182,0.8)]" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
