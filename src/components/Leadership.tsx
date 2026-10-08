"use client";

import ScrollReveal from "./ScrollReveal";
import { leadership } from "@/lib/data";
import { UsersThree, Trophy } from "@phosphor-icons/react";

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-6 py-28 sm:py-36 border-t border-[#e6dfd8] bg-[#f5f0e8]/40">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#cc785c] block mb-2 font-semibold">
              // Responsibility &amp; Service
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413]">
              Leadership &amp; Campus Roles
            </h2>
            <p className="text-sm text-[#595752] mt-2 font-sans">
              Representing students, coordinating technical symposiums, and bridging departmental academic councils.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <ScrollReveal key={item.role} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-xl border border-[#e6dfd8] bg-[#faf9f5] flex flex-col justify-between shadow-[0_2px_8px_rgba(20,20,19,0.02)] hover:border-[#cc785c]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#cc785c] font-semibold uppercase tracking-wider">
                      {idx === 0 ? <Trophy size={16} /> : <UsersThree size={16} />}
                      <span>{item.period}</span>
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#cc785c]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#141413] mb-1">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-[#7a776e] font-medium mb-1">
                    {item.organization}
                  </div>
                  <div className="text-xs font-mono text-[#595752]/70 mb-5">
                    {item.institution}
                  </div>

                  <p className="text-sm text-[#4a4843] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
