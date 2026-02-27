'use client';

import { useScrollManager } from './ScrollManager';

const experiences = [
  {
    company: 'Aperture Science',
    role: 'Lead Dimensional Engineer',
    period: '2020 - Present',
    description: 'Led the development of the Aperture Science Handheld Portal Device, a revolutionary tool for inter-dimensional travel. Oversaw a team of 10 engineers and was responsible for the full product lifecycle, from concept to deployment.'
  },
  {
    company: 'Black Mesa Research Facility',
    role: 'Theoretical Physicist',
    period: '2018 - 2020',
    description: 'Conducted research into anomalous materials and extra-dimensional phenomena. Contributed to the development of the HEV suit and the gluon gun.'
  },
];

export const FieldOperations = () => {
  const { section } = useScrollManager();
  const isVisible = section === 4;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-4xl p-8 text-white">
        <h2 className="font-display text-3xl md:text-5xl text-center text-violet-300 text-shadow-glow mb-8">Field Operations</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-violet-400/20 shadow-lg shadow-violet-500/10">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-2xl text-violet-300">{exp.company}</h3>
                <span className="text-neutral-400">{exp.period}</span>
              </div>
              <h4 className="text-xl text-cyan-400 mt-1">{exp.role}</h4>
              <p className="text-neutral-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
