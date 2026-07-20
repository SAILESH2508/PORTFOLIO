import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  startDelay?: number;
  loop?: boolean;
}

export default function AnimatedText({ text, className = "", delay = 100, startDelay = 0, loop = false }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Start false if there's a delay

  useEffect(() => {
    let intervalId: any;
    let timeoutId: any;

    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          // Loop only if loop prop is true
          if (loop) {
            timeoutId = setTimeout(() => {
              startTyping();
            }, 5000);
          }
        }
      }, delay);
    };

    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      startTyping();
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, startDelay, loop]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
    </span>
  );
}
