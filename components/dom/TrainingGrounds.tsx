'use client';

import { useScrollManager } from './ScrollManager';

const education = [
  {
    institution: 'MIT - Massachusetts Institute of Technology',
    degree: 'Ph.D. in Applied Physics',
    period: '2014 - 2018',
  },
  {
    institution: 'Caltech - California Institute of Technology',
    degree: 'B.S. in Physics',
    period: '2010 - 2014',
  },
];

export const TrainingGrounds = () => {
  const { section } = useScrollManager();
  const isVisible = section === 5;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-4xl p-8 text-white">
        <h2 className="font-display text-3xl md:text-5xl text-center text-cyan-400 text-shadow-glow mb-8">Training Grounds</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-2xl text-cyan-400">{edu.institution}</h3>
                <span className="text-neutral-400">{edu.period}</span>
              </div>
              <h4 className="text-xl text-violet-300 mt-1">{edu.degree}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
