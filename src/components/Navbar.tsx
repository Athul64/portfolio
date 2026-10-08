"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUpRight, FileText } from "@phosphor-icons/react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none"
    >
      <div
        className={`max-w-5xl mx-auto pointer-events-auto transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "bg-[rgba(26,26,26,0.85)] backdrop-blur-md border border-[rgba(242,240,233,0.14)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "bg-[rgba(46,64,54,0.45)] backdrop-blur-sm border border-[rgba(242,240,233,0.12)]"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC5833] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CC5833]" />
          </span>
          <span className="font-heading text-sm sm:text-base font-semibold tracking-tight text-[#F2F0E9] group-hover:text-white transition-colors">
            Athul Krishna
          </span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-wider text-[#F2F0E9]/60 px-1.5 py-0.5 rounded-full bg-[rgba(242,240,233,0.08)] border border-[rgba(242,240,233,0.1)] uppercase">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav Items with Sliding Pill Indicator */}
        <nav
          className="hidden md:flex items-center gap-6"
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className="flex items-center gap-1 font-body text-xs text-[#F2F0E9]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className="relative py-1.5 px-3 rounded-full text-[#F2F0E9]/75 hover:text-[#F2F0E9] transition-colors"
              >
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full bg-[rgba(242,240,233,0.12)] -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 pl-2 border-l border-[rgba(242,240,233,0.15)]">
            <a
              href="resume.pdf"
              download
              className="hover-lift inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] text-[#F2F0E9] bg-[rgba(242,240,233,0.06)] hover:bg-[rgba(242,240,233,0.12)] border border-[rgba(242,240,233,0.14)] rounded-full transition-colors active:scale-95"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="btn-magnetic btn-magnetic-clay inline-flex items-center gap-1.5 px-4 py-1.5 font-heading text-xs font-medium text-white bg-[#CC5833] rounded-full shadow-[0_2px_12px_rgba(204,88,51,0.35)] transition-all hover:shadow-[0_4px_16px_rgba(204,88,51,0.5)] active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F2F0E9]/90 hover:text-white focus:outline-none rounded-full bg-[rgba(242,240,233,0.08)] active:scale-90 transition-transform"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {/* Mobile Drawer with Staggered Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden pointer-events-auto mt-2 max-w-5xl mx-auto bg-[rgba(26,26,26,0.95)] backdrop-blur-xl border border-[rgba(242,240,233,0.14)] rounded-2xl px-6 py-6 shadow-2xl text-[#F2F0E9]"
          >
            <div className="flex flex-col gap-3 font-body text-sm">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover-lift text-[#F2F0E9]/85 hover:text-[#F2F0E9] py-1.5 border-b border-[rgba(242,240,233,0.08)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5 font-mono text-xs">
                <a
                  href="resume.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover-lift inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[rgba(242,240,233,0.16)] text-[#F2F0E9] bg-[rgba(242,240,233,0.06)] active:scale-98"
                >
                  <FileText size={15} />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-magnetic btn-magnetic-clay inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#CC5833] text-white font-heading font-medium active:scale-98"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
