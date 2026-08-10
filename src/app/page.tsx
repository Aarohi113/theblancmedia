import HeroSection from "@/components/sections/HeroSection";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import ProcessSection from "@/components/sections/ProcessSection";
import BlogTeaser from "@/components/sections/BlogTeaser";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesTeaser />
      <ProcessSection />
      <BlogTeaser />
      <ContactCTASection />
    </>
  );
}
