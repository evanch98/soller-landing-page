"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked((pv) => !pv);
  };

  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "flex h-6 w-6 cursor-pointer flex-col items-center justify-center gap-y-[5px]",
        isClicked && "translate-x-[10%]",
      )}
    >
      <motion.div
        className="w-6 rounded-full border-[1.5px] border-amber-900"
        initial={{ rotateZ: 0, scaleX: 1 }}
        animate={{
          rotateZ: isClicked ? 45 : undefined,
          scaleX: 1,
          translateX: isClicked ? 1.5 : 0,
          translateY: isClicked ? -1.5 : 0,
        }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="w-6 rounded-full border-[1.5px] border-amber-900"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isClicked ? 0 : undefined }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="w-6 rounded-full border-[1.5px] border-amber-900"
        initial={{ rotateZ: 0, scaleX: 1 }}
        animate={{
          rotateZ: isClicked ? -45 : undefined,
          scaleX: 1,
          translateX: isClicked ? 1 : 0,
          translateY: isClicked ? 1 : 0,
        }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};
