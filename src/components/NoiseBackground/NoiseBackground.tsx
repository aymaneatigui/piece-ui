import React from "react";

export interface NoiseBackgroundProps {
  opacity?: number;
  noiseUrl?: string;
}

export const NoiseBackground = ({
  opacity = 0.04,
  noiseUrl = "/assets/images/noise.png",
}: NoiseBackgroundProps) => {
  return (
    <div
      style={{
        backgroundSize: "100px",
        backgroundRepeat: "repeat",
        backgroundImage: `url(${noiseUrl})`,
        opacity,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        pointerEvents: "none",
      }}
    />
  );
};
