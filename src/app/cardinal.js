"use client";

import {motion, useScroll, useTransform} from "motion/react";
import Image from "next/image";

export default function Cardinal() {
  const { scrollY } = useScroll(); // Tracks vertical scroll position

  // Translate image to the left as you scroll down (e.g., up to 300px)
  const x = useTransform(scrollY, [0, 300], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Optional fade out


  return (
    <motion.div style={{ opacity }}
      className="absolute min-h-screen w-full flex justify-center md:items-center -z-50">
      <Image
        src="/home/Cardinal.svg"
        alt="Cardinal Background"
        className="fixed opacity-40 md:left-0 pt-26 sm:pt-10 md:pt-0 w-4/5 md:w-3/5 h-auto"
        width={0}
        height={0}
        priority
      />
    </motion.div>
  );
}