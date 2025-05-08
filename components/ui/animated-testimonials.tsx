"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  intervalTime = 5000,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  intervalTime?: number;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, intervalTime);
      return () => clearInterval(interval);
    }
  }, [autoplay, intervalTime]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (

    <div
    className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 relative"
    style={{ zIndex: 1 }} // Set lower z-index here
  >    <div className="max-w-sm md:max-w-4xl mx-auto  antialiased font-sans px-4 md:px-8 lg:px-12 py-20"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        {/* Testimonial Image Section */}
        <div>
          <div className="relative h-56 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt="Testimonial Image"
                    draggable={false}
                    className="h-full  w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center md:hidden">
          
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center justify-center">
  <button
    onClick={handleNext}
    className="group cursor-pointer px-3 py-3 rounded-full w-10 h-10 dark:bg-white bg-base-dark text-white dark:text-black  justify-center items-center md:block hidden"
  >
    <IconArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-all" />
  </button>
</div>

      </div>
      </div>

    </div>
  );
};
