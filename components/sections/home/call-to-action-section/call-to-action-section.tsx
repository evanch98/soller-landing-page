"use client";

import { Button } from "@/components/button/button";
import { Header } from "@/components/header/header";
import { RiArrowRightLine } from "react-icons/ri";

export const CallToActionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 bg-purple-700 px-4 py-12 lg:gap-y-8 lg:px-20 lg:py-20">
      <div className="relative flex w-full items-center justify-center">
        <Header
          title="All the power that you need for your house is now available"
          subtitle="Get the Sun to power your home"
          subtitleClassName="text-amber-300"
          className="text-white"
        />
      </div>
      <Button className="w-fit">
        Request a Quote
        <RiArrowRightLine className="h-6 w-6" />
      </Button>
    </section>
  );
};
