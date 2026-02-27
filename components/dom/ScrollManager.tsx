'use client';

import { createContext, useContext, useEffect, useRef, useState, MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

interface ScrollContextType {
  section: number;
  scrollTo: (section: number) => void;
  timelineRef: MutableRefObject<gsap.core.Timeline | undefined>;
  setSection: (section: number) => void;
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

export const ScrollController = () => {
  const { camera } = useThree();
  const { timelineRef, setSection } = useScrollManager();

  useEffect(() => {
    timelineRef.current = gsap.timeline();

    sections.forEach((sec, index) => {
      timelineRef.current?.to(
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

    const st = ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      animation: timelineRef.current,
    });

    return () => {
      if (st) {
        st.kill();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [setSection, timelineRef, camera]);

  return null;
};

export const ScrollManager = ({ children }: { children: React.ReactNode }) => {
  const timelineRef = useRef<gsap.core.Timeline>();
  const [section, setSection] = useState(0);

  const scrollTo = (index: number) => {
    if (timelineRef.current) {
      timelineRef.current.seek(`section-${index}`);
    }
  };

  return (
    <ScrollContext.Provider value={{ section, scrollTo, timelineRef, setSection }}>
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
