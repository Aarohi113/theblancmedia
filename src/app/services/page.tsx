import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { servicesData } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | THEBLANCMEDIA",
  description: "Explore theBlancMedia core growth capabilities: Social Media Management, PPC Advertising, SEO & GMB, and Next.js Website Development."
};

export default function ServicesPage() {
  return (
    <div className="pt-28 bg-white">
      
      {/* Services Hero */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <SectionHeader
            badge="Capabilities Catalog"
            title="Marketing Built For Growth."
            highlightedWord="For Growth."
            description="We combine creative strategy, data analytics, and high-performance technology to elevate your brand perception and dominate your sector."
            align="center"
            isHero={true}
          />
        </div>
      </section>

      {/* Services Detailed Catalog */}
      <section className="py-12 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="bg-[#F4F4F4] border border-neutral-200/90 p-8 sm:p-12 relative flex flex-col lg:flex-row justify-between gap-10 hover:border-[#FE8301] transition-all duration-300"
            >
              {/* Left Column: Number, Title, Description */}
              <div className="flex-grow max-w-2xl flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FE8301]">
                    {svc.number}
                  </span>
                  <div className="h-4 w-px bg-neutral-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-black">
                    Core Capability
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-black">
                  {svc.title}
                </h2>

                <p className="text-neutral-600 text-base font-medium leading-relaxed">
                  {svc.overview}
                </p>

                {/* Capabilities Pill List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {svc.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-black bg-white p-3 border border-neutral-200/80">
                      <CheckCircle2 className="w-4 h-4 text-[#FE8301] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Metrics & CTA Box */}
              <div className="lg:w-80 flex flex-col justify-between gap-8 bg-white p-6 sm:p-8 border border-neutral-200 shrink-0">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">
                    Proven Impact Metrics
                  </span>
                  <div className="flex flex-col gap-4">
                    {svc.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-heading font-extrabold text-2xl text-black">
                          {m.value}
                        </span>
                        <span className="text-xs font-medium text-neutral-600">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button href={`/services/${svc.slug}`} variant="primary" size="md" className="w-full justify-center">
                  Explore Service
                </Button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTASection />

    </div>
  );
}
