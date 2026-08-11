"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Sequence timer: 3.2s total before triggering exit slide-up
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("preloader-finished"));
      }
    }, 3200);

    const cleanupTimer = setTimeout(() => {
      setShowPreloader(false);
      document.body.style.overflow = "unset";
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!showPreloader) return null;

  const titleText = "THE BLANC MEDIA";
  const keywords = ["BUILD", "CREATE", "SCALE"];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#FE8301] via-[#e57200] to-[#c95900] text-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Shimmer */}
          <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            
            {/* 1. Main Title: "THE BLANC MEDIA" with Staggered Letter Jump Animation */}
            <div className="flex flex-wrap justify-center overflow-hidden py-2">
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.2, 1, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.08,
                  }}
                  className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold italic tracking-widest text-white drop-shadow-lg"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.4em" : "auto" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* 2. Subordinate Marketing Keywords: Sliding in from the Left one by one */}
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6 font-mono text-xs sm:text-sm tracking-[0.3em] text-white/90">
              {keywords.map((word, idx) => (
                <div key={word} className="flex items-center gap-3 sm:gap-6">
                  <motion.span
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 1.2 + idx * 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-bold border border-white/30 bg-white/15 px-3 py-1 rounded-md backdrop-blur-md shadow-sm uppercase italic"
                  >
                    {word}
                  </motion.span>

                  {idx < keywords.length - 1 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.6 }}
                      transition={{ delay: 1.4 + idx * 0.35 }}
                      className="text-white/60 text-lg"
                    >
                      •
                    </motion.span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
