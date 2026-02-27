'use client';

import { useScrollManager } from './ScrollManager';

export const OriginStory = () => {
  const { section } = useScrollManager();
  const isVisible = section === 1;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-2xl p-8 text-center text-white">
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-violet-400/20 shadow-lg shadow-violet-500/10">
          <h2 className="font-display text-3xl md:text-5xl text-violet-300 text-shadow-glow">Origin Story</h2>
          <p className="mt-4 text-lg text-neutral-300">
            My journey into technology began not in a classroom, but in the immersive worlds of video games. Fascinated by the intricate systems and compelling narratives, I started dissecting game engines and teaching myself to code. This passion for building virtual experiences evolved into a career in web development, where I now apply the same principles of performance, engagement, and artistry to create cutting-edge applications.
          </p>
        </div>
      </div>
    </div>
  );
};
