import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Heart, MapPin, Code, Rocket, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useEmailJS } from '../hooks/useEmailJS';
import { LanguageLogo } from './LanguageLogos';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitStatus, sendEmail, setSubmitStatus } = useEmailJS();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendEmail(formData);

    if (submitStatus === 'success') {
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Skills & Projects', href: '/skills-projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ];

  const techLogos = [
    'Python', 'React', 'Django', 'AWS', 'Vercel',
    'JavaScript', 'C++', 'HTML', 'CSS', 'SQLite', 'TensorFlow', 'Git'
  ];

  return (
    <footer className="relative py-8 px-4 bg-blue-950 border-t border-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-5 left-5 w-20 h-20 bg-primary rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

          {/* About Section */}
          <div className="space-y-3 animate-fade-in">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              SAILESH S
            </h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Python Full Stack Developer <br />
              ML & Gen AI Enthusiast <br />
              DevOps Learner
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                <MapPin size={12} className="flex-shrink-0 text-cyan-400" />
                <span>Coimbatore, India</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                <Mail size={12} className="flex-shrink-0 text-cyan-400" />
                <a href="mailto:sailesh25008@gmail.com">sailesh25008@gmail.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <a
                href="mailto:sailesh25008@gmail.com"
                className="group w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:border-transparent transition-all"
              >
                <Mail size={14} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sailesh-s-825293276/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-transparent transition-all"
              >
                <Linkedin size={14} className="text-white" />
              </a>
              <a
                href="https://github.com/SAILESH2508"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:border-transparent transition-all"
              >
                <Github size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <Rocket size={16} className="text-secondary-light" />
              Quick Links
            </h4>
            <ul className="space-y-1.5">
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

          {/* Tech & Services */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Code size={16} className="text-accent-light" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1">
                {techLogos.slice(0, 10).map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10 transition-all cursor-pointer group/tech text-white"
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
          </div>

          {/* Quick Contact Form */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <Send size={16} className="text-primary-light" />
              Quick Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <textarea
                placeholder="Message"
                required
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-cyan-500/20"
              >
                {isSubmitting ? (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={12} /> Sent!
                  </>
                ) : (
                  <>
                    Send <Send size={12} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative mb-4">
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
            Made with <Heart className="text-purple-500 animate-pulse" size={12} fill="currentColor" /> by SAILESH S © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
