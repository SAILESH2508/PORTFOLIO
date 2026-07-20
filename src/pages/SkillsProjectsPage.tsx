import { useState, useMemo } from 'react';
import { projects } from '../data/projects';

import ProjectFilter from '../components/ProjectFilter';
import ProjectSection from '../components/ProjectSection';
import Skills from '../components/Skills';
import RevealOnScroll from '../components/RevealOnScroll';
import { Rocket, Zap, Star, Sparkles, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SkillsProjectsPage() {
  const [selectedTech, setSelectedTech] = useState('All');

  // Curated list of technologies and categories for filtering
  const technologies = ['All', 'Full Stack', 'Django', 'Flask', 'PHP', 'React', 'AI/ML/DS', 'DevOps'];

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return projects;

    return projects.filter(p => {
      if (selectedTech === 'Full Stack') return p.category === 'Full Stack';
      if (selectedTech === 'AI/ML/DS') return p.category === 'Machine Learning';
      if (selectedTech === 'DevOps') return p.category === 'Cloud & DevOps' || p.tech.includes('DevOps') || p.tech.includes('Docker') || p.tech.includes('Jenkins') || p.tech.includes('AWS');
      return p.tech.includes(selectedTech);
    });
  }, [selectedTech]);

  // Group projects by category
  const fullStackProjects = filteredProjects.filter(p => p.category === 'Full Stack');
  const mlProjects = filteredProjects.filter(p => p.category === 'Machine Learning');
  const devopsProjects = filteredProjects.filter(p => p.category === 'Cloud & DevOps');
  const frontendProjects = filteredProjects.filter(p => p.category === 'Frontend');
  const desktopCliProjects = filteredProjects.filter(p => p.category === 'Desktop & CLI');

  return (
    <div className="min-h-screen pt-16 pb-16">
      {/* Page Header */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float text-blue-600">
            <Code size={60} />
          </div>
          <div className="absolute top-20 right-20 animate-float text-purple-600" style={{ animationDelay: '1s' }}>
            <Rocket size={50} />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float text-blue-500" style={{ animationDelay: '2s' }}>
            <Zap size={55} />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-sparkle text-gray-400">
            <Star size={40} fill="currentColor" />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 animate-bounce-in">
            <Sparkles size={40} className="text-blue-600 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 drop-shadow-sm">
              Skills & Projects
            </h1>
            <Sparkles size={40} className="text-purple-600 animate-bounce" />
          </div>

          <RevealOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              A showcase of my technical expertise and the applications I've built.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
              <div className="glass px-6 py-3 rounded-full font-semibold text-blue-700 border-blue-500/30 bg-blue-50">
                40+ Technologies
              </div>
              <div className="glass px-6 py-3 rounded-full font-semibold text-purple-700 border-purple-500/30 bg-purple-50">
                18 Major Projects
              </div>
              <div className="glass px-6 py-3 rounded-full font-semibold text-blue-700 border-blue-500/30 bg-blue-50">
                Full Stack, AI & Cloud
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects with White Theme Gradient */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 relative">
        <div className="container mx-auto max-w-7xl px-6">

          {/* Section Header */}
          <div className="text-center mb-16">
            <RevealOnScroll>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <Rocket className="text-purple-600 animate-bounce" size={32} />
                <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600">Explore what I've built with these technologies</p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <ProjectFilter
              technologies={technologies}
              selectedTech={selectedTech}
              onSelect={setSelectedTech}
            />
          </RevealOnScroll>

          <div className="space-y-20">
            {fullStackProjects.length > 0 && (
              <ProjectSection title="Full Stack Development" projects={fullStackProjects} />
            )}

            {mlProjects.length > 0 && (
              <ProjectSection title="Machine Learning & AI" projects={mlProjects} />
            )}

            {devopsProjects.length > 0 && (
              <ProjectSection title="Cloud & DevOps Engineering" projects={devopsProjects} />
            )}

            {frontendProjects.length > 0 && (
              <ProjectSection title="Frontend Engineering" projects={frontendProjects} />
            )}

            {desktopCliProjects.length > 0 && (
              <ProjectSection title="Desktop & CLI Applications" projects={desktopCliProjects} />
            )}

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500">No projects found for {selectedTech}.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Impressed? Let's Work Together!</h2>
            <p className="text-xl mb-10 text-gray-600">I'm ready to bring your ideas to life with these skills and experience</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 btn-gradient font-bold rounded-xl flex items-center gap-2"
              >
                <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Hire Me Now
              </Link>
              <Link
                to="/experience"
                className="group px-8 py-4 btn-gradient-purple font-bold rounded-xl flex items-center gap-2"
              >
                View My Experience
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
