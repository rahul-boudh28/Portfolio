// src/components/3d/HeroBackground.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// A component that rotates the stars slowly
function RotatingStars() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta * 0.02;
      starsRef.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <Stars 
      ref={starsRef}
      radius={50} 
      depth={50} 
      count={4000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
      
      {/* Gradient Overlay to blend the 3D canvas smoothly into the background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg z-10 pointer-events-none" />
      
      {/* Top subtle glow for the Apple-like SaaS effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-10" />
    </div>
  );
}