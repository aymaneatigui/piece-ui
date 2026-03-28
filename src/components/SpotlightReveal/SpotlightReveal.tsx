import React, { useCallback, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";

export interface SpotlightRevealProps {
  baseImage: string;
  revealImage: string;
  alt?: string;
  className?: string;
  spotlightSize?: number;
}

export const SpotlightReveal: React.FC<SpotlightRevealProps> = ({
  baseImage,
  revealImage,
  alt = "",
  className = "",
  spotlightSize = 280,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const maskX = useTransform(x, (v) => `${v * 100}%`);
  const maskY = useTransform(y, (v) => `${v * 100}%`);

  const maskImage = useMotionTemplate`radial-gradient(circle ${spotlightSize}px at ${maskX} ${maskY}, black 0%, transparent 100%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set((e.clientX - rect.left) / rect.width);
      rawY.set((e.clientY - rect.top) / rect.height);
    },
    [rawX, rawY],
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        rawX.set(nx);
        rawY.set(ny);
        x.jump(nx);
        y.jump(ny);
      }
      setIsHovered(true);
    },
    [rawX, rawY, x, y],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base image */}
      <img
        src={baseImage}
        alt={alt}
        className="block h-full w-full object-cover"
        draggable={false}
      />

      {/* Reveal image (masked spotlight) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <img
          src={revealImage}
          alt={alt}
          className="block h-full w-full object-cover"
          draggable={false}
        />
      </motion.div>
    </div>
  );
};
