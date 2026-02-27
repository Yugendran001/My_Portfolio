'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useSoundManager } from './SoundManager';

export const SoundToggle = () => {
  const { isSoundEnabled, toggleSound } = useSoundManager();

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
      aria-label={isSoundEnabled ? 'Mute sound' : 'Unmute sound'}
    >
      {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};
