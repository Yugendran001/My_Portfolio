'use client';

export const TrainingGrounds3D = () => {
  return (
    <group position={[0, 0, -70]}>
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[2, 2, 0.5]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[2, 2, 0.5]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
};
