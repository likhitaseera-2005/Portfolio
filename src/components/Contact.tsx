import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const recruiterSubjectPresets = [
    'AI/ML Engineer (Fresher) Interview',
    'Python Developer Opportunity',
    'Software Engineer Fresher Role',
    'AI/Data Science Internship',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePresetSelect = (preset: string) => {
    setFormData((prev) => ({
      ...prev,
      roleOrSubject: preset,
      message: prev.message || `Hi Likhita,\n\nWe came across your profile and would like to invite you to interview for the ${preset} position.\n\nBest regards,`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.roleOrSubject
        ? `[Opportunity] ${formData.roleOrSubject} - ${formData.name || 'Recruiter'}`
        : `[Portfolio Inquiry] Connecting with Likhita Seera - ${formData.name || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hi Likhita,\n\n${formData.message}\n\nCandidate Outreach From:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">07. Hiring & Communication</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Direct Recruiter Outreach
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            I respond within 24 hours to campus recruitment leads, hiring managers, and engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Verification Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all flex items-start justify-between gap-4 shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-950/70 border border-blue-800/50 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5 break-all font-mono"
                  >
                    {personal.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">One-click email client launch</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all flex items-start justify-between gap-4 shadow-lg">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-950/70 border border-sky-800/50 text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold">PHONE / WHATSAPP</div>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-sm font-semibold text-white hover:text-sky-400 transition-colors block mt-0.5 font-mono"
                  >
                    {personal.phone}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">Available for telephonic interviews</p>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Verified Links */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-teal-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-mono uppercase block text-[10px] font-semibold">CURRENT LOCATION</span>
                  <span>{personal.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Recruiter Message Form with Instant Presets (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Compose Interview Outreach
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Select a role preset or write a custom message. Submitting generates an email draft directly in your preferred desktop or mobile mail app.
                </p>
              </div>

              {/* Recruiter Quick Role Presets (Zero-pill compliant button group) */}
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-2">
                  QUICK PRESETS FOR HIRING TEAMS:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {recruiterSubjectPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      className="px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors cursor-pointer"
                    >
                      + {preset}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      RECRUITER / SENDER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh V. / Talent Acquisition"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    ROLE / SUBJECT LINE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.roleOrSubject}
                    onChange={(e) => setFormData({ ...formData, roleOrSubject: e.target.value })}
                    placeholder="e.g. AI/ML Engineer Fresher / Python Developer Role"
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    MESSAGE / JOB DESCRIPTION LINK *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the open position, assessment process, or next steps..."
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Prefills mail to: {personal.email}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/25 cursor-pointer"
                  >
                    <span>Launch Email Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
