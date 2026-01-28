'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface ImpactWordProps {
  word: string;
  color?: 'cyan' | 'emerald' | 'amber' | 'white';
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  delay?: number;
  className?: string;
}

const colorMap = {
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
  white: 'text-white'
};

const sizeMap = {
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl',
  '2xl': 'text-5xl md:text-6xl',
  '3xl': 'text-6xl md:text-7xl',
  '4xl': 'text-7xl md:text-8xl'
};

export function ImpactWord({
  word,
  color = 'white',
  size = '2xl',
  delay = 0,
  className = ''
}: ImpactWordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { reducedMotion } = useAccessibility();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 1.2,
        y: 20
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        delay: delay,
        ease: 'power3.out'
      }
    );
  }, [delay, reducedMotion]);

  return (
    <span
      ref={ref}
      className={`
        inline-block font-black uppercase tracking-tight
        ${colorMap[color]}
        ${sizeMap[size]}
        ${className}
        ${reducedMotion ? '' : 'opacity-0'}
      `}
      style={{
        textShadow: `0 0 40px currentColor`
      }}
    >
      {word}
    </span>
  );
}

// Hoverable word variant with lift effect
interface HoverWordProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverWord({ children, className = '' }: HoverWordProps) {
  const { reducedMotion } = useAccessibility();

  return (
    <span
      className={`
        inline-block
        transition-all duration-200
        ${!reducedMotion ? 'hover:scale-110 hover:-translate-y-0.5 hover:text-cyan-300' : ''}
        cursor-default
        ${className}
      `}
    >
      {children}
    </span>
  );
}
