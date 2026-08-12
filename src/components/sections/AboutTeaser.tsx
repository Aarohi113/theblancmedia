"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, Brain, Zap } from "lucide-react";

// Live Number Counter Component for Stat Block
function LiveCounter({ to, suffix = "", duration = 1.6, delayMs = 700 }: { to: number; suffix?: string; duration?: number; delayMs?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let isMounted = true;
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Smooth easeOutCubic curve
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * to);
        if (isMounted) {
          setCount(currentCount);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(to);
          }
        }
      };
      window.requestAnimationFrame(step);
    }, delayMs);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isInView, to, duration, delayMs]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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
    <section className="py-14 sm:py-16 bg-[#FAF9F6] text-black overflow-hidden border-y border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Top Header: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Left Heading */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]"
            >
              Skills & strategy built for a brand <span className="highlight-text-orange">In Demand.</span>
            </motion.h2>
          </div>

          {/* Top Right Description */}
          <div className="lg:col-span-5 pt-1 sm:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-neutral-600 text-base sm:text-lg font-medium leading-relaxed"
            >
              We replace agency fluff with revenue engines engineered for performance.
            </motion.p>
          </div>
        </div>

        {/* Main Body Content: Pointers + Image with Top Overlay Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE: Sequential Pointers sliding in one by one */}
          <div className="lg:col-span-5 flex flex-col">
            {pointers.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col">
                  {/* Single Pointer Block */}
                  <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4 sm:gap-5"
                  >
                    {/* Circular Icon Badge */}
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#FE8301] shadow-sm">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="font-heading text-lg sm:text-2xl font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Vertical Dashed Line between pointers */}
                  {index < pointers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                      className="my-2.5 sm:my-3 ml-6 sm:ml-7 h-8 sm:h-10 border-l-2 border-dashed border-neutral-300 origin-top"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Image FIRST, then Stat Block SECOND */}
          <div className="lg:col-span-7 relative pt-10 sm:pt-14 lg:pt-14">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">

              {/* STEP 1: Main Image Container (Animates FIRST) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative h-[320px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-2xl bg-neutral-900 z-10"
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

              {/* STEP 2: TOP ACCENT STAT BLOCK (Animates SECOND after image - slides down from top into position) */}
              <motion.div
                initial={{ y: -140, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-10 sm:-top-16 right-4 sm:right-10 left-4 sm:left-auto z-20 flex items-center justify-between sm:justify-around rounded-xl sm:rounded-2xl bg-[#8bc34a] px-4 py-3.5 sm:px-10 sm:py-6 text-black shadow-2xl"
              >
                {/* Stat 1 with Live Counter */}
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    <LiveCounter to={3} delayMs={800} />
                  </span>
                  <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider leading-tight max-w-[70px] sm:max-w-[80px]">
                    Years Experiences
                  </div>
                </div>

                {/* Divider Line */}
                <div className="mx-3 sm:mx-10 h-8 sm:h-10 w-[2px] bg-black/20" />

                {/* Stat 2 with Live Counter */}
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    <LiveCounter to={100} suffix="+" delayMs={800} />
                  </span>
                  <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider leading-tight max-w-[80px] sm:max-w-[90px]">
                    Successful Campaigns
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
