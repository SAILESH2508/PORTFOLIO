import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import ContinuousLearning from '../components/ContinuousLearning';
import Stats from '../components/Stats';
import ConfettiEffect from '../components/ConfettiEffect';
import ParticleBackground from '../components/ParticleBackground';
import { ArrowDown, Sparkles } from 'lucide-react';
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



      <About />
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
