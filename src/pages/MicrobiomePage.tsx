import { useState, useEffect } from 'react';
import { MicrobeList } from '../components/microbiome/MicrobeList';
import { mockMicrobes } from '../data/mockData';
import { Dna, Sun, Moon } from 'lucide-react';

export function MicrobiomePage() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen text-[var(--text-primary)]">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Dna size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-title)] leading-none">
                Skin Microbiome Explorer
              </h1>
              <p className="text-sm text-[var(--text-secondary)] font-medium mt-0.5">
                Research Data Visualization
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="w-full">
        <MicrobeList data={mockMicrobes} />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 mt-12 py-8 bg-white/60 dark:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-secondary)]">
          <p>© 2026 Microbiome Research Lab. All rights reserved.</p>
          <p className="mt-1">Data provided for demonstration purposes only.</p>
        </div>
      </footer>
    </div>
  );
}