import { useEffect, useState, RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement>, threshold = 0.1) {
    const [isInView, setIsInView] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    setHasTriggered(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element is fully in view
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold]);

    return { isInView, hasTriggered };
}
