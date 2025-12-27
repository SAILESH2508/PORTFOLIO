import { Globe, Code2, Palette, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-600" />,
        title: "Web Development",
        description: "Full-stack web applications built with modern technologies.",
        deliverables: [
            "Full-stack web applications",
            "RESTful API development",
            "Database design & optimization",
            "Responsive UI/UX implementation"
        ],
        timeline: "2-4 weeks"
    },
    {
        icon: <Code2 className="w-8 h-8 text-blue-600" />,
        title: "Python & ML Projects",
        description: "Intelligent solutions powered by machine learning and automation.",
        deliverables: [
            "Machine learning models",
            "Data analysis & visualization",
            "Automation scripts",
            "AI-powered solutions"
        ],
        timeline: "3-5 weeks"
    },
    {
        icon: <Palette className="w-8 h-8 text-blue-600" />,
        title: "UI/UX Design",
        description: "Beautiful, user-centric designs that drive engagement.",
        deliverables: [
            "Modern interface design",
            "User flow optimization",
            "Interactive prototypes",
            "Brand-aligned aesthetics"
        ],
        timeline: "1-3 weeks"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Globe className="w-6 h-6 text-blue-500 animate-pulse" />
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                            Services I Offer
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Professional solutions tailored to your needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="h-full bg-blue-50/90 backdrop-blur-md rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col relative overflow-hidden">
                            {/* Top colored bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

                            <div className="mb-6 relative">
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            </div>

                            <div className="space-y-6 mb-8 flex-grow relative z-10">
                                <div>
                                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Deliverables:</h4>
                                    <ul className="space-y-3">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto border-t border-gray-100 pt-6 relative z-10">
                                <div className="flex items-center justify-between mb-6 text-sm text-gray-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span className="text-gray-900">Timeline:</span> {service.timeline}
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    className="w-full block text-center py-3 rounded-xl bg-white border-2 border-gray-100 text-gray-800 font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    Work With Me
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
