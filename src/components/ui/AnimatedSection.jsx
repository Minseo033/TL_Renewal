import { useRef, useEffect, useState } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up', style: externalStyle = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

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
