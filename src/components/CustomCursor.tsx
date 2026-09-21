import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseDown = () => {
      dot.classList.add('cursor-click');
      ring.classList.add('cursor-click');
    };
    const onMouseUp = () => {
      dot.classList.remove('cursor-click');
      ring.classList.remove('cursor-click');
    };

    const onMouseEnterLink = () => ring.classList.add('cursor-hover');
    const onMouseLeaveLink = () => ring.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Add hover effect on interactive elements
    const addLinkListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    addLinkListeners();
    // Re-run on DOM changes (for dynamically rendered elements)
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 cursor-dot" />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="w-8 h-8 border-2 border-blue-400/60 rounded-full -translate-x-1/2 -translate-y-1/2 cursor-ring" />
      </div>

      <style>{`
        * { cursor: none !important; }

        .cursor-dot {
          transition: transform 0.1s ease, background-color 0.2s ease, width 0.2s ease, height 0.2s ease;
        }
        .cursor-ring {
          transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
        }

        /* Hover on links/buttons */
        .cursor-hover .cursor-ring,
        div[class*="cursor-hover"] ~ div .cursor-ring {
          width: 3rem;
          height: 3rem;
          border-color: rgba(99,102,241,0.8);
        }

        /* Click effect */
        .cursor-click .cursor-dot {
          transform: translate(-50%, -50%) scale(1.8);
          background-color: #6366f1;
        }
        .cursor-click .cursor-ring {
          width: 1.5rem;
          height: 1.5rem;
          border-color: rgba(99,102,241,0.9);
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
