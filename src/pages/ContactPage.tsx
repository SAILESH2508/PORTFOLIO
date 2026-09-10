import Contact from '../components/Contact';
import Services from '../components/Services';
import { Mail, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-16">
      {/* Page Header */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float text-primary">
            <Mail size={60} />
          </div>
          <div className="absolute top-20 right-20 animate-float text-secondary" style={{ animationDelay: '1s' }}>
            <Mail size={50} />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float text-accent" style={{ animationDelay: '2s' }}>
            <Mail size={55} />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 animate-bounce-in">
            <Mail size={40} className="text-blue-600 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 drop-shadow-sm">
              Get In Touch
            </h1>
            <Mail size={40} className="text-purple-600 animate-bounce" />
          </div>
          <p className="text-xl text-gray-600 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Let's work together on your next project
          </p>
        </div>
      </div>

      <Services />
      <Contact />

      {/* Bottom CTA */}
      <div className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Explore My Work</h2>
            <p className="text-base mb-8 text-gray-500 max-w-md mx-auto leading-relaxed">Check out my projects and professional experience while you're here.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/skills-projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-base rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
              >
                <Rocket size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                View Projects
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base rounded-full hover:scale-105 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                My Experience
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
