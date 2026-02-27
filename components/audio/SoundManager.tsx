'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Howl, Howler } from 'howler';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playSound: (sound: 'hover' | 'click' | 'transition') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const soundMap = {
  hover: '/audio/hover.mp3',
  click: '/audio/click.mp3',
  transition: '/audio/transition.mp3',
};

let backgroundMusic: Howl | null = null;

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Effect for background music
  useEffect(() => {
    if (!backgroundMusic) {
      backgroundMusic = new Howl({
        src: ['/audio/background.mp3'],
        html5: true,
        loop: true,
        volume: 0.2,
      });
    }

    if (isSoundEnabled && !backgroundMusic.playing()) {
      // Fade in to avoid harsh start
      backgroundMusic.play();
      backgroundMusic.fade(0, 0.2, 1000);
    } else if (!isSoundEnabled && backgroundMusic.playing()) {
      // Fade out
      backgroundMusic.fade(0.2, 0, 1000).once('fade', () => {
        backgroundMusic?.stop();
      });
    }
    
    // Cleanup on component unmount
    return () => {
        backgroundMusic?.unload();
        backgroundMusic = null;
    };
  }, [isSoundEnabled]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled(prev => !prev);
  }, []);

  const playSound = useCallback((sound: 'hover' | 'click' | 'transition') => {
    if (!isSoundEnabled) return;

    const soundSrc = soundMap[sound];
    if (soundSrc) {
      const howl = new Howl({
        src: [soundSrc],
        html5: true,
        volume: 0.5,
      });
      howl.play();
    }
  }, [isSoundEnabled]);

  const value = useMemo(() => ({
    isSoundEnabled,
    toggleSound,
    playSound,
  }), [isSoundEnabled, toggleSound, playSound]);

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundManager = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSoundManager must be used within a SoundProvider');
  }
  return context;
};
