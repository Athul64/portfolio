"use client";

import { education, leadership, certifications } from "@/lib/data";
import { GraduationCap, Trophy, Certificate, Sparkle } from "@phosphor-icons/react";

/* 1. Geometric SVG Animation Component */
function GeometricSvg() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[rgba(18,21,19,0.4)] border border-[rgba(242,240,233,0.1)]">
      <svg
        viewBox="0 0 200 200"
        className="w-36 h-36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring */}
        <circle
          cx="100"
          cy="100"
          r="84"
          stroke="rgba(242,240,233,0.15)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {/* Clockwise rotating dashed circle */}
        <circle
          cx="100"
          cy="100"
          r="66"
          stroke="#CC5833"
          strokeWidth="1.5"
          strokeDasharray="16 12"
          className="animate-spin-clockwise"
        />
        {/* Counter-clockwise rotating polygon */}
        <polygon
          points="100,38 152,70 152,130 100,162 48,130 48,70"
          stroke="rgba(242,240,233,0.3)"
          strokeWidth="1"
          className="animate-spin-counter"
        />
        {/* Inner rotating square */}
        <rect
          x="75"
          y="75"
          width="50"
          height="50"
          stroke="#CC5833"
          strokeWidth="1.5"
          strokeOpacity="0.75"
          className="animate-spin-clockwise"
        />
        {/* Center node */}
        <circle
          cx="100"
          cy="100"
          r="6"
          fill="#CC5833"
          className="animate-node-pulse"
        />
        {/* Vertex nodes */}
        <circle cx="100" cy="38" r="3" fill="#F2F0E9" />
        <circle cx="152" cy="70" r="3" fill="#F2F0E9" />
        <circle cx="152" cy="130" r="3" fill="#F2F0E9" />
        <circle cx="100" cy="162" r="3" fill="#F2F0E9" />
        <circle cx="48" cy="130" r="3" fill="#F2F0E9" />
        <circle cx="48" cy="70" r="3" fill="#F2F0E9" />
      </svg>
      <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-[#F2F0E9]/50 tracking-wider">
        SYS.GEOMETRIC // 01
      </div>
    </div>
  );
}

/* 2. Scanner SVG Animation Component */
function ScannerSvg() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[rgba(18,21,19,0.4)] border border-[rgba(242,240,233,0.1)]">
      <svg
        viewBox="0 0 240 160"
        className="w-full h-full p-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CC5833" stopOpacity="0" />
            <stop offset="50%" stopColor="#CC5833" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#CC5833" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Matrix Grid */}
        <g className="animate-grid-flicker" stroke="rgba(242,240,233,0.12)" strokeWidth="0.8">
          <line x1="20" y1="30" x2="220" y2="30" />
          <line x1="20" y1="60" x2="220" y2="60" />
          <line x1="20" y1="90" x2="220" y2="90" />
          <line x1="20" y1="120" x2="220" y2="120" />
          <line x1="40" y1="15" x2="40" y2="135" />
          <line x1="80" y1="15" x2="80" y2="135" />
          <line x1="120" y1="15" x2="120" y2="135" />
          <line x1="160" y1="15" x2="160" y2="135" />
          <line x1="200" y1="15" x2="200" y2="135" />
        </g>

        {/* Detected Targets */}
        <rect x="76" y="56" width="8" height="8" fill="#CC5833" fillOpacity="0.8" />
        <rect x="156" y="86" width="8" height="8" fill="#CC5833" fillOpacity="0.6" />
        <rect x="116" y="26" width="8" height="8" fill="#F2F0E9" fillOpacity="0.7" />

        {/* Laser Sweep Line */}
        <g className="animate-scan-line">
          <line
            x1="10"
            y1="80"
            x2="230"
            y2="80"
            stroke="#CC5833"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="10" y="60" width="220" height="40" fill="url(#scanGradient)" />
        </g>
      </svg>
      <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-[#F2F0E9]/50 tracking-wider">
        SYS.SCANNER // 02
      </div>
    </div>
  );
}

/* 3. Waveform SVG Animation Component */
function WaveformSvg() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[rgba(18,21,19,0.4)] border border-[rgba(242,240,233,0.1)]">
      <svg
        viewBox="0 0 240 160"
        className="w-full h-full p-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Equalizer Frequency Bars */}
        <g fill="#CC5833" fillOpacity="0.75">
          <rect x="25" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-1" />
          <rect x="38" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-2" />
          <rect x="51" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-3" />
          <rect x="64" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-4" />
          <rect x="77" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-2" />
          <rect x="90" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-1" />
          <rect x="103" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-3" />
          <rect x="116" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-4" />
          <rect x="129" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-2" />
          <rect x="142" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-1" />
          <rect x="155" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-3" />
          <rect x="168" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-2" />
          <rect x="181" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-4" />
          <rect x="194" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-1" />
          <rect x="207" y="45" width="5" height="70" rx="2.5" className="animate-wave-bar-3" />
        </g>

        {/* Dynamic Continuous Wave Path */}
        <path
          d="M 15 80 Q 45 40, 75 80 T 135 80 T 195 80 T 225 80"
          stroke="#F2F0E9"
          strokeWidth="1.8"
          fill="none"
          className="animate-wave-path"
        />
        <line x1="15" y1="80" x2="225" y2="80" stroke="rgba(242,240,233,0.15)" strokeDasharray="2 3" />
      </svg>
      <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-[#F2F0E9]/50 tracking-wider">
        SYS.WAVEFORM // 03
      </div>
    </div>
  );
}

