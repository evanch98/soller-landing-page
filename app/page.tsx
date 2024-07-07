import { CallToActionSection } from "@/components/sections/home/call-to-action-section/call-to-action-section";
import { CaseStudiesSection } from "@/components/sections/home/case-studies-section/case-studies-section";
import { FeatureSection } from "@/components/sections/home/features-section/feature-section";
import { HeroSection } from "@/components/sections/home/hero-section/hero-section";
import { OverviewSection } from "@/components/sections/home/overview-section/overview-section";
import { ServicesSection } from "@/components/sections/home/services-section/services-section";
import { TestimonialSection } from "@/components/sections/home/testimonial-section/testimonial-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <FeatureSection />
      <TestimonialSection />
      <CaseStudiesSection />
      <CallToActionSection />
      <div className="h-screen"></div>
    </main>
  );
}
