import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import ContinuousLearning from '../components/ContinuousLearning';
import ConfettiEffect from '../components/ConfettiEffect';
import ParticleBackground from '../components/ParticleBackground';
import { Sparkles, ChevronDown } from 'lucide-react';
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
      </section>

      {/* Down arrow separator */}
      <div className="flex justify-center items-center py-3 bg-transparent">
        <a href="#about" className="group flex flex-col items-center gap-1 text-blue-400/60 hover:text-blue-500 transition-colors duration-300">
          <ChevronDown
            size={28}
            className="animate-bounce"
          />
        </a>
      </div>
      <About />
      <ContinuousLearning />

      {/* CTA Section */}
      <div className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Subtle decorative blobs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to See My Work?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-base mb-8 text-gray-500 max-w-md mx-auto leading-relaxed">
              Explore my portfolio of Full Stack applications and Machine Learning models.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Link
              to="/skills-projects"
              onClick={handleConfetti}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-base rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
            >
              <Sparkles size={18} className="group-hover:animate-spin-slow" />
              View Skills & Projects
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
