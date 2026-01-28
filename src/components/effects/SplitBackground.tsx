'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useAccessibility } from '@/contexts/AccessibilityContext';

type SplitDirection = 'diagonal' | 'vertical' | 'horizontal';
type ColorScheme = 'yellow-black' | 'cyan-black' | 'emerald-black' | 'amber-black';

interface SplitBackgroundProps {
  children: ReactNode;
  direction?: SplitDirection;
  colorScheme?: ColorScheme;
  active?: boolean;
  className?: string;
}

const colorSchemes: Record<ColorScheme, { left: string; right: string }> = {
  'yellow-black': {
    left: 'bg-amber-400',
    right: 'bg-black'
  },
  'cyan-black': {
    left: 'bg-cyan-500',
    right: 'bg-zinc-950'
  },
  'emerald-black': {
    left: 'bg-emerald-500',
    right: 'bg-zinc-950'
  },
  'amber-black': {
    left: 'bg-amber-500',
    right: 'bg-zinc-950'
  }
};

export function SplitBackground({
  children,
  direction = 'diagonal',
  colorScheme = 'yellow-black',
  active = true,
  className = ''
}: SplitBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAccessibility();

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    if (!leftRef.current || !rightRef.current || reducedMotion) return;

    if (active) {
      gsap.to(leftRef.current, {
        clipPath: getClipPath(direction, 'left', true),
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.to(rightRef.current, {
        clipPath: getClipPath(direction, 'right', true),
        duration: 0.8,
        ease: 'power3.out'
      });
    } else {
      gsap.to(leftRef.current, {
        clipPath: getClipPath(direction, 'left', false),
        duration: 0.6,
        ease: 'power3.in'
      });
      gsap.to(rightRef.current, {
        clipPath: getClipPath(direction, 'right', false),
        duration: 0.6,
        ease: 'power3.in'
      });
    }
  }, [active, direction, reducedMotion]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Left/Top panel */}
      <div
        ref={leftRef}
        className={`absolute inset-0 ${colors.left}`}
        style={{
          clipPath: reducedMotion
            ? getClipPath(direction, 'left', active)
            : getClipPath(direction, 'left', false)
        }}
      />

      {/* Right/Bottom panel */}
      <div
        ref={rightRef}
        className={`absolute inset-0 ${colors.right}`}
        style={{
          clipPath: reducedMotion
            ? getClipPath(direction, 'right', active)
            : getClipPath(direction, 'right', false)
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function getClipPath(direction: SplitDirection, side: 'left' | 'right', active: boolean): string {
  if (!active) {
    return side === 'left' ? 'polygon(0 0, 0 0, 0 100%, 0 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
  }

  switch (direction) {
    case 'diagonal':
      return side === 'left'
        ? 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
        : 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)';
    case 'vertical':
      return side === 'left'
        ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
    case 'horizontal':
      return side === 'left'
        ? 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
        : 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)';
    default:
      return side === 'left' ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
  }
}
