import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';
import { BookOpen } from 'lucide-react';

export default function ContinuousLearning() {
    return (
        <section className="py-24 px-6 bg-white">
            <RevealOnScroll>
                <div className="container mx-auto max-w-6xl">

                    <AnimatedTitle title="My Philosophy" icon={BookOpen} />

                    <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 bg-gray-50 border border-blue-900/20">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                            <p>
                                <span className="font-bold text-primary text-xl">Continuous Learner</span>
                            </p>
                            <p>
                                Always exploring new technologies and methodologies to stay at the cutting edge of software development. Currently diving deeper into <span className="font-semibold text-primary">cloud architecture</span>, <span className="font-semibold text-primary">microservices</span>, and <span className="font-semibold text-primary">advanced machine learning applications</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
