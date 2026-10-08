"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "@phosphor-icons/react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const maskLineVariants = {
    hidden: { y: reduceMotion ? 0 : "110%", opacity: reduceMotion ? 0 : 0.6 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#0C0E0D] text-[#F2F0E9]"
    >
      {/* Clean Premium Atmospheric Glow (Removed harsh grid lines & muddy tint) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft cinematic radial warmth centered behind headline */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-45 blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(204,88,51,0.22) 0%, rgba(46,64,54,0.12) 50%, transparent 75%)",
          }}
        />
        {/* Subtle bottom-right depth warmth */}
        <div
          className="absolute -bottom-20 right-1/4 w-[500px] h-[400px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(204,88,51,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Meta Bar: Location & Status */}
        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(242,240,233,0.15)] bg-[rgba(242,240,233,0.06)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC5833] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CC5833]" />
            </span>
            <span className="text-[11px] tracking-wider uppercase text-[#F2F0E9] font-medium">
              Open to Opportunities
            </span>
          </span>
          <span className="text-[rgba(242,240,233,0.3)]">/</span>
          <span className="text-[#F2F0E9]/70 text-[11px] tracking-wide">
            {personalInfo.location} · ASIET MCA Scholar
          </span>
        </motion.div>

        {/* Editorial Heading with Overflow Mask Reveal */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            variants={maskLineVariants}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F2F0E9] leading-[1.08] max-w-4xl"
          >
            I&apos;m Athul.
          </motion.h1>
        </div>

        {/* Subheading with Staggered Emergence & Animated Terracotta Underline */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            variants={maskLineVariants}
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F2F0E9]/90 max-w-3xl leading-snug"
          >
            A student figuring out where{" "}
            <span className="relative inline-block font-drama italic font-normal text-[#CC5833]">
              technology can take me.
              {!reduceMotion && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.65, duration: 0.7, ease: easeOut }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#CC5833] via-[#CC5833]/70 to-transparent origin-left rounded-full"
                />
              )}
            </span>
          </motion.h2>
        </div>

        {/* Athul's Narrative with Staggered Paragraph Entries */}
        <motion.div
          variants={itemVariants}
          className="font-body text-base sm:text-xl text-[#F2F0E9]/80 leading-relaxed max-w-2xl mb-12 space-y-4 font-normal"
        >
          <motion.p variants={itemVariants}>
            I&apos;m currently pursuing my MCA and exploring{" "}
            <span className="inline-flex flex-wrap gap-1.5 align-baseline">
              <strong className="text-white font-medium px-2 py-0.5 rounded-md bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.1)] inline-block">
                data analysis
              </strong>
              <strong className="text-white font-medium px-2 py-0.5 rounded-md bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.1)] inline-block">
                Python
              </strong>
              <strong className="text-white font-medium px-2 py-0.5 rounded-md bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.1)] inline-block">
                SQL
              </strong>
              <span className="text-[#F2F0E9]/70">and</span>
              <strong className="text-white font-medium px-2 py-0.5 rounded-md bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.1)] inline-block">
                machine learning
              </strong>
            </span>{" "}
            by building projects and learning through practice.
          </motion.p>
          <motion.p variants={itemVariants} className="text-[#F2F0E9]/70">
            I don&apos;t have years of industry experience yet — and I&apos;m okay with that.
          </motion.p>
          <motion.p variants={itemVariants}>
            I&apos;m looking for an opportunity where I can{" "}
            <strong className="text-white font-medium underline decoration-[rgba(204,88,51,0.4)] underline-offset-4">
              learn from experienced people, work on real problems, and build a strong career in technology.
            </strong>
          </motion.p>
        </motion.div>

        {/* Action Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="btn-magnetic btn-magnetic-clay inline-flex items-center gap-2 px-6 py-3.5 font-heading text-xs font-semibold text-white bg-[#CC5833] rounded-full shadow-[0_4px_20px_rgba(204,88,51,0.35)] hover:shadow-[0_6px_28px_rgba(204,88,51,0.5)] transition-all"
          >
            <span>Explore My Projects</span>
            <ArrowDown size={14} weight="bold" />
          </a>

          {/* Let's Connect Button: Smooth clay glass hover, never turns full white */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 font-heading text-xs font-semibold text-[#F2F0E9] border border-[rgba(242,240,233,0.2)] bg-[rgba(242,240,233,0.05)] hover:bg-[rgba(204,88,51,0.15)] hover:border-[#CC5833]/60 hover:text-white rounded-full transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight
              size={14}
              weight="bold"
              className="text-[#F2F0E9]/80 group-hover:text-[#CC5833] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href="resume.pdf"
            download
            className="hover-lift inline-flex items-center gap-1.5 px-4 py-3.5 font-mono text-xs text-[#F2F0E9]/75 hover:text-[#F2F0E9] transition-colors"
          >
            <FileText size={15} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
