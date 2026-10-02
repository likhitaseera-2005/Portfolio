import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Lightbulb, GitBranch } from 'lucide-react';

export const CurrentFocus: React.FC = () => {
  const { currentFocus } = portfolioData;

  const icons = [
    <GitBranch className="w-4 h-4 text-blue-400" />,
    <Compass className="w-4 h-4 text-sky-400" />,
    <Lightbulb className="w-4 h-4 text-indigo-400" />,
  ];

  return (
    <section className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800/90 relative overflow-hidden">
          <div className="max-w-xl mb-8">
            <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">06. Continuous Learning</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              {currentFocus.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {currentFocus.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentFocus.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                      {icons[idx % icons.length]}
                    </div>
                    <h4 className="text-sm font-semibold text-white font-display">
                      {item.topic}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
