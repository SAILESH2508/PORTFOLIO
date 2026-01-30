import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import RevealOnScroll from './RevealOnScroll';

export default function FeaturedProjects() {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

    return (
        <section className="py-24 px-6 bg-slate-50/50">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <RevealOnScroll>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="text-blue-500 animate-pulse" />
                                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Case Studies</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                A selection of my best work in Full Stack Development and Machine Learning.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                        <Link
                            to="/skills-projects"
                            className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                            View All Projects
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, idx) => (
                        <RevealOnScroll key={idx} delay={idx * 0.1}>
                            <ProjectCard project={project} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
