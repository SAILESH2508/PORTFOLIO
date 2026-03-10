import RevealOnScroll from './RevealOnScroll';
import AnimatedTitle from './AnimatedTitle';
import { BookOpen, Star } from 'lucide-react';

export default function ContinuousLearning() {
    return (
        <section className="py-24 px-6 bg-white">
            <RevealOnScroll>
                <div className="container mx-auto max-w-6xl">

                    <AnimatedTitle title="My Philosophy" icon={BookOpen} />

                    <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 bg-gray-50 border border-gray-200">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                            <p>
                                <span className="font-bold text-primary text-xl">Continuous Learner</span>
                            </p>
                            <p>
                                Always exploring new technologies and methodologies to stay at the cutting edge of software development. Currently diving deeper into <span className="font-semibold text-primary">cloud architecture</span>, <span className="font-semibold text-primary">microservices</span>, and <span className="font-semibold text-primary">advanced machine learning applications</span>.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Star className="text-primary" /> Languages
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                                <h4 className="font-bold text-gray-900">Tamil</h4>
                                <p className="text-sm text-gray-500">Native</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                                <h4 className="font-bold text-gray-900">English</h4>
                                <p className="text-sm text-gray-500">Fluent</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                                <h4 className="font-bold text-gray-900">Malayalam</h4>
                                <p className="text-sm text-gray-500">Conversational</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md">
                                <h4 className="font-bold text-gray-900">Hindi</h4>
                                <p className="text-sm text-gray-500">Basic (Read/Write)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
