'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

interface ScrollContextType {
  section: number;
  scrollTo: (section: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const sections = [
  { title: 'Hero', cameraPos: [0, 1.5, 8] },
  { title: 'Origin Story', cameraPos: [0, 1.5, -10] },
  { title: 'Skill Tree', cameraPos: [0, 1.5, -25] },
  { title: 'Completed Missions', cameraPos: [0, 1.5, -40] },
  { title: 'Field Operations', cameraPos: [0, 1.5, -55] },
  { title: 'Training Grounds', cameraPos: [0, 1.5, -70] },
  { title: 'Unlocked Achievements', cameraPos: [0, 1.5, -85] },
  { title: 'Deploy Me', cameraPos: [0, 1.5, -100] },
];

export const ScrollManager = ({ children }: { children: React.ReactNode }) => {
  const { camera } = useThree();
  const [section, setSection] = useState(0);
  const timeline = useRef<gsap.core.Timeline>();

  const scrollTo = (index: number) => {
    if (timeline.current) {
      timeline.current.seek(`section-${index}`);
    }
  };

  useEffect(() => {
    timeline.current = gsap.timeline();

    sections.forEach((sec, index) => {
      timeline.current?.to(
        camera.position,
        {
          x: sec.cameraPos[0],
          y: sec.cameraPos[1],
          z: sec.cameraPos[2],
          duration: 1,
          ease: 'power2.inOut',
          onUpdate: () => setSection(index),
        },
        `section-${index}`
      );
    });

    ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      animation: timeline.current,
    });

  }, [camera.position]);

  return (
    <ScrollContext.Provider value={{ section, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollManager = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollManager must be used within a ScrollManager');
  }
  return context;
};
