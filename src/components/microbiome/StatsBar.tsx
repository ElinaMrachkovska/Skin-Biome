import { FlaskConical, Bug, Sprout } from 'lucide-react';

interface StatsBarProps {
  total: number;
  bacteriaCount: number;
  fungiCount: number;
}

export function StatsBar({ total, bacteriaCount, fungiCount }: StatsBarProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center sm:flex-row sm:text-left sm:justify-start gap-3">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
          <FlaskConical size={22} />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">{total}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Total Microbes
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center sm:flex-row sm:text-left sm:justify-start gap-3">
        <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
          <Bug size={22} />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">{bacteriaCount}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Bacteria
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center sm:flex-row sm:text-left sm:justify-start gap-3">
        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
          <Sprout size={22} />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">{fungiCount}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Fungi
          </div>
        </div>
      </div>
    </div>
  );
}