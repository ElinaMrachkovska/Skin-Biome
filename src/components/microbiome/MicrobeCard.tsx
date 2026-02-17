import React from 'react';
import { motion } from 'framer-motion';
import { Microbe } from '../../types/microbe';
import { AbundanceBar } from './AbundanceBar';

interface MicrobeCardProps {
  microbe: Microbe;
}

export function MicrobeCard({ microbe }: MicrobeCardProps) {
  const typeColor =
    microbe.type === 'bacteria' ?
    'bg-teal-100 text-teal-800 border-teal-200' :
    'bg-amber-100 text-amber-800 border-amber-200';

  const roleColor =
    microbe.role === 'beneficial' ?
    'bg-green-100 text-green-800 border-green-200' :
    microbe.role === 'pathogenic' ?
    'bg-red-100 text-red-800 border-red-200' :
    'bg-slate-100 text-slate-600 border-slate-200';

  const barColor = microbe.type === 'bacteria' ? 'bg-teal-500' : 'bg-amber-500';

  // 👇 ДОДАНО: glow колір залежно від типу мікроба
  const glowColor = microbe.type === 'bacteria'
    ? '0 8px 30px rgba(13, 148, 136, 0.25)'
    : '0 8px 30px rgba(217, 119, 6, 0.25)';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      // 👇 ДОДАНО: whileHover та whileTap
      whileHover={{
        scale: 1.05,
        boxShadow: glowColor,
      }}
      whileTap={{ scale: 0.97 }}
      // 👇 ВИДАЛЕНО: hover:shadow-md transition-shadow duration-200 (тепер це робить framer-motion)
      className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col h-full cursor-pointer origin-center"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-slate-900 italic font-serif leading-tight">
          {microbe.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColor} capitalize`}>
          {microbe.type}
        </span>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${roleColor} capitalize`}>
          {microbe.role}
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
        {microbe.description}
      </p>

      <div className="mt-auto pt-4 border-t border-slate-100">
        <AbundanceBar value={microbe.abundance} colorClass={barColor} />
      </div>
    </motion.div>
  );
}