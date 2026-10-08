"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

function ProjectCard({
  i,
  title,
  subtitle,
  description,
  tech,
  image,
  link,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-24 flex items-center justify-center w-full px-2 sm:px-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-4vh + ${i * 36 + 80}px)`,
        }}
        className="relative -top-1/4 flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-[2rem] border border-[rgba(242,240,233,0.14)] bg-[rgba(26,26,26,0.94)] backdrop-blur-xl shadow-[0_16px_48px_rgba(26,26,26,0.22)] text-[#F2F0E9]"
      >
        {/* Project Visual Showcase */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121513]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {/* Opacity layering using rgba() */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.95)] via-[rgba(26,26,26,0.35)] to-transparent" />
          
          {/* Project index indicator */}
          <div className="absolute top-5 left-5 rounded-full bg-[rgba(26,26,26,0.85)] backdrop-blur-md border border-[rgba(242,240,233,0.16)] px-3 py-1 text-[11px] font-mono font-medium tracking-wider text-[#F2F0E9]">
            INDEX · {String(i + 1).padStart(2, "0")}
          </div>

          {/* Tech pills on media */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[rgba(46,64,54,0.7)] backdrop-blur-md border border-[rgba(242,240,233,0.14)] px-3 py-0.5 text-[11px] font-mono font-normal text-[#F2F0E9]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="p-7 sm:p-9">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-[#F2F0E9]">
                {title}
              </h3>
              <p className="font-mono text-xs text-[#CC5833] tracking-wide mt-1">
                {subtitle}
              </p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-magnetic-clay shrink-0 inline-flex items-center gap-1.5 rounded-full border border-[rgba(242,240,233,0.2)] bg-[rgba(242,240,233,0.06)] px-4 py-2 font-mono text-xs font-medium text-[#F2F0E9] hover:text-white transition-all"
            >
              <span>Explore</span>
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </div>
          <p className="font-body text-sm sm:text-base leading-relaxed text-[#F2F0E9]/80 mt-3">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative px-6 py-28 sm:py-36 bg-[#F2F0E9] text-[#1A1A1A] border-t border-[rgba(46,64,54,0.12)]"
    >
      <div className="relative mx-auto max-w-5xl mb-16">
        <div className="gsap-reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] block mb-2 font-medium">
              // 03 · Selected Deployments
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
              Featured{" "}
              <em className="font-drama italic font-normal text-[#CC5833]">
                Analytics Work
              </em>
            </h2>
          </div>
          <span className="font-mono text-xs text-[#2E4036] px-3.5 py-1.5 rounded-full border border-[rgba(46,64,54,0.18)] bg-[rgba(46,64,54,0.06)]">
            {String(projects.length).padStart(2, "0")} Case Studies
          </span>
        </div>
      </div>

      {/* Sticky card stack */}
      <div
        ref={container}
        className="relative mx-auto flex max-w-3xl flex-col items-center justify-center pb-[50vh] pt-[6vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.88,
            1 - (projects.length - i - 1) * 0.05
          );
          return (
            <ProjectCard
              key={`project_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="relative mx-auto max-w-5xl mt-8">
        <div className="gsap-reveal flex justify-center">
          <a
            href="https://github.com/Athul64"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-magnetic-moss inline-flex items-center gap-2.5 rounded-full border border-[rgba(46,64,54,0.22)] bg-[rgba(46,64,54,0.08)] px-8 py-3.5 font-heading text-xs font-medium text-[#2E4036] hover:text-white transition-all shadow-sm"
          >
            <GithubLogo size={16} weight="bold" />
            <span>View Complete GitHub Archive</span>
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
