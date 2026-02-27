'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to(followerRef.current, { scale: 1.5 });
    };

    const onMouseLeave = () => {
      gsap.to(followerRef.current, { scale: 1 });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, input[type="submit"], input[type="button"]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, input[type="submit"], input[type="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div ref={followerRef} className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};
