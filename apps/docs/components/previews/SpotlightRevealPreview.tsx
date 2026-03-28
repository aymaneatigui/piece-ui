"use client";

import React, { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";

export default function SpotlightRevealPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const maskX = useTransform(x, (v) => `${v * 100}%`);
  const maskY = useTransform(y, (v) => `${v * 100}%`);
  const maskImage = useMotionTemplate`radial-gradient(circle 200px at ${maskX} ${maskY}, black 0%, transparent 100%)`;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }, [rawX, rawY]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      rawX.set(nx); rawY.set(ny); x.jump(nx); y.jump(ny);
    }
    setIsHovered(true);
  }, [rawX, rawY, x, y]);

  return (
    <div className="w-full max-w-md">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl border border-zinc-800 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Base layer */}
        <div className="p-8 bg-zinc-950">
          <div className="text-white/20 text-sm font-mono mb-2">base layer</div>
          <h3 className="text-2xl font-bold text-white/20">Hover over me</h3>
          <p className="text-sm text-white/15 mt-2">The spotlight follows your cursor and reveals the layer below.</p>
        </div>

        {/* Reveal layer (masked) */}
        <motion.div
          className="pointer-events-none absolute inset-0 p-8 bg-gradient-to-br from-[#00f0ff]/10 to-[#7000ff]/10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ WebkitMaskImage: maskImage, maskImage }}
        >
          <div className="text-[#00f0ff]/60 text-sm font-mono mb-2">reveal layer</div>
          <h3 className="text-2xl font-bold text-white">Hover over me</h3>
          <p className="text-sm text-white/60 mt-2">The spotlight follows your cursor and reveals the layer below.</p>
        </motion.div>
      </div>
      <p className="text-xs text-white/30 text-center mt-3">Move your cursor over the card</p>
    </div>
  );
}
