import Contact from '../components/Contact';
import Services from '../components/Services';
import { Mail } from 'lucide-react';

export default function ContactPage() {
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
    </div>
  );
}
