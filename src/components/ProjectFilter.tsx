
import { Filter } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';

interface ProjectFilterProps {
    technologies: string[];
    selectedTech: string;
    onSelect: (tech: string) => void;
}

export default function ProjectFilter({ technologies, selectedTech, onSelect }: ProjectFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-900/20 rounded-lg text-cyan-600 mr-2 shadow-sm">
                <Filter size={20} />
                <span className="font-medium">Filter:</span>
            </div>

            {technologies.map((tech) => (
                <button
                    key={tech}
                    onClick={() => onSelect(tech)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 ${selectedTech === tech
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white border border-blue-900/20 text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
                        }`}
                >
                    {tech !== 'All' && (
                        <div className="w-5 h-5 flex items-center justify-center">
                            <LanguageLogo name={tech} />
                        </div>
                    )}
                    <span>{tech}</span>
                </button>
            ))}
        </div>
    );
}
