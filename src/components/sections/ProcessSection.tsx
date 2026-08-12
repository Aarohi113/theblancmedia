"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { agencyData } from "@/data/agencyData";

export default function ProcessSection() {
  const stepIcons = [
    "/discover.png",
    "/strategy-development.png",
    "/create.png",
    "/launch.png",
    "/grow.png",
  ];

  const cardStyles = [
    {
      bg: "bg-[#FE8301] text-white border border-orange-400/40 shadow-[12px_16px_32px_rgba(0,0,0,0.28)]",
      numberColor: "text-white",
      subtitleColor: "text-white/85",
      peekRotate: 0,
      peekX: 0,
      peekY: 0,
      baseZIndex: 50,
    },
    {
      bg: "bg-[#FE8301] text-white border border-orange-400/40 shadow-[12px_16px_32px_rgba(0,0,0,0.28)]",
      numberColor: "text-white",
      subtitleColor: "text-white/85",
      peekRotate: 5,
      peekX: 20,
      peekY: -14,
      baseZIndex: 40,
    },
    {
      bg: "bg-[#FE8301] text-white border border-orange-400/40 shadow-[12px_16px_32px_rgba(0,0,0,0.28)]",
      numberColor: "text-white",
      subtitleColor: "text-white/85",
      peekRotate: -5,
      peekX: -22,
      peekY: -28,
      baseZIndex: 30,
    },
    {
      bg: "bg-[#FE8301] text-white border border-orange-400/40 shadow-[12px_16px_32px_rgba(0,0,0,0.28)]",
      numberColor: "text-white",
      subtitleColor: "text-white/85",
      peekRotate: 7,
      peekX: 34,
      peekY: -42,
      baseZIndex: 20,
    },
    {
      bg: "bg-[#FE8301] text-white border border-orange-400/40 shadow-[12px_16px_32px_rgba(0,0,0,0.28)]",
      numberColor: "text-white",
      subtitleColor: "text-white/85",
      peekRotate: -7,
      peekX: -36,
      peekY: -56,
      baseZIndex: 10,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] text-black border-b border-neutral-200/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#FE8301]/6 rounded-full blur-[160px]" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <SectionHeader
          badge="Our Methodology"
          title="The 5-Step Growth Engine."
          highlightedWord="5-Step Growth Engine."
          description="How we turn brand strategy into predictable revenue and market momentum."
          align="center"
          className="mx-auto mb-12"
        />

        {/* Desktop View: Unfolds horizontally into 5-card palindrome symmetric arch row */}
        <div className="hidden lg:block w-full max-w-[1800px] mx-auto py-6">
          <div className="grid grid-cols-5 gap-6 w-full relative items-center">
            {agencyData.processSteps.map((step, idx) => {
              const style = cardStyles[idx % cardStyles.length];

              // Offset calculation for card `idx` to stack over Card 0 on the left side initially
              const stackedXOffset = `calc(${idx * -100}% - ${idx * 24}px + ${style.peekX}px)`;

              // Palindrome Symmetric Structure Values (Card 2 / Step 03 is the tallest peak)
              const palindromeScales = [0.92, 1.0, 1.08, 1.0, 0.92];
              const palindromeYOffsets = [12, 0, -12, 0, 12];
              const targetScale = palindromeScales[idx];
              const targetY = palindromeYOffsets[idx];

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    x: idx === 0 ? "0px" : stackedXOffset,
                    y: idx === 0 ? `${targetY}px` : `${style.peekY}px`,
                    rotate: idx === 0 ? 0 : style.peekRotate,
                    scale: idx === 0 ? targetScale : 0.94 - idx * 0.02,
                    opacity: idx === 0 ? 1 : 0.7,
                  }}
                  whileInView={{
                    x: "0px",
                    y: `${targetY}px`,
                    rotate: 0,
                    scale: targetScale,
                    opacity: 1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.85,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ zIndex: idx === 2 ? 60 : style.baseZIndex }}
                  className={`relative p-6 sm:p-7 rounded-2xl ${style.bg} aspect-square w-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl hover:-translate-y-3 group cursor-pointer overflow-hidden transform-gpu`}
                >
                  {/* Decorative Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  {/* TOP: Extra-Large Bold Number & Colored Step Icon without background */}
                  <div className="flex items-start justify-between z-10">
                    <span className={`font-heading font-extrabold text-5xl sm:text-6xl tracking-tight ${style.numberColor}`}>
                      {step.number}
                    </span>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={stepIcons[idx]}
                        alt={step.title}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* MIDDLE & BOTTOM: Title & Subtitle */}
                  <div className="z-10 mt-auto pt-6 flex flex-col gap-2">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {step.title}
                    </h3>

                    <span className={`text-xs font-bold uppercase tracking-widest ${style.subtitleColor}`}>
                      {step.subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Starts stacked at top, unfolds vertically downwards into 1 column of capsule cards on single scroll */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="block lg:hidden w-full max-w-md mx-auto"
        >
          <div className="flex flex-col gap-4 w-full relative">
            {agencyData.processSteps.map((step, idx) => {
              const style = cardStyles[idx % cardStyles.length];
              const stackedYOffset = `calc(${idx * -100}% - ${idx * 16}px + ${style.peekY}px)`;

              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: {
                      x: idx === 0 ? "0px" : `${style.peekX}px`,
                      y: idx === 0 ? "0px" : stackedYOffset,
                      rotate: idx === 0 ? 0 : style.peekRotate,
                      scale: idx === 0 ? 1 : 0.96 - idx * 0.015,
                      opacity: idx === 0 ? 1 : 0.7,
                    },
                    show: {
                      x: "0px",
                      y: "0px",
                      rotate: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 0.75,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  style={{ zIndex: style.baseZIndex }}
                  className={`relative px-6 py-4.5 rounded-full ${style.bg} w-full flex items-center justify-between shadow-xl min-h-[76px] transition-shadow duration-300 hover:shadow-2xl group cursor-pointer overflow-hidden transform-gpu border border-orange-400/40`}
                >
                  {/* LEFT: Step Number & Title */}
                  <div className="flex items-center gap-4 z-10">
                    <span className="font-heading font-extrabold text-3xl tracking-tight text-white">
                      {step.number}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-heading font-extrabold text-base text-white tracking-tight leading-tight">
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT: Icon Badge */}
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center z-10">
                    <Image
                      src={stepIcons[idx]}
                      alt={step.title}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
