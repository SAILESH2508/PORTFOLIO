import { useState } from 'react';
import { Folder, Calendar, Users, Award, Filter, Github, ExternalLink } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';
import AnimatedTitle from './AnimatedTitle';
import RevealOnScroll from './RevealOnScroll';

import { projects } from '../data/projects';

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Curated list of technologies and categories for filtering
  const technologies = ['All', 'Full Stack', 'Django', 'Flask', 'PHP', 'React', 'AI/ML/DS', 'DevOps'];

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(p => {
      if (selectedTech === 'Full Stack') return p.category === 'Full Stack';
      if (selectedTech === 'AI/ML/DS') return p.category === 'Machine Learning';
      if (selectedTech === 'DevOps') return p.category === 'Cloud & DevOps' || p.tech.includes('DevOps') || p.tech.includes('Docker') || p.tech.includes('Jenkins') || p.tech.includes('AWS');
      return p.tech.includes(selectedTech);
    });

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
                ? 'btn-gradient border-transparent'
                : 'bg-blue-50/50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300'
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
                  <div className={`absolute inset-0 z-20 flex items-center justify-center gap-4 bg-blue-950/40 backdrop-blur-sm transition-opacity duration-300 ${hoveredProject === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full transition-all shadow-lg hover:scale-110 active:scale-95 ring-1 ring-white/20"
                        title="View Code"
                    >
                        <Github size={18} />
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-full transition-all shadow-lg hover:scale-110 active:scale-95 ring-1 ring-white/20"
                            title="Live Demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
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
