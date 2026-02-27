'use client';

export const UnlockedAchievements3D = () => {
  return (
    <group position={[0, 0, -85]}>
      {[...Array(4)].map((_, i) => (
        <mesh key={i} position={[-3 + i * 2, 0, 0]}>
          <circleGeometry args={[0.5, 32]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};
