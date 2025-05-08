"use client"; // This tells Next.js to treat this component as a Client Component

import React from "react";

const Iframe = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "transparent", // Dark background for iframe container
        padding: "20px",
        borderRadius: "16px",
         
      }}
    >
      {/* Iframe element */}
      <iframe  id='form' 
        src="https://www.sredime.hr/widget/shock-epil"
        style={{
          width: "100%",
          maxWidth: "970px",
          height: "640px",
          border: "4px solid rgba(255, 126, 95, 0.8)", // Glowing border
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(255, 126, 95, 0.4), 0 0 20px rgba(255, 126, 95, 0.6)", // Glow effect
          backgroundColor: "transparent", // Background for dark mode
          opacity: "1", // Make iframe visible immediately
          transform: "translateY(0)", // Remove initial offset
          transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          // Smooth transition
        }}
        name="sredime-widget"
        title="Shock Epil Widget"
        onMouseEnter={(e) => {
          // Highlight border on hover
          e.currentTarget.style.borderColor = "rgba(255, 126, 95, 1)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 126, 95, 0.5), 0 0 25px rgba(255, 126, 95, 0.8)"; // Enhance glow on hover
        }}
        onMouseLeave={(e) => {
          // Revert border and shadow on hover out
          e.currentTarget.style.borderColor = "rgba(255, 126, 95, 0.8)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 126, 95, 0.4), 0 0 20px rgba(255, 126, 95, 0.6)";
        }}
      ></iframe>

      {/* Mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          iframe {
            height: 50vw; /* Adjust height relative to the width on small screens */
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Iframe;
