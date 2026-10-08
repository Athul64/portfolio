"use client";

import { ArrowUpRight, CheckCircle, Code, Database, ChartBar, Brain, Sparkle, Compass } from "@phosphor-icons/react";

const fundamentals = [
  {
    name: "Python",
    detail: "Pandas, NumPy, Matplotlib and data processing",
    icon: <Code size={20} className="text-[#CC5833]" />,
  },
  {
    name: "SQL",
    detail: "Querying, joins, aggregation and database fundamentals",
    icon: <Database size={20} className="text-[#CC5833]" />,
  },
  {
    name: "Data Analysis",
    detail: "Cleaning, exploration and finding useful patterns",
    icon: <ChartBar size={20} className="text-[#CC5833]" />,
  },
  {
    name: "Machine Learning",
    detail: "Understanding the basics and applying them to projects",
    icon: <Brain size={20} className="text-[#CC5833]" />,
  },
  {
    name: "Power BI & Excel",
    detail: "Creating dashboards and presenting findings",
    icon: <Sparkle size={20} className="text-[#CC5833]" />,
  },
];

const pillars = [
  "Learn from people with experience.",
  "Work with real data and real problems.",
  "Contribute wherever I can.",
  "Improve a little every day.",
];

const targetRoles = [
  "Data Analytics",
  "Business Intelligence",
  "Data Quality",
  "Entry-Level Analytics & Tech Roles",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:py-36 bg-[#F2F0E9] text-[#1A1A1A] border-t border-[rgba(46,64,54,0.12)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="gsap-reveal max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-3 font-medium">
            // 01 · About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.15]">
            Still learning. Still building.{" "}
            <em className="font-drama italic font-normal text-[#CC5833]">
              Looking for the right place to start.
            </em>
          </h2>
        </div>

        {/* Narrative & Academic Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 items-start">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-6 font-body text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed">
            <p className="gsap-reveal">
              I&apos;m <strong className="text-[#1A1A1A] font-semibold">Athul Krishna</strong>, currently pursuing my{" "}
              <strong className="text-[#1A1A1A] font-semibold">Master of Computer Applications (MCA)</strong> at{" "}
              <span className="text-[#2E4036] font-medium underline decoration-[rgba(46,64,54,0.3)] underline-offset-4">
                Adi Shankara Institute of Engineering & Technology
              </span>.
            </p>

            <p className="gsap-reveal">
              My interest in technology started with building software, but over time I became more interested in what happens behind the data — how information can be cleaned, explored, understood, and used to make better decisions.
            </p>

            <p className="gsap-reveal font-medium text-[#2E4036]">
              That led me toward{" "}
              <span className="text-[#CC5833] font-semibold">
                Python, SQL, data analysis, and machine learning
              </span>.
            </p>

            <p className="gsap-reveal">
              Most of what I know has come from a combination of coursework, online learning, experimenting with datasets, and building projects. Some projects worked well, some didn&apos;t, and quite a few taught me more from debugging them than from writing them.
            </p>

            <div className="gsap-reveal pt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-[#1A1A1A]/70">
              <a
                href="https://github.com/Athul64"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[rgba(46,64,54,0.06)] border border-[rgba(46,64,54,0.14)] text-[#1A1A1A] hover:text-[#CC5833] hover:border-[rgba(204,88,51,0.4)] transition-all"
              >
                <span>github.com/Athul64</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/athulkrishna23/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[rgba(46,64,54,0.06)] border border-[rgba(46,64,54,0.14)] text-[#1A1A1A] hover:text-[#CC5833] hover:border-[rgba(204,88,51,0.4)] transition-all"
              >
                <span>linkedin/athulkrishna23</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4">
            <div className="gsap-reveal p-6 rounded-[2rem] bg-[rgba(46,64,54,0.05)] border border-[rgba(46,64,54,0.12)]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#2E4036] font-medium block mb-3">
                // Education Base
              </span>
              <h4 className="font-heading text-lg font-semibold text-[#1A1A1A]">
                MCA Scholar
              </h4>
              <p className="font-body text-xs text-[#1A1A1A]/70 mt-1">
                Adi Shankara Institute of Engineering &amp; Technology (ASIET)
              </p>
              <div className="mt-4 pt-4 border-t border-[rgba(46,64,54,0.1)] flex items-center gap-2 text-xs font-mono text-[#CC5833]">
                <Compass size={16} />
                <span>Focus: Data &amp; Applied Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* What I'm Working On */}
        <div className="mb-20 pt-12 border-t border-[rgba(46,64,54,0.14)]">
          <div className="gsap-reveal mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
              // Core Competencies
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
              What I&apos;m working on
            </h3>
            <p className="font-body text-sm sm:text-base text-[#1A1A1A]/75 mt-1">
              Currently strengthening my fundamentals across five pillars:
            </p>
          </div>

          <div
            data-gsap-group
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {fundamentals.map((item) => (
              <div
                key={item.name}
                className="gsap-item hover-lift p-5 rounded-2xl bg-[rgba(242,240,233,0.85)] border border-[rgba(46,64,54,0.12)] shadow-[0_2px_12px_rgba(46,64,54,0.03)] flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-[rgba(204,88,51,0.08)]">
                    {item.icon}
                  </div>
                  <h4 className="font-heading font-semibold text-base text-[#1A1A1A]">
                    {item.name}
                  </h4>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Dataset Experience Card */}
          <div className="gsap-reveal p-6 sm:p-8 rounded-[2rem] bg-[rgba(46,64,54,0.04)] border border-[rgba(46,64,54,0.12)]">
            <h4 className="font-heading text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#CC5833]" />
              Dataset &amp; Project Experience
            </h4>
            <p className="font-body text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed">
              I&apos;ve worked on projects involving datasets such as{" "}
              <strong className="text-[#1A1A1A]">Airbnb listings, Walmart sales, Spotify data, Formula 1 results, and student-related datasets</strong>
              , along with software projects such as{" "}
              <strong className="text-[#2E4036] font-semibold">InterfaceGuard</strong>
              , an academic project focused on analysing software architecture and code quality.
            </p>
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="mb-20 pt-12 border-t border-[rgba(46,64,54,0.14)]">
          <div className="gsap-reveal mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
              // Career Trajectory
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
              What I&apos;m looking for
            </h3>
            <p className="font-body text-base text-[#1A1A1A]/80 mt-2 max-w-2xl leading-relaxed">
              I&apos;m at the beginning of my professional career, so I&apos;m not looking for a role where I already need to know everything.
            </p>
            <p className="font-body text-base text-[#1A1A1A]/80 mt-1 font-medium">
              I&apos;m looking for a place where I can:
            </p>
          </div>

          {/* 4 Pillars */}
          <div data-gsap-group className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar}
                className="gsap-item hover-lift flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-[rgba(242,240,233,0.9)] border border-[rgba(46,64,54,0.12)] shadow-[0_2px_8px_rgba(46,64,54,0.04)]"
              >
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(204,88,51,0.1)] text-[#CC5833]">
                  0{idx + 1}
                </span>
                <span className="font-heading font-medium text-sm sm:text-base text-[#1A1A1A]">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          {/* Target Roles */}
          <div className="gsap-reveal p-6 rounded-2xl bg-[rgba(46,64,54,0.06)] border border-[rgba(46,64,54,0.12)]">
            <span className="font-mono text-xs text-[#2E4036] uppercase tracking-wider block mb-3 font-semibold">
              // Target Opportunities
            </span>
            <p className="font-body text-sm sm:text-base text-[#1A1A1A]/85 mb-4">
              I&apos;m particularly interested in starting my career in:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#2E4036] bg-[rgba(242,240,233,0.85)] border border-[rgba(46,64,54,0.16)]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Outside the Projects */}
        <div className="pt-12 border-t border-[rgba(46,64,54,0.14)]">
          <div className="gsap-reveal max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
              // Beyond The Code
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              Outside the projects
            </h3>
            <div className="font-body text-base sm:text-lg text-[#1A1A1A]/85 space-y-4 leading-relaxed">
              <p>
                I enjoy experimenting with new technologies, improving the things I build, and occasionally spending far too much time trying to make a simple interface look right.
              </p>
              <p className="text-[#1A1A1A]/75">
                I&apos;m still figuring out exactly where my career will take me. For now, I&apos;m focused on building a strong foundation and finding the right opportunity to take the next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
