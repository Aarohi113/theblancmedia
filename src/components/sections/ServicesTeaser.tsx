import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { servicesData } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesTeaser() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            badge="Core Services"
            title="What We Do."
            highlightedWord="What We Do."
            description="End-to-end digital growth capabilities engineered for brands seeking market leadership."
          />
          <Button href="/services" variant="secondary" size="md" className="shrink-0">
            View All Services
          </Button>
        </div>

        {/* Numbered Editorial Rows */}
        <div className="flex flex-col border-t border-neutral-200">
          {servicesData.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.slug}`}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 px-4 sm:px-6 border-b border-neutral-200 hover:bg-[#F4F4F4] transition-all duration-300"
            >
              {/* Left Accent Bar on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FE8301] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 max-w-3xl">
                {/* Number */}
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#FE8301] tracking-tight">
                  {svc.number}
                </span>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black group-hover:text-[#FE8301] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base mt-2 font-medium leading-relaxed max-w-xl">
                    {svc.shortDesc}
                  </p>
                </div>
              </div>

              {/* Right Interactive Arrow Badge */}
              <div className="mt-6 md:mt-0 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-black group-hover:text-[#FE8301] transition-colors hidden sm:inline-block">
                  Explore Service
                </span>
                <div className="w-11 h-11 rounded-full bg-white border border-neutral-300 group-hover:border-[#FE8301] group-hover:bg-[#FE8301] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
