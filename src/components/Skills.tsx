import { useState } from 'react';
import { Code2, Database, Brain, ChevronRight, Layers, Lightbulb, Cloud } from 'lucide-react';
import { LanguageLogo } from './LanguageLogos';
import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';


const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code2,
    description: 'Core languages for systems, applications, and scripting.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'C', level: 85 },
      { name: 'Java', level: 80 }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: Layers,
    description: 'End-to-end web and desktop application development.',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JSON', level: 90 },
      { name: 'PHP', level: 80 }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Management',
    icon: Database,
    description: 'Efficient data storage, retrieval, and schema optimization.',
    skills: [
      { name: 'DBMS', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 90 },
      { name: 'MongoDB', level: 85 }
    ]
  },
  {
    id: 'ai-data',
    title: 'AI/ML/DS',
    icon: Brain,
    description: 'Extracting insights and building intelligent models.',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Keras', level: 80 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Seaborn', level: 80 },
      { name: 'Matplotlib', level: 85 },
      { name: 'SciPy', level: 80 },
      { name: 'Scikit-image', level: 75 },
      { name: 'Tableau', level: 80 },
      { name: 'Power BI', level: 80 },
      { name: 'Streamlit', level: 90 },
      { name: 'Tkinter', level: 75 }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering Principles',
    icon: Lightbulb,
    description: 'Core principles and professional soft skills.',
    skills: [
      { name: 'Software Engineering', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication Skill', level: 95 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'System Design', level: 85 },
      { name: 'Agile', level: 90 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Robotics (Arduino UNO)', level: 80 },
      { name: 'Information Technology', level: 85 },
      { name: 'Reasoning', level: 90 },
      { name: 'Aptitude', level: 90 },
      { name: 'Building AI Agents', level: 90 },
      { name: 'Building LLMs', level: 95 }
    ]
  },
  {
    id: 'devops',
    title: 'Cloud Computing & DevOps',
    icon: Cloud,
    description: 'Cloud platforms, containerization, orchestration, and tools.',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 75 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 85 },
      { name: 'Render', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'VirtualBox', level: 75 },
      { name: 'VMware', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Github', level: 90 },
      { name: 'Ubuntu', level: 85 },
      { name: 'YAML', level: 85 }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-[95%]">
        <RevealOnScroll>
          <AnimatedTitle
            title="Skills & Expertise"
            icon={Database}
            iconColor="text-blue-500"
            gradient="from-blue-600 via-purple-500 to-purple-600"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          {/* Desktop View */}
          <div className="hidden lg:flex flex-row gap-12">
            {/* Navigation Sidebar */}
            <div className="w-1/3 flex flex-col gap-4">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left relative overflow-hidden ${isActive
                      ? 'glass-card border-l-4 border-l-primary shadow-lg shadow-primary/10'
                      : 'bg-white/30 border border-gray-200 hover:bg-white/50 hover:border-primary/50'
                      }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-500 group-hover:text-primary'
                        }`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                          }`}>
                          {category.title}
                        </h3>
                        <p className={`text-sm mt-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary/70'
                          }`}>
                          {category.skills.length} Skills
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <ChevronRight className="text-primary animate-pulse" size={24} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Content Area */}
            <div className="w-2/3">
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${activeCategory === category.id
                    ? 'opacity-100 translate-x-0 block'
                    : 'opacity-0 translate-x-10 hidden'
                    }`}
                >
                  <div className="glass-card p-8 shadow-xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-8 text-lg">{category.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        {category.skills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="group/skill flex items-center gap-3 p-4 bg-white/40 backdrop-blur-sm border border-white/60 rounded-xl hover:bg-white/60 hover:border-primary/30 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                          >
                            <div className="transform group-hover/skill:scale-110 transition-transform duration-300">
                              <LanguageLogo name={skill.name} />
                            </div>
                            <span className="font-semibold text-gray-700 group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View (Accordion Style) */}
          <div className="flex lg:hidden flex-col gap-4">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <div key={category.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveCategory(isActive ? '' : category.id)}
                    className={`group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 text-left relative overflow-hidden ${isActive
                      ? 'glass-card border-l-4 border-l-primary shadow-lg shadow-primary/10 rounded-b-none'
                      : 'bg-white/30 border border-gray-200 hover:bg-white/50 hover:border-primary/50'
                      }`}
                  >
                    <div className="flex items-center gap-4 relative z-10 media-logo">
                      <div className={`p-2.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-500 group-hover:text-primary'
                        }`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                          }`}>
                          {category.title}
                        </h3>
                        <p className={`text-xs mt-0.5 transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary/70'
                          }`}>
                          {category.skills.length} Skills
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`text-primary transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                      size={20}
                    />
                  </button>

                  <div
                    className={`glass-card overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[1000px] opacity-100 border-t-0 rounded-t-none rounded-b-2xl p-5' : 'max-h-0 opacity-0 border-0 p-0'
                      }`}
                  >
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{category.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="group/skill flex items-center gap-2.5 p-3 bg-white/40 backdrop-blur-sm border border-white/60 rounded-lg hover:bg-white/60 hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="transform group-hover/skill:scale-110 transition-transform duration-300 scale-90">
                            <LanguageLogo name={skill.name} />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
