"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mascot from "./Mascot";

interface SparkleParticle {
  id: number;
  icon: string;
  x: number;
}

export default function KnightCompanion() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const isDraggingRef = useRef(false);

  // Trigger floating sparkle effect on tap/click
  const triggerSparkle = () => {
    const icons = ["⚔️", "✨", "🛡️", "💛"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newSparkle: SparkleParticle = {
      id: Date.now() + Math.random(),
      icon: randomIcon,
      x: (Math.random() - 0.5) * 40,
    };
    setSparkles((prev) => [...prev.slice(-3), newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 900);
  };

  const handleInteraction = () => {
    if (isDraggingRef.current) return;
    triggerSparkle();
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2400);
  };

  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0, y: 35 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.3 }}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => {
        isDraggingRef.current = true;
        setIsDragging(true);
        setShowTooltip(false);
      }}
      onDragEnd={() => {
        setIsDragging(false);
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 120);
      }}
      whileDrag={{ scale: 1.12, rotate: 4, cursor: "grabbing" }}
      className="fixed z-50 select-none pointer-events-auto touch-none
        bottom-5 right-4 sm:bottom-8 sm:right-8
        md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-[max(2rem,calc(50vw-512px-175px))]"
      onMouseEnter={() => {
        if (!isDraggingRef.current) setShowTooltip(true);
      }}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <motion.div
        animate={
          isDragging
            ? {}
            : {
                y: [-5, 5, -5],
                rotate: [-1.2, 1.2, -1.2],
              }
        }
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center group cursor-grab active:cursor-grabbing"
      >
        {/* Breathing ambient back-glow pulse */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 m-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full blur-2xl pointer-events-none"
          style={{ background: "#CC5833" }}
        />

        {/* Floating Sparkles when Booped */}
        <div className="absolute -top-6 inset-x-0 flex justify-center pointer-events-none z-30">
          <AnimatePresence>
            {sparkles.map((sparkle) => (
              <motion.span
                key={sparkle.id}
                initial={{ opacity: 1, y: 0, x: sparkle.x, scale: 0.7 }}
                animate={{ opacity: 0, y: -45, scale: 1.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="absolute text-lg sm:text-xl drop-shadow-md select-none"
              >
                {sparkle.icon}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {/* Floating speech balloon on tap/hover */}
        <AnimatePresence>
          {showTooltip && !isDragging && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.92 }}
              transition={{ duration: 0.16 }}
              className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#181C19]/95 border border-[rgba(242,240,233,0.2)] shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md whitespace-nowrap pointer-events-none z-20"
            >
              <span className="font-mono text-[11px] sm:text-xs text-[#F2F0E9] tracking-wide">
                ⚔️ Drag to move · Tap to boop
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-[#181C19]/95 border-t-[5px] border-x-transparent border-x-[5px] border-b-0" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Free-floating Knight with hover pop */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.93 }}
          className="relative transition-transform duration-150"
        >
          <Mascot
            directions="/mascots/knight-directions.webp"
            reactions="/mascots/knight-reactions.webp"
            label="Knight companion"
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[165px] md:h-[165px] filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.75)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
