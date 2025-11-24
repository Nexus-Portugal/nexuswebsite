import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Glow principal que segue o rato */}
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
          background: 'radial-gradient(circle, rgba(25, 217, 220, 0.4) 0%, rgba(25, 217, 220, 0.1) 50%, transparent 100%)',
          filter: 'blur(60px)',
          zIndex: 5,
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
      />

      {/* Glow secundário mais suave */}
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
          background: 'radial-gradient(circle, rgba(0, 234, 99, 0.25) 0%, transparent 70%)',
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
