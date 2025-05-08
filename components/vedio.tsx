"use client"; // Ensure this component is treated as a Client Component
import React, { useState, useEffect, useRef } from "react";

const Video: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Correctly typed ref

  // List of video sources
  const videos: string[] = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
  ];

  // Handle video end event to move to next video
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload video when changing the source
      video
        .play() // Try to play the video
        .catch((err) => console.error("Failed to play the video:", err));
    }
  }, [currentVideoIndex]); // Effect depends on the current video index

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log("Scrolling to section:", sectionId); // Debugging log
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found:", sectionId); // Debugging log if section is not found
    }
  };

  return (
    <div className="col-span-5" id="home">
      <video
        ref={videoRef}
        autoPlay
        loop={false} // No need for loop; we control it manually
        muted
        className="w-full h-[250px] opacity-60"
        onEnded={handleVideoEnded} // Move to next video when current one ends
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex gap-3">
        <button
          onClick={() => handleScrollToSection("form")}
          className="relative px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-sm sm:text-base lg:text-lg mx-auto text-center rounded-full mt-4 mb-4 sm:mb-0 transition-all duration-300 transform hover:scale-105 hover:bg-emerald-500/30 hover:shadow-xl z-20 outline-none focus:outline-none"
        >
          <span>Rezervirajte sada →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </div>
    </div>
  );
};

export default Video;
