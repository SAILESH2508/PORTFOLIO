import { Briefcase, Calendar, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const internships = [
  {
    title: 'Python Developer Intern',
    company: 'Overload Ware Labs Ai (Owl Ai)',
    period: 'February 2026',
    description: 'Developed Python applications and built scalable backend architectures using the Django framework.',
    skills: ['Python', 'Django', 'API Development', 'Backend'],
    color: {
      primary: 'text-blue-600',
      bgColor: 'bg-blue-100',
      bgGradient: 'from-blue-100 to-cyan-50',
      border: 'border-blue-400/50',
      gradient: 'from-blue-600 to-cyan-600',
      glow: 'shadow-blue-500/30',
      blob: 'bg-blue-300/30'
    }
  },
  {
    title: 'Full Stack Web Development Internship',
    company: 'Prodigy InfoTech',
    period: 'Dec 2025 – Jan 2026',
    description: 'Developed full-stack web applications, enhancing problem-solving skills and gaining hands-on workflow exposure.',
    skills: ['React', 'Django', 'REST APIs', 'SQLite'],
    color: {
      primary: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      bgGradient: 'from-emerald-100 to-teal-50',
      border: 'border-emerald-400/50',
      gradient: 'from-emerald-600 to-teal-500',
      glow: 'shadow-emerald-500/30',
      blob: 'bg-emerald-300/30'
    }
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Code Alpha',
    period: 'October 2025',
    description: 'Developed and deployed multiple full-stack web applications using modern frameworks and technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Django', 'REST APIs', 'SQLite'],
    color: {
      primary: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      bgGradient: 'from-indigo-100 to-blue-50',
      border: 'border-indigo-400/50',
      gradient: 'from-indigo-600 to-blue-500',
      glow: 'shadow-indigo-500/30',
      blob: 'bg-indigo-300/30'
    }
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Built end-to-end web applications with a focus on scalable architecture and modern development practices.',
    skills: ['Python', 'Flask', 'JavaScript', 'SQL'],
    color: {
      primary: 'text-purple-600',
      bgColor: 'bg-purple-100',
      bgGradient: 'from-purple-100 to-pink-50',
      border: 'border-purple-400/50',
      gradient: 'from-purple-600 to-pink-500',
      glow: 'shadow-purple-500/30',
      blob: 'bg-purple-300/30'
    }
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Designed user-centric interfaces and prototypes according to modern UX principles.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
    color: {
      primary: 'text-amber-600',
      bgColor: 'bg-amber-100',
      bgGradient: 'from-amber-100 to-orange-50',
      border: 'border-amber-400/50',
      gradient: 'from-amber-600 to-orange-500',
      glow: 'shadow-amber-500/30',
      blob: 'bg-amber-300/30'
    }
  }
];

