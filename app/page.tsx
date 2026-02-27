'use client';

import { useState, Suspense } from 'react';
import { Scene } from '@/components/canvas/Scene';
import { Loader } from '@/components/dom/Loader';
import { Hero } from '@/components/dom/Hero';
import { OriginStory } from '@/components/dom/OriginStory';
import { SkillTree } from '@/components/dom/SkillTree';
import { CompletedMissions } from '@/components/dom/CompletedMissions';
import { FieldOperations } from '@/components/dom/FieldOperations';
import { TrainingGrounds } from '@/components/dom/TrainingGrounds';
import { UnlockedAchievements } from '@/components/dom/UnlockedAchievements';
import { DeployMe } from '@/components/dom/DeployMe';
import { sections } from '@/components/dom/ScrollManager';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-screen h-screen bg-black">
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      
      <div id="scroll-container" className="w-full h-full overflow-auto">
        <div style={{ height: `${sections.length * 100}vh` }} />
      </div>

      <div className={`fixed inset-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Hero />
        <OriginStory />
        <SkillTree />
        <CompletedMissions />
        <FieldOperations />
        <TrainingGrounds />
        <UnlockedAchievements />
        <DeployMe />
      </div>

    </main>
  );
}
