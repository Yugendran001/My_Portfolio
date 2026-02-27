'use client';

export const DeployMe3D = () => {
  return (
    <group position={[0, 0, -100]}>
      <mesh>
        <torusKnotGeometry args={[2, 0.5, 128, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
};
