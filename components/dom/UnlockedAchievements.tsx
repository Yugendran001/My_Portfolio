'use client';

import { useScrollManager } from './ScrollManager';

const achievements = [
  'Certified Kubernetes Application Developer (CKAD)',
  'AWS Certified Solutions Architect - Associate',
  'Google Certified Professional Cloud Architect',
  'Microsoft Certified: Azure Fundamentals',
];

export const UnlockedAchievements = () => {
  const { section } = useScrollManager();
  const isVisible = section === 6;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-4xl p-8 text-white">
        <h2 className="font-display text-3xl md:text-5xl text-center text-fuchsia-400 text-shadow-glow mb-8">Unlocked Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-magenta/20 shadow-lg shadow-magenta/10">
              <p className="text-lg text-neutral-300">{ach}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
