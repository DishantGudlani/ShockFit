"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  // Scroll function to handle smooth scroll
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      {/* Heading with styling */}
      <div className="relative mt-2 mx-4 sm:mx-10 lg:mx-20 text-xl md:text-2xl lg:text-4xl font-bold text-black dark:text-white font-sans tracking-tight text-center">
        <div className="relative inline-block w-full max-w-lg [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>
              Kontaktirajte gumb za rezervaciju i rezervirajte
            </span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>
              Kontaktirajte gumb za rezervaciju i rezervirajte
            </span>
          </div>
        </div>
      </div>

      {/* Button with scroll to form */}
      <div className="flex justify-center mt-6">
      <button
  onClick={() => handleScrollToSection("form")} // Scroll to the "form" section
  className="relative px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white text-base sm:text-lg mx-auto text-center rounded-full shadow-lg hover:bg-blue-400 hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-sm"
>
  Rezervirajte sada →
  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-900 to-transparent" />
</button>

      </div>
    </BackgroundBeamsWithCollision>
  );
}
