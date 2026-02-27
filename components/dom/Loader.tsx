'use client';

import { motion } from 'motion/react';

export const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={onLoaded}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-cyan-400"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-3xl md:text-5xl tracking-widest animate-pulse"
          style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)' }}
        >
          Initializing Portfolio Engine
        </motion.h1>
      </div>
    </motion.div>
  );
};
