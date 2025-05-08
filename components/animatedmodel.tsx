"use client";
import React from "react";

import { motion } from "framer-motion";

// Import local images
import image1 from "../public/images/photoS2.jpeg";

export function AnimatedModalDemo() {
  const images = [image1];

  return (
    <div className="flex  flex-wrap">
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl mt-4 mx-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
          <img
            src={image.src}
            alt="Bali images"
            style={{ width: "27rem", height: "dvh" }}
            className="rounded-lg object-cover flex-shrink-0 m"
          />
        </motion.div>
      ))}
    </div>
  );
}
