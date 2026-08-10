import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { servicesData } from "@/data/services";
import { CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Social Media Management | THEBLANCMEDIA",
  description: "Bespoke social media strategy, video reel production, and audience growth engines for modern brands."
};

export default function SocialMediaPage() {
  const service = servicesData.find((s) => s.slug === "social-media-management")!;

  return (
    <div className="pt-28 bg-white">
      
      {/* 1. Service Hero */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <SectionHeader
            badge={`Service ${service.number} — ${service.title}`}
            title="Build a Social Presence That Turns Scroll into Scale."
            highlightedWord="Scroll into Scale."
            description={service.overview}
            align="center"
            isHero={true}
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button href="#capabilities" variant="secondary" size="lg" className="w-full sm:w-auto">
              View Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="py-12 bg-[#F4F4F4] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {service.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
                {m.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Capabilities & Deliverables */}
      <section id="capabilities" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              badge="What We Do"
              title="Social Capabilities Built for Modern Feeds."
              highlightedWord="Modern Feeds."
            />
            <div className="mt-8 flex flex-col gap-4">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#F4F4F4] border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-[#FE8301] shrink-0 mt-0.5" />
                  <span className="font-heading font-bold text-sm text-black">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              badge="Client Deliverables"
              title="Tangible Assets Produced Monthly."
              highlightedWord="Produced Monthly."
            />
            <div className="mt-8 flex flex-col gap-4">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="p-5 bg-black text-white border border-neutral-800">
                  <span className="text-xs font-bold text-[#FE8301] uppercase tracking-wider block mb-1">
                    Deliverable 0{idx + 1}
                  </span>
                  <p className="font-body text-sm text-neutral-200 font-medium">{del}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Execution Process */}
      <section className="py-20 sm:py-24 bg-[#F4F4F4] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Process Workflow"
            title="How We Deliver Social Growth."
            highlightedWord="Social Growth."
            align="center"
            className="mx-auto mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white p-8 border border-neutral-200">
                <span className="font-heading font-extrabold text-3xl text-[#FE8301] block mb-4">
                  {step.step}
                </span>
                <h4 className="font-heading font-bold text-lg text-black mb-2">{step.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Questions & Answers"
            title="Frequently Asked Questions."
            highlightedWord="Questions."
            align="center"
            className="mx-auto mb-12"
          />

          <div className="flex flex-col gap-6">
            {service.faq.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#F4F4F4] border border-neutral-200">
                <h4 className="font-heading font-bold text-base text-black flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FE8301]" />
                  {item.q}
                </h4>
                <p className="text-sm text-neutral-600 mt-2 pl-6 font-medium leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTASection />

    </div>
  );
}
