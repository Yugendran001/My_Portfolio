'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

const SKILL_COUNT = 50;

export const SkillTree3D = () => {
  const [nodes] = useState(() => {
    const temp = [];
    for (let i = 0; i < SKILL_COUNT; i++) {
      const pos = new THREE.Vector3().setFromSphericalCoords(
        5 + Math.random() * 5,
        Math.acos(2 * Math.random() - 1),
        2 * Math.PI * Math.random()
      );
      temp.push(pos);
    }
    return temp;
  });

  return (
    <group position={[0, 0, -25]}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};
