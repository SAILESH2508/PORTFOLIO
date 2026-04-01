import { Globe, Clock, Bot, Cloud, ChevronRight, Briefcase } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedTitle from './AnimatedTitle';

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-600" />,
        title: "Python Full Stack Web Development",
        description: "Building scalable, robust full-stack web applications and user interfaces.",
        deliverables: [
            "Full-stack web applications",
            "RESTful API development",
            "Database design & optimization",
            "Responsive UI/UX implementation"
        ],
        timeline: "2-4 weeks",
        color: "from-blue-600 to-indigo-600",
        lightColor: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200"
    },
    {
        icon: <Bot className="w-8 h-8 text-purple-600" />,
        title: "ML & Gen AI Integration",
        description: "Intelligent solutions powered by machine learning and Generative AI.",
        deliverables: [
            "Custom LLM Integrations",
            "Machine learning models",
            "Autonomous AI Agents",
            "RAG Pipelines Setup"
        ],
        timeline: "3-6 weeks",
        color: "from-purple-600 to-pink-600",
        lightColor: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200"
    },
    {
        icon: <Cloud className="w-8 h-8 text-emerald-600" />,
        title: "Cloud Computing & DevOps Deployment",
        description: "Designing and implementing CI/CD pipelines and cloud deployments.",
        deliverables: [
            "CI/CD with Jenkins",
            "IaC using Terraform",
            "Docker & Kubernetes",
            "Cloud Infrastructure (AWS/GCP)"
        ],
        timeline: "2-4 weeks",
        color: "from-emerald-600 to-teal-600",
        lightColor: "from-emerald-50 to-teal-50",
        borderColor: "border-emerald-200"
    }
];

export default function Services() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedTitle
                        title="Services I Offer"
                        icon={Briefcase}
                        iconColor="text-blue-500"
                        gradient="from-blue-600 via-purple-600 to-indigo-600"
                    />
                    <p className="text-lg font-bold text-gray-600 mt-[-1rem] relative z-10 animate-fade-in">
                        Specialized solutions for your business needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className={`h-full bg-gradient-to-br ${service.lightColor} backdrop-blur-md rounded-2xl p-8 border-2 ${service.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col relative overflow-hidden`}>
                            {/* Top colorful gradient bar */}
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`}></div>

                            <div className="mb-6 relative">
                                <div className={`w-16 h-16 rounded-2xl bg-white border ${service.borderColor} shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-2xl font-black text-gray-900 mb-2`}>{service.title}</h3>
                            </div>

                            <div className="space-y-6 mb-8 flex-grow relative z-10">
                                <div>
                                    <h4 className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${service.color} uppercase tracking-widest mb-4`}>Deliverables:</h4>
                                    <ul className="space-y-3">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700 font-bold text-sm">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto border-t border-gray-200/50 pt-6 relative z-10">
                                <div className="flex items-center justify-between mb-6 text-sm text-gray-600 font-bold">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-gray-400" />
                                        <span className="text-gray-900">Timeline:</span> {service.timeline}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        navigate('/contact', { 
                                            state: { 
                                                scrollToContact: true, 
                                                serviceTitle: service.title,
                                                timestamp: Date.now() 
                                            } 
                                        });
                                        
                                        // If already on contact page, manually scroll as well
                                        if (location.pathname === '/contact') {
                                            const contactEl = document.getElementById('contact');
                                            if (contactEl) {
                                                const yOffset = -80;
                                                const y = contactEl.getBoundingClientRect().top + window.scrollY + yOffset;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                    className={`w-full py-4 bg-gradient-to-r ${service.color} text-white font-black rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform active:scale-95 transition-all group`}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Work With Me
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
