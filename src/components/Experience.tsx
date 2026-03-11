import { Briefcase, Calendar, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const internships = [
  {
    title: 'Python Developer Intern',
    company: 'Overload Ware Labs Ai (Owl Ai)',
    period: 'February 2026',
    description: 'Developed Python applications and built scalable backend architectures using the Django framework.',
    skills: ['Python', 'Django', 'API Development', 'Backend']
  },
  {
    title: 'Full Stack Web Development Internship',
    company: 'Prodigy InfoTech',
    period: 'Dec 2025 – Jan 2026',
    description: 'Developed full-stack web applications, enhancing problem-solving skills and gaining hands-on workflow exposure.',
    skills: ['Full Stack', 'Problem Solving', 'Web Development']
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Code Alpha',
    period: 'October 2025',
    description: 'Developed and deployed multiple full-stack web applications using modern frameworks and technologies.',
    skills: ['React', 'Django', 'REST APIs', 'Database Design']
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Built end-to-end web applications with a focus on scalable architecture and modern development practices.',
    skills: ['Python', 'Flask', 'JavaScript', 'Database Management']
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Designed user-centric interfaces and prototypes according to modern UX principles.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'User Research']
  }
];

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL | IIT Madras',
    period: 'Jan-Feb 2025',
    type: 'Elite Certificate',
    description: 'Comprehensive course on data analysis, visualization, and machine learning using NumPy, Pandas, and Scikit-learn.',
    location: 'Coimbatore'
  },
  {
    title: 'Full Stack Development with Python',
    issuer: 'Xplore IT Corp',
    period: 'Nov 2024 - Jun 2025',
    type: 'Intensive Training',
    description: 'Covering Python, Django, and modern web application architecture.',
    location: 'Coimbatore'
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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0"></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div className="glass-card p-6 md:p-8 rounded-2xl border border-blue-900/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col gap-4 relative z-10">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {internship.title}
                            </h4>
                            <span className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                              <Calendar size={14} />
                              {internship.period}
                            </span>
                          </div>

                          <p className="text-lg text-gray-700 font-semibold">{internship.company}</p>

                          <p className="text-gray-600 leading-relaxed">
                            {internship.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {internship.skills.map((skill, skillIdx) => (
                              <span
                                key={skillIdx}
                                className="px-3 py-1 bg-white/60 hover:bg-blue-50 text-xs font-semibold text-gray-600 hover:text-blue-600 border border-blue-900/20 hover:border-blue-200 rounded-lg transition-all duration-300"
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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-purple-100 shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0"></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div className="glass-card p-6 md:p-8 rounded-2xl border border-purple-900/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col gap-4 relative z-10">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {cert.title}
                            </h4>
                            <span className="flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full whitespace-nowrap">
                              <Calendar size={14} />
                              {cert.period}
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span className="font-semibold text-lg">{cert.issuer}</span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              {cert.location}
                            </span>
                          </div>

                          {cert.type && (
                            <div className="inline-block">
                              <span className="px-3 py-1 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold rounded-lg uppercase tracking-wider">
                                {cert.type}
                              </span>
                            </div>
                          )}

                          {cert.description && (
                            <p className="text-gray-600 leading-relaxed text-sm">
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
