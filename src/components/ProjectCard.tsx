
import { Github, ExternalLink, Users, Award } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';

export interface Project {
    title: string;
    description: string;
    details?: string;
    tech: string[];
    image: string;
    gradient: string;
    role: string;
    category: string;
    github: string;
    demo?: string;
    award?: string;
    featured?: boolean;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className={`group glass-card rounded-2xl overflow-hidden hover:border-blue-900 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full monitor-card ${project.featured ? 'ring-2 ring-blue-900/30 shadow-lg shadow-blue-500/10' : ''}`}
        >
            {project.featured && (
                <div className="absolute top-0 left-0 z-30 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                    ⭐ FEATURED
                </div>
            )}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-10"></div>
                {/* Fallback for missing images - using gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                {/* Placeholder for actual image if it fails to load */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400/30 font-bold text-4xl">
                    {project.title.charAt(0)}
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />

                <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors shadow-sm ring-1 ring-blue-900/10"
                        title="View Code"
                    >
                        <Github size={18} />
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-900 hover:bg-purple-500 hover:text-white transition-colors shadow-sm ring-1 ring-blue-900/10"
                            title="Live Demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

            <div className="p-6 space-y-4 flex-grow flex flex-col relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                        {project.title}
                    </h3>
                    {project.award && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-600/30 rounded-lg animate-pulse shrink-0">
                            <Award size={14} className="text-yellow-800" />
                            <span className="text-xs text-yellow-900 font-bold">{project.award}</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-700">
                    <div className="flex items-center gap-1">
                        <Users size={14} className="text-blue-900" />
                        <span className="font-medium text-gray-900">{project.role}</span>
                    </div>
                </div>

                <p className="text-gray-900 text-sm leading-relaxed line-clamp-3 mb-2 font-medium">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.tech.slice(0, 5).map((tech, techIdx) => (
                        <div key={techIdx} className="group/tech relative">
                            <div className="p-2 bg-gray-50 border border-blue-900/20 rounded-lg hover:border-blue-900/50 transition-all hover:bg-white shadow-sm">
                                <LanguageLogo name={tech} />
                            </div>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-lg">
                                {tech}
                            </span>
                        </div>
                    ))}
                    {project.tech.length > 5 && (
                        <span className="px-2 py-1 text-xs text-gray-700 flex items-center font-bold">
                            +{project.tech.length - 5}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
