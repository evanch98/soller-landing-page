"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Menu = () => {
  const [isClicked, setIsClicked] = useState(true);

  const onClick = () => {
    setIsClicked((pv) => !pv);
  };

  return (
    <motion.div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-y-[5px]"
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
