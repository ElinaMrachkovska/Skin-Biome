import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microbe, MicrobeType } from '../../types/microbe';
import { MicrobeCard } from './MicrobeCard';
import { MicrobeFilters } from './MicrobeFilters';
import { StatsBar } from './StatsBar';
interface MicrobeListProps {
  data: Microbe[];
}
type FilterType = 'all' | MicrobeType;
type SortDirection = 'asc' | 'desc';
export function MicrobeList({ data }: MicrobeListProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  // Filter and sort logic
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];
    // 1. Filter
    if (filter !== 'all') {
      result = result.filter((microbe) => microbe.type === filter);
    }
    // 2. Sort
    result.sort((a, b) => {
      if (sortDirection === 'desc') {
        return b.abundance - a.abundance;
      }
      return a.abundance - b.abundance;
    });
    return result;
  }, [data, filter, sortDirection]);
  // Calculate stats
  const stats = useMemo(() => {
    return {
      total: data.length,
      bacteria: data.filter((m) => m.type === 'bacteria').length,
      fungi: data.filter((m) => m.type === 'fungi').length
    };
  }, [data]);
  const toggleSort = () => {
    setSortDirection((prev) => prev === 'desc' ? 'asc' : 'desc');
  };
  return (
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-green-50 to-blue-50">
      <StatsBar
        total={stats.total}
        bacteriaCount={stats.bacteria}
        fungiCount={stats.fungi} />


      <MicrobeFilters
        activeFilter={filter}
        onFilterChange={setFilter}
        sortDirection={sortDirection}
        onSortChange={toggleSort} />


      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <AnimatePresence mode="popLayout">
          {filteredAndSortedData.map((microbe) =>
          <MicrobeCard key={microbe.id} microbe={microbe} />
          )}
        </AnimatePresence>
      </motion.div>

      {filteredAndSortedData.length === 0 &&
      <div className="text-center py-20 text-slate-400">
          No microbes found matching your criteria.
        </div>
      }
    </div>);

}