"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function ContactCTASection() {
  return (
    <section className="w-full relative overflow-hidden py-20 sm:py-28 lg:py-32 text-white bg-black">
      {/* Background Image: Man in Orange Suit standing out in a Crowd of White Suits */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/unignorable-cta.png"
          alt="Stand out from the crowd - Blanc Media"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark Cinematic Overlay for High Contrast Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75 sm:from-black/80 sm:via-black/50 sm:to-black/70" />
      </div>

      {/* Content Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 mx-auto text-center flex flex-col items-center justify-center gap-6 sm:gap-8">
        
        {/* Main Headline matching user's reference image styling */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-7xl lg:text-8xl font-normal sm:font-semibold tracking-tight text-white leading-tight drop-shadow-xl max-w-6xl"
        >
          <span>Let's make you </span>
          <span className="font-serif italic text-[#FE8301] font-normal sm:font-semibold">unignorable.</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-200 text-base sm:text-xl max-w-2xl font-medium leading-relaxed drop-shadow"
        >
          Transform your brand into an industry market leader with revenue engines engineered for performance.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-2 flex items-center justify-center w-full sm:w-auto"
        >
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-9 py-4 shadow-2xl">
            Start a Conversation
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
