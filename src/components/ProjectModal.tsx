import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, CheckCircle2, ShieldAlert, Terminal, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div>
            <h3 id="modal-project-title" className="text-lg font-bold text-white font-display">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400">
              {project.subtitle} · Full Project Specification
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[72vh] overflow-y-auto space-y-6">
          {/* Visual Screenshot */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[300px]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description from Resume */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold block">
              PROJECT OVERVIEW (FROM RESUME):
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>Problem Addressed</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold block">
              Technologies Used
            </span>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-200">
              {project.technologies.map((t, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-medium text-white">{t}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-bold block">
              My Specific Contributions
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.myContribution.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-bold block">
              Key Features
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Simulation Example */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 font-bold text-slate-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Example AI Code Diagnosis Flow</span>
              </span>
              <span className="text-emerald-400">Google Gemini API</span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 font-mono text-[11px] p-3 text-slate-300">
              <span className="text-slate-500 block mb-1"># Student Code Input</span>
              {`for i in range(len(numbers) + 1):  # IndexError: list index out of range`}
            </div>

            <div className="p-3 rounded-lg border border-blue-900/60 bg-blue-950/30 text-xs text-slate-200 space-y-1">
              <span className="font-mono text-blue-400 font-semibold block">PrepBuddyAI Explanation:</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Lists in Python are 0-indexed. Range should stop at <code className="text-amber-300">len(numbers)</code>, not <code className="text-amber-300">len(numbers) + 1</code>. Alternatively, iterate directly with <code className="text-emerald-300">for num in numbers:</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-mono">
            Candidate GitHub: <span className="text-slate-200">github.com/likhitaseera-2005</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Visit GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
