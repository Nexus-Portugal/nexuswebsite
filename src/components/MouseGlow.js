import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLowEnd, setIsLowEnd] = useState(false);

  // Detectar capacidade do dispositivo
  useEffect(() => {
    const detectLowEndDevice = () => {
      // Verificar RAM disponível (se disponível via deviceMemory API)
      if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
        setIsLowEnd(true);
        return;
      }

      // Verificar taxa de refresh de tela
      if (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0) {
        // Dispositivo mobile/tablet pode ser low-end
        const cores = navigator.hardwareConcurrency || 1;
        if (cores <= 2) {
          setIsLowEnd(true);
          return;
        }
      }

      // Verificar se há reduceMotion ativado (modo economia de energia)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setIsLowEnd(true);
        return;
      }
    };

    detectLowEndDevice();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Apenas adiciona listener se não for low-end
    if (!isLowEnd) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isLowEnd]);

  // Se for dispositivo low-end, não renderiza o glow
  if (isLowEnd) {
    return null;
  }

  return (
    <>
      {/* Glow principal que segue o rato - reduzido em brilho */}
      <motion.div
        className="mouse-glow"
        animate={{
          left: mousePos.x,
          top: mousePos.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25, 217, 220, 0.2) 0%, rgba(25, 217, 220, 0.05) 50%, transparent 100%)',
          filter: 'blur(60px)',
          zIndex: 5,
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
      />

      {/* Glow secundário mais suave - reduzido em brilho */}
      <motion.div
        className="mouse-glow-secondary"
        animate={{
          left: mousePos.x,
          top: mousePos.y,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100, mass: 1 }}
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 234, 99, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 4,
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default MouseGlow;
