import React from 'react';
import { MicrobeList } from '../components/microbiome/MicrobeList';
import { mockMicrobes } from '../data/mockData';
import { Dna } from 'lucide-react';
export function MicrobiomePage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#1a1a2e]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Dna size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">
                Skin Microbiome Explorer
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Research Data Visualization
              </p>
            </div>
          </div>

          <div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            v1.0.0 • Confidential
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <MicrobeList data={mockMicrobes} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          <p>© 2024 Microbiome Research Lab. All rights reserved.</p>
          <p className="mt-1">Data provided for demonstration purposes only.</p>
        </div>
      </footer>
    </div>);

}