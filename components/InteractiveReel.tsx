"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const capabilities = [
  {
    eyebrow: "01 / ARCHITECT",
    title: "Software Architecture",
    description: "Clear, resilient digital foundations that turn complex workflows into simple, useful tools.",
    tags: ["Web apps", "Automation", "Data systems"],
    accent: "#287BFF",
    glow: "rgba(40,123,255,.28)",
    metric: "Systems that scale",
  },
  {
    eyebrow: "02 / CONNECT",
    title: "Hardware Integration",
    description: "The right devices, networks and infrastructure working together without unnecessary friction.",
    tags: ["Infrastructure", "Networking", "Deployment"],
    accent: "#19D3FF",
    glow: "rgba(25,211,255,.24)",
    metric: "Built for the real world",
  },
  {
    eyebrow: "03 / ALIGN",
    title: "All-Rounder Synergy",
    description: "One connected partner across planning, implementation and the support that keeps momentum alive.",
    tags: ["One partner", "Support", "Roadmaps"],
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,.24)",
    metric: "Technology, together",
  },
] as const;

const AUTOPLAY_DELAY = 6200;

export function InteractiveReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const active = capabilities[activeIndex];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % capabilities.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const selectSlide = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  const moveSlide = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + capabilities.length) % capabilities.length);
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-140"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="absolute -inset-5 rounded-[2.5rem] opacity-50 blur-3xl" style={{ background: active.glow }} />
      <div className="gradient-border noise relative overflow-hidden rounded-[1.75rem] border border-[#26303D] bg-[#151B26] shadow-[0_28px_90px_rgba(0,0,0,.28)]">
        <div className="flex gap-1.5 px-5 pt-5" role="tablist" aria-label="Capabilities">
          {capabilities.map((capability, index) => (
            <button
              key={capability.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Show ${capability.title}`}
              onClick={() => selectSlide(index)}
              className="group h-8 flex-1 py-2"
            >
              <span className="block h-1 overflow-hidden rounded-full bg-[#26303D]">
                <motion.span
                  className="block h-full origin-left rounded-full"
                  animate={{ width: activeIndex === index ? "100%" : index < activeIndex ? "100%" : "0%" }}
                  transition={{ duration: activeIndex === index ? AUTOPLAY_DELAY / 1000 : 0.25, ease: "linear" }}
                  style={{ backgroundColor: capability.accent }}
                />
              </span>
            </button>
          ))}
        </div>

        <div className="relative min-h-97.5 px-6 pb-6 pt-8 sm:min-h-102.5 sm:px-9 sm:pb-8 sm:pt-10">
          <div className="pointer-events-none absolute right-7 top-10 text-[100px] font-black leading-none -tracking-widest text-white/2.5 sm:right-10 sm:text-[132px]">0{activeIndex + 1}</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -26 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-82.5 flex-col"
            >
              <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[.2em]" style={{ color: active.accent }}>
                <Sparkles size={13} />
                {active.eyebrow}
              </div>
              <h2 className="mt-8 max-w-sm text-4xl font-extrabold leading-[.98] tracking-[-.055em] text-[#FFF7F1] sm:text-5xl">{active.title}</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#9AA4B2] sm:text-base">{active.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1.5 text-[11px] font-bold text-[#E6C8CC]" style={{ borderColor: `${active.accent}55`, backgroundColor: `${active.accent}12` }}>{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex items-end justify-between border-t border-[#26303D] pt-5">
                <div><div className="text-[9px] font-extrabold tracking-[.18em] text-[#697585]">THE OUTCOME</div><div className="mt-1 text-sm font-bold text-[#FFF7F1]">{active.metric}</div></div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous capability" className="grid size-10 place-items-center rounded-full border border-[#26303D] text-[#9AA4B2] transition hover:border-white/30 hover:text-white"><ArrowLeft size={16} /></button>
                  <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? "Pause capability reel" : "Play capability reel"} className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/6 text-white transition hover:bg-white/12">{isPlaying ? <Pause size={15} /> : <Play size={15} />}</button>
                  <button type="button" onClick={() => moveSlide(1)} aria-label="Next capability" className="grid size-10 place-items-center rounded-full border border-[#26303D] text-[#9AA4B2] transition hover:border-white/30 hover:text-white"><ArrowRight size={16} /></button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
