"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { agencyData } from "@/data/agencyData";

// Easily replaceable image sources for the top 3 services
const socialMediaImage = "/images/social-card-new.jpg";
const ppcImage = "/images/ppc-card.jpg";
const seoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";

const statsCards = [
  {
    value: "4.8x",
    label: "Average Client ROI",
    tag: "PERFORMANCE",
    bgClass: "bg-gradient-to-br from-[#121212] via-[#1C1C1C] to-[#0A0A0A] border border-neutral-800 shadow-xl shadow-black/40",
  },
  {
    value: "$45M+",
    label: "Client Revenue Scaled",
    tag: "SCALED REVENUE",
    bgClass: "bg-gradient-to-br from-[#FE8301] via-[#FF6A00] to-[#D94800] shadow-xl shadow-orange-500/30",
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    tag: "TRUST & LOYALTY",
    bgClass: "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] border border-slate-700/60 shadow-xl shadow-indigo-950/50",
  },
  {
    value: "120+",
    label: "Brands Elevated Globally",
    tag: "MARKET IMPACT",
    bgClass: "bg-gradient-to-br from-[#064E3B] via-[#022C22] to-[#065F46] border border-emerald-500/40 shadow-xl shadow-emerald-950/50",
  }
];

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
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleFinished = () => setHasLoaded(true);
    if (typeof window !== "undefined") {
      window.addEventListener("preloader-finished", handleFinished);
    }

    // Fallback timer if preloader already finished or is not shown
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 3300);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("preloader-finished", handleFinished);
      }
      clearTimeout(timer);
    };
  }, []);

  const heroServices: ServicePanel[] = [
    {
      id: "social-media",
      number: "01",
      verticalTitle: "SOCIAL MEDIA MANAGEMENT",
      fullTitle: "Social Media Management",
      description: "Build brand authority with high-converting creative, Reels & content strategy.",
      slug: "social-media-management",
      image: socialMediaImage
    },
    {
      id: "ppc",
      number: "02",
      verticalTitle: "PPC & PAID MEDIA",
      fullTitle: "PPC & Paid Ads",
      description: "High-ROI Google, Meta, and LinkedIn ad funnels built to scale revenue.",
      slug: "ppc",
      image: ppcImage
    },
    {
      id: "seo-gmb",
      number: "03",
      verticalTitle: "SEO & LOCAL GMB",
      fullTitle: "SEO / GMB Domination",
      description: "Rank #1 on Google Search and Local Map Pack with topical authority.",
      slug: "seo-gmb",
      image: seoImage
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#FFF8EE] via-[#FAF6F0] to-[#F3EBE0]">
      {/* Visible Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-[#FE8301]/16 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-[#FF9A00]/14 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-200/25 blur-[140px]" />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE: Headline + CTAs (Slide in from Left) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">

            {/* Category Pill */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={hasLoaded ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge text="Editorial Growth & Marketing Agency" className="mb-6" />
            </motion.div>

            {/* Staggered Headline Lines: BUILD. MARKET. GROW. */}
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl  tracking-tight text-black leading-[0.95] uppercase">
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={hasLoaded ? { x: 0, opacity: 1 } : { x: -70, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block font-heading"
              >
                BUILD.
              </motion.span>
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={hasLoaded ? { x: 0, opacity: 1 } : { x: -70, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                MARKET.
              </motion.span>
              <motion.span
                initial={{ x: -70, opacity: 0 }}
                animate={hasLoaded ? { x: 0, opacity: 1 } : { x: -70, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block highlight-text-orange"
              >
                GROW.
              </motion.span>
            </h1>




            {/* CTAs */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={hasLoaded ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-72 min-w-[270px] h-14 sm:h-16 pl-7 pr-1.5 py-1.5 bg-[#FE8301] text-white hover:bg-[#E57400] font-heading font-bold text-base sm:text-lg rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-4 group overflow-hidden"
              >
                <span className="tracking-tight">Let's Talk</span>
                <span className="h-full aspect-square rounded-md bg-black text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-neutral-900">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Three Interactive Vertical Service Panels with Smooth Transform Expansion */}
          <div className="lg:col-span-7 w-full">

            <div className="h-[450px] sm:h-[500px] lg:h-[540px] w-full flex gap-3 sm:gap-4 select-none transform-gpu">
              {heroServices.map((service, idx) => {
                const isExpanded = activeIndex === idx;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ x: 80, opacity: 0 }}
                    animate={{
                      x: hasLoaded ? 0 : 80,
                      opacity: hasLoaded ? 1 : 0,
                      flexGrow: isExpanded ? 3.5 : 1,
                      flexShrink: 1,
                      flexBasis: "0px"
                    }}
                    transition={{
                      layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                      x: { duration: 0.8, delay: 0.35 + idx * 0.15, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.6, delay: 0.35 + idx * 0.15 }
                    }}
                    className="relative rounded-lg overflow-hidden h-full transform-gpu"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onFocus={() => setActiveIndex(idx)}
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      className={`relative w-full h-full block border transition-colors duration-500 cursor-pointer group flex flex-col justify-between overflow-hidden rounded-lg ${isExpanded
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
                            className="font-heading font-medium text-xs sm:text-sm tracking-widest text-white/90 uppercase whitespace-nowrap"
                            style={{
                              writingMode: "vertical-rl",
                              transform: "rotate(180deg)"
                            }}
                          >
                            {service.verticalTitle}
                          </span>
                        </motion.div>

                        {/* EXPANDED STATE: Horizontal Title & Action */}
                        <motion.div
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            y: isExpanded ? 0 : 25
                          }}
                          transition={{ duration: 0.6, delay: isExpanded ? 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
                          className={`flex flex-col gap-3 ${isExpanded ? "pointer-events-auto" : "pointer-events-none"
                            }`}
                        >
                          <h3 className="font-heading font-normal text-xl sm:text-2xl lg:text-3xl text-white leading-tight max-w-[50%]">
                            {service.fullTitle}
                          </h3>
                          <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FE8301] group-hover:underline">
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

        {/* Bunched Deck of Cards -> Unfolds horizontally into place on Scroll */}
        <div className="mt-20 pt-10 border-t border-neutral-200/80 w-full">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FE8301]">
              Proven Growth Metrics
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-black mt-1">
              Engineered For Results
            </h3>
          </div>

          <div className="w-full relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {statsCards.map((stat, idx) => {
                const initialX = (idx - 1.5) * -90;
                const initialRotate = idx === 0 ? -7 : idx === 1 ? 5 : idx === 2 ? -4 : 6;

                return (
                  <motion.div
                    key={idx}
                    initial={{
                      x: initialX,
                      y: 40,
                      rotate: initialRotate,
                      scale: 0.88,
                      opacity: 0.6
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      opacity: 1
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.9,
                      delay: idx * 0.14,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`relative p-6 sm:p-7 rounded-2xl ${stat.bgClass} transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.03] flex flex-col justify-between min-h-[170px] overflow-hidden group cursor-pointer`}
                  >
                    {/* Layered Ambient Glow */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                    <div className="flex items-center justify-between z-10 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90">
                        {stat.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10">
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
