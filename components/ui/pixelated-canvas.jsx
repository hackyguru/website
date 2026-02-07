"use client";
import React from "react";
import Image from "next/image";

export const PixelatedCanvas = ({
  src,
  width,
  height,
  cellSize,
  dotScale,
  shape,
  backgroundColor,
  dropoutStrength,
  interactive,
  distortionStrength,
  distortionRadius,
  distortionMode,
  followSpeed,
  jitterStrength,
  jitterSpeed,
  sampleAverage,
  tintColor,
  tintStrength,
  className,
}) => {
  // Placeholder implementation - rendering the image directly
  // Please replace this file's content with the actual PixelatedCanvas source code from Aceternity
  return (
    <div className={className} style={{ width: "100%", height: "100%", position: "relative" }}>
       <Image
          src={src}
          width={width}
          height={height}
          alt="Pixelated Canvas"
          className="object-cover w-full h-full"
       />
    </div>
  );
};
