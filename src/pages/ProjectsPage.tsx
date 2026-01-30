import Projects from '../components/Projects';
import { Folder } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="py-16 px-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 text-white text-center">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-4 animate-bounce-in">
            <Folder size={40} className="animate-bounce" />
            <h1 className="text-5xl font-bold">My Projects</h1>
            <Folder size={40} className="animate-bounce" />
          </div>
          <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>18 amazing projects showcasing my development skills</p>
        </div>
      </div>

      <Projects />
    </div>
  );
}
