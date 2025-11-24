import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0 
          }}
          animate={{ 
            y: [
              `${particle.y}%`, 
              `${particle.y - 100}%`
            ],
            opacity: [0, 0.5, 0],
            x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 20}%`]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: `rgba(25, 217, 220, ${0.3 + Math.random() * 0.5})`,
            filter: 'blur(0.5px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(25, 217, 220, 0.6)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
