import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-16 pb-16">
      {/* Page Header */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float text-primary">
            <Briefcase size={60} />
          </div>
          <div className="absolute top-20 right-20 animate-float text-blue-600" style={{ animationDelay: '1s' }}>
            <GraduationCap size={50} />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float text-purple-600" style={{ animationDelay: '2s' }}>
            <Briefcase size={55} />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 animate-bounce-in">
            <Briefcase size={40} className="text-cyan-600 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 drop-shadow-sm">
              Experience & Achievements
            </h1>
            <Briefcase size={40} className="text-purple-600 animate-bounce" />
          </div>
          <p className="text-xl text-gray-600 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            My professional journey and accomplishments
          </p>
        </div>
      </div>

      {/* Education Section - Added based on user request */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3 justify-center">
                <GraduationCap className="text-primary" size={32} /> Education
              </h3>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[1rem] before:top-4 before:h-[80%] before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-gray-200">
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900">Bachelor of Engineering (CSE)</h4>
                  <p className="text-primary font-bold">2023–Present</p>
                  <p className="text-gray-700 mt-1 text-lg">Sri Shakthi Institute of Engineering & Technology, Coimbatore</p>
                  <div className="mt-2">
                    <span className="text-sm text-primary font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Current GPA: 7.8</span>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900">Higher Secondary (XII)</h4>
                  <p className="text-primary font-bold">2022–2023</p>
                  <p className="text-gray-700 mt-1 text-lg">PMG Matriculation Higher Secondary School, Coimbatore</p>
                  <div className="mt-2">
                    <span className="text-sm text-gray-600 font-bold bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Percentage: 70%</span>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900">Secondary (X)</h4>
                  <p className="text-primary font-bold">2020–2021</p>
                  <p className="text-gray-700 mt-1 text-lg">PMG Matriculation Higher Secondary School, Coimbatore</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Experience />
      <Achievements />

      {/* Bottom CTA */}
      <div className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Like What You See?</h2>
            <p className="text-base mb-8 text-gray-500 max-w-md mx-auto leading-relaxed">Let's connect and build something great together.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-base rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
              >
                <Rocket size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Hire Me Now
              </Link>
              <Link
                to="/skills-projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base rounded-full hover:scale-105 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                View My Projects
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
