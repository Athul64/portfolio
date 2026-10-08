"use client";

import { ArrowUpRight, Copy, Check } from "@phosphor-icons/react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("k.athulkrishna03@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-28 sm:py-36 bg-[#F2F0E9] text-[#1A1A1A] border-t border-[rgba(46,64,54,0.12)]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="gsap-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-3 font-medium">
            // 05 · Collaborative Inquiries
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-5">
            I want to be in a room where people{" "}
            <em className="font-drama italic font-normal text-[#CC5833]">
              care about the data.
            </em>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
            Internship, entry-level analyst, or full-time roles. Execute direct contact through any channel below.
          </p>
        </div>

        {/* Terminal Window with 2rem card radius and rgba opacity variants */}
        <div className="gsap-reveal w-full rounded-[2rem] overflow-hidden border border-[rgba(46,64,54,0.2)] bg-[rgba(26,26,26,0.96)] shadow-[0_24px_64px_rgba(26,26,26,0.25)] text-left font-mono">
          {/* Terminal Window Chrome */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[rgba(242,240,233,0.1)] bg-[rgba(18,21,19,0.7)]">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-[#CC5833] inline-block opacity-90" />
              <span className="h-3 w-3 rounded-full bg-[rgba(242,240,233,0.3)] inline-block" />
              <span className="h-3 w-3 rounded-full bg-[rgba(46,64,54,0.8)] inline-block" />
              <span className="ml-4 text-xs font-mono text-[#F2F0E9]/60 select-none">
                session: athul@data-terminal ~
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="hover-lift hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-[#F2F0E9]/80 bg-[rgba(242,240,233,0.08)] hover:bg-[rgba(242,240,233,0.15)] transition-colors border border-[rgba(242,240,233,0.12)]"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-[#CC5833]" weight="bold" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Commands */}
          <div className="divide-y divide-[rgba(242,240,233,0.08)]">
            {/* Row 1: Email */}
            <a
              href="mailto:k.athulkrishna03@gmail.com"
              className="hover-lift group block px-6 py-5 sm:px-8 sm:py-6 transition-colors hover:bg-[rgba(46,64,54,0.25)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#CC5833] font-bold text-sm sm:text-base select-none">$</span>
                  <span className="text-[#F2F0E9] font-medium sm:font-semibold text-sm sm:text-base group-hover:text-[#CC5833] transition-colors">
                    mail k.athulkrishna03@gmail.com
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#F2F0E9]/50 group-hover:text-[#CC5833] transition-colors" />
              </div>
              <div className="ml-6 mt-1 text-xs font-mono text-[#F2F0E9]/50">
                # Send me a direct inquiry or schedule a conversation
              </div>
            </a>

            {/* Row 2: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/athulkrishna23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group block px-6 py-5 sm:px-8 sm:py-6 transition-colors hover:bg-[rgba(46,64,54,0.25)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#CC5833] font-bold text-sm sm:text-base select-none">$</span>
                  <span className="text-[#F2F0E9] font-medium sm:font-semibold text-sm sm:text-base group-hover:text-[#CC5833] transition-colors">
                    open linkedin.com/in/athulkrishna23
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#F2F0E9]/50 group-hover:text-[#CC5833] transition-colors" />
              </div>
              <div className="ml-6 mt-1 text-xs font-mono text-[#F2F0E9]/50">
                # Connect professionally and view background details
              </div>
            </a>

            {/* Row 3: GitHub */}
            <a
              href="https://github.com/Athul64"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group block px-6 py-5 sm:px-8 sm:py-6 transition-colors hover:bg-[rgba(46,64,54,0.25)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#CC5833] font-bold text-sm sm:text-base select-none">$</span>
                  <span className="text-[#F2F0E9] font-medium sm:font-semibold text-sm sm:text-base group-hover:text-[#CC5833] transition-colors">
                    open github.com/Athul64
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#F2F0E9]/50 group-hover:text-[#CC5833] transition-colors" />
              </div>
              <div className="ml-6 mt-1 text-xs font-mono text-[#F2F0E9]/50">
                # Review code repositories, notebooks &amp; DAX models
              </div>
            </a>

            {/* Row 4: Download Resume */}
            <a
              href="resume.pdf"
              download
              className="hover-lift group block px-6 py-5 sm:px-8 sm:py-6 transition-colors hover:bg-[rgba(46,64,54,0.25)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#CC5833] font-bold text-sm sm:text-base select-none">$</span>
                  <span className="text-[#F2F0E9] font-medium sm:font-semibold text-sm sm:text-base group-hover:text-[#CC5833] transition-colors">
                    download Athul_Krishna_Resume.pdf
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#F2F0E9]/50 group-hover:text-[#CC5833] transition-colors" />
              </div>
              <div className="ml-6 mt-1 text-xs font-mono text-[#F2F0E9]/50">
                # Fetch verified PDF curriculum vitae
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
