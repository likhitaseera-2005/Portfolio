import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const project = projects[0];

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">03. Project Showcase</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Presented strictly in the <strong>Problem → Solution → Technologies → My Contribution → Key Features → GitHub</strong> format.
          </p>
        </div>

        {/* Project Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden shadow-2xl">
          {/* Card Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-blue-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Only show link that actually exists */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <span>Project Details & Simulation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Structured Presentation: Problem → Solution → Tech → Contribution → Features */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Visual Screenshot Container */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[380px]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>PrepBuddyAI Interface Preview</span>
                <span className="text-blue-400">React · Node.js · Gemini API · MongoDB</span>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>1. Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>2. Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 3. Technologies Used */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold block">
                3. Technologies
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-200">
                {project.technologies.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-medium text-white">{tech}</span>
                    {idx < project.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 4. My Contribution */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-bold block">
                4. My Contribution
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.myContribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Key Features */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-bold block">
                5. Key Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. GitHub Link & Action */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 font-mono">
                Repository link: <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.githubUrl}</a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
