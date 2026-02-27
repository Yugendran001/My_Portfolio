'use client';

import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

const GridMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0x00ffff) },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      float opacity = 0.0;
      float grid = 0.0;
      
      vec2 line_vUv = vUv * 10.0;
      line_vUv.y += time * 0.1;

      float lines = abs(fract(line_vUv.x) - 0.5) + abs(fract(line_vUv.y) - 0.5);
      grid = 1.0 - step(0.01, lines);
      
      opacity = grid;

      gl_FragColor = vec4(color, opacity);
    }
  `
);

extend({ GridMaterial });

export const GridFloor = () => {
  const materialRef = useRef<any>();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.getElapsedTime();
    }
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100, 1, 1]} />
      {/* @ts-ignore */}
      <gridMaterial ref={materialRef} transparent />
    </mesh>
  );
};
