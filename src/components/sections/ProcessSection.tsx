import SectionHeader from "../ui/SectionHeader";
import { agencyData } from "@/data/agencyData";

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#F4F4F4] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Our Methodology"
          title="The 5-Step Growth Engine."
          highlightedWord="5-Step Growth Engine."
          description="How we turn brand strategy into predictable revenue and market momentum."
          align="center"
          className="mx-auto mb-16"
        />

        {/* 5-Step Horizontal / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {agencyData.processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 sm:p-8 border border-neutral-200/90 relative flex flex-col justify-between hover:border-[#FE8301] transition-colors duration-300 group"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading font-extrabold text-3xl text-black group-hover:text-[#FE8301] transition-colors">
                  {step.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FE8301]" />
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-black">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FE8301] block mt-1">
                  {step.subtitle}
                </span>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed mt-3">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
