'use client';

import { useScrollManager } from './ScrollManager';
import { useSoundManager } from '@/components/audio/SoundManager';

const projects = [
  {
    title: 'Project Chimera',
    description: 'An immersive 3D data visualization platform for a biotech firm, built with React, Three.js, and D3.',
    link: '#',
  },
  {
    title: 'Aperture OS',
    description: 'A futuristic, desktop-like web application for a creative agency, featuring a custom windowing system and real-time collaboration.',
    link: '#',
  },
  {
    title: 'Project Overdrive',
    description: 'A high-performance e-commerce platform for a luxury automotive brand, with a focus on 3D product visualization and a seamless user experience.',
    link: '#',
  },
];

export const CompletedMissions = () => {
  const { section } = useScrollManager();
  const { playSound } = useSoundManager();
  const isVisible = section === 3;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-4xl p-8 text-white">
        <h2 className="font-display text-3xl md:text-5xl text-center text-cyan-400 text-shadow-glow mb-8">Completed Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
              <h3 className="font-display text-2xl text-cyan-400">{project.title}</h3>
              <p className="text-neutral-300 mt-2">{project.description}</p>
              <button 
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="mt-4 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors pointer-events-auto"
              >
                View Mission
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
