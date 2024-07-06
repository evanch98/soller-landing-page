import { Button } from "@/components/button/button";
import { TestimonialCard } from "@/components/cards/testimonial-card/testimonial-card";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const DRAG_BUFFER = 50;

export interface Testimonial {
  icon: IconType;
  text: string;
  profileSrc: string;
  name: string;
  desc: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({
  testimonials,
}: TestimonialCarouselProps) => {
  const [dragging, setDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currentIndex < testimonials.length - 1) {
      setCurrentIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };

  const onNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((pv) => pv + 1);
    }
  };

  const onPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-screen items-center overflow-hidden pl-4 pr-4 lg:pl-20 lg:pr-0">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${currentIndex * 392}px`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center gap-x-6 active:cursor-grabbing"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className={
              currentIndex === index ? "py-14 transition duration-300" : ""
            }
          />
        ))}
      </motion.div>
      <div className="mt-16 flex w-full justify-center gap-x-6 lg:justify-start">
        <Button
          onClick={onPrevious}
          variant="outline"
          padding="icon"
          disabled={currentIndex === 0}
          className="disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          <RiArrowLeftLine className="h-6 w-6" />
        </Button>
        <Button
          onClick={onNext}
          variant="outline"
          padding="icon"
          disabled={currentIndex >= testimonials.length - 1}
          className="disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          <RiArrowRightLine className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
