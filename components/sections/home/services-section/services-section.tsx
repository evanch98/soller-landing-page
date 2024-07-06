"use client";

import { FeatureCard } from "@/components/cards/feature-card/feature-card";
import { Chat } from "@/components/decorations/chat/chat";
import { Header } from "@/components/header/header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  LiaHikingSolid,
  LiaPiggyBankSolid,
  LiaTrophySolid,
  LiaTruckSolid,
} from "react-icons/lia";

export const ServicesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end start"],
  });

  const chatX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const chatY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <ClientProvider>
      <section
        ref={container}
        className="relative flex flex-col items-center justify-center gap-y-16 px-4 py-12 lg:flex-row lg:gap-x-40 lg:px-20 lg:py-20"
      >
        <Chat
          width={largeScreen ? undefined : "auto"}
          height={largeScreen ? undefined : 470}
          pos={{ x: chatX, y: chatY }}
        />
        <div className="flex flex-col gap-y-16 lg:gap-y-12">
          <Header
            title="Personalized services"
            subtitle="Services"
            desc="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
            center={largeScreen ? false : true}
          />
          <div className="grid grid-cols-2 gap-12">
            <FeatureCard
              icon={LiaTruckSolid}
              title="Et mauris"
              desc="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
            />
            <FeatureCard
              icon={LiaTrophySolid}
              title="Eget sit"
              desc="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
            />
            <FeatureCard
              icon={LiaHikingSolid}
              title="Imperdiet pellentesque"
              desc="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
            />
            <FeatureCard
              icon={LiaPiggyBankSolid}
              title="Non libero"
              desc="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
            />
          </div>
        </div>
      </section>
    </ClientProvider>
  );
};
