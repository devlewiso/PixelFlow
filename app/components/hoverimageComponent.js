"use client";

import React from "react";
import Image from "next/image";

const HoverImageComponent = () => {
  return (
    <div className="relative w-full h-96 bg-gray-800 flex items-center justify-center overflow-hidden group">
      {/* Background Image */}
      <Image
        src="/QpbNFcPPS4GH0V0SK0XAxA.webp" // Ruta de la imagen, asegúrate de que esté en la carpeta `public/images`
        alt="Hover Background"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      />

      {/* Overlay Text */}
      
    </div>
  );
};

export default HoverImageComponent;
