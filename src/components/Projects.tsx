import { useState } from 'react';
import { Folder, Calendar, Users, Award, Filter, Github } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';
import AnimatedTitle from './AnimatedTitle';
import RevealOnScroll from './RevealOnScroll';

const projects = [
  {
    title: 'College Placement Dashboard',
    description: 'Web dashboard for managing college placement lifecycle with MVT architecture, ORM queries, and ML models for predicting placement outcomes.',
    details: '• MVT Architecture with Django models • ML prediction models • Admin interfaces with CSV export',
    tech: ['Django', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'ML'],
    image: '/placement-dashboard.png',
    gradient: 'from-blue-600 to-primary',
    year: '2024',
    role: 'Full Stack Developer',
    category: 'Machine Learning',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Marketing Employee Attendance & Time Tracking',
    description: 'Desktop application tracking employee sign-in/sign-out with responsive Tkinter UI, attendance logic, and CSV export for payroll.',
    details: '• GUI with Tkinter • Check-in/out logic • Daily/Monthly reports',
    tech: ['Python', 'Tkinter', 'SQLite', 'ML'],
    image: '/attendance-tracker.png',
    gradient: 'from-primary to-blue-500',
    year: '2024',
    role: 'Python Developer',
    category: 'Machine Learning',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Barter Bay – E-Commerce Exchange Platform',
    description: 'Peer-to-peer bartering platform with matching algorithm, demo QR-payment flow, and receipt generation for UX demos.',
    details: '• Backend with PHP • Matching algorithm • Payment & receipt flow',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    image: '/barter-bay.png',
    gradient: 'from-blue-500 to-cyan-500',
    year: '2023',
    role: 'Full Stack Developer',
    category: 'Full Stack',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Alumni Data Management – SIH',
    description: 'Scalable microservices platform with Spring Boot, REST APIs, React frontend, and Kubernetes deployment with CI/CD.',
    details: '• Microservice design • REST APIs • Kubernetes deployment',
    tech: ['Java', 'Spring Boot', 'React', 'Kubernetes', 'MySQL'],
    image: '/alumni-management.png',
    gradient: 'from-cyan-500 to-blue-600',
    year: '2025',
    role: 'Full Stack Developer',
    category: 'Full Stack',
    github: 'https://github.com/SAILESH2508',
    award: 'SIH 2025'
  },
  {
    title: 'Music Player and Downloader',
    description: 'Custom music player with JS-based audio engine, metadata management in SQLite, and secure download support.',
    details: '• Playback engine with playlists • Metadata indexing • Fast search',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'SQLite'],
    image: '/music-player.png',
    gradient: 'from-blue-600 to-indigo-600',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Frontend',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Expense Tracker',
    description: 'Financial tool with React frontend for logging expenses, categorization, analytics with charts, and CSV export.',
    details: '• React UI with state persistence • Category-wise summaries • CSV export',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: '/expense-tracker.png',
    gradient: 'from-indigo-600 to-primary',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Frontend',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Calorie Calculator',
    description: 'Web utility calculating BMR and daily caloric recommendations using Mifflin–St Jeor and Harris–Benedict equations with client-side validation.',
    details: '• Formula implementation • Responsive UI • Input validation',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/calorie-calculator.png',
    gradient: 'from-primary to-blue-400',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Frontend',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Beauty-Nest E-Commerce',
    description: 'E-commerce platform for beauty products with CRUD modules, admin dashboard, and responsive product listing pages.',
    details: '• Product management • Admin workflows • Responsive UI',
    tech: ['Django', 'HTML', 'CSS', 'JavaScript'],
    image: '/beauty-nest.png',
    gradient: 'from-blue-400 to-primary',
    year: '2024',
    role: 'Full Stack Developer',
    category: 'Full Stack',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'To-Do List Application',
    description: 'Task management app with full CRUD operations, SQLite persistence, and interactive task toggles with quick-edit modals.',
    details: '• Task workflows • SQLite storage • Interactive UI',
    tech: ['Django', 'JavaScript', 'SQLite'],
    image: '/todo-list.png',
    gradient: 'from-primary to-blue-600',
    year: '2024',
    role: 'Full Stack Developer',
    category: 'Full Stack',
    github: 'https://github.com/SAILESH2508'
  },
  {
    title: 'Food Delivery UI',
    description: 'Frontend UI for restaurant menus with add-to-cart interactions, order summary, and mobile-first responsive design.',
    details: '• Menu listing • Cart management • Responsive design',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/food-delivery.png',
    gradient: 'from-blue-600 to-cyan-500',
    year: '2024',
    role: 'Frontend Developer',
    category: 'Frontend',
    github: 'https://github.com/SAILESH2508'
  }
];

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Get unique technologies from projects
  const technologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.tech)))];

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(selectedTech));

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background elements - Subtle for light mode */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-[95%] relative z-10">
        <AnimatedTitle
          title="Featured Projects"
          icon={Folder}
        // Using defaults
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Filter className="text-primary" size={20} />
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 border ${selectedTech === tech
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-primary hover:border-primary/50'
                }`}
            >
              {tech !== 'All' && <LanguageLogo name={tech} />}
              <span>{tech}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.1}>
              <div
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full bg-white"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 z-10"></div>

                  {/* Fallback pattern if image missing */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />

                  {/* Actions Overlay */}
                  <div className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-white/60 backdrop-blur-sm transition-opacity duration-300 ${hoveredProject === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 border border-gray-200 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded-full shrink-0">
                        <Award size={14} className="text-yellow-600" />
                        <span className="text-xs text-yellow-700 font-bold">{project.award}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-blue-500" />
                      <span>{project.role}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-2">
                    {project.description}
                  </p>

                  {project.details && (
                    <p className="text-gray-500 text-xs leading-relaxed font-medium mt-auto pt-2 border-t border-gray-100">
                      {project.details}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.tech.slice(0, 5).map((tech, techIdx) => (
                      <div key={techIdx} className="group/tech relative">
                        <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-white transition-all">
                          <LanguageLogo name={tech} />
                        </div>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                          {tech}
                        </span>
                      </div>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 text-xs text-gray-400 flex items-center">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
