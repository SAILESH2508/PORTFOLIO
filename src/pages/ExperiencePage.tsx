import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import { Briefcase, GraduationCap } from 'lucide-react';
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

      {/* Quick Stats Summary - Added 'More Things' */}
      <RevealOnScroll>
        <div className="container mx-auto max-w-6xl px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl text-center border-2 border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">2+</h3>
              <p className="text-gray-700 font-bold uppercase tracking-wider text-[10px] mt-1">Years Coding</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl text-center border-2 border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">15+</h3>
              <p className="text-gray-700 font-bold uppercase tracking-wider text-[10px] mt-1">Projects</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center border-2 border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">5+</h3>
              <p className="text-gray-700 font-bold uppercase tracking-wider text-[10px] mt-1">Certificates</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl text-center border-2 border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Top 5%</h3>
              <p className="text-gray-700 font-bold uppercase tracking-wider text-[10px] mt-1">Class Rank</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

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
    </div>
  );
}
