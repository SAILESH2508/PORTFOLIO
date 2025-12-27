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
                Aspiring <span className="text-primary font-bold">Full Stack Developer</span> and <span className="text-purple-600 font-bold">Machine Learning enthusiast</span> pursuing a B.E. in Computer Science and Engineering.
                Proficient in Python, Django, React.js and SQlite  with a focus on scalable application architecture. I have experience in building real-world applications and dashboards with clean UI, secure architecture, and optimized database design.
              </p>

              <p>
                <b>Future Scope & Emerging Tech:</b> I am actively expanding my expertise into advanced domains to build holistic, production-ready systems.
                My focus is now shifting towards mastering <span className="bg-gradient-to-r from-primary via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">DevOps and MLOps</span> to streamline deployment pipelines, diving deep into <span className="bg-gradient-to-r from-primary via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">Advanced Data Science</span> for uncovering complex insights, and strengthening application integrity through <span className="bg-gradient-to-r from-primary via-blue-700 to-blue-900 bg-clip-text text-transparent font-bold">Cybersecurity</span> practices.
              </p>

              <p>
                Driven by a curiosity for innovation, I am also exploring <span className="text-primary font-bold">Prompt Engineering</span> and <span className="text-primary font-bold">Cloud Computing</span>. My ultimate goal is to leverage this diverse technical stack to create innovative, secure, and intelligent digital solutions that solve real-world problems efficiently.
              </p>

              <div className="pt-6 border-t border-gray-200">
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
