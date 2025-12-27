import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services'; // Added Services component
import ContinuousLearning from '../components/ContinuousLearning'; // New Component
import Stats from '../components/Stats';
import ConfettiEffect from '../components/ConfettiEffect';
import ParticleBackground from '../components/ParticleBackground';
import { ArrowDown, Sparkles, Brain, Code2, Terminal } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function HomePage() {
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  const handleConfetti = () => {
    setTriggerConfetti(true);
    setTimeout(() => setTriggerConfetti(false), 3000);
  };

  return (
    <>
      <ParticleBackground />
      <ConfettiEffect trigger={triggerConfetti} />
      <section id="home">
        <Hero />

        {/* Scroll Indicator */}
        <div className="flex justify-center -mt-10 relative z-20 animate-bounce">
          <div
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass p-4 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform cursor-pointer bg-white text-primary"
          >
            <ArrowDown size={32} />
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <RevealOnScroll>
        <div className="py-12 px-6 relative overflow-hidden bg-transparent">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mx-auto max-w-5xl glass p-8 rounded-2xl shadow-xl border border-white/40">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 text-left md:text-center">
                  <div className="flex items-center gap-4 group w-full md:w-auto">
                    <div className="p-4 bg-blue-50/80 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40">
                      <Code2 size={28} className="text-blue-600" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Full Stack Developer</span>
                  </div>

                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  <div className="flex items-center gap-4 group w-full md:w-auto">
                    <div className="p-4 bg-purple-50/80 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40">
                      <Brain size={28} className="text-purple-600" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">ML Engineer</span>
                  </div>

                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  <div className="flex items-center gap-4 group w-full md:w-auto">
                    <div className="p-4 bg-blue-50/80 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40">
                      <Terminal size={28} className="text-blue-500" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Python Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <About />
      <Services />
      <ContinuousLearning />
      <Stats />

      {/* CTA Section */}
      <div className="py-24 px-6 relative overflow-hidden bg-white">

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 drop-shadow-sm">
              Ready to See My Work?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore my portfolio of Full Stack applications and Machine Learning models.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Link
              to="/skills-projects"
              onClick={handleConfetti}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-xl rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 group"
            >
              <Sparkles size={24} className="group-hover:animate-spin-slow" />
              View Skills & Projects
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
