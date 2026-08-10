"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          
          {/* LEFT SIDE: Headline + CTAs (45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Category Pill */}
            <Badge text="Editorial Growth & Marketing Agency" className="mb-6" />

            {/* Headline: BUILD. MARKET. GROW. */}
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-black leading-[0.95] uppercase">
              BUILD.<br />
              MARKET.<br />
              <span className="text-[#FE8301]">GROW.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-neutral-600 font-medium max-w-md leading-relaxed">
              We build brands, campaigns, and digital flagships that capture attention and turn scroll into predictable growth.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg">
                Let's Talk
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

          </div>

          {/* RIGHT SIDE: Three Interactive Vertical Service Panels (55% width on desktop) */}
          <div className="lg:col-span-7 w-full">
            
            {/* Desktop / Tablet Container: Hardware-accelerated flex container */}
            <div className="h-[440px] sm:h-[480px] w-full flex gap-3 sm:gap-4 select-none transform-gpu">
              {heroServices.map((service, idx) => {
                const isExpanded = activeIndex === idx;

                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onFocus={() => setActiveIndex(idx)}
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    style={{
                      flexGrow: isExpanded ? 3.5 : 1,
                      flexShrink: 1,
                      flexBasis: "0%"
                    }}
                    className={`relative rounded-sm overflow-hidden border transition-[flex-grow,border-color,box-shadow] duration-700 cubic-bezier(0.16,1,0.3,1) cursor-pointer group flex flex-col justify-between transform-gpu ${
                      isExpanded
                        ? "shadow-xl border-[#FE8301]/70"
                        : "border-neutral-200/90 hover:border-neutral-400"
                    }`}
                  >
                    {/* Background Image with Smooth Scaling */}
                    <Image
                      src={service.image}
                      alt={service.fullTitle}
                      fill
                      className={`object-cover transform-gpu transition-transform duration-700 cubic-bezier(0.16,1,0.3,1) ${
                        isExpanded ? "scale-105" : "scale-100 group-hover:scale-105"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={true}
                    />

                    {/* Gradient Overlay for High Contrast Readability */}
                    <div
                      className={`absolute inset-0 transform-gpu transition-opacity duration-700 cubic-bezier(0.16,1,0.3,1) ${
                        isExpanded
                          ? "bg-gradient-to-t from-black/90 via-black/45 to-black/20 opacity-100"
                          : "bg-gradient-to-t from-black/85 via-black/40 to-black/30 opacity-90"
                      }`}
                    />

                    {/* Top Panel Number & Indicator */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-white">
                      <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#FE8301]">
                        {service.number}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-500 ${
                          isExpanded
                            ? "bg-[#FE8301] opacity-100 scale-100"
                            : "bg-white/10 backdrop-blur-xs opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Panel Content Layer (Persistent DOM elements with smooth CSS opacity transitions) */}
                    <div className="relative z-10 p-4 sm:p-6 text-white w-full overflow-hidden">
                      
                      {/* NON-EXPANDED STATE: Vertical Rotated Typography */}
                      <div
                        className={`absolute bottom-6 left-0 right-0 flex items-center justify-center transition-all duration-500 cubic-bezier(0.16,1,0.3,1) ${
                          isExpanded
                            ? "opacity-0 pointer-events-none translate-y-4"
                            : "opacity-100 pointer-events-auto translate-y-0"
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
                      </div>

                      {/* EXPANDED STATE: Horizontal Title, Description & Action */}
                      <div
                        className={`flex flex-col gap-2.5 transition-all duration-500 cubic-bezier(0.16,1,0.3,1) ${
                          isExpanded
                            ? "opacity-100 pointer-events-auto translate-y-0"
                            : "opacity-0 pointer-events-none translate-y-4"
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
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>

        {/* Quick Micro Proof Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200/80 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>

      </div>
    </section>
  );
}
