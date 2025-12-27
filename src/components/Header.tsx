import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Skills & Projects', href: '/skills-projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-blue-900 shadow-lg transition-all duration-300"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
              <span className="font-bold tracking-tight hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default uppercase">
                Sailesh S
              </span>
            </div>
          </Link>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold animate-fade-in hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            Welcome to my Portfolio
          </div>

          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary-light ${location.pathname === link.href ? 'text-primary-light' : 'text-gray-300'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-light transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-3 pl-3 border-l border-gray-700">
            <a
              href="https://github.com/Sailesh-24-05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sailesh-s-024368257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sailesh25008@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-primary-light hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1 animate-fade-in bg-blue-950 border-t border-blue-900">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-primary-light hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
