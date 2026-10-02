import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#070b13] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-semibold text-slate-200 text-sm font-display">
              {portfolioData.personal.name}
            </div>
            <p className="text-slate-500">
              Bachelor of Artificial Intelligence and Data Science · Satya Institute of Technology and Management
            </p>
          </div>

          {/* Quick Links & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-slate-200 transition-colors">Experience</a>
            <a href="#education" className="hover:text-slate-200 transition-colors">Education</a>
            <button
              onClick={onOpenResume}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center text-slate-600 text-[11px] font-mono">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All portfolio information verified against official academic and internship records.
        </div>
      </div>
    </footer>
  );
};
