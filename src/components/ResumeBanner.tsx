import React from 'react';
import { FileText, Printer, ArrowRight } from 'lucide-react';

interface ResumeBannerProps {
  onOpenResume: () => void;
}

export const ResumeBanner: React.FC<ResumeBannerProps> = ({ onOpenResume }) => {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/30 border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-blue-400">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL ATS RESUME</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Want to know more about my experience?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Access the complete, verified resume covering coursework, Indian Servers internship details, technical projects, and academic GPAs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              <span>Download & View Resume</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Print Ready</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
