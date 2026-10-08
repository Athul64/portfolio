"use client";

import { ArrowUp } from "@phosphor-icons/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(242,240,233,0.1)] px-6 py-14 bg-[#141414] text-[#F2F0E9]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Meta */}
        <div className="flex flex-col sm:flex-row items-center gap-3 font-mono text-xs text-[#F2F0E9]/60">
          <span className="font-heading font-semibold text-sm text-[#F2F0E9]">
            Athul Krishna
          </span>
          <span className="hidden sm:inline text-[rgba(242,240,233,0.2)]">/</span>
          <span>Data Analyst &amp; MCA Scholar</span>
          <span className="hidden sm:inline text-[rgba(242,240,233,0.2)]">/</span>
          <span className="text-[#CC5833]">Kerala, IN</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-body text-xs text-[#F2F0E9]/70">
          <a href="#about" className="hover-lift hover:text-[#F2F0E9] transition-colors">
            About
          </a>
          <a href="#skills" className="hover-lift hover:text-[#F2F0E9] transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover-lift hover:text-[#F2F0E9] transition-colors">
            Projects
          </a>
          <a href="#timeline" className="hover-lift hover:text-[#F2F0E9] transition-colors">
            Timeline
          </a>
          <a href="#contact" className="hover-lift hover:text-[#F2F0E9] transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            className="hover-lift inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9]/80 hover:text-white font-mono text-[11px] transition-all ml-2"
          >
            <span>Top</span>
            <ArrowUp size={11} weight="bold" />
          </button>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[rgba(242,240,233,0.06)] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F2F0E9]/40 gap-2">
        <span>Designed &amp; built by Athul Krishna</span>
        <span>© {new Date().getFullYear()} Athul Krishna. All rights reserved.</span>
      </div>
    </footer>
  );
}
