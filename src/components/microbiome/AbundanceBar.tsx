import { motion } from 'framer-motion';
interface AbundanceBarProps {
  value: number;
  colorClass: string;
}
export function AbundanceBar({ value, colorClass }: AbundanceBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1 font-medium text-slate-500">
        <span>Relative Abundance</span>
        <span className="text-slate-700">{value}%</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{
            width: 0
          }}
          animate={{
            width: `${value}%`
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className={`h-full rounded-full ${colorClass}`} />

      </div>
    </div>);

}