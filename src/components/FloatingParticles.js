import React, { useMemo } from 'react';

const FloatingParticles = () => {
  // Detectar dispositivos low-end
  const shouldRender = useMemo(() => {
    // Verificar prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    
    // Verificar se é mobile/touch
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Verificar RAM
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    
    // Verificar cores
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    // Não renderizar em dispositivos de baixo desempenho
    return !(isTouch && (lowMemory || lowCores));
  }, []);

  // Reduzir para 8 partículas e usar CSS em vez de Framer Motion
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 15, // 15-30s (mais lento = menos CPU)
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.2
    }));
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: `rgba(25, 217, 220, ${particle.opacity})`,
            // Usar CSS animation em vez de JS - muito mais performante
            animation: `float-up ${particle.duration}s linear ${particle.delay}s infinite`,
            willChange: 'transform',
            transform: 'translateZ(0)' // Força GPU acceleration
          }}
        />
      ))}
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingParticles;
