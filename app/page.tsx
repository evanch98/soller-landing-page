import { FeatureSection } from "@/components/sections/home/features-section/feature-section";
import { HeroSection } from "@/components/sections/home/hero-section/hero-section";
import { OverviewSection } from "@/components/sections/home/overview-section/overview-section";
import { ServicesSection } from "@/components/sections/home/services-section/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <FeatureSection />
      <div className="h-screen"></div>
    </main>
  );
}
