import React from "react";

const Shocfitme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold ">
          Klasična i Sportska{" "}
          <span
            style={{
              background: "linear-gradient(to right, #FF72E1, #F54C7A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            masaža
          </span>{" "}
          Maderoterapija, Raindrop tehnika
        </h2>
      </div>

      {/* Right Side - Image Section */}
      <div className="flex justify-center">
        <img
          src="/images/new.png" // Update this path with the actual image path
          alt="Shockfit Massage"
          className="w-full md:w-[30rem] h-[370px] rounded-lg shadow-lg object-cover" // Adjust the classes as needed
        />
      </div>
    </div>
  );
};

export default Shocfitme;
