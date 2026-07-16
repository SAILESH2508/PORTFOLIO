import { Trophy, Star, Target, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon 2024',
    description: 'Qualified for national-level hackathon with an innovative software solution addressing critical real-world challenges',
    color: 'from-blue-600 to-indigo-600',
    lightColor: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Star,
    title: 'Smart India Hackathon 2025',
    description: 'Selected for consecutive year participation showcasing consistent innovation',
    color: 'from-purple-600 to-pink-600',
    lightColor: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Target,
    title: 'Web3 Hackathon',
    description: 'Developed blockchain-based solutions exploring decentralized technologies',
    color: 'from-amber-500 to-orange-600',
    lightColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200'
  },
  {
    icon: Zap,
    title: 'Truth Tell 2024',
    description: 'Participated in competitive coding event demonstrating problem-solving skills',
    color: 'from-emerald-600 to-teal-600',
    lightColor: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200'
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
                className={`group relative bg-gradient-to-br ${achievement.lightColor} border-2 ${achievement.borderColor} rounded-[1.5rem] p-8 transition-all duration-300 overflow-hidden transform hover:scale-[1.03] hover:-translate-y-2 animate-fade-in cursor-pointer shadow-xl hover:shadow-2xl`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="relative z-10 flex items-center gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all shadow-lg shadow-blue-500/10`}>
                    <Icon className="text-white" size={36} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-2xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 font-bold text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Decorative sparkle effect on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
