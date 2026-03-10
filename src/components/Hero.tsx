import { Link } from 'react-router-dom';
import { Download, Brain, PartyPopper, Code2, Cloud, GraduationCap } from 'lucide-react';
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
            <RevealOnScroll>




              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                <AnimatedText text="Hi, I'm" className="text-gray-900" startDelay={500} /> <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600">
                  <AnimatedText text="SAILESH S" className="inline-block" startDelay={2000} />
                </span>
              </h1>

              <div className="h-4"></div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                I build end-to-end solutions using Django, Flask, React, and modern machine learning tools. I have solid experience in Python Full Stack Development, and a growing expertise in Machine Learning, Generative AI, and DevOps. I am passionate about turning ideas into scalable, production-ready applications with clean architecture, optimized performance, and user-centric design.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-primary text-white font-bold rounded-full transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2"
                >
                  <PartyPopper size={20} className="group-hover:rotate-12 transition-transform" />
                  HIRE ME NOW
                </Link>

                <a
                  href="/Resume.pdf"
                  download="Sailesh_S_Resume.pdf"
                  className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  DOWNLOAD RESUME
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg relative hidden lg:block">
            <RevealOnScroll delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="glass-card p-5 lg:p-6 hover:scale-[1.01] transition-transform duration-300 bg-white flex flex-col gap-4">
                  <div className="h-[350px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-50 relative group-hover:shadow-inner transition-shadow">
                    {/* Main Profile/Hero Image - REPLACED with Giant S Logo per request */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_200%] animate-gradient-xy flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] animate-pulse-slow"></div>

                      {/* CSE Student Badge */}
                      <div className="absolute top-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 hover:bg-white/30 transition-colors cursor-default">
                          <GraduationCap size={18} className="text-white" />
                          <span className="text-sm font-bold text-white tracking-widest uppercase text-shadow-sm">CSE Student</span>
                        </div>
                      </div>
                      <span className="text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10 select-none transform group-hover:rotate-6 transition-transform duration-500 animate-float">S</span>
                      <div className="absolute bottom-10 left-0 right-0 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-xl font-bold text-white/90 tracking-[0.2em] uppercase drop-shadow-lg">Welcome to my Portfolio</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Display Block */}
                  <div className="bg-blue-50/80 rounded-2xl p-4 flex flex-row flex-wrap justify-center items-center gap-3 xl:gap-4 border border-blue-100 shadow-sm relative z-20">
                    <div className="flex items-center gap-2 bg-white/50 pr-3 py-1 rounded-xl">
                      <div className="bg-white p-1.5 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] flex items-center justify-center h-8 w-8">
                        <Code2 size={16} className="text-blue-600" />
                      </div>
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">Python Full Stack Developer</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/50 pr-3 py-1 rounded-xl">
                      <div className="bg-white p-1.5 rounded-lg shadow-[0_2px_10px_-3px_rgba(147,51,234,0.3)] flex items-center justify-center h-8 w-8">
                        <Brain size={16} className="text-purple-600" />
                      </div>
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">ML & Gen AI Enthusiast</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/50 pr-3 py-1 rounded-xl">
                      <div className="bg-white p-1.5 rounded-lg shadow-[0_2px_10px_-3px_rgba(13,148,136,0.3)] flex items-center justify-center h-8 w-8">
                        <Cloud size={16} className="text-teal-600" />
                      </div>
                      <span className="font-bold text-slate-800 text-[13px] md:text-sm whitespace-nowrap">DevOps Learner</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <ReactLogo size={40} />
                  </div>
                </div>

                {/* Personal S Logo Badge - REMOVED (Moved to main container) */}

                <div className="absolute -bottom-8 -left-8 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <PythonLogo size={40} />
                  </div>
                </div>
                <div className="absolute bottom-20 -right-12 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <Brain size={32} className="text-primary" />
                  </div>
                </div>
                {/* New Logos */}
                <div className="absolute top-1/2 -left-12 animate-float" style={{ animationDelay: '3.5s' }}>
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <DjangoLogo size={40} />
                  </div>
                </div>
                <div className="absolute -top-10 left-10 animate-float" style={{ animationDelay: '4.5s' }}>
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
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
