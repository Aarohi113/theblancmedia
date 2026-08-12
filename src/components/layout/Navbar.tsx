"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import BrandLogo from "../ui/BrandLogo";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Left Side Group: Brand Logo + Shifted Navigation Menu */}
        <div className="flex items-center gap-10 lg:gap-14">
          <BrandLogo />

          {/* Desktop Navigation Links (Shifted Left & Larger Font Size) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading font-bold text-base sm:text-[17px] tracking-tight transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[#FE8301]"
                      : "text-black hover:text-[#FE8301]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FE8301] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Desktop Action CTA */}
        <div className="hidden md:flex items-center">
          <Button href="/contact" variant="primary" size="sm">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-[#FE8301] focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white border-b border-neutral-200 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading font-bold text-lg transition-colors py-2 border-b border-neutral-100 ${
                    isActive ? "text-[#FE8301]" : "text-black hover:text-[#FE8301]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
