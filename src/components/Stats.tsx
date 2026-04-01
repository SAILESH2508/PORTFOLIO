import { Code, GitBranch, Award, Folder, Users, Trophy } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const stats = [
  {
    icon: Code,
    value: '10,000+',
    label: 'Lines of Code',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100/50',
    borderColor: 'border-blue-300'
  },
  {
    icon: Folder,
    value: '18+',
    label: 'Projects Built',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100/50',
    borderColor: 'border-purple-300'
  },
  {
    icon: GitBranch,
    value: '50+',
    label: 'Git Commits',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100/50',
    borderColor: 'border-cyan-300'
  },
  {
    icon: Award,
    value: '4+',
    label: 'Hackathons',
    color: 'text-red-500',
    bgColor: 'bg-red-100/50',
    borderColor: 'border-red-300'
  },
  {
    icon: Users,
    value: '6+',
    label: 'Internships',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100/50',
    borderColor: 'border-blue-300'
  },
  {
    icon: Trophy,
    value: '40+',
    label: 'Technologies',
    color: 'text-green-600',
    bgColor: 'bg-green-100/50',
    borderColor: 'border-green-300'
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
              <RevealOnScroll key={idx} delay={idx * 0.1}>
                <div
                  className={`group relative bg-white/40 backdrop-blur-md border ${stat.borderColor} rounded-2xl p-10 text-center hover:scale-[1.03] transition-all duration-500 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden`}
                >
                  {/* Subtle background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={stat.color} size={28} />
                    </div>
                    <div className={`text-5xl font-black ${stat.color} mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-900 font-black uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-2 h-2 ${stat.color.replace('text-', 'bg-')} rounded-full animate-ping`}></div>
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
