import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowDown, FileText, MapPin, GraduationCap, Briefcase, Phone, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, recruiterGlance } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden tech-grid-pattern">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Status Metadata (No pill badges) */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Hire</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Final-Year B.Tech Student (2023–2027)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>India</span>
              </span>
            </div>

            {/* Candidate Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-400">
                {personal.title}
              </p>
            </div>

            {/* Recruiter 30-Second Summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Undergraduate in Artificial Intelligence and Data Science at Satya Institute of Technology and Management (CGPA: 7.81). Hands-on experience with <strong className="font-semibold text-white">NumPy, Pandas, Scikit-learn, and TensorFlow</strong> for analysis and model building through a virtual internship at Indian Servers, alongside full-stack application development using <strong className="font-semibold text-white">React, Node.js, Express, MongoDB, and the Google Gemini API</strong>.
            </p>

            {/* Target Roles (Grounded in Resume & Goals) */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                TARGET ROLES FOR ENTRY-LEVEL HIRING:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {personal.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-200 border border-slate-800 font-mono text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/25 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Download Resume (ATS PDF)</span>
              </button>
            </div>

            {/* Direct Verified Links (No fake URLs) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
                title="GitHub: likhitaseera-2005"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span className="font-mono text-[11px]">likhitaseera-2005</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-[11px]">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
                title={`Email: ${personal.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono text-[11px]">{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
                title={`Phone: ${personal.formattedPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-[11px]">{personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Recruiter Quick Glance Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Recruiter 30-Second Glance
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Verified Records
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {recruiterGlance.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 flex items-start justify-between gap-3"
                  >
                    <span className="text-slate-400 font-mono text-[11px] shrink-0">
                      {item.label}:
                    </span>
                    <span className="text-slate-100 font-semibold text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open ATS Resume Format</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
