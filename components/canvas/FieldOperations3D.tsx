'use client';

export const FieldOperations3D = () => {
  return (
    <group position={[0, 0, -55]}>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
};
