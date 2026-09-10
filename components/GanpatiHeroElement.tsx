"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GanpatiHeroElement() {
  return (
    <motion.div
      className="relative w-full flex items-end justify-center lg:justify-end origin-bottom"
      animate={{
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src="/ganpati.svg"
        alt="Bappa Ka Prashad Ganpati Hero Vector"
        className="w-full h-auto max-h-[min(540px,calc(100vh-210px))] object-contain object-bottom drop-shadow-[0_16px_40px_rgba(240,90,40,0.25)] select-none pointer-events-none block translate-y-[2px]"
      />
    </motion.div>
  );
}
