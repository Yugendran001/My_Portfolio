'use client';

import { useScrollManager } from './ScrollManager';
import { useSoundManager } from '@/components/audio/SoundManager';
import { useState } from 'react';

export const DeployMe = () => {
  const { section } = useScrollManager();
  const { playSound } = useSoundManager();
  const isVisible = section === 7;
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playSound('click');
    setStatus('Sending...');
    // Here you would typically send the form data to a backend API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('Message sent successfully!');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-2xl p-8 text-white">
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
          <h2 className="font-display text-3xl md:text-5xl text-center text-cyan-400 text-shadow-glow mb-8">Deploy Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4 pointer-events-auto">
            <input type="text" name="name" placeholder="Name" required className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea name="message" placeholder="Message" required rows={4} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
            <button type="submit" onMouseEnter={() => playSound('hover')} className="w-full p-3 font-display text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors">
              Transmit Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-cyan-400">{status}</p>}
        </div>
      </div>
    </div>
  );
};
