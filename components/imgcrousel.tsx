"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/images/img-2.png",
    "/images/img-1.png",
    "/images/img-3.png",
    "/images/img-4.png",
    "/images/img-5.png",
    "/images/img-6.png",
  ];

  return (
    <ImagesSlider className="h-[30rem] shadow-voilet rounded-lg" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3, // Duration in seconds
          ease: "easeOut" // Adjust easing function if needed
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Vaše wellness odredište
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
