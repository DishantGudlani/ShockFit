"use client"; // Ensure this component is treated as a Client Component
import React from "react";
import { Vortex } from "./ui/background-lines";

export function VortexDemo() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] mx-auto rounded-md h-[28rem] sm:h-[30rem] overflow-hidden mt-5">
      <Vortex
        backgroundColor="black"
        className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-10 py-4 w-full h-full"
      >
        {/* Left Side Content */}
        <div className="flex flex-col items-start justify-center space-y-4 w-full sm:w-1/2">
          <p className="text-white text-sm sm:text-xl max-w-sm sm:max-w-xl">
            Želite li Masažu?
          </p>
          <h2 className="text-white text-lg sm:text-2xl md:text-6xl font-bold">
            Doživite razliku Shock tretmanima
          </h2>

          <p className="text-white text-xs sm:text-sm md:text-2xl max-w-xs sm:max-w-xl">
            Ponosimo se svojom izuzetnom korisničkom uslugom i posvećeni smo
            tome da se svaki posjet Shockfitu osjećate osvježeno i zadovoljno.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 sm:mt-6 w-full">
            <button
              onClick={() => handleScrollToSection("form")}
              className="relative px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-sm sm:text-base lg:text-lg mx-auto text-center rounded-full mt-4 mb-4 sm:mb-0 transition-all duration-300 transform hover:scale-105 hover:bg-emerald-500/30 hover:shadow-xl"
            >
              <span>Javite se za konzultacije →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
        </div>
        <br />
        {/* Right Side Image */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end -mt-3 sm:mt-0">
          <img
            alt="meetings"
            src="/images/img-8.png"
            className="w-[260px] h-[164px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[450px] object-cover opacity-80 rounded-lg gradient-shadow"
          />
        </div>
      </Vortex>
    </div>
  );
}
