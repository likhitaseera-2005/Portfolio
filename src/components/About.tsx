import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Code2, Cpu, Target } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const sections = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      title: 'Academic Foundation',
      text: about.academic,
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'AI & Machine Learning Focus',
      text: about.interests,
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: 'Internship & Hands-on Work',
      text: about.experience,
    },
    {
      icon: <Target className="w-5 h-5 text-teal-400" />,
      title: 'Career Aspirations & Target Roles',
      text: about.goal,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">01. Candidate Profile</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            About Me
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Academic background, core technical focus, and realistic career objectives based directly on my academic and internship records.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  {sec.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {sec.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {sec.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
