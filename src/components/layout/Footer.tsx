import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";
import { agencyData } from "@/data/agencyData";
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "../ui/SocialIcons";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#FE8301] via-[#FF6A00] to-[#D94800] text-white border-t border-white/20 pt-16 pb-12 relative overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-[130px]" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/20">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <BrandLogo variant="light" />
            <p className="text-white/85 text-sm leading-relaxed max-w-sm font-medium">
              {agencyData.shortDescription}
            </p>
            
            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={agencyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white/15 border border-white/25 flex items-center justify-center text-white hover:text-[#FE8301] hover:bg-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white/15 border border-white/25 flex items-center justify-center text-white hover:text-[#FE8301] hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white/15 border border-white/25 flex items-center justify-center text-white hover:text-[#FE8301] hover:bg-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={agencyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-white/15 border border-white/25 flex items-center justify-center text-white hover:text-[#FE8301] hover:bg-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Core Capabilities
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <Link href="/services/social-media-management" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-white/80 hover:text-white hover:underline transition-colors">
                  PPC & Paid Ads
                </Link>
              </li>
              <li>
                <Link href="/services/seo-gmb" className="text-white/80 hover:text-white hover:underline transition-colors">
                  SEO / GMB Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-white/80 hover:text-white hover:underline transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-white/85">
              <a href={`mailto:${agencyData.contactEmail}`} className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1">
                {agencyData.contactEmail}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href={`tel:${agencyData.phone}`} className="hover:text-white hover:underline transition-colors">
                {agencyData.phone}
              </a>
              <p className="text-xs text-white/75 pt-1 leading-relaxed">
                {agencyData.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/80">
          <p>© {currentYear} theBlancMedia. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
