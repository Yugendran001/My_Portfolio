'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useScrollManager } from '../dom/ScrollManager';
import { gsap } from 'gsap';

export const Character = () => {
  const modelRef = useRef<THREE.Group>(null);
  const { section } = useScrollManager();

  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Subtle floating animation
      modelRef.current.position.y = -0.5 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  // Animate character position based on section
  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.position, {
        x: section === 0 ? 0 : (section === 1 ? -2 : (section === 2 ? 0 : (section === 3 ? 2 : (section === 4 ? -2 : (section === 5 ? 2 : (section === 6 ? 0 : 0)))))),
        z: section === 0 ? 0 : (section === 1 ? -10 : (section === 2 ? -22 : (section === 3 ? -38 : (section === 4 ? -53 : (section === 5 ? -68 : (section === 6 ? -83 : -98)))))),
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  }, [section]);

  return (
    // Placeholder for the character model
    <group ref={modelRef} position={[0, -0.5, 0]} scale={1.5}>
      <mesh>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#00ffff" />
      </mesh>
    </group>
  );
};

