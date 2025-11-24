import React from 'react';
import { motion } from 'framer-motion';

const ShineEffect = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: '-100%',
        width: '200%',
        height: '100vh',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
        filter: 'blur(20px)'
      }}
      animate={{
        left: ['-100%', '100%']
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};

export default ShineEffect;
