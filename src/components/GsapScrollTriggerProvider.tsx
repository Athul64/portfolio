"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapScrollTriggerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Single reveal items
      const reveals = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Staggered groups (e.g. grids of cards, tags, stats)
      const groups = gsap.utils.toArray<HTMLElement>("[data-gsap-group]");
      groups.forEach((group) => {
        const items = group.querySelectorAll(".gsap-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: group,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, containerRef);

    // Refresh ScrollTrigger after fonts and layout settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef} className="contents">{children}</div>;
}
