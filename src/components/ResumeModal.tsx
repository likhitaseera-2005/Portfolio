import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personal, education, experience, skillCategories, projects } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateResumeText = () => {
    return `
================================================================================
LIKHITA SEERA
Email: ${personal.email} | Phone: ${personal.formattedPhone}
Location: ${personal.location}
GitHub: ${personal.github}
LinkedIn: ${personal.linkedin}
================================================================================

PROFESSIONAL SUMMARY
${personal.summary}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
1. ${education[0].degree}
   ${education[0].institution}, ${education[0].location}
   ${education[0].period} | ${education[0].scoreLabel}: ${education[0].score}

2. ${education[1].degree}
   ${education[1].institution}, ${education[1].location}
   ${education[1].period} | ${education[1].scoreLabel}: ${education[1].score}

3. ${education[2].degree}
   ${education[2].institution}, ${education[2].location}
   ${education[2].period} | ${education[2].scoreLabel}: ${education[2].score}

--------------------------------------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------------------------------------
${experience[0].role}
${experience[0].organization}
${experience[0].period} (${experience[0].duration})
- ${experience[0].responsibilities.join('\n- ')}
Technologies: ${experience[0].technologies.join(', ')}

--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------
${projects[0].title}
Technologies: ${projects[0].technologies.join(', ')}
Repository: ${projects[0].githubUrl}
Overview: ${projects[0].description}

Key Features:
- ${projects[0].features.join('\n- ')}

Contributions:
- ${projects[0].myContribution.join('\n- ')}

--------------------------------------------------------------------------------
SKILLS (VERIFIED FROM RESUME)
--------------------------------------------------------------------------------
Programming: Python, Java
AI & Machine Learning: NumPy, Pandas, Scikit-learn, TensorFlow, Basic Analysis & Model Building
Web & Backend: React, Node.js, Express, HTML, CSS
Data & Databases: SQL, MongoDB
Tools & APIs: Google Gemini API, Visual Studio Code, Git, GitHub, Appian
Professional Competencies: Communication, Teamwork, Adaptability, Leadership
================================================================================
    `.trim();
  };

  const handleCopyText = () => {
    const text = generateResumeText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const text = generateResumeText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Likhita_Seera_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Recruiter Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold text-white font-display">
              Recruiter ATS Resume Viewer · Likhita Seera
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-sm"
              title="Print or save as PDF via system dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Download ATS text file"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Download .txt</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Style Printable Resume Document Container */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto bg-white text-slate-900 font-sans print-container">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
              {personal.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-900 mt-1">
              AI & Data Science Student | Aspiring AI/ML & Software Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
              <span>{personal.email}</span>
              <span>·</span>
              <span>{personal.formattedPhone}</span>
              <span>·</span>
              <span>{personal.location}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-1">
              <span>
                GitHub: <a href={personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">{personal.github}</a>
              </span>
              <span>·</span>
              <span>
                LinkedIn: <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">{personal.linkedin}</a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 font-mono">
              Technical Skills (From Resume)
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div>
                <strong>Programming Languages:</strong> Python, Java
              </div>
              <div>
                <strong>AI & Machine Learning:</strong> NumPy, Pandas, Scikit-learn, TensorFlow, Basic Analysis & Model Building
              </div>
              <div>
                <strong>Data & Databases:</strong> SQL, MongoDB
              </div>
              <div>
                <strong>Web & Backend Technologies:</strong> React, Node.js, Express, HTML, CSS
              </div>
              <div>
                <strong>Developer Tools & APIs:</strong> Google Gemini API, Git, GitHub, Visual Studio Code, Appian
              </div>
              <div>
                <strong>Professional Competencies:</strong> Communication, Teamwork, Adaptability, Leadership
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 font-mono">
              Work Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="text-xs mb-2">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{exp.organization} — {exp.role}</span>
                  <span className="font-mono text-[11px] text-slate-600">{exp.period} ({exp.duration})</span>
                </div>
                <ul className="list-disc list-inside text-slate-800 mt-1 space-y-0.5">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 mt-1 font-mono text-[11px]">
                  <strong>Technologies:</strong> {exp.technologies.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 font-mono">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs mb-2">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{proj.title}</span>
                  <span className="font-mono text-[11px] text-slate-600">Full-Stack AI Project</span>
                </div>
                <p className="text-slate-800 mt-1">
                  {proj.description}
                </p>
                <ul className="list-disc list-inside text-slate-800 mt-1 space-y-0.5">
                  {proj.myContribution.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
                <p className="text-slate-700 mt-1 font-mono text-[11px]">
                  <strong>Stack:</strong> {proj.technologies.join(', ')} | <strong>Repository:</strong> {proj.githubUrl}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 font-mono">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-700">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[11px] text-slate-600">{edu.period}</div>
                    <div className="font-bold text-slate-900">{edu.scoreLabel}: {edu.score} / 10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Strip */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs">
          <div className="text-slate-400">
            Source of truth: Uploaded resume of Likhita Seera.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
