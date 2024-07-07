"use client";

import Link from "next/link";
import { Button } from "@/components/button/button";
import { RiArrowRightLine, RiHeadphoneLine, RiMenuFill } from "react-icons/ri";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const routes = [
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Configure",
    href: "/configure",
  },
];

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(`Latest: ${latest}, Previous: ${previous}`);
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 z-[999] flex w-full items-center justify-between px-4 py-2 lg:px-20 lg:py-6",
        scrolled && "bg-white shadow-md",
      )}
    >
      <div className="flex items-center justify-center gap-x-9">
        <Link href="/">
          <h5 className="text-h5 text-neutral-900">soller</h5>
        </Link>
        <div className="hidden items-center justify-center gap-x-4 lg:flex">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className="px-2 py-3"
            >
              <Button
                variant="link"
                padding="link"
              >
                {route.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden items-center justify-center gap-x-4 lg:flex">
        <Button
          variant="phone"
          padding="phone"
        >
          <RiHeadphoneLine className="h-6 w-6" />
          555 818 282
        </Button>
        <Button>
          Request a Quote
          <RiArrowRightLine className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex lg:hidden">
        <Button padding="icon">
          <RiMenuFill className="h-6 w-6" />
        </Button>
      </div>
    </motion.nav>
  );
};
