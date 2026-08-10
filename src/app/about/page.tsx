import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { agencyData } from "@/data/agencyData";
import { Target, Eye, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | THEBLANCMEDIA",
  description: "Learn about theBlancMedia philosophy, strategy team, and data-driven approach to scaling modern brands."
};

export default function AboutPage() {
  return (
    <div className="pt-28 bg-white">
      
      {/* 1. Hero Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <SectionHeader
            badge="About theBlancMedia"
            title="We Turn Ideas Into Brands That Matter."
            highlightedWord="Brands That Matter."
            description="Founded on the belief that modern brands win through radical visual clarity, technical precision, and relentless performance execution."
            align="center"
            isHero={true}
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl pt-10 border-t border-neutral-200">
            {agencyData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-5 bg-[#F4F4F4] border border-neutral-200/90">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Who We Are & Story */}
      <section className="py-20 sm:py-24 bg-[#F4F4F4] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionHeader
                badge="Who We Are"
                title="Strategy First. Design Obsessed. Performance Focused."
                highlightedWord="Performance Focused."
              />
              <div className="flex flex-col gap-4 text-neutral-600 text-base font-medium leading-relaxed">
                <p>
                  THEBLANCMEDIA was built as an antidote to bloated legacy agencies and generic template farms. We operate as a nimble, elite squad of digital strategists, media buyers, copywriters, and frontend engineers.
                </p>
                <p>
                  We don't believe in vanity metrics or generic monthly reports full of empty graphs. We measure our success directly against your top-line revenue, customer lifetime value, and brand equity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black text-white p-8 sm:p-12 relative border border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FE8301] block mb-6">
                Our Core Pillars
              </span>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-[#FE8301] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white">Precision Targeting</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Acquiring high-intent buyers rather than broad passive scroll traffic.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-[#FE8301] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white">Editorial Aesthetics</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Uncompromising visual design that forces prospective clients to take you seriously.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-[#FE8301] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white">Rapid Execution</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Sub-second Next.js web infrastructure and high-frequency campaign iteration.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Differentiators"
            title="Why Leading Brands Partner With Us."
            highlightedWord="Partner With Us."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyData.values.map((val, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200/90 hover:border-[#FE8301] transition-all">
                <div className="w-10 h-10 rounded-full bg-[#FE8301]/10 flex items-center justify-center text-[#FE8301] mb-6 font-heading font-extrabold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-xl text-black mb-3">
                  {val.title}
                </h3>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology Process */}
      <ProcessSection />

      {/* 5. Conversion CTA */}
      <ContactCTASection />

    </div>
  );
}
