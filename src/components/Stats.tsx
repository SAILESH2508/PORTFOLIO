import { Code, GitBranch, Award, Folder, Users, Trophy } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const stats = [
  {
    icon: Code,
    value: '10,000+',
    label: 'Lines of Code',
    color: 'text-blue-500',
    bgColor: 'bg-blue-600/20',
    borderColor: 'border-blue-600/50'
  },
  {
    icon: Folder,
    value: '18+',
    label: 'Projects Built',
    color: 'text-purple-500',
    bgColor: 'bg-purple-600/20',
    borderColor: 'border-purple-600/50'
  },
  {
    icon: GitBranch,
    value: '50+',
    label: 'Git Commits',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-600/20',
    borderColor: 'border-cyan-600/50'
  },
  {
    icon: Award,
    value: '4+',
    label: 'Hackathons',
    color: 'text-red-500',
    bgColor: 'bg-red-600/20',
    borderColor: 'border-red-600/50'
  },
  {
    icon: Users,
    value: '3+',
    label: 'Internships',
    color: 'text-orange-500',
    bgColor: 'bg-orange-600/20',
    borderColor: 'border-orange-600/50'
  },
  {
    icon: Trophy,
    value: '40+',
    label: 'Technologies',
    color: 'text-green-500',
    bgColor: 'bg-green-600/20',
    borderColor: 'border-green-600/50'
  }
];

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-transparent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-[95%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <RevealOnScroll key={idx} delay={idx * 0.2}>
                <div
                  className={`group relative bg-white/80 backdrop-blur-lg border-2 ${stat.borderColor} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-${stat.color}/20 cursor-pointer`}
                >
                  <div className={`w-20 h-20 ${stat.bgColor} border ${stat.borderColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all animate-float`}>
                    <Icon className={stat.color} size={32} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 font-bold group-hover:text-gray-900 transition-colors">
                    {stat.label}
                  </div>

                  {/* Animated background glow */}
                  <div className={`absolute inset-0 ${stat.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity -z-10`}></div>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
