import React from 'react';
import { ArrowUpDown, Filter } from 'lucide-react';
import { MicrobeType } from '../../types/microbe';
type FilterType = 'all' | MicrobeType;
type SortDirection = 'asc' | 'desc';
interface MicrobeFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sortDirection: SortDirection;
  onSortChange: () => void;
}
export function MicrobeFilters({
  activeFilter,
  onFilterChange,
  sortDirection,
  onSortChange
}: MicrobeFiltersProps) {
  const filters: {
    id: FilterType;
    label: string;
  }[] = [
  {
    id: 'all',
    label: 'All Microbes'
  },
  {
    id: 'bacteria',
    label: 'Bacteria'
  },
  {
    id: 'fungi',
    label: 'Fungi'
  }];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
      <div className="flex items-center gap-1 p-1 w-full sm:w-auto overflow-x-auto">
        <div className="flex items-center text-slate-400 mr-2 px-2">
          <Filter size={16} />
        </div>
        {filters.map((filter) =>
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
              px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap
              ${activeFilter === filter.id ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
            `}
          aria-pressed={activeFilter === filter.id}>

            {filter.label}
          </button>
        )}
      </div>

      <button
        onClick={onSortChange}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors w-full sm:w-auto justify-center sm:justify-start border border-slate-200 sm:border-transparent"
        aria-label={`Sort by abundance ${sortDirection === 'desc' ? 'ascending' : 'descending'}`}>

        <ArrowUpDown size={16} className="text-slate-500" />
        <span>Sort by Abundance</span>
        <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded ml-1 uppercase">
          {sortDirection}
        </span>
      </button>
    </div>);

}