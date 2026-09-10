import { Briefcase, Calendar, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { LanguageLogo } from './LanguageLogos';

const internships = [
  {
    title: 'Prompt Engineering Research Intern',
    company: 'Excelerate – Supported by RIT',
    period: 'June 2026 – July 2026',
    type: 'Remote Internship',
    description: 'Conducted research on AI prompting strategies to enhance personalized digital education. Evaluated and structured a framework of 5 key prompting methods (Role-Based, Socratic, Chain-of-Thought, Few-Shot, and Content Scaffolding) to optimize LLM interactions and resolve online learning barriers.',
    skills: ['Prompt Engineering', 'LLMs', 'Generative AI', 'Research', 'NLP'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'Cloud & DevOps Engineering Trainee',
    company: 'RAMPex Technologies',
    period: 'Feb 2026 - Mar 2026',
    type: 'Special Training',
    description: 'Attended an intensive cloud engineering boot camp at Sri Shakthi Institute. Built and deployed real-world AWS projects, focusing on CI/CD pipelines, cloud automation, and scalable architecture.',
    skills: ['AWS', 'DevOps', 'CI/CD', 'Automation', 'Cloud Workflows'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'Python Developer Intern',
    company: 'Overload Ware Labs Ai (Owl Ai)',
    period: 'February 2026',
    description: 'Developed Python applications and built scalable backend architectures using the Django framework.',
    skills: ['Python', 'Django', 'API Development', 'Backend'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'Full Stack Web Development Internship',
    company: 'Prodigy InfoTech',
    period: 'Dec 2025 – Jan 2026',
    description: 'Developed full-stack web applications, enhancing problem-solving skills and gaining hands-on workflow exposure.',
    skills: ['React', 'Django', 'REST APIs', 'SQLite'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Code Alpha',
    period: 'October 2025',
    description: 'Developed and deployed multiple full-stack web applications using modern frameworks and technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Django', 'REST APIs', 'SQLite'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Built end-to-end web applications with a focus on scalable architecture and modern development practices.',
    skills: ['Python', 'Flask', 'JavaScript', 'SQLite'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Arttifai Tech',
    period: 'July 2025',
    description: 'Designed user-centric interfaces and prototypes according to modern UX principles.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
    color: {
      primary: 'text-blue-700',
      bgColor: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-purple-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: {
      border: 'border-amber-400/50',
      glow: 'shadow-amber-500/20'
    }
  }
];

const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Forage | Deloitte',
    period: 'July 20, 2025',
    type: 'Job Simulation',
    description: 'Completed a data analytics simulation involving forensic technology tasks, data analysis using Excel and Tableau, and presenting business insights.',
    location: 'Virtual',
    color: {
      primary: 'text-blue-700',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-sky-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: { border: 'border-blue-400/50', glow: 'shadow-blue-500/20' }
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'Forage | AWS',
    period: 'July 19, 2025',
    type: 'Job Simulation',
    description: 'Developed practical skills in designing simple, scalable, and secure hosting architectures on AWS.',
    location: 'Virtual',
    color: {
      primary: 'text-purple-700',
      bg: 'bg-purple-50',
      bgGradient: 'from-purple-50/90 via-violet-50/70 to-indigo-50/50',
      border: 'border-purple-200/60',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      glow: 'shadow-purple-400/20',
      blob: 'bg-purple-200/10'
    },
    boxTheme: { border: 'border-purple-400/50', glow: 'shadow-purple-500/20' }
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage | TATA',
    period: 'July 13, 2025',
    type: 'Job Simulation',
    description: 'Executed data analysis tasks including risk profiling, predicting delinquency with AI, and AI-driven business storytelling.',
    location: 'Virtual',
    color: {
      primary: 'text-orange-700',
      bg: 'bg-orange-50',
      bgGradient: 'from-orange-50/90 via-amber-50/70 to-yellow-50/50',
      border: 'border-orange-200/60',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      glow: 'shadow-orange-400/20',
      blob: 'bg-orange-200/10'
    },
    boxTheme: { border: 'border-orange-400/50', glow: 'shadow-orange-500/20' }
  },
  {
    title: 'Python Machine Learning: From Beginner to Pro',
    issuer: 'Udemy',
    period: 'July 2025',
    type: 'Course Completion',
    description: 'In-depth training on machine learning algorithms, model evaluation, and deployment using Python.',
    location: 'Online',
    color: {
      primary: 'text-blue-700',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-sky-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: { border: 'border-blue-400/50', glow: 'shadow-blue-500/20' }
  },
  {
    title: 'ReactJs - The Complete ReactJs Course For Beginners',
    issuer: 'Udemy',
    period: '2025',
    type: 'Course Completion',
    description: 'Comprehensive React.js course covering components, hooks, state management, and building modern web UIs.',
    location: 'Online',
    color: {
      primary: 'text-purple-700',
      bg: 'bg-purple-50',
      bgGradient: 'from-purple-50/90 via-violet-50/70 to-indigo-50/50',
      border: 'border-purple-200/60',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      glow: 'shadow-purple-400/20',
      blob: 'bg-purple-200/10'
    },
    boxTheme: { border: 'border-purple-400/50', glow: 'shadow-purple-500/20' }
  },
  {
    title: 'Django Full Stack Web Development with Python',
    issuer: 'Udemy',
    period: '2025',
    type: 'Course Completion',
    description: 'Full stack web development using Django and Python, covering models, views, templates, REST APIs, and deployment.',
    location: 'Online',
    color: {
      primary: 'text-orange-700',
      bg: 'bg-orange-50',
      bgGradient: 'from-orange-50/90 via-amber-50/70 to-yellow-50/50',
      border: 'border-orange-200/60',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      glow: 'shadow-orange-400/20',
      blob: 'bg-orange-200/10'
    },
    boxTheme: { border: 'border-orange-400/50', glow: 'shadow-orange-500/20' }
  },
  {
    title: 'Create, Publish & Monetize GPTs on ChatGPT',
    issuer: 'Udemy',
    period: '2025',
    type: 'Course Completion',
    description: 'Hands-on training in building, publishing, and monetizing custom GPTs using the ChatGPT platform.',
    location: 'Online',
    color: {
      primary: 'text-blue-700',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-sky-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: { border: 'border-blue-400/50', glow: 'shadow-blue-500/20' }
  },
  {
    title: 'MongoDB - The Complete MongoDB Developers Course',
    issuer: 'Udemy',
    period: '2025',
    type: 'Course Completion',
    description: 'Complete MongoDB course covering CRUD operations, aggregation pipelines, indexing, and integration with Node.js.',
    location: 'Online',
    color: {
      primary: 'text-purple-700',
      bg: 'bg-purple-50',
      bgGradient: 'from-purple-50/90 via-violet-50/70 to-indigo-50/50',
      border: 'border-purple-200/60',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      glow: 'shadow-purple-400/20',
      blob: 'bg-purple-200/10'
    },
    boxTheme: { border: 'border-purple-400/50', glow: 'shadow-purple-500/20' }
  },
  {
    title: 'Python Pro: Essential Tips for Real-World Coding & Careers',
    issuer: 'Udemy',
    period: '2025',
    type: 'Course Completion',
    description: 'Advanced Python tips covering best practices, real-world coding patterns, performance optimization, and career guidance.',
    location: 'Online',
    color: {
      primary: 'text-orange-700',
      bg: 'bg-orange-50',
      bgGradient: 'from-orange-50/90 via-amber-50/70 to-yellow-50/50',
      border: 'border-orange-200/60',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      glow: 'shadow-orange-400/20',
      blob: 'bg-orange-200/10'
    },
    boxTheme: { border: 'border-orange-400/50', glow: 'shadow-orange-500/20' }
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL | IIT Madras',
    period: 'Jan-Feb 2025',
    type: 'Elite Certificate',
    description: 'Comprehensive course on data analysis, visualization, and machine learning using NumPy, Pandas, and Scikit-learn.',
    location: 'Coimbatore',
    color: {
      primary: 'text-blue-700',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-sky-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: { border: 'border-blue-400/50', glow: 'shadow-blue-500/20' }
  },
  {
    title: 'ChatGPT + Bing (Copilot): Prompt Engineering Masterclass',
    issuer: 'Udemy',
    period: 'December 2024',
    type: 'Masterclass',
    description: 'Mastered prompt engineering techniques for ChatGPT and Bing Copilot, covering advanced strategies to optimize AI-generated responses.',
    location: 'Online',
    color: {
      primary: 'text-purple-700',
      bg: 'bg-purple-50',
      bgGradient: 'from-purple-50/90 via-violet-50/70 to-indigo-50/50',
      border: 'border-purple-200/60',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      glow: 'shadow-purple-400/20',
      blob: 'bg-purple-200/10'
    },
    boxTheme: { border: 'border-purple-400/50', glow: 'shadow-purple-500/20' }
  },
  {
    title: 'Full Stack Development with Python',
    issuer: 'Xplore IT Corp',
    period: 'Nov 2024 - Jun 2025',
    type: 'Intensive Training',
    description: 'Covering Python, Django, and modern web application architecture.',
    location: 'Coimbatore',
    color: {
      primary: 'text-orange-700',
      bg: 'bg-orange-50',
      bgGradient: 'from-orange-50/90 via-amber-50/70 to-yellow-50/50',
      border: 'border-orange-200/60',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      glow: 'shadow-orange-400/20',
      blob: 'bg-orange-200/10'
    },
    boxTheme: { border: 'border-orange-400/50', glow: 'shadow-orange-500/20' }
  },
  {
    title: 'Critical Thinking and Problem Solving',
    issuer: 'LinkedIn Learning',
    period: 'April 24, 2025',
    type: 'Course Completion',
    description: 'Developed structured critical thinking and problem-solving frameworks for professional and technical decision-making.',
    location: 'Online',
    color: {
      primary: 'text-blue-700',
      bg: 'bg-blue-50',
      bgGradient: 'from-blue-50/90 via-indigo-50/70 to-sky-50/50',
      border: 'border-blue-200/60',
      gradient: 'from-blue-600 via-indigo-600 to-sky-600',
      glow: 'shadow-blue-400/20',
      blob: 'bg-blue-200/10'
    },
    boxTheme: { border: 'border-blue-400/50', glow: 'shadow-blue-500/20' }
  },
  {
    title: 'Problem-Solving Techniques',
    issuer: 'LinkedIn Learning',
    period: 'November 23, 2024',
    type: 'Course Completion',
    description: 'Learned systematic problem-solving techniques including root cause analysis, decision trees, and creative ideation methods.',
    location: 'Online',
    color: {
      primary: 'text-purple-700',
      bg: 'bg-purple-50',
      bgGradient: 'from-purple-50/90 via-violet-50/70 to-indigo-50/50',
      border: 'border-purple-200/60',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      glow: 'shadow-purple-400/20',
      blob: 'bg-purple-200/10'
    },
    boxTheme: { border: 'border-purple-400/50', glow: 'shadow-purple-500/20' }
  }
];

// Professional Experience Component - Displays Internships and Certifications with a premium theme
export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-[95%]">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-20 justify-center">
            <div className="p-3 bg-indigo-50/50 rounded-xl backdrop-blur-sm">
              <Briefcase className="text-indigo-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
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
            <div className="absolute left-0 md:left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-300 to-transparent -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-300 to-transparent md:hidden"></div>

            <div className="space-y-12 md:space-y-24">
              {internships.map((internship, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-0 gap-8`}>

                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full ${internship.color.primary.replace('text', 'bg')} border-4 border-white shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0 animate-pulse`}></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div 
                        className={`relative p-6 md:p-8 rounded-2xl border-2 ${internship.color.border} shadow-2xl ${internship.color.glow} transition-all duration-500 group hover:-translate-y-2 overflow-hidden backdrop-blur-sm`}
                      >
                        {/* Background Theme layer - Force visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${internship.color.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Decorative Blob */}
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${internship.color.blob} blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                          <div className="flex gap-0 items-start relative z-10 w-full">
                            <div className="flex flex-col gap-4 flex-1">
                              <div className="flex justify-between items-start flex-wrap gap-2">
                                <h4 className={`text-xl md:text-2xl font-black text-gray-900 group-hover:${internship.color.primary} transition-colors tracking-tight flex items-center gap-3`}>
                                  <LanguageLogo name={internship.title} />
                                  {internship.title}
                                </h4>
                                <span className={`flex items-center gap-2 text-sm font-black ${internship.color.primary} bg-white px-4 py-1.5 rounded-full whitespace-nowrap shadow-md border-2 ${internship.boxTheme.border}`}>
                                  <Calendar size={14} />
                                  {internship.period}
                                </span>
                              </div>

                              <p className={`text-lg font-black bg-clip-text text-transparent bg-gradient-to-r ${internship.color.gradient}`}>{internship.company}</p>

                              <p className="text-gray-800 leading-relaxed font-bold">
                                {internship.description}
                              </p>

                              {internship.type && (
                                <div className="inline-block mt-1">
                                  <span className={`px-4 py-1.5 bg-white border-2 ${internship.boxTheme.border} ${internship.color.primary} text-xs font-black rounded-xl uppercase tracking-widest shadow-md`}>
                                    {internship.type}
                                  </span>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-2 mt-2">
                                {internship.skills.map((skill, skillIdx) => (
                                  <span
                                    key={skillIdx}
                                    className={`flex items-center gap-2 px-3 py-1.5 bg-white text-xs font-black text-gray-800 hover:${internship.color.primary} border-2 ${internship.boxTheme.border} rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5`}
                                  >
                                    <LanguageLogo name={skill} />
                                    {skill}
                                  </span>
                                ))}
                              </div>
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
            <div className="absolute left-0 md:left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-300 to-transparent -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-300 to-transparent md:hidden"></div>
            <div className="space-y-12 md:space-y-24">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-0 gap-8`}>

                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full ${cert.color.primary.replace('text', 'bg')} border-4 border-white shadow-lg md:-translate-x-1/2 z-10 mt-1.5 md:mt-0 animate-pulse`}></div>

                  {/* Content for Desktop Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12">
                    <RevealOnScroll className={idx % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'}>
                      <div 
                        className={`relative p-6 md:p-8 rounded-2xl border-2 ${cert.color.border} shadow-2xl ${cert.color.glow} transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm`}
                      >
                        {/* Background Theme layer - Force visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Decorative Blob */}
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${cert.color.blob} blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                          <div className="flex gap-0 items-start relative z-10 w-full">
                            <div className="flex flex-col gap-4 flex-1">
                              <div className="flex justify-between items-start flex-wrap gap-2">
                                <h4 className={`text-xl font-black text-gray-900 group-hover:${cert.color.primary} transition-colors tracking-tight flex items-center gap-3`}>
                                  <LanguageLogo name={cert.title} />
                                  {cert.title}
                                </h4>
                                <span className={`flex items-center gap-2 text-sm font-black ${cert.color.primary} bg-white px-4 py-1.5 rounded-full whitespace-nowrap shadow-md border-2 ${cert.boxTheme.border}`}>
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
                                  <span className={`px-4 py-1.5 bg-white border-2 ${cert.boxTheme.border} ${cert.color.primary} text-xs font-black rounded-xl uppercase tracking-widest shadow-md`}>
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