const certifications = [
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'Forage | AWS',
    period: 'July 2025',
    type: 'Job Simulation',
    description: 'Developed practical skills in designing simple, scalable, and secure hosting architectures on AWS.',
    location: 'Virtual',
    color: {
      primary: 'text-orange-600',
      bg: 'bg-orange-50',
      bgGradient: 'from-orange-100 to-amber-50',
      border: 'border-orange-400/50',
      gradient: 'from-orange-600 to-yellow-500',
      blob: 'bg-orange-300/30'
    }
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage | TATA',
    period: 'July 2025',
    type: 'Job Simulation',
    description: 'Executed data analysis tasks including risk profiling, predicting delinquency with AI, and AI-driven business storytelling.',
    location: 'Virtual',
    color: {
      primary: 'text-blue-600',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-100 to-indigo-50',
      border: 'border-blue-400/50',
      gradient: 'from-blue-600 to-indigo-500',
      blob: 'bg-blue-300/30'
    }
  },
  {
    title: 'Python Machine Learning: From Beginner to Pro',
    issuer: 'Udemy',
    period: 'July 2025',
    type: 'Course Completion',
    description: 'In-depth training on machine learning algorithms, model evaluation, and deployment using Python.',
    location: 'Online',
    color: {
      primary: 'text-cyan-600',
      bg: 'bg-cyan-50',
      bgGradient: 'from-cyan-100 to-teal-50',
      border: 'border-cyan-400/50',
      gradient: 'from-cyan-600 to-teal-500',
      blob: 'bg-cyan-300/30'
    }
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL | IIT Madras',
    period: 'Jan-Feb 2025',
    type: 'Elite Certificate',
    description: 'Comprehensive course on data analysis, visualization, and machine learning using NumPy, Pandas, and Scikit-learn.',
    location: 'Coimbatore',
    color: {
      primary: 'text-rose-600',
      bg: 'bg-rose-50',
      bgGradient: 'from-rose-100 to-pink-50',
      border: 'border-rose-400/50',
      gradient: 'from-rose-600 to-pink-500',
      blob: 'bg-rose-300/30'
    }
  },
  {
    title: 'ChatGPT + Bing (Copilot): Prompt Engineering Masterclass',
    issuer: 'Udemy',
    period: 'December 2024',
    type: 'Masterclass',
    description: 'Mastered prompt engineering techniques for ChatGPT and Bing Copilot, covering advanced strategies to optimize AI-generated responses.',
    location: 'Online',
    color: {
      primary: 'text-emerald-600',
      bg: 'bg-emerald-50',
      bgGradient: 'from-emerald-100 to-teal-50',
      border: 'border-emerald-400/50',
      gradient: 'from-emerald-600 to-teal-500',
      blob: 'bg-emerald-300/30'
    }
  },
  {
    title: 'Full Stack Development with Python',
    issuer: 'Xplore IT Corp',
    period: 'Nov 2024 - Jun 2025',
    type: 'Intensive Training',
    description: 'Covering Python, Django, and modern web application architecture.',
    location: 'Coimbatore',
    color: {
      primary: 'text-violet-600',
      bg: 'bg-violet-50',
      bgGradient: 'from-violet-100 to-purple-50',
      border: 'border-violet-400/50',
      gradient: 'from-violet-600 to-purple-500',
      blob: 'bg-violet-300/30'
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-[95%]">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-20 justify-center">
            <div className="p-3 bg-blue-50/50 rounded-xl backdrop-blur-sm">
              <Briefcase className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
              Professional Journey
            </h2>
          </div>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto space-y-24">
          {/* Internships Timeline */}
          <div className="relative">
            <RevealOnScroll>
              <h3 className="text-3xl font-bold text-gray-900 mb-16 text-center flex items-center justify-center gap-3">
                Internships and Experience
              </h3>
            </RevealOnScroll>

            {/* Central Line */}
            <div className="absolute left-0 md:left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-200 to-transparent -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-200 to-transparent md:hidden"></div>

            <div className="space-y-12 md:space-y-24">
              {internships.map((internship, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-0 gap-8`}>

                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full ${internship.color.primary.replace('text', 'bg')} border-4 border-white shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0 animate-pulse`}></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div 
                        className={`relative p-6 md:p-8 rounded-2xl border-2 ${internship.color.border} shadow-2xl ${internship.color.glow} transition-all duration-500 group hover:-translate-y-2 overflow-hidden`}
                        style={{ background: 'linear-gradient(135deg, white 0%, rgba(255,255,255,0.8) 100%)' }}
                      >
                        {/* Background Theme layer - Force visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${internship.color.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Decorative Blob */}
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${internship.color.blob} blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="flex flex-col gap-4 relative z-10">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className={`text-xl md:text-2xl font-black text-gray-900 group-hover:${internship.color.primary} transition-colors tracking-tight`}>
                              {internship.title}
                            </h4>
                            <span className={`flex items-center gap-2 text-sm font-black ${internship.color.primary} bg-white px-4 py-1.5 rounded-full whitespace-nowrap shadow-md border-2 ${internship.color.border}`}>
                              <Calendar size={14} />
                              {internship.period}
                            </span>
                          </div>

                          <p className={`text-lg font-black bg-clip-text text-transparent bg-gradient-to-r ${internship.color.gradient}`}>{internship.company}</p>

                          <p className="text-gray-800 leading-relaxed font-bold">
                            {internship.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {internship.skills.map((skill, skillIdx) => (
                              <span
                                key={skillIdx}
                                className={`px-4 py-1.5 bg-white text-xs font-black text-gray-800 hover:${internship.color.primary} border-2 ${internship.color.border} rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  {/* Empty half for spacing */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Timeline */}
          <div className="relative">
            <RevealOnScroll>
              <h3 className="text-3xl font-bold text-gray-900 mb-16 text-center flex items-center justify-center gap-3">
                Certifications
              </h3>
            </RevealOnScroll>

            {/* Central Line */}
            <div className="absolute left-0 md:left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent md:hidden"></div>
            <div className="space-y-12 md:space-y-24">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-0 gap-8`}>

                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full ${cert.color.primary.replace('text', 'bg')} border-4 border-white shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0 animate-pulse`}></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div 
                        className={`relative p-6 md:p-8 rounded-2xl border-2 ${cert.color.border} shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden`}
                        style={{ background: 'linear-gradient(135deg, white 0%, rgba(255,255,255,0.8) 100%)' }}
                      >
                        {/* Background Theme layer - Force visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Decorative Blob */}
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${cert.color.blob} blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="flex flex-col gap-4 relative z-10">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className={`text-xl font-black text-gray-900 group-hover:${cert.color.primary} transition-colors tracking-tight`}>
                              {cert.title}
                            </h4>
                            <span className={`flex items-center gap-2 text-sm font-black ${cert.color.primary} bg-white px-4 py-1.5 rounded-full whitespace-nowrap shadow-md border-2 ${cert.color.border}`}>
                              <Calendar size={14} />
                              {cert.period}
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <span className={`font-black text-lg bg-clip-text text-transparent bg-gradient-to-r ${cert.color.gradient}`}>{cert.issuer}</span>
                            <span className="flex items-center gap-1.5 text-gray-800 font-black">
                              <MapPin size={14} className={cert.color.primary} />
                              {cert.location}
                            </span>
                          </div>

                          {cert.type && (
                            <div className="inline-block">
                              <span className={`px-4 py-1.5 bg-white border-2 ${cert.color.border} ${cert.color.primary} text-xs font-black rounded-xl uppercase tracking-widest shadow-md`}>
                                {cert.type}
                              </span>
                            </div>
                          )}

                          {cert.description && (
                            <p className="text-gray-800 leading-relaxed text-sm font-bold">
                              {cert.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>
                  {/* Empty half for spacing */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
