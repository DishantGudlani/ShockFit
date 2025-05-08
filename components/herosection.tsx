
'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Herosection = () => {
  const [typeEffect] = useTypewriter({
    words: [
      'predstavlja Novu uslugu',
      'presents a new service'
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
      <h1 className="text-4xl font-bold text-white mb-3">
        ShockFit
      </h1>
      <h2 className="text-5xl font-bold">
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        Predstavlja Novu Uslugu
        </span>
       
      </h2>
      <h3 className="text-4xl font-bold text-white mt-3">
        Shock-Epil
      </h3>
      <h4 className="font-normal text-gray-500 py-5">
        ShockFit pruža vrhunsku njegu uz opuštanje i diodni laserski tretman.
      </h4>
      
    </div>
  );
};

export default Herosection;
