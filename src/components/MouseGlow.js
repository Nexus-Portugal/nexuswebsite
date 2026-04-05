import React, { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
      const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isTouch || lowMemory || lowCores || prefersReducedMotion) {
        setShouldRender(false);
      }
    };

    checkDevice();

    if (shouldRender) {
      const handleMouseMove = (e) => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className="mouse-glow"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        contain: 'strict',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 'var(--mouse-x, -999px)',
          top: 'var(--mouse-y, -999px)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25, 217, 220, 0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top'
        }}
      />
    </div>
  );
};

export default MouseGlow;
