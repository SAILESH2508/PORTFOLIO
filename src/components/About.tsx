import { User } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <RevealOnScroll>
        <div className="container mx-auto max-w-[95%]">
          <AnimatedTitle
            title="About Me"
            icon={User}
          />

          <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Aspiring <span className="text-primary font-bold">Python Full Stack Developer</span> and <span className="text-purple-600 font-bold">Machine Learning enthusiast</span> pursuing a B.E. in Computer Science and Engineering.
                Proficient in Python, Django, React.js, and SQLite, with a focus on scalable application architecture. I have experience in building real-world applications and dashboards with clean UIs, secure architectures, and optimized database designs.
              </p>

              <p>
                <b>Exploring Generative AI & DevOps:</b> Gaining experience in building intelligent Agents, leveraging Large Language Models (LLMs), and designing robust DevOps pipelines using tools like <span className="font-semibold text-primary">Terraform</span> and <span className="font-semibold text-primary">Jenkins</span>.
                My focus is on creating holistic, production-ready systems that integrate cutting-edge <span className="bg-gradient-to-r from-primary via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">Generative AI</span> capabilities with robust <span className="bg-gradient-to-r from-primary via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">DevOps</span> workflows for smooth deployment and scalability.
              </p>

              <p>
                Driven by a curiosity for innovation, I am also exploring <span className="text-primary font-bold">Prompt Engineering</span> and <span className="text-primary font-bold">Cloud Computing</span>. My ultimate goal is to leverage this diverse technical stack to create innovative, secure, and intelligent digital solutions that solve real-world problems efficiently.
              </p>

              <div className="pt-6 border-t border-blue-900/20">
                <p className="text-xl font-bold text-gray-900">
                  I'm always eager to collaborate on challenging projects and contribute to building the future of technology. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
