import { Trophy, Star, Target, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon 2024',
    description: 'Qualified for national-level hackathon with innovative alumni management solution',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600'
  },
  {
    icon: Star,
    title: 'Smart India Hackathon 2025',
    description: 'Selected for consecutive year participation showcasing consistent innovation',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600'
  },
  {
    icon: Target,
    title: 'Web3 Hackathon',
    description: 'Developed blockchain-based solutions exploring decentralized technologies',
    color: 'from-orange-500 to-purple-500',
    iconColor: 'text-orange-600'
  },
  {
    icon: Zap,
    title: 'Truth Tell 2024',
    description: 'Participated in competitive coding event demonstrating problem-solving skills',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600'
  }
];

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600">
            Hackathons Participation
          </h2>
          <p className="text-xl text-gray-600">Milestones in my development journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-blue-900/20 rounded-2xl p-8 hover:border-blue-900/60 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in cursor-pointer shadow-xl hover:shadow-2xl"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative z-10 flex gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg animate-float opacity-20 group-hover:opacity-100`}>
                    <Icon className="text-white relative z-20" size={32} />
                  </div>
                  {/* Icon visible always but styled differently when not hovered? Adjusted to ensure icon visibility */}
                  <div className="absolute left-8 top-8 w-20 h-20 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                    <Icon className={achievement.iconColor} size={32} />
                  </div>

                  <div className="flex-1 ml-[5.5rem] group-hover:ml-0 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner with sparkle */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`}></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-10 blur-sm`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
