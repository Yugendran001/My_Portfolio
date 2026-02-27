'use client';

export const OriginStory3D = () => {
  return (
    <mesh position={[0, 1, -12]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
};
