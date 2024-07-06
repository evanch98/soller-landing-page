"use client";

import { Button } from "@/components/button/button";
import { TestimonialCarousel } from "@/components/carousels/testimonial-carousel/testimonial-carousel";
import { Header } from "@/components/header/header";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";
import { RiArrowRightLine } from "react-icons/ri";
import {
  TbBuildingCastle,
  TbClock,
  TbClockBolt,
  TbStars,
} from "react-icons/tb";

const testimonials = [
  {
    icon: TbClockBolt,
    text: "Solar has truly revolutionized the energy industry with their innovative solar products. I highly recommend Solar to anyone looking to go green.",
    profileSrc: "/assets/profile-pic/profile-2.jpg",
    name: "Jane Cooper",
    desc: "10KWh",
  },
  {
    icon: TbStars,
    text: "Solar's innovative solar products are incredibly efficient and help reduce waste. I am impressed with the quality and reliability of their solar solutions.",
    profileSrc: "/assets/profile-pic/profile-3.jpg",
    name: "Ralph Edwards",
    desc: "32KWh",
  },
  {
    icon: TbBuildingCastle,
    text: "Solar has provided me with an efficient and innovative solution to reduce waste. Their solar product exceeded my expectations and I highly recommend it.",
    profileSrc: "/assets/profile-pic/profile-4.jpg",
    name: "Courtney Henry",
    desc: "6KWh",
  },
  {
    icon: TbClock,
    text: "Solar's innovative solar products are not only efficient but also help reduce waste. I am extremely satisfied with the quality and reliability of their solar solutions.",
    profileSrc: "/assets/profile-pic/profile-5.jpg",
    name: "Cameron Williamson",
    desc: "12KWh",
  },
];

export const TestimonialSection = () => {
  const largeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <ClientProvider>
      <section className="relative flex flex-col items-center justify-center gap-y-16 bg-purple-900 px-4 py-12 lg:gap-y-40 lg:px-20 lg:py-20">
        <div className="flex w-full flex-col justify-between lg:flex-row">
          <Header
            title="Make something awesome"
            subtitle="Join other Sun harvesters"
            subtitleClassName="text-amber-300"
            desc="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
            className="text-white"
            center={largeScreen ? false : true}
          />
          <div className="pt-4">
            <Button>
              Request a Quote
              <RiArrowRightLine className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </section>
    </ClientProvider>
  );
};
