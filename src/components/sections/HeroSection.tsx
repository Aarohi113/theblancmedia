"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { agencyData } from "@/data/agencyData";

// Easily replaceable image sources for the top 3 services
const socialMediaImage = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80";
const ppcImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80";
const seoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

interface ServicePanel {
  id: string;
  number: string;
  verticalTitle: string;
  fullTitle: string;
  description: string;
  slug: string;
  image: string;
}

export default function HeroSection() {
  // Default expanded panel is index 0 (Social Media Management)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const heroServices: ServicePanel[] = [
    {
      id: "social-media",
      number: "01",
      verticalTitle: "SOCIAL MEDIA MANAGEMENT",
      fullTitle: "Social Media Management",
      description: "Build a commanding brand presence with strategic content, creative direction, and high-frequency engagement engines.",
      slug: "social-media-management",
      image: socialMediaImage
    },
    {
      id: "ppc",
      number: "02",
      verticalTitle: "PPC & PAID MEDIA",
      fullTitle: "PPC & Paid Ads",
      description: "Data-driven Google, Meta, and LinkedIn ad funnels engineered to scale high-intent revenue, not just vanity clicks.",
      slug: "ppc",
      image: ppcImage
    },
    {
      id: "seo-gmb",
      number: "03",
      verticalTitle: "SEO & LOCAL GMB",
      fullTitle: "SEO / GMB Domination",
      description: "Command organic search rankings, build topical authority, and lock in the #1 Google Local Map Pack position.",
      slug: "seo-gmb",
      image: seoImage
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE: Headline + CTAs (Slide in from Left) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">

            {/* Category Pill */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge text="Editorial Growth & Marketing Agency" className="mb-6" />
            </motion.div>

            {/* Staggered Headline Lines: BUILD. MARKET. GROW. */}
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl  tracking-tight text-black leading-[0.95] uppercase">
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                BUILD.
              </motion.span>
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                MARKET.
              </motion.span>
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#FE8301]"
              >
                GROW.
              </motion.span>
            </h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-subheading text-base sm:text-lg text-neutral-600 font-normal max-w-md leading-relaxed"
            >
              We build brands, campaigns, and digital flagships that capture attention and turn scroll into predictable growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button href="/contact" variant="primary" size="lg">
                Let's Talk
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Three Interactive Vertical Service Panels with Smooth Transform Expansion */}
          <div className="lg:col-span-7 w-full">

            <div className="h-[440px] sm:h-[480px] w-full flex gap-3 sm:gap-4 select-none transform-gpu">
              {heroServices.map((service, idx) => {
                const isExpanded = activeIndex === idx;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ x: 80, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      flexGrow: isExpanded ? 3.5 : 1,
                      flexShrink: 1,
                      flexBasis: "0%"
                    }}
                    transition={{
                      layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                      x: { duration: 0.8, delay: 0.35 + idx * 0.15, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.6, delay: 0.35 + idx * 0.15 }
                    }}
                    className="relative rounded-sm overflow-hidden h-full transform-gpu"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onFocus={() => setActiveIndex(idx)}
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      className={`relative w-full h-full block border transition-colors duration-500 cursor-pointer group flex flex-col justify-between overflow-hidden rounded-sm ${isExpanded
                          ? "shadow-xl border-[#FE8301]/80"
                          : "border-neutral-200/90 hover:border-neutral-400"
                        }`}
                    >
                      {/* Background Image with Cinematic Slow Zoom Transformation */}
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{
                          scale: isExpanded ? 1.08 : 1.0
                        }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Image
                          src={service.image}
                          alt={service.fullTitle}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority={true}
                        />
                      </motion.div>

                      {/* Dynamic Dark Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          opacity: isExpanded ? 1 : 0.85
                        }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          background: isExpanded
                            ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.2) 100%)"
                            : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)"
                        }}
                      />

                      {/* Top Panel Number & Indicator Badge */}
                      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-white">
                        <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#FE8301]">
                          {service.number}
                        </span>
                        <motion.div
                          animate={{
                            scale: isExpanded ? 1 : 0.8,
                            opacity: isExpanded ? 1 : 0.4,
                            backgroundColor: isExpanded ? "#FE8301" : "rgba(255,255,255,0.15)"
                          }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white backdrop-blur-xs"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Bottom Panel Content Layer (Smooth Unfolding Text Transition) */}
                      <div className="relative z-10 p-4 sm:p-6 text-white w-full overflow-hidden">

                        {/* NON-EXPANDED STATE: Vertical Rotated Typography */}
                        <motion.div
                          animate={{
                            opacity: isExpanded ? 0 : 1,
                            y: isExpanded ? 20 : 0
                          }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute bottom-6 left-0 right-0 flex items-center justify-center ${isExpanded ? "pointer-events-none" : "pointer-events-auto"
                            }`}
                        >
                          <span
                            className="font-heading font-extrabold text-xs sm:text-sm tracking-widest text-white/90 uppercase whitespace-nowrap"
                            style={{
                              writingMode: "vertical-rl",
                              transform: "rotate(180deg)"
                            }}
                          >
                            {service.verticalTitle}
                          </span>
                        </motion.div>

                        {/* EXPANDED STATE: Horizontal Title, Description & Action */}
                        <motion.div
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            y: isExpanded ? 0 : 25
                          }}
                          transition={{ duration: 0.6, delay: isExpanded ? 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
                          className={`flex flex-col gap-2.5 ${isExpanded ? "pointer-events-auto" : "pointer-events-none"
                            }`}
                        >
                          <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                            {service.fullTitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-relaxed max-w-sm line-clamp-3">
                            {service.description}
                          </p>
                          <div className="pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FE8301] group-hover:underline">
                            <span>Explore Service</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </motion.div>

                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Quick Micro Proof Bar (Slide in from Bottom) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-neutral-200/80 w-full grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {agencyData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-black">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
