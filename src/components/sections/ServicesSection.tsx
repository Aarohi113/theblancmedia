"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";

export default function ServicesSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside the desktop section container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Desktop horizontal X translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);
  
  // Header opacity transition for desktop
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [1, 1, 1, 0.8]);

  return (
    <section className="bg-[#09090b] text-white">
      {/* ========================================================= */}
      {/* MOBILE VIEW: Fullscreen Sticky Stacked Cards Scroll      */}
      {/* ========================================================= */}
      <div className="block md:hidden px-4 py-12">
        {/* Mobile Header */}
        <div className="mb-8 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FE8301]/30 bg-[#FE8301]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#FE8301] mb-2.5">
            <Sparkles className="h-3 w-3" />
            <span>Our Services</span>
          </div>
          <h2 className="font-heading text-3xl font-normal tracking-tight text-white">
            Engineered for <span className="text-[#FE8301]">Scale.</span>
          </h2>
          <p className="text-neutral-400 text-xs font-medium mt-2 leading-relaxed">
            Swipe down to scroll through our capabilities.
          </p>
        </div>

        {/* Mobile Sticky Stacked Cards */}
        <div className="relative flex flex-col gap-6 pb-12">
          {servicesData.map((svc, index) => (
            <div
              key={svc.id}
              style={{ top: `${90 + index * 12}px` }}
              className="sticky h-[80vh] w-full shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl transition-all duration-300"
            >
              <Link href={`/services/${svc.slug}`} className="relative flex h-full w-full flex-col justify-between p-6 sm:p-8">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${svc.image || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'})`,
                  }}
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                {/* Top Category & Index Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                    {svc.category || `SERVICE ${svc.number}`}
                  </span>
                  <span className="font-heading text-xs font-bold text-neutral-300 border border-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    {svc.number} / 04
                  </span>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 mt-auto">
                  <h3 className="font-heading text-2xl font-normal text-white tracking-tight leading-tight">
                    {svc.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-neutral-300 font-medium leading-relaxed line-clamp-3">
                    {svc.shortDesc}
                  </p>

                  {/* Bottom Action Line */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      Explore Service
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#FE8301] text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Button href="/services" variant="outline" size="sm" className="w-full border-white/20 text-white hover:border-[#FE8301] hover:bg-[#FE8301]">
            View All 4 Services
          </Button>
        </div>
      </div>


      {/* ========================================================= */}
      {/* DESKTOP VIEW: Horizontal Sticky Scroll Slide Animation    */}
      {/* ========================================================= */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-10">
          
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-[#FE8301]/10 blur-[130px]" />

          {/* Top Header Bar */}
          <motion.div 
            style={{ opacity: headerOpacity }}
            className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8"
          >
            <div className="flex items-end justify-between border-b border-white/10 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FE8301]/30 bg-[#FE8301]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#FE8301] mb-2.5">
                  <Sparkles className="h-3 w-3" />
                  <span>Core Services</span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-normal tracking-tight text-white">
                  Engineered for <span className="text-[#FE8301]">Growth.</span>
                </h2>
              </div>

              <Button href="/services" variant="outline" size="sm" className="border-white/20 text-white hover:border-[#FE8301] hover:bg-[#FE8301] hover:text-white transition-all">
                View All Services
              </Button>
            </div>
          </motion.div>

          {/* Horizontal Card Track */}
          <div className="relative z-10 flex items-center my-auto overflow-hidden pl-8 lg:pl-16">
            <motion.div style={{ x }} className="flex gap-8">
              {servicesData.map((svc, index) => (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative h-[480px] lg:h-[520px] w-[480px] lg:w-[540px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 hover:border-[#FE8301]/60"
                >
                  <Link href={`/services/${svc.slug}`} className="relative flex h-full w-full flex-col justify-between p-8 lg:p-9">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${svc.image || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'})`,
                      }}
                    />

                    {/* Sleek Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />

                    {/* Top Bar: Clean Category Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-300">
                        {svc.category || `SERVICE ${svc.number}`}
                      </span>
                      <span className="font-heading text-xs font-bold text-neutral-400 tracking-widest uppercase border border-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {svc.number} / 04
                      </span>
                    </div>

                    {/* Minimalist Title & Description */}
                    <div className="relative z-10 mt-auto pt-8">
                      <h3 className="font-heading text-3xl lg:text-4xl font-normal text-white tracking-tight leading-tight group-hover:text-[#FE8301] transition-colors duration-300">
                        {svc.title}
                      </h3>
                      
                      <p className="mt-2.5 text-sm text-neutral-300 font-medium leading-relaxed line-clamp-2 max-w-md">
                        {svc.shortDesc}
                      </p>

                      {/* Bottom Action Footer */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                          Explore
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white transition-all duration-300 group-hover:border-[#FE8301] group-hover:bg-[#FE8301]">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Minimal Bottom Progress Track */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pb-2">
              <span>01 / SOCIAL MEDIA</span>
              <span>04 / WEB DEV</span>
            </div>
            <div className="h-0.5 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-[#FE8301] origin-left"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
