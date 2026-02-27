'use client';

import { Github, Linkedin, Download } from 'lucide-react';
import { useSoundManager } from '@/components/audio/SoundManager';

export const Hero = () => {
  const { playSound } = useSoundManager();

  const handleMouseEnter = () => playSound('hover');

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="w-full max-w-2xl p-8 text-center text-white animate-float-in">
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
          <h1 className="font-display text-4xl md:text-6xl text-cyan-400 text-shadow-glow">
            SHADOW PROTOCOL
          </h1>
          <h2 className="text-xl md:text-2xl text-violet-300 mt-2">The Developer</h2>
          <p className="mt-4 text-lg text-neutral-300">
            A senior full-stack engineer specializing in crafting immersive, high-performance web experiences with a focus on 3D, real-time applications, and cutting-edge frontend technologies.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" onMouseEnter={handleMouseEnter} className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 pointer-events-auto transition-colors"><Github /></a>
            <a href="#" onMouseEnter={handleMouseEnter} className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 pointer-events-auto transition-colors"><Linkedin /></a>
            <a href="#" onMouseEnter={handleMouseEnter} className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 pointer-events-auto transition-colors"><Download /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
