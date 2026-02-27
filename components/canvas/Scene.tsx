'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from './Environment';
import { GridFloor } from './GridFloor';
import { Character } from './Character';
import { OriginStory3D } from './OriginStory3D';
import { SkillTree3D } from './SkillTree3D';
import { CompletedMissions3D } from './CompletedMissions3D';
import { FieldOperations3D } from './FieldOperations3D';
import { TrainingGrounds3D } from './TrainingGrounds3D';
import { UnlockedAchievements3D } from './UnlockedAchievements3D';
import { DeployMe3D } from './DeployMe3D';
import { ScrollController } from '../dom/ScrollManager';

export const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 50 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ScrollController />
        <Environment />
        <GridFloor />
        <Character />
        <OriginStory3D />
        <SkillTree3D />
        <CompletedMissions3D />
        <FieldOperations3D />
        <TrainingGrounds3D />
        <UnlockedAchievements3D />
        <DeployMe3D />
      </Suspense>
    </Canvas>
  );
};
