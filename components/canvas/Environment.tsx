'use client';

export const Environment = () => {
  return (
    <>
      <color attach="background" args={[0x000000]} />
      <fog attach="fog" args={[0x0a0a1a, 0.035]} />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 7.5]} 
        intensity={1} 
        color="#00ffff" // Cyan
      />
      <directionalLight 
        position={[-5, 10, -7.5]} 
        intensity={0.5} 
        color="#8a2be2" // Violet
      />
    </>
  );
};
