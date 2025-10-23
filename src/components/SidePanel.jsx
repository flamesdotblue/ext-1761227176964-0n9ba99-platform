import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SidePanel({ children }) {
  const controls = useAnimationControls();

  return (
    <motion.div
      onMouseEnter={() => controls.start({ rotate: 0.6, transition: { type: 'spring', stiffness: 120, damping: 14 } })}
      onMouseLeave={() => controls.start({ rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } })}
      className="relative"
    >
      <motion.div
        animate={controls}
        className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-60">
          <AnimatedCosmicBackground />
        </div>
        <div className="relative z-10 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Star size={16} className="text-white/90" />
            <h2 className="text-lg font-semibold tracking-tight">Interactive Demos</h2>
          </div>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedCosmicBackground() {
  return (
    <div className="w-full h-full">
      <motion.div
        className="absolute -inset-20 rounded-full"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [1, 1.05, 1],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(110,108,255,0.35) 0%, rgba(255,0,153,0.25) 40%, rgba(0,212,255,0.18) 65%, rgba(0,0,0,0) 75%)',
        }}
      />
      <Starfield />
    </div>
  );
}

function Starfield() {
  const stars = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="absolute inset-0">
      {stars.map((i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = 1 + Math.random() * 2;
        const delay = Math.random() * 4;
        const duration = 2 + Math.random() * 3;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/80 shadow"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration, delay }}
          />
        );
      })}
    </div>
  );
}
