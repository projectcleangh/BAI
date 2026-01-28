'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type SemanticImageType = 'mirror' | 'disco-ball' | 'tree' | 'crown' | 'rest' | 'garden';

interface SemanticImageProps {
  type: SemanticImageType;
  isVisible: boolean;
  className?: string;
}

/**
 * Semantic images that appear to explain concepts
 * These are CSS/SVG based for performance
 * Only appear when the related concept is discussed
 */
export function SemanticImage({ type, isVisible, className = '' }: SemanticImageProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  const renderImage = () => {
    switch (type) {
      case 'disco-ball':
        return <DiscoBall isExiting={isExiting} reducedMotion={reducedMotion} />;
      case 'mirror':
        return <Mirror isExiting={isExiting} reducedMotion={reducedMotion} />;
      case 'tree':
        return <Tree isExiting={isExiting} reducedMotion={reducedMotion} />;
      case 'crown':
        return <Crown isExiting={isExiting} reducedMotion={reducedMotion} />;
      case 'rest':
        return <RestSymbol isExiting={isExiting} reducedMotion={reducedMotion} />;
      case 'garden':
        return <Garden isExiting={isExiting} reducedMotion={reducedMotion} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`
        semantic-image
        ${isVisible && !isExiting ? 'visible' : ''}
        ${isExiting ? 'exit' : ''}
        ${className}
      `}
    >
      {renderImage()}
    </div>
  );
}

// Disco Ball - only for "image of God" discussions
function DiscoBall({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Main ball */}
      <div
        className={`
          w-full h-full rounded-full
          bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600
          shadow-2xl
          ${!reducedMotion && !isExiting ? 'animate-spin-slow' : ''}
        `}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%),
            linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)
          `,
        }}
      >
        {/* Facets */}
        <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 gap-0.5 rounded-full overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/40 to-white/10"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Light rays */}
      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-24 bg-gradient-to-b from-neon-gold/50 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-50%)`,
                transformOrigin: 'top',
                animation: `pulse-glow 2s ease-in-out infinite`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Mirror
function Mirror({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-24 h-32 mx-auto">
      {/* Frame */}
      <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-neon-gold to-amber-700 p-1">
        {/* Glass */}
        <div
          className={`
            w-full h-full rounded-t-full
            bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500
            ${!reducedMotion && !isExiting ? 'animate-pulse-glow' : ''}
          `}
          style={{
            background: `
              linear-gradient(135deg,
                rgba(255,255,255,0.9) 0%,
                rgba(200,200,220,0.7) 50%,
                rgba(150,150,170,0.5) 100%
              )
            `,
          }}
        />
      </div>
      {/* Reflection hint */}
      <div className="absolute top-4 left-4 right-4 h-8 bg-white/30 rounded-t-full blur-sm" />
    </div>
  );
}

// Tree (for "implanted word")
function Tree({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-24 h-32 mx-auto">
      {/* Trunk */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-t from-amber-900 to-amber-700 rounded" />
      {/* Canopy */}
      <div
        className={`
          absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20
          bg-gradient-to-b from-neon-green to-emerald-700
          rounded-full
          ${!reducedMotion && !isExiting ? 'animate-float' : ''}
        `}
      />
      {/* Highlight */}
      <div className="absolute top-2 left-1/2 -translate-x-1/4 w-8 h-8 bg-white/20 rounded-full blur-sm" />
    </div>
  );
}

// Crown (for "rule")
function Crown({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-28 h-20 mx-auto">
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <defs>
          <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
        <path
          d="M10 50 L10 25 L25 35 L40 15 L50 30 L60 15 L75 35 L90 25 L90 50 Z"
          fill="url(#crown-gradient)"
          className={!reducedMotion && !isExiting ? 'animate-pulse-glow' : ''}
        />
        {/* Jewels */}
        <circle cx="25" cy="40" r="4" fill="#FF3B3B" />
        <circle cx="50" cy="35" r="5" fill="#00FF87" />
        <circle cx="75" cy="40" r="4" fill="#B14EFF" />
      </svg>
    </div>
  );
}

// Rest symbol (peaceful wave)
function RestSymbol({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-32 h-16 mx-auto">
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <path
          d="M0 20 Q25 5 50 20 Q75 35 100 20"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="2"
          className={!reducedMotion && !isExiting ? 'animate-pulse-glow' : ''}
        />
        <path
          d="M0 25 Q25 10 50 25 Q75 40 100 25"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// Garden (Eden)
function Garden({ isExiting, reducedMotion }: { isExiting: boolean; reducedMotion: boolean }) {
  return (
    <div className="relative w-32 h-24 mx-auto flex items-end justify-center gap-2">
      {/* Plants */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`
            w-3 rounded-t-full bg-gradient-to-t from-emerald-700 to-neon-green
            ${!reducedMotion && !isExiting ? 'animate-float' : ''}
          `}
          style={{
            height: `${16 + Math.random() * 32}px`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
