'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WordRevealProps {
  text: string;
  type?: 'declarative' | 'statement' | 'reference' | 'metaphor';
  emphasis?: 'high' | 'medium' | 'low';
  splitBackground?: boolean;
  delay?: number;
  className?: string;
  onReveal?: () => void;
}

/**
 * Word reveal component - Daily Duppy style
 * Big, declarative words that appear with impact
 */
export function WordReveal({
  text,
  type = 'statement',
  emphasis = 'medium',
  splitBackground = false,
  delay = 0,
  className = '',
  onReveal,
}: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
            onReveal?.();
          }, delay);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, onReveal]);

  const getTextStyles = () => {
    switch (type) {
      case 'declarative':
        return emphasis === 'high'
          ? 'text-6xl sm:text-7xl md:text-8xl lg:text-massive font-black declarative-text'
          : 'text-4xl sm:text-5xl md:text-6xl font-bold declarative-text';
      case 'reference':
        return 'text-sm font-mono text-text-dim tracking-wider';
      case 'metaphor':
        return 'text-2xl sm:text-3xl italic text-text-secondary';
      default:
        return emphasis === 'high'
          ? 'text-3xl sm:text-4xl md:text-5xl font-semibold'
          : emphasis === 'medium'
          ? 'text-2xl sm:text-3xl font-medium'
          : 'text-xl sm:text-2xl font-normal text-text-secondary';
    }
  };

  const getGlowStyles = () => {
    if (type !== 'declarative') return '';
    if (emphasis === 'high') return 'text-glow-gold';
    return '';
  };

  return (
    <div
      ref={ref}
      className={`
        relative
        ${splitBackground ? 'bg-split-yellow-black py-8 px-4 -mx-4' : ''}
        ${className}
      `}
    >
      <div
        className={`
          ${getTextStyles()}
          ${getGlowStyles()}
          ${splitBackground ? 'text-duppy-black mix-blend-difference' : 'text-text-primary'}
          ${reducedMotion ? '' : 'word-reveal'}
          ${isVisible || reducedMotion ? 'visible' : ''}
          transition-all duration-500
        `}
        style={{
          transitionDelay: reducedMotion ? '0ms' : `${delay}ms`,
        }}
      >
        {text}
      </div>
    </div>
  );
}

/**
 * Multi-word reveal - reveals words one by one
 */
interface MultiWordRevealProps {
  words: string[];
  type?: 'declarative' | 'statement';
  staggerDelay?: number;
  className?: string;
}

export function MultiWordReveal({
  words,
  type = 'declarative',
  staggerDelay = 200,
  className = '',
}: MultiWordRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      {words.map((word, index) => (
        <WordReveal
          key={`${word}-${index}`}
          text={word}
          type={type}
          emphasis="high"
          delay={reducedMotion ? 0 : index * staggerDelay}
        />
      ))}
    </div>
  );
}
