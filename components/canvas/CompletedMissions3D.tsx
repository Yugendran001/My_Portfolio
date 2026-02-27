'use client';

import { Image } from '@react-three/drei';

export const CompletedMissions3D = () => {
  return (
    <group position={[0, 0, -40]}>
      <Image alt="Project 1" url="/images/project1.jpg" position={[-4, 0, 0]} scale={[3, 2]} />
      <Image alt="Project 2" url="/images/project2.jpg" position={[0, 0, 0]} scale={[3, 2]} />
      <Image alt="Project 3" url="/images/project3.jpg" position={[4, 0, 0]} scale={[3, 2]} />
    </group>
  );
};
