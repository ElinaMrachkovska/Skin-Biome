import React from 'react';
import { MicrobeList } from '../components/microbiome/MicrobeList';
import { mockMicrobes } from '../data/mockData';
import { Dna } from 'lucide-react';

export function MicrobiomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-[#1a1a2e]">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Dna size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#3b10bb] leading-none">
                Skin Microbiome Explorer
              </h1>
              <p className="text-sm text-slate-500 font-medium mt-0.5">
                Research Data Visualization
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        <MicrobeList data={mockMicrobes} />
      </main>

      <footer className="border-t border-slate-200 mt-12 py-8 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>© 2024 Microbiome Research Lab. All rights reserved.</p>
          <p className="mt-1">Data provided for demonstration purposes only.</p>
        </div>
      </footer>
    </div>
  );
}