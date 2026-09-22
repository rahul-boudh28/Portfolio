// src/components/ui/AnimatedCursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touchscreens
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsTouchDevice(false);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("input") || target.closest("textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* High-precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
      />
      {/* Outer smoothing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99998] border border-primary/50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? "rgba(79, 142, 247, 0.15)" : "rgba(0, 0, 0, 0)",
          borderColor: isHovering ? "rgba(79, 142, 247, 0.9)" : "rgba(79, 142, 247, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.3 }}
      />
    </>
  );
}