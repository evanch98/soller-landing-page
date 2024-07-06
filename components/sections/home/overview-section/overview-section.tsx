"use client";

import { Circle } from "@/components/decorations/circle/circle";
import { Dashboard } from "@/components/decorations/dashboard/dashboard";
import { Header } from "@/components/header/header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const OverviewSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end start"],
  });

  const dashboardX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <ClientProvider>
      <section className="relative flex flex-col items-center justify-center gap-y-16 px-4 py-12 md:gap-y-20 lg:px-20 lg:py-20">
        <Header
          title="Pick the Sun"
          subtitle="No more waste"
          desc="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
          className="z-50"
        />
        <div
          ref={container}
          className="relative z-50 w-full lg:w-fit"
        >
          <Dashboard
            pos={largeScreen ? { x: dashboardX, y: dashboardY } : undefined}
            width={!largeScreen ? "100%" : undefined}
            height={!largeScreen ? "auto" : undefined}
          />
        </div>
        <div className="absolute left-0 -translate-x-1/2">
          <Circle size={largeScreen ? 710 : 250} />
        </div>
        <div className="absolute right-0 translate-x-1/2">
          <Circle
            size={largeScreen ? 710 : 250}
            colorClass="bg-purple-500"
          />
        </div>
      </section>
    </ClientProvider>
  );
};
