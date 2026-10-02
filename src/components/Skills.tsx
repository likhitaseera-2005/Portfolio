import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Verified Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'web_backend', label: 'Web & Backend' },
    { id: 'data_databases', label: 'Data & Databases' },
    { id: 'tools_enterprise', label: 'Tools & Enterprise' },
    { id: 'professional', label: 'Competencies' },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">02. Technical Competencies</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Every skill listed below is directly substantiated by coursework, the Indian Servers internship, or the PrepBuddyAI platform. No artificial rating scales or self-proclaimed expert tags.
            </p>
          </div>

          {/* Category Filter Buttons (Functional controls, zero-pill compliant) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                  <h3 className="text-base font-bold text-white font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                        {skill.source}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
