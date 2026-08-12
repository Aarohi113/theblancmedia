"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Brain, Zap } from "lucide-react";

export default function AboutTeaser() {
  const pointers = [
    {
      icon: Award,
      title: "Leadership Execution",
      desc: "Fully committed to scaling your brand's market authority and long-term success.",
    },
    {
      icon: Brain,
      title: "Strategic Responsibility",
      desc: "Performance and bottom-line revenue will always be our top creative priority.",
    },
    {
      icon: Zap,
      title: "Agile Flexibility",
      desc: "The agility to pivot rapidly and dominate new high-converting revenue channels.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] text-black overflow-hidden border-y border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          {/* Left Heading (Slides in from Left slowly) */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ x: -90, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.08]"
            >
              Skills & strategy built for a brand <span className="highlight-text-orange">In Demand.</span>
            </motion.h2>
          </div>

          {/* Top Right Description */}
          <div className="lg:col-span-5 pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-neutral-600 text-base sm:text-lg font-medium leading-relaxed"
            >
              We replace agency fluff with revenue engines engineered for performance.
            </motion.p>
          </div>
        </div>

        {/* Main Body Content: Pointers + Image with Top Overlay Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Sequential Pointers sliding in one by one */}
          <div className="lg:col-span-5 flex flex-col">
            {pointers.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col">
                  {/* Single Pointer Block */}
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.0, delay: 0.3 + index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-5"
                  >
                    {/* Circular Icon Badge */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#FE8301] shadow-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-neutral-600 font-medium leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Vertical Dashed Line between pointers */}
                  {index < pointers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.25 }}
                      className="my-3 ml-7 h-10 border-l-2 border-dashed border-neutral-300 origin-top"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Image + Top Rectangle Stat Block */}
          <div className="lg:col-span-7 relative pt-8 lg:pt-0">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              
              {/* TOP ACCENT STAT BLOCK (Slides down from top into exact position over image) */}
              <motion.div
                initial={{ y: -120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-10 sm:-top-12 right-4 sm:right-10 z-20 flex items-center justify-around rounded-2xl bg-[#8bc34a] px-6 py-5 sm:px-10 sm:py-6 text-black shadow-2xl"
              >
                {/* Stat 1 */}
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    10
                  </span>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight max-w-[80px]">
                    Years Experiences
                  </div>
                </div>

                {/* Divider Line */}
                <div className="mx-6 sm:mx-10 h-10 w-[2px] bg-black/20" />

                {/* Stat 2 */}
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    250+
                  </span>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight max-w-[90px]">
                    Successful Campaigns
                  </div>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.2 }}
                className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl bg-neutral-900"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80"
                  alt="Executive Strategy & Skills"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
