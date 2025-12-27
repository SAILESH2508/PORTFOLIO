
import { LucideIcon } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface AnimatedTitleProps {
    title: string;
    icon: LucideIcon;
    className?: string;
    iconColor?: string;
    gradient?: string;
}

export default function AnimatedTitle({
    title,
    icon: Icon,
    className = "",
    iconColor = "text-cyan-400",
    gradient = "from-cyan-400 to-purple-500"
}: AnimatedTitleProps) {
    return (
        <RevealOnScroll>
            <div className={`flex items-center gap-4 mb-12 justify-center ${className}`}>
                <div className="relative group">
                    <div className={`absolute inset-0 bg-current opacity-20 blur-xl rounded-full ${iconColor} animate-pulse`}></div>
                    <Icon className={`${iconColor} animate-float relative z-10 transform transition-transform group-hover:rotate-12 duration-300`} size={40} />
                </div>

                <div className="relative">
                    <h2 className={`text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient} pb-2`}>
                        {title}
                    </h2>
                    <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} transform scale-x-0 transition-transform duration-700 origin-left hover:scale-x-100`}></div>
                </div>
            </div>
        </RevealOnScroll>
    );
}
