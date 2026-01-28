'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface DiscoBallProps {
  visible: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-56 h-56'
};

export function DiscoBall({ visible, size = 'md', className = '' }: DiscoBallProps) {
  const ballRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAccessibility();

  useEffect(() => {
    if (!ballRef.current || !raysRef.current) return;

    if (visible) {
      gsap.to(ballRef.current, {
        opacity: 1,
        scale: 1,
        duration: reducedMotion ? 0 : 0.8,
        ease: 'elastic.out(1, 0.5)'
      });
      gsap.to(raysRef.current, {
        opacity: 1,
        duration: reducedMotion ? 0 : 0.5,
        delay: 0.3
      });

      // Continuous rotation
      if (!reducedMotion) {
        gsap.to(ballRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none'
        });
      }
    } else {
      gsap.to(ballRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: reducedMotion ? 0 : 0.4
      });
      gsap.to(raysRef.current, {
        opacity: 0,
        duration: reducedMotion ? 0 : 0.2
      });
    }
  }, [visible, reducedMotion]);

  // Generate mirror tiles
  const tiles = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const hue = (row * 45 + col * 30) % 360;
    return { row, col, hue };
  });

  return (
    <div className={`relative ${className}`}>
      {/* Light rays */}
      <div
        ref={raysRef}
        className="absolute inset-0 opacity-0"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(103, 232, 249, 0.1) 15deg,
              transparent 30deg,
              transparent 45deg,
              rgba(52, 211, 153, 0.1) 60deg,
              transparent 75deg,
              transparent 90deg,
              rgba(251, 191, 36, 0.1) 105deg,
              transparent 120deg
            )
          `,
          filter: 'blur(20px)',
          transform: 'scale(3)'
        }}
      />

      {/* The ball */}
      <div
        ref={ballRef}
        className={`
          relative rounded-full opacity-0 scale-75
          ${sizeMap[size]}
          bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-600
          shadow-2xl
        `}
        style={{
          boxShadow: `
            0 0 60px rgba(103, 232, 249, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.2)
          `
        }}
      >
        {/* Mirror tiles grid */}
        <div className="absolute inset-2 rounded-full overflow-hidden grid grid-cols-8 gap-0.5">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                background: `linear-gradient(135deg,
                  hsl(${tile.hue}, 70%, 70%) 0%,
                  hsl(${tile.hue}, 50%, 40%) 100%
                )`,
                opacity: 0.8 + Math.random() * 0.2
              }}
            />
          ))}
        </div>

        {/* Central highlight */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Scattered light spots */}
      {visible && !reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
