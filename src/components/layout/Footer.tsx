import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";
import { agencyData } from "@/data/agencyData";
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "../ui/SocialIcons";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F4F4] text-black border-t border-neutral-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-300/70">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <BrandLogo />
            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm font-medium">
              {agencyData.shortDescription}
            </p>
            
            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={agencyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:text-white hover:bg-[#FE8301] hover:border-[#FE8301] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:text-white hover:bg-[#FE8301] hover:border-[#FE8301] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:text-white hover:bg-[#FE8301] hover:border-[#FE8301] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white border border-neutral-300 flex items-center justify-center text-black hover:text-white hover:bg-[#FE8301] hover:border-[#FE8301] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-black">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-black">
              Core Capabilities
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/services/social-media-management" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  PPC & Paid Ads
                </Link>
              </li>
              <li>
                <Link href="/services/seo-gmb" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  SEO / GMB Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-neutral-600 hover:text-[#FE8301] transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-black">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-neutral-600">
              <a href={`mailto:${agencyData.contactEmail}`} className="hover:text-[#FE8301] transition-colors inline-flex items-center gap-1">
                {agencyData.contactEmail}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href={`tel:${agencyData.phone}`} className="hover:text-[#FE8301] transition-colors">
                {agencyData.phone}
              </a>
              <p className="text-xs text-neutral-500 pt-1 leading-relaxed">
                {agencyData.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <p>© {currentYear} theBlancMedia. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FE8301] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FE8301] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
