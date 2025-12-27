import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in seconds
    threshold?: number;
    animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-right' | 'slide-left';
}

export default function RevealOnScroll({
    children,
    className = '',
    delay = 0,
    threshold = 0.1,
    animation = 'fade-in'
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { hasTriggered } = useInView(ref, threshold);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in':
                return 'animate-fade-in';
            case 'slide-up':
                return 'animate-slide-up'; // We might need to add this keyframe if it doesn't exist
            case 'scale-in':
                return 'animate-scale-in';
            case 'slide-right':
                return 'animate-slide-right';
            case 'slide-left':
                return 'animate-slide-left';
            default:
                return 'animate-fade-in';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-700 ${className} ${hasTriggered ? 'opacity-100' : 'opacity-0'
                } ${hasTriggered ? getAnimationClass() : ''}`}
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            {children}
        </div>
    );
}
