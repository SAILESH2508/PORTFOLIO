import { Link } from 'react-router-dom';
import { Brain, Code2, Cloud, Rocket, Download } from 'lucide-react';
import PythonLogo from './logos/PythonLogo';
import ReactLogo from './logos/ReactLogo';
import DjangoLogo from './logos/DjangoLogo';
import SQLiteLogo from './logos/SQLiteLogo';
import AnimatedText from './AnimatedText';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-transparent" id="home">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 text-center lg:text-left">
            <RevealOnScroll>              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                <AnimatedText text="Hi, I'm" className="text-gray-900" startDelay={500} /> <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600">
                  <AnimatedText text="SAILESH S" className="inline-block" startDelay={2000} />
                </span>
              </h1>

              <div className="h-4"></div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 px-2 sm:px-0">
                I build end-to-end solutions using Django, Flask, React, and modern machine learning tools. I have solid experience in Python Full Stack Development, and a growing expertise in Machine Learning, Generative AI, and DevOps. I am passionate about turning ideas into scalable, production-ready applications with clean architecture, optimized performance, and user-centric design.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 btn-gradient font-bold rounded-xl flex items-center gap-2"
                >
                  <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Hire Me Now
                </Link>

                <a
                  href="/Resume.pdf"
                  download="Sailesh_S_Resume.pdf"
                  className="group px-8 py-4 btn-gradient-cyan font-bold rounded-xl flex items-center gap-2"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg relative mt-12 lg:mt-0">
            <RevealOnScroll delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="glass-card p-5 lg:p-6 hover:scale-[1.01] transition-transform duration-300 bg-slate-200 border-2 border-blue-900/50 shadow-2xl flex flex-col gap-4">
                  <div className="h-[350px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-50 border-4 border-blue-900 shadow-xl relative group-hover:shadow-inner transition-shadow">
                    {/* Main Profile/Hero Image - REPLACED with Giant S Logo per request */}
                    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img src="/profile.jpg" alt="Sailesh S Profile" className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/30 transition-colors pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Skills Display Block */}
                  <div className="bg-blue-50/80 rounded-2xl p-4 flex flex-row flex-wrap justify-center items-center gap-3 xl:gap-4 border border-blue-200/50 shadow-sm relative z-20">
                    <div className="flex items-center gap-2 bg-white/50 pl-2 pr-3 py-1 rounded-xl">
                      <Code2 size={18} className="text-blue-600" />
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">Python Full Stack Developer</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/50 pl-2 pr-3 py-1 rounded-xl">
                      <Brain size={18} className="text-purple-600" />
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">ML & Gen AI Enthusiast</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/50 pl-2 pr-3 py-1 rounded-xl">
                      <Cloud size={18} className="text-teal-600" />
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">DevOps Learner</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-900/30">
                    <ReactLogo size={40} />
                  </div>
                </div>

                {/* Personal S Logo Badge - REMOVED (Moved to main container) */}

                <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-900/30">
                    <PythonLogo size={40} />
                  </div>
                </div>
                <div className="absolute bottom-20 -right-4 md:-right-12 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-900/30">
                    <Brain size={32} className="text-primary" />
                  </div>
                </div>
                {/* New Logos */}
                <div className="absolute top-1/2 -left-4 md:-left-12 animate-float" style={{ animationDelay: '3.5s' }}>
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-900/30">
                    <DjangoLogo size={40} />
                  </div>
                </div>
                <div className="absolute -top-8 left-6 md:-top-10 md:left-10 animate-float" style={{ animationDelay: '4.5s' }}>
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-900/30">
                    <SQLiteLogo size={40} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
