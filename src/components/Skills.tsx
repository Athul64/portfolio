"use client";

import { skills } from "@/lib/data";
import { Code, ChartBar, Database, Wrench } from "@phosphor-icons/react";

const categoryIconMap: Record<string, React.ReactNode> = {
  Languages: <Code size={20} className="text-[#CC5833]" />,
  "BI & Visualization": <ChartBar size={20} className="text-[#CC5833]" />,
  Libraries: <Database size={20} className="text-[#CC5833]" />,
  "Databases & Tools": <Wrench size={20} className="text-[#CC5833]" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-28 sm:py-36 bg-[#F2F0E9] text-[#1A1A1A] border-t border-[rgba(46,64,54,0.12)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="gsap-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
              // 02 · Capability Matrix
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
              Technologies &amp;{" "}
              <em className="font-drama italic font-normal text-[#2E4036]">
                Tooling
              </em>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#1A1A1A]/75 max-w-sm">
            Core analytical instruments applied across data wrangling, DAX modeling, SQL query optimization, and exploratory storytelling.
          </p>
        </div>

        {/* Structured Ledger Matrix with 2rem card radius */}
        <div data-gsap-group className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="gsap-item hover-lift p-8 rounded-[2rem] bg-[rgba(46,64,54,0.04)] border border-[rgba(46,64,54,0.1)] shadow-[0_4px_24px_rgba(46,64,54,0.03)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-full bg-[rgba(204,88,51,0.1)] border border-[rgba(204,88,51,0.2)]">
                    {categoryIconMap[group.category] || <Code size={20} className="text-[#CC5833]" />}
                  </span>
                  <div>
                    <h3 className="text-base font-heading font-semibold text-[#1A1A1A]">
                      {group.category}
                    </h3>
                    <p className="text-xs font-mono text-[#2E4036]/70">
                      {group.title}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#CC5833] font-medium">
                  {group.items.length} modules
                </span>
              </div>

              {/* Tags with 9999px pill radius */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="hover-lift px-3.5 py-1.5 text-xs font-mono text-[#1A1A1A] bg-[rgba(242,240,233,0.9)] border border-[rgba(46,64,54,0.12)] hover:border-[rgba(204,88,51,0.4)] hover:text-[#CC5833] rounded-full transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="gsap-reveal mt-8 flex items-center justify-between font-mono text-xs text-[#1A1A1A]/60 pt-4 border-t border-[rgba(46,64,54,0.08)]">
          <span>* Expanding capabilities into dbt and cloud warehouses during MCA tenure</span>
          <span className="hidden sm:inline text-[#2E4036]">Verified Stack · 2025</span>
        </div>
      </div>
    </section>
  );
}
