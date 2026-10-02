import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const exp = experience[0];

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">04. Work Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Internship Experience
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Directly substantiated by my completed 4-weeks virtual internship at Indian Servers in 2025.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 hover:border-slate-700/80 transition-all shadow-xl space-y-6">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-950/70 border border-blue-800/50 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-blue-400 mt-0.5">
                    {exp.organization}
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter Metadata (Unboxed, no pills) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{exp.period}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{exp.duration}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>

          {/* Documented Responsibilities from Resume */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              RESPONSIBILITIES & CONTRIBUTIONS (FROM RESUME):
            </span>
            <ul className="space-y-2.5">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Applied */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2 font-semibold">
              TECHNOLOGIES & LIBRARIES USED:
            </span>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-200">
              {exp.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-medium text-white">{tech}</span>
                  {idx < exp.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
