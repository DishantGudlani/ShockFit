"use client";
import Image from 'next/image';
import React from 'react';
import '../styles/animation.css'; // Import the CSS file from the styles folder

const images = [
  { id: 1, src: '/images/mcn-1.jpg', alt: 'Image 1', style: { border: '2px solid red' } },
  { id: 2, src: '/images/mcn-2.jpg', alt: 'Image 2', style: { border: '2px solid green' } },
  { id: 3, src: '/images/mcn-3.jpg', alt: 'Image 3', style: { border: '2px solid blue' } },
  { id: 4, src: '/images/mcn-4.jpg', alt: 'Image 4', style: { border: '2px solid yellow' } },
  { id: 5, src: '/images/mcn-5.jpg', alt: 'Image 5', style: { border: '2px solid purple' } },
  { id: 6, src: '/images/mcn-6.jpg', alt: 'Image 6', style: { border: '2px solid orange' } },
  { id: 7, src: '/images/mcn-7.jpg', alt: 'Image 7', style: { border: '2px solid pink' } }
];

const GalleryComponent = () => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item" style={image.style}>
          <img src={image.src} alt={image.alt} width={300} height={300}  />
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;
