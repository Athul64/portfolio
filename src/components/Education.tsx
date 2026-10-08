"use client";

import ScrollReveal from "./ScrollReveal";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Certificate } from "@phosphor-icons/react";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:py-36 border-t border-[#e6dfd8]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#cc785c] block mb-2 font-semibold">
              // Credentials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413]">
              Education &amp; Certifications
            </h2>
            <p className="text-sm text-[#595752] mt-2 font-sans">
              Computer science degrees and verified coursework done alongside college.
            </p>
          </div>
        </ScrollReveal>

        {/* Degrees Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-6 text-xs font-mono uppercase tracking-widest text-[#7a776e]">
            <GraduationCap size={18} className="text-[#cc785c]" />
            <span>Degrees</span>
          </div>

          <div className="flex flex-col divide-y divide-[#e6dfd8] border-y border-[#e6dfd8]">
            {education.map((edu, idx) => (
              <ScrollReveal key={edu.degree} delay={idx * 0.08}>
                <div className="py-7 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[#141413]">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#595752] mt-1 font-sans">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#7a776e] shrink-0">
                    <span>{edu.period}</span>
                    <span className="px-2.5 py-1 rounded bg-[#f5f0e8] border border-[#e6dfd8] text-[#141413]">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 text-xs font-mono uppercase tracking-widest text-[#7a776e]">
            <Certificate size={18} className="text-[#cc785c]" />
            <span>Coursework &amp; Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={cert.name} delay={idx * 0.05}>
                <div className="p-5 rounded-lg border border-[#e6dfd8] bg-[#f5f0e8]/50 flex items-start justify-between gap-4 hover:border-[#cc785c]/40 transition-colors">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-[#141413]">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-[#7a776e] mt-1 font-sans">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#7a776e] shrink-0">
                    {cert.year}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
