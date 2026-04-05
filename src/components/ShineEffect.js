import React, { useMemo } from 'react';

const ShineEffect = () => {
  // Não renderizar se prefers-reduced-motion estiver ativado
  const shouldRender = useMemo(() => {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '-100%',
        width: '50%',
        height: '100vh',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
        filter: 'blur(30px)',
        animation: 'shine 8s ease-in-out infinite',
        willChange: 'transform'
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(400vw);
          }
        }
      `}</style>
    </div>
  );
};

export default ShineEffect;
