import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { agencyData } from "@/data/agencyData";
import { CheckCircle } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-[#F4F4F4] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <SectionHeader
              badge="About theBlancMedia"
              title="We Don't Just Market. We Build Momentum."
              highlightedWord="We Build Momentum."
              description="Most agencies measure success in vanity metrics like clicks and impressions. At THEBLANCMEDIA, we architect end-to-end engines designed to transform market perception and scale bottom-line revenue."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2 w-full">
              {agencyData.values.slice(0, 4).map((val, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 border border-neutral-200/80">
                  <CheckCircle className="w-5 h-5 text-[#FE8301] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-black">
                      {val.title}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" size="md">
              Know More
            </Button>
          </div>

          {/* Right Column: Editorial Metric Highlight Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-black text-white p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE8301]/20 blur-3xl rounded-full" />

              <span className="text-xs font-semibold text-[#FE8301] uppercase tracking-widest block mb-3">
                Agency Philosophy
              </span>

              <blockquote className="font-heading text-xl sm:text-2xl font-bold leading-snug text-white">
                "In a crowded digital ecosystem, quiet brands perish. Bold visual identity paired with ruthless media execution is the only true competitive advantage."
              </blockquote>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="block font-heading font-bold text-base text-white">
                    THEBLANCMEDIA
                  </span>
                  <span className="text-xs text-neutral-400">
                    Executive Strategy Team
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#FE8301] flex items-center justify-center font-heading font-extrabold text-black text-sm">
                  BM
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
