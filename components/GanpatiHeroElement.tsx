"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GanpatiHeroElement() {
  return (
    <motion.div
      className="relative w-full flex items-end justify-center"
      animate={{
        y: [0, -10, 0],
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
        className="w-full h-auto max-h-[480px] lg:max-h-[520px] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(240,90,40,0.22)] translate-y-1 sm:translate-y-2 select-none pointer-events-none"
      />
    </motion.div>
  );
}
