"use client";

import { Button } from "@/components/button/button";
import { Arc } from "@/components/decorations/arc/arc";
import { Circle } from "@/components/decorations/circle/circle";
import { User } from "@/components/user/user";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientProvider } from "@/providers/client-provider";

export const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const orangeCircleY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const purpleCircleY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const cyanCircleY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const blueCircleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const redCircleX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const arcY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <ClientProvider>
      <section
        ref={container}
        className="mt-14 flex h-full w-full flex-col-reverse items-center gap-x-20 px-4 py-12 text-neutral-900 lg:mt-24 lg:px-20 xl:flex-row"
      >
        <div className="flex w-full max-w-[600px] flex-col gap-y-16 lg:gap-y-32">
          <div className="flex flex-col items-center gap-y-6 text-center lg:items-start lg:text-left">
            <h1 className="text-h4 md:text-h1">
              Get the Sun to Power Your Home
            </h1>
            <p className="text-bodyL md:text-bodyXXL">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </p>
            <Button>
              Request a Quote
              <RiArrowRightLine className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-bodyM md:text-bodyL">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <User
              profileSrc="/assets/profile-pic/profile-1.jpg"
              name="Rwanda Melflor"
              desc="zerowaste.com"
            />
          </div>
        </div>
        <div className="relative h-[333px] w-[307px] md:h-[600px] md:w-full">
          <motion.div
            className="absolute z-40 hidden xl:-left-20 xl:block 2xl:left-24"
            style={{ y: orangeCircleY }}
          >
            <Circle size={largeScreen ? 150 : 60} />
          </motion.div>
          <motion.div
            className="absolute z-40 hidden 2xl:left-72 2xl:top-64 2xl:block"
            style={{ y: cyanCircleY }}
          >
            <Circle
              size={largeScreen ? 120 : 60}
              colorClass="bg-cyan-500"
            />
          </motion.div>
          <motion.div
            className="absolute z-40 hidden 2xl:left-96 2xl:block"
            style={{ x: redCircleX }}
          >
            <Circle
              size={largeScreen ? 64 : 32}
              colorClass="bg-red-300"
            />
          </motion.div>
          <motion.div
            className="absolute right-0 z-40 hidden translate-x-3 xl:block"
            style={{ y: purpleCircleY }}
          >
            <Circle
              size={largeScreen ? 74 : 36}
              colorClass="bg-purple-500"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-24 right-10 z-30 hidden lg:bottom-10 lg:right-14 xl:block"
            style={{ y: blueCircleY }}
          >
            <Circle
              size={largeScreen ? 70 : 20}
              colorClass="bg-blue-100"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-10 z-40 hidden lg:-bottom-14 lg:right-14 xl:block"
            style={{ y: arcY }}
          >
            <Arc
              width={largeScreen ? undefined : 115}
              height={largeScreen ? undefined : 68}
            />
          </motion.div>
        </div>
        {/* Decoration */}
        <div className="absolute right-0 top-0">
          <div className="relative h-[333px] w-[307px] bg-clip-content md:h-[694px] md:w-[673px]">
            <Image
              fill
              src="/assets/hero-image-bg.svg"
              alt="Decorative image"
              aria-label="Decorative image"
              className="object-fill"
            />
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <div className="relative h-[333px] w-[307px] bg-clip-content md:h-[694px] md:w-[673px]">
            <Image
              fill
              src="/assets/hero-image.png"
              alt="Decorative image"
              aria-label="Decorative image"
              className="object-fill"
            />
          </div>
        </div>
      </section>
    </ClientProvider>
  );
};
