import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import { agencyData } from "@/data/agencyData";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: "Contact Us | THEBLANCMEDIA",
  description: "Start a conversation with THEBLANCMEDIA growth strategists. Direct email, phone, and project inquiry form."
};

export default function ContactPage() {
  return (
    <div className="pt-28 bg-white pb-24">
      
      {/* Contact Hero */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <SectionHeader
            badge="Direct Agency Access"
            title="Let's Build Something Worth Talking About."
            highlightedWord="Worth Talking About."
            description="Whether you need a complete paid media overhaul, bespoke Next.js web build, or social brand strategy, our team responds within 4 business hours."
            align="center"
            isHero={true}
          />
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#F4F4F4] border border-neutral-200/90 p-8 sm:p-10 relative overflow-hidden">
              {/* Signature Orange Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FE8301]" />

              <h3 className="font-heading font-bold text-2xl text-black mb-6">
                Get In Touch Directly
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#FE8301] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                      Email Strategy Team
                    </span>
                    <a href={`mailto:${agencyData.contactEmail}`} className="font-heading font-bold text-base text-black hover:text-[#FE8301] transition-colors">
                      {agencyData.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#FE8301] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                      Call Direct
                    </span>
                    <a href={`tel:${agencyData.phone}`} className="font-heading font-bold text-base text-black hover:text-[#FE8301] transition-colors">
                      {agencyData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#FE8301] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                      Studio Location
                    </span>
                    <p className="font-heading font-bold text-sm text-black">
                      {agencyData.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-10 pt-8 border-t border-neutral-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">
                  Follow Our Work
                </span>
                <div className="flex gap-3">
                  <a href={agencyData.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-[#FE8301] hover:text-white hover:border-[#FE8301] transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href={agencyData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-[#FE8301] hover:text-white hover:border-[#FE8301] transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href={agencyData.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-[#FE8301] hover:text-white hover:border-[#FE8301] transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href={agencyData.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:bg-[#FE8301] hover:text-white hover:border-[#FE8301] transition-colors">
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Multi-Field Conversion Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
