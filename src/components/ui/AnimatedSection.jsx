import { useRef, useEffect, useState } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up', style: externalStyle = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof window === 'undefined') return undefined;

    if (!('IntersectionObserver' in window)) {
      const frameId = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(-30px)',
    right: 'translateX(30px)',
    scale: 'scale(0.95)',
  };

  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : transforms[direction],
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={{ ...externalStyle, ...animStyle }}>
      {children}
    </div>
  );
}
