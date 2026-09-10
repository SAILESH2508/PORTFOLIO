import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Heart, Code, Rocket, ArrowRight } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Skills & Projects', href: '/skills-projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Case Studies', href: '/reports' },
    { name: 'Contact', href: '/contact' }
  ];

  const techLogos = [
    'Python', 'React', 'Django', 'AWS', 'Vercel',
    'JavaScript', 'C++', 'HTML', 'CSS', 'SQLite', 'TensorFlow', 'Git'
  ];

  return (
    <footer className="relative py-12 px-6 bg-blue-950 border-t border-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-5 left-5 w-20 h-20 bg-primary rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* About Section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              SAILESH S
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Python Full Stack Developer <br />
              ML & Gen AI Enthusiast <br />
              DevOps Learner
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Rocket size={16} className="text-secondary-light" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-xs hover:text-cyan-400 hover:translate-x-1 transition-all inline-block font-medium"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & Services - Hidden on mobile to shorten footer */}
          <div className="hidden md:block space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Code size={16} className="text-accent-light" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {techLogos.slice(0, 10).map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/10 transition-all cursor-pointer group/tech text-white"
                  title={tech}
                >
                  <div className="transform group-hover/tech:scale-110 transition-transform">
                    <LanguageLogo name={tech} />
                  </div>
                  <span className="text-white/80 font-semibold text-xs">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Let's Connect CTA */}
          <div className="hidden sm:block space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Mail size={16} className="text-primary-light" />
              Let's Connect
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
            <a
              href="mailto:sailesh25008@gmail.com?subject=Hello%20Sailesh%20-%20Let's%20Connect&body=Hi%20Sailesh%2C%0A%0A"
              className="w-full py-2.5 btn-gradient text-xs font-semibold rounded-md flex items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300"
            >
              <Mail size={12} />
              <span>Send an Email</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sailesh-s-825293276/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-medium flex items-center justify-center gap-1.5 hover:bg-blue-600/20 hover:border-blue-500/30 transition-all"
              >
                <Linkedin size={11} />
                LinkedIn
              </a>
              <a
                href="https://github.com/SAILESH2508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-medium flex items-center justify-center gap-1.5 hover:bg-purple-600/20 hover:border-purple-500/30 transition-all"
              >
                <Github size={11} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-blue-950">
              <Code size={16} className="animate-pulse text-cyan-400" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-white/60 text-xs flex items-center justify-center gap-2 font-semibold">
            Made with <Heart className="text-orange-500 animate-pulse" size={12} fill="currentColor" /> by SAILESH S © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
