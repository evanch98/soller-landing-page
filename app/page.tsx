import { HeroSection } from "@/components/sections/home/hero-section/hero-section";
import { OverviewSection } from "@/components/sections/home/overview-section/overview-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <div className="h-screen"></div>
    </main>
  );
}
