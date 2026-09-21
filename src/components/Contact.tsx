import { Mail, Linkedin, Github, MapPin, ExternalLink, Clock, Sparkles, ArrowRight, Copy, Check, Zap, Users, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sailesh25008@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'sailesh25008@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  // IST timezone
  const istTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const hours = istTime.getHours();
  const isAvailable = hours >= 9 && hours < 22;

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      subtitle: 'sailesh25008@gmail.com',
      description: 'Best for project inquiries & collaborations',
      href: 'mailto:sailesh25008@gmail.com?subject=Hello%20Sailesh%20-%20Project%20Inquiry&body=Hi%20Sailesh%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A',
      gradient: 'from-blue-500 to-indigo-600',
      shadowColor: 'shadow-blue-500/20',
      hoverShadow: 'hover:shadow-blue-500/40',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-200',
      delay: 0
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Let\'s Connect',
      description: 'Follow my professional journey & updates',
      href: 'https://www.linkedin.com/in/sailesh-s-825293276/',
      gradient: 'from-sky-500 to-blue-600',
      shadowColor: 'shadow-sky-500/20',
      hoverShadow: 'hover:shadow-sky-500/40',
      bgLight: 'bg-sky-50',
      borderColor: 'border-sky-200',
      delay: 0.1
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'View My Code',
      description: 'Explore my open source projects & contributions',
      href: 'https://github.com/SAILESH2508',
      gradient: 'from-gray-700 to-gray-900',
      shadowColor: 'shadow-gray-500/20',
      hoverShadow: 'hover:shadow-gray-500/40',
      bgLight: 'bg-gray-50',
      borderColor: 'border-gray-200',
      delay: 0.2
    }
  ];

  const quickTopics: never[] = [];

  return (
    <section id="contact" className="py-10 px-6 bg-transparent">
      <div className="container mx-auto max-w-[95%]">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <AnimatedTitle
              title="Get In Touch"
              icon={Mail}
              iconColor="text-blue-500"
              gradient="from-blue-600 via-purple-600 to-pink-600"
            />
            <p className="text-lg font-bold text-gray-600 mt-[-1rem] relative z-10 animate-fade-in">
              Let's discuss your next project
            </p>
          </div>
        </RevealOnScroll>

        {/* Availability Status */}
        <RevealOnScroll delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-3 rounded-full">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                <div className={`absolute inset-0 w-3 h-3 rounded-full ${isAvailable ? 'bg-emerald-500' : 'bg-amber-500'} animate-ping opacity-75`} />
              </div>
              <span className="text-sm font-bold text-gray-700">
                {isAvailable ? '🟢 Available to chat' : '🌙 Away — will reply soon'}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500 border-l border-gray-200 pl-3">
                <Clock size={12} />
                <span>{istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} IST</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {contactMethods.map((method, index) => (
            <RevealOnScroll key={index} delay={method.delay + 0.2}>
              <a
                href={method.href}
                target={method.icon !== Mail ? '_blank' : undefined}
                rel={method.icon !== Mail ? 'noopener noreferrer' : undefined}
                className={`glass-card p-6 block group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${activeCard === index ? 'ring-2 ring-blue-500/30' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${method.gradient} rounded-xl text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg ${method.shadowColor}`}>
                    <method.icon size={24} />
                  </div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm font-bold text-gray-700 mb-2">{method.subtitle}</p>
                <p className="text-xs font-medium text-gray-600">{method.description}</p>
                <div className={`mt-4 flex items-center gap-2 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                  <span>Open</span>
                  <ArrowRight size={14} className="text-gray-500" />
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Quick Copy Email + Open To */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Copy Email Card */}
          <RevealOnScroll delay={0.3}>
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={20} className="text-amber-500" />
                <h3 className="text-lg font-black text-gray-900">Quick Copy</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Click to copy my email address to your clipboard</p>
              <button
                onClick={handleCopyEmail}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all duration-300 group ${
                  copiedEmail
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                    : 'border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 hover:border-blue-300 hover:from-blue-100 hover:via-indigo-100 hover:to-purple-100 text-gray-700'
                }`}
              >
                <span className="font-mono font-bold text-sm">sailesh25008@gmail.com</span>
                <div className={`p-2 rounded-lg transition-all duration-300 ${
                  copiedEmail ? 'bg-emerald-200' : 'bg-gray-200 group-hover:bg-blue-200'
                }`}>
                  {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} className="text-gray-500 group-hover:text-blue-600" />}
                </div>
              </button>
              {copiedEmail && (
                <p className="text-xs text-emerald-600 font-bold mt-2 animate-fade-in text-center">
                  ✅ Copied to clipboard!
                </p>
              )}

              {/* Location */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-black text-gray-900">Coimbatore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* What I'm Open To */}
          <RevealOnScroll delay={0.4}>
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-2">
                <Zap size={20} className="text-blue-500" />
                <h3 className="text-lg font-black text-gray-900">What I'm Open To</h3>
              </div>
              <p className="text-sm text-gray-600 mb-5">Currently available for the following</p>
              <div className="space-y-3">
                {[
                  { icon: Briefcase, label: 'Open to Work', color: 'bg-green-100 text-green-600' },
                  { icon: Users, label: 'Seeking Internships & Full-time Roles', color: 'bg-blue-100 text-blue-600' },
                  { icon: Zap, label: 'Available for Freelance Projects', color: 'bg-orange-100 text-orange-600' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 border border-blue-100/60 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <div className={`p-2 rounded-lg ${color} flex-shrink-0`}>
                      <Icon size={15} />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
