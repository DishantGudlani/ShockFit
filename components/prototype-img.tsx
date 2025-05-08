"use client";

import Image from "next/image";
import { ImagesSlider } from "./ui/images-slider";
import { ImagesSliderDemo } from "../components/imgcrousel";

function PrototypeImg() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    
       <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       
       
         
    
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-2"> 
         {" "}
          <span
          style={{
            background: "linear-gradient(to right, #FF72E1, #F54C7A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
              Novu Uslugu
        </span>
       {" "} - Shock - Epil</h2>
          <p className="text-base lg:text-lg mb-4">
          Doživite vrhunsko opuštanje i pomlađivanje uz Shockfit. Naše stručne masažne terapije i napredni tretmani uklanjanja dlačica diodnim laserom osmišljeni su kako bi izgledali i osjećali se najbolje. Zakoračite u naš miran prostor i dopustite našim vještim stručnjacima da vam pruže iznimnu njegu i personalizirane tretmane. Otkrijte Shockfit razliku danas! </p>
          <button
  onClick={() => handleScrollToSection("form")}
  className="relative px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-sm sm:text-base lg:text-lg mx-auto text-center rounded-full mt-4 mb-4 sm:mb-0 transition-all duration-300 transform hover:scale-105 hover:bg-emerald-500/30 hover:shadow-xl z-20 -ml-1"
>
  <span>Rezervirajte sada →</span>
  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
</button>

        </div>
        <ImagesSliderDemo />
      </div>
    </section>
    
  )
}

export default PrototypeImg