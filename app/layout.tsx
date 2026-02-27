import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SoundProvider } from '@/components/audio/SoundManager';
import { SoundToggle } from '@/components/audio/SoundToggle';
import { Cursor } from '@/components/dom/Cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Shadow Protocol: The Developer',
  description: 'A futuristic, cinematic, game-inspired 3D portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          inter.variable,
          orbitron.variable
        )}
        suppressHydrationWarning
      >
        <SoundProvider>
          {children}
          <SoundToggle />
          <Cursor />
        </SoundProvider>
      </body>
    </html>
  );
}

