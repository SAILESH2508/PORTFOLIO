import Skills from '../components/Skills';
import { Sparkles } from 'lucide-react';

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="py-16 px-6 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 text-white text-center">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles size={40} className="animate-pulse" />
            <h1 className="text-5xl font-bold">My Skills & Expertise</h1>
            <Sparkles size={40} className="animate-pulse" />
          </div>
          <p className="text-xl opacity-90">Technologies I work with to build amazing projects</p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
