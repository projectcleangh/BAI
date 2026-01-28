'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAccessibility } from '@/contexts/AccessibilityContext';

type ImageType = 'mirror' | 'tree' | 'light' | 'crown' | 'garden';

interface SemanticImageProps {
  type: ImageType;
  visible: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-20 h-20',
  md: 'w-32 h-32',
  lg: 'w-48 h-48'
};

export function SemanticImage({ type, visible, size = 'md', className = '' }: SemanticImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAccessibility();

  useEffect(() => {
    if (!ref.current) return;

    if (visible) {
      gsap.to(ref.current, {
        opacity: 1,
        scale: 1,
        duration: reducedMotion ? 0 : 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        scale: 0.9,
        duration: reducedMotion ? 0 : 0.3
      });
    }
  }, [visible, reducedMotion]);

  return (
    <div
      ref={ref}
      className={`${sizeMap[size]} opacity-0 scale-90 ${className}`}
    >
      {renderImage(type)}
    </div>
  );
}

function renderImage(type: ImageType) {
  switch (type) {
    case 'mirror':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Mirror frame */}
          <ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="45"
            fill="none"
            stroke="url(#mirrorGradient)"
            strokeWidth="4"
          />
          {/* Mirror surface */}
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="40"
            fill="url(#mirrorSurface)"
          />
          {/* Shine */}
          <ellipse
            cx="40"
            cy="35"
            rx="8"
            ry="12"
            fill="rgba(255,255,255,0.3)"
          />
          <defs>
            <linearGradient id="mirrorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="mirrorSurface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'tree':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Trunk */}
          <rect x="45" y="60" width="10" height="30" fill="#8B4513" />
          {/* Foliage layers */}
          <polygon points="50,10 20,45 80,45" fill="#059669" />
          <polygon points="50,25 25,55 75,55" fill="#10b981" />
          <polygon points="50,40 30,65 70,65" fill="#34d399" />
        </svg>
      );

    case 'light':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
              stroke="#fbbf24"
              strokeWidth="3"
              strokeLinecap="round"
              opacity={0.6 + (i % 2) * 0.4}
            />
          ))}
          {/* Center glow */}
          <circle cx="50" cy="50" r="15" fill="url(#lightGlow)" />
          <defs>
            <radialGradient id="lightGlow">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fbbf24" />
            </radialGradient>
          </defs>
        </svg>
      );

    case 'crown':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,70 L30,40 L50,55 L70,40 L80,70 Z"
            fill="url(#crownGold)"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          {/* Jewels */}
          <circle cx="30" cy="50" r="5" fill="#67e8f9" />
          <circle cx="50" cy="45" r="6" fill="#f87171" />
          <circle cx="70" cy="50" r="5" fill="#a78bfa" />
          <defs>
            <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'garden':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Ground */}
          <ellipse cx="50" cy="85" rx="45" ry="10" fill="#166534" />
          {/* Plants */}
          <circle cx="25" cy="70" r="12" fill="#22c55e" />
          <circle cx="50" cy="65" r="15" fill="#16a34a" />
          <circle cx="75" cy="70" r="12" fill="#22c55e" />
          {/* Flowers */}
          <circle cx="30" cy="55" r="4" fill="#f472b6" />
          <circle cx="55" cy="50" r="5" fill="#fbbf24" />
          <circle cx="70" cy="58" r="4" fill="#c084fc" />
          {/* Sun */}
          <circle cx="80" cy="20" r="10" fill="#fcd34d" />
        </svg>
      );

    default:
      return null;
  }
}