/* 4. Radar SVG Animation Component */
function RadarSvg() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[rgba(18,21,19,0.4)] border border-[rgba(242,240,233,0.1)]">
      <svg
        viewBox="0 0 200 200"
        className="w-36 h-36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="radarBeam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CC5833" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#CC5833" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#CC5833" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        <circle cx="100" cy="100" r="22" stroke="rgba(242,240,233,0.2)" strokeWidth="1" />
        <circle cx="100" cy="100" r="46" stroke="rgba(242,240,233,0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="rgba(242,240,233,0.1)" strokeWidth="1" />
        <circle cx="100" cy="100" r="88" stroke="rgba(242,240,233,0.2)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Axis Crosshairs */}
        <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(242,240,233,0.15)" strokeWidth="0.8" />
        <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(242,240,233,0.15)" strokeWidth="0.8" />

        {/* Sonar Ping Wave */}
        <circle cx="100" cy="100" r="44" stroke="#CC5833" fill="none" className="animate-radar-ping" />

        {/* 360-degree Rotating Radar Sector */}
        <g className="animate-radar-sweep">
          <path
            d="M 100 100 L 100 12 A 88 88 0 0 1 162 38 Z"
            fill="url(#radarBeam)"
          />
          <line x1="100" y1="100" x2="100" y2="12" stroke="#CC5833" strokeWidth="1.5" />
        </g>

        {/* Identified Ping Points */}
        <circle cx="138" cy="72" r="3.5" fill="#CC5833" />
        <circle cx="70" cy="125" r="2.5" fill="#F2F0E9" />
      </svg>
      <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-[#F2F0E9]/50 tracking-wider">
        SYS.RADAR // 04
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative px-6 py-28 sm:py-36 bg-[#2E4036] text-[#F2F0E9] border-t border-[rgba(242,240,233,0.12)] overflow-hidden"
    >
      {/* Ambient background depth for Moss section */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(204,88,51,0.5) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(242,240,233,0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="gsap-reveal max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
            // 04 · Trajectory &amp; Telemetry
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-[#F2F0E9] leading-tight">
            Academic Milestones &amp;{" "}
            <em className="font-drama italic font-normal text-[#CC5833]">
              Leadership Evolution
            </em>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#F2F0E9]/80 mt-4 leading-relaxed max-w-2xl">
            A chronological progression bridging university academics, departmental leadership, and continuous telemetry across real-world data disciplines.
          </p>
        </div>

        {/* 4 Custom CSS SVG Animations Grid Showcase */}
        <div className="mb-20">
          <div className="gsap-reveal flex items-center justify-between mb-6 pb-3 border-b border-[rgba(242,240,233,0.12)]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2F0E9]/70 flex items-center gap-2">
              <Sparkle size={14} className="text-[#CC5833]" />
              Data Pipeline &amp; Systems Telemetry
            </span>
            <span className="font-mono text-[11px] text-[#CC5833]">4 Active Monitors</span>
          </div>

          <div data-gsap-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="gsap-item hover-lift flex flex-col gap-2.5">
              <GeometricSvg />
              <div className="px-1">
                <p className="font-heading text-xs font-semibold text-[#F2F0E9]">Topology &amp; Models</p>
                <p className="font-mono text-[11px] text-[#F2F0E9]/60">Relational schema design</p>
              </div>
            </div>

            <div className="gsap-item hover-lift flex flex-col gap-2.5">
              <ScannerSvg />
              <div className="px-1">
                <p className="font-heading text-xs font-semibold text-[#F2F0E9]">Query Telemetry</p>
                <p className="font-mono text-[11px] text-[#F2F0E9]/60">SQL index &amp; execution scan</p>
              </div>
            </div>

            <div className="gsap-item hover-lift flex flex-col gap-2.5">
              <WaveformSvg />
              <div className="px-1">
                <p className="font-heading text-xs font-semibold text-[#F2F0E9]">Time-Series Dynamics</p>
                <p className="font-mono text-[11px] text-[#F2F0E9]/60">DAX trend velocity metrics</p>
              </div>
            </div>

            <div className="gsap-item hover-lift flex flex-col gap-2.5">
              <RadarSvg />
              <div className="px-1">
                <p className="font-heading text-xs font-semibold text-[#F2F0E9]">Anomaly Recon</p>
                <p className="font-mono text-[11px] text-[#F2F0E9]/60">Outlier detection in distributions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Dual Timeline Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Academic Track */}
          <div className="space-y-6">
            <div className="gsap-reveal flex items-center gap-2.5 pb-3 border-b border-[rgba(242,240,233,0.14)]">
              <GraduationCap size={20} className="text-[#CC5833]" />
              <h3 className="font-heading text-lg font-semibold text-[#F2F0E9]">
                Academic Path
              </h3>
            </div>

            <div data-gsap-group className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="gsap-item hover-lift p-6 rounded-[2rem] bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.12)] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[rgba(204,88,51,0.2)] text-[#CC5833] border border-[rgba(204,88,51,0.35)]">
                      {item.period}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[rgba(242,240,233,0.08)] text-[#F2F0E9]/80 border border-[rgba(242,240,233,0.1)]">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-[#F2F0E9]">
                    {item.degree}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#F2F0E9]/75 mt-1.5 leading-relaxed">
                    {item.school}
                  </p>
                </div>
              ))}

              {/* Certifications Badge Cloud */}
              <div className="gsap-item p-6 rounded-[2rem] bg-[rgba(242,240,233,0.04)] border border-[rgba(242,240,233,0.08)]">
                <div className="flex items-center gap-2 mb-4">
                  <Certificate size={16} className="text-[#CC5833]" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#F2F0E9]">
                    Key Professional Accreditations
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <span
                      key={c.name}
                      className="hover-lift font-mono text-[11px] px-3 py-1 rounded-full bg-[rgba(242,240,233,0.07)] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9]/90"
                    >
                      {c.name} · <span className="text-[#CC5833]">{c.issuer}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Leadership Track */}
          <div className="space-y-6">
            <div className="gsap-reveal flex items-center gap-2.5 pb-3 border-b border-[rgba(242,240,233,0.14)]">
              <Trophy size={20} className="text-[#CC5833]" />
              <h3 className="font-heading text-lg font-semibold text-[#F2F0E9]">
                Leadership &amp; Governance
              </h3>
            </div>

            <div data-gsap-group className="space-y-4">
              {leadership.map((item) => (
                <div
                  key={item.role}
                  className="gsap-item hover-lift p-6 rounded-[2rem] bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.12)] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[rgba(204,88,51,0.2)] text-[#CC5833] border border-[rgba(204,88,51,0.35)]">
                      {item.period}
                    </span>
                    <span className="font-heading text-xs font-medium text-[#F2F0E9]/60">
                      Elected Office
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-[#F2F0E9]">
                    {item.role}
                  </h4>
                  <p className="font-mono text-xs text-[#CC5833] mt-0.5">
                    {item.organization}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#F2F0E9]/75 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
