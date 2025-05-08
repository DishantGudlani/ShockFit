"use client";

import "../styles/animation.css";
import React from "react";

function LightBg() {
  return (
    <div id="nama" className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
        {/* <h6 className="animate-slide-in-top">Univ</h6> */}
        <h2 className="text-3xl font-bold text-white mb-6 animate-slide-in-top">
          Krešimir{" "}
          <span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rusak,
          </span>{" "}
          univ. bacc. cin.
        </h2>
        <p className="text-base lg:text-lg mb-4 animate-slide-in-bottom">
          Diplomirao na Kineziološkom fakultetu Sveučilišta u Zagrebu na temu
          masaže i samomasaže u fitnesu te stekao naziv stručni prvostupnik
          trenerske struke fitnesa. S preko 30 godina iskustva u struci, radi
          s brojnim vrhunskim sportašima uključujući prvu hrvatsku olimpijsku
          atletsku reprezentaciju, a trenutno je vanjski stručni suradnik
          nekoliko fitnes centara. Kao mentor praktične nastave u Galbanumu,
          posvećen je pružanju profesionalne visokokvalitetne poduke u cilju
          postizanja optimalnih praktičnih vještina izvođenja tehnike masaže i
          pripadajućih znanja kod polaznika.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          alt="meetings"
          src="/images/owner-img.jpg"
          className="animate-slide-in-right w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-cover opacity-80 rounded-lg gradient-shadow"
        />
      </div>
    </div>
  );
}

export default LightBg;
