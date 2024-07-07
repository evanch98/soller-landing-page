"use client";

import { Avatar } from "@/components/avatar/avatar";
import { Button } from "@/components/button/button";
import { Blob } from "@/components/decorations/blob/blob";
import { Circle } from "@/components/decorations/circle/circle";
import { Header } from "@/components/header/header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";
import { RiArrowRightLine } from "react-icons/ri";

export const CaseStudiesSection = () => {
  const largeScreen = useMediaQuery("(min-width: 1440px)");
  const mediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <ClientProvider>
      <section className="relative flex flex-col items-center justify-center gap-y-8 px-4 py-12 lg:flex-row lg:gap-x-20 lg:px-20 lg:py-20">
        <Blob className="absolute -left-[348px] hidden xl:block" />
        <div className="relative h-[300px] w-[282px] flex-shrink-0 xl:h-[557px] xl:w-[524px]">
          <div className="absolute right-0 top-[25%]">
            <Avatar
              size={largeScreen ? 217 : 116}
              imgSrc="/assets/profile-pic/profile-6.jpg"
            />
          </div>
          <div className="absolute left-[18%] top-0">
            <Avatar
              size={largeScreen ? 190 : 102}
              imgSrc="/assets/profile-pic/profile-7.jpg"
            />
          </div>
          <div className="absolute bottom-[14%] left-[7%]">
            <Avatar
              size={largeScreen ? 242 : 130}
              imgSrc="/assets/profile-pic/profile-8.jpg"
            />
          </div>
          <div className="absolute bottom-0 left-[22%]">
            <Circle
              colorClass="bg-purple-400"
              size={largeScreen ? 37 : 20}
            />
          </div>
          <div className="absolute bottom-[16%] right-[27%]">
            <Circle
              colorClass="bg-lime-600"
              size={largeScreen ? 92 : 50}
            />
          </div>
          <div className="absolute left-0 top-[27%]">
            <Circle
              colorClass="bg-red-500"
              size={largeScreen ? 75 : 40}
            />
          </div>
          <div className="absolute right-[20%] top-[2%]">
            <Circle
              colorClass="bg-cyan-500"
              size={largeScreen ? 75 : 40}
            />
          </div>
        </div>
        <div className="z-50 flex flex-col items-center gap-y-6 lg:items-start">
          <Header
            title="Check how our systems have helped others"
            subtitle="Case studies"
            desc="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
            center={mediumScreen ? false : true}
          />
          <Button
            variant="ghost"
            padding="ghost"
            className="w-fit"
          >
            Find Case Studies
            <RiArrowRightLine className="h-6 w-6" />
          </Button>
        </div>
      </section>
    </ClientProvider>
  );
};
