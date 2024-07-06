"use client";

import { FeatureCard } from "@/components/cards/feature-card/feature-card";
import { Mobile } from "@/components/decorations/mobile/mobile";
import { Header } from "@/components/header/header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  TbPerspective,
  TbThumbUp,
  TbTournament,
  TbTransitionTop,
} from "react-icons/tb";

export const FeatureSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end start"],
  });

  const mobileX = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <ClientProvider>
      <section
        ref={container}
        className="relative flex flex-col items-center justify-center gap-y-16 px-4 py-12 lg:flex-row lg:gap-x-40 lg:px-20 lg:py-20"
      >
        <div className="flex flex-col gap-y-16 lg:gap-y-12">
          <Header
            title="Powerful features"
            subtitle="System features"
            desc="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
            center={largeScreen ? false : true}
          />
          <div className="grid grid-cols-2 gap-12">
            <FeatureCard
              icon={TbTournament}
              title="Erat sit"
              desc="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
            />
            <FeatureCard
              icon={TbThumbUp}
              title="Ullamcorper arcu"
              desc="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
            />
            <FeatureCard
              icon={TbTransitionTop}
              title="Et pellentesque"
              desc="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
            />
            <FeatureCard
              icon={TbPerspective}
              title="Amet egestas"
              desc="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis."
            />
          </div>
        </div>
        <Mobile
          width={largeScreen ? undefined : "auto"}
          height={largeScreen ? undefined : 470}
          pos={largeScreen ? { x: mobileX, y: mobileY } : undefined}
        />
      </section>
    </ClientProvider>
  );
};
