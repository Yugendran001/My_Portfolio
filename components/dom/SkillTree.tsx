'use client';

import { useScrollManager } from './ScrollManager';

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP'],
  'Backend': ['Node.js', 'Express', 'Python', 'Flask', 'PostgreSQL', 'MongoDB'],
  'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Vercel', 'Git'],
  'Tools': ['Webpack', 'Vite', 'Figma', 'Blender', 'Photoshop', 'Jira'],
  'Soft Skills': ['Problem Solving', 'Communication', 'Teamwork', 'Leadership', 'Creativity'],
};

export const SkillTree = () => {
  const { section } = useScrollManager();
  const isVisible = section === 2;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-4xl p-8 text-white">
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-magenta/20 shadow-lg shadow-magenta/10">
          <h2 className="font-display text-3xl md:text-5xl text-center text-fuchsia-400 text-shadow-glow mb-8">Skill Tree</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-display text-xl text-cyan-400 mb-4">{category}</h3>
                <ul>
                  {items.map(skill => (
                    <li key={skill} className="text-neutral-300 mb-2">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
