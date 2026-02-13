import React from 'react';
import { motion } from 'framer-motion';
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0B1121] pointer-events-none">
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_50%)]" />

      {/* Floating Orbs - Simplified for performance */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#22d3ee] opacity-[0.07] blur-[100px] will-change-transform" />


      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#f43f5e] opacity-[0.07] blur-[120px] will-change-transform" />


      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

    </div>);

}