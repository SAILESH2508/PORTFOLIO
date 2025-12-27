
import ProjectCard, { Project } from './ProjectCard';
import RevealOnScroll from './RevealOnScroll';

interface ProjectSectionProps {
    title: string;
    projects: Project[];
    id?: string;
}

export default function ProjectSection({ title, projects, id }: ProjectSectionProps) {
    if (projects.length === 0) return null;

    return (
        <div id={id} className="mb-16">
            <RevealOnScroll>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                        {title}
                    </span>
                    <span className="text-sm font-normal text-gray-500 ml-2">({projects.length})</span>
                </h3>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <RevealOnScroll key={`${project.title}-${idx}`} delay={idx * 0.1} className="h-full">
                        <ProjectCard project={project} />
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    );
}
