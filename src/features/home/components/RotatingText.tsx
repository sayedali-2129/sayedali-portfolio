"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RotatingText() {
  const TEXTS = ["Sayed Ali MH", "Flutter Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.span
          key={TEXTS[index]} // important for re-render
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="xl:text-[52px] md:text-[45px] sm:text-[39px] text-[34px] font-RalewaySemiBold tracking-wide text-TextBlue absolute"
        >
          {TEXTS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
