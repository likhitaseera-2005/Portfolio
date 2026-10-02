import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">05. Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            All educational milestones, institutions, graduation years, and GPAs shown below are taken directly from my academic resume.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                idx === 0
                  ? 'bg-slate-900/80 border-blue-900/50 hover:border-blue-700/60 shadow-xl'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700/80'
              }`}
            >
              <div className="space-y-4">
                {/* Header with Icon and Score */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                    <GraduationCap className={`w-5 h-5 ${idx === 0 ? 'text-blue-400' : 'text-slate-400'}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                      {item.scoreLabel}
                    </div>
                    <div className="text-base font-bold text-white font-mono tabular-nums">
                      {item.score} <span className="text-xs text-slate-500 font-normal">/ 10</span>
                    </div>
                  </div>
                </div>

                {/* Degree & College */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400">
                    {item.institution}
                  </p>
                </div>

                {/* Metadata */}
                <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {idx === 0 && (
                <div className="mt-5 pt-3 border-t border-blue-950/80 flex items-center justify-between text-[11px] font-mono text-blue-300">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    <span>Class of 2027</span>
                  </span>
                  <span className="text-slate-400">Final Year B.Tech</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
