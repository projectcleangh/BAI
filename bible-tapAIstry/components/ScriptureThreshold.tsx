'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowDown, Check, BookOpen } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useThresholdStore } from '@/hooks/useThresholdStore';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ProgressIndicator } from './ProgressIndicator';
import { genesis1, type Verse } from '@/lib/genesis1';

interface ScriptureThresholdProps {
  onComplete?: () => void;
}

/**
 * Scripture Threshold - Gating component
 * Users must scroll through Genesis 1 before proceeding
 * Reverent, not punitive
 */
export function ScriptureThreshold({ onComplete }: ScriptureThresholdProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress, isComplete } = useScrollProgress(containerRef, {
    threshold: 0.95,
    offset: 100,
  });
  const { setPassedThreshold } = useThresholdStore();
  const reducedMotion = useReducedMotion();
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleContinue = useCallback(() => {
    if (isComplete) {
      setPassedThreshold(true);
      onComplete?.();
      router.push('/eden');
    }
  }, [isComplete, setPassedThreshold, onComplete, router]);

  // Track first interaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleFirstScroll = () => {
      setHasInteracted(true);
      container.removeEventListener('scroll', handleFirstScroll);
    };

    container.addEventListener('scroll', handleFirstScroll, { once: true });
    return () => container.removeEventListener('scroll', handleFirstScroll);
  }, []);

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Progress indicator */}
      <ProgressIndicator progress={progress} isComplete={isComplete} />

      {/* Header */}
      <div className="fixed top-20 left-0 right-0 z-20 bg-deep-black/90 backdrop-blur-sm border-b border-slate-dark/30 py-4">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-neon-green" />
            <h2 className="text-lg font-semibold text-text-primary">
              Genesis 1
            </h2>
            <span className="text-sm text-text-dim">The Beginning</span>
          </div>
          <div className="text-sm font-mono text-text-secondary">
            {Math.round(progress * 31)}/31 verses
          </div>
        </div>
      </div>

      {/* Scripture container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto pt-40 pb-48 px-6"
        style={{ scrollBehavior: reducedMotion ? 'auto' : 'smooth' }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Intro message */}
          <div className="mb-16 text-center">
            <p className="text-text-secondary text-lg mb-4">
              Before we explore, let us read.
            </p>
            <p className="text-text-dim text-sm">
              Scroll through the chapter to continue.
            </p>
          </div>

          {/* Verses */}
          <div className="space-y-8">
            {genesis1.map((verse) => (
              <VerseBlock key={verse.number} verse={verse} />
            ))}
          </div>

          {/* End marker */}
          <div className="mt-16 text-center">
            <div className="inline-block w-16 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent" />
            <p className="mt-4 text-text-dim text-sm font-mono">
              End of Genesis 1
            </p>
          </div>
        </div>
      </div>

      {/* Scroll prompt (shows when not scrolled) */}
      {!hasInteracted && (
        <div
          className={`
            fixed bottom-32 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-2
            text-text-secondary
            ${reducedMotion ? '' : 'animate-bounce'}
          `}
        >
          <span className="text-sm">Scroll to read</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      )}

      {/* Continue button */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-deep-black via-deep-black to-transparent pt-16 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={handleContinue}
            disabled={!isComplete}
            className={`
              w-full py-4 px-6 rounded-xl
              flex items-center justify-center gap-3
              text-lg font-semibold
              transition-all duration-300
              ${isComplete
                ? 'bg-neon-green text-deep-black hover:bg-neon-green/90 cursor-pointer'
                : 'bg-charcoal text-text-dim cursor-not-allowed'
              }
              focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-deep-black
            `}
            aria-disabled={!isComplete}
          >
            {isComplete ? (
              <>
                <Check className="w-5 h-5" />
                Continue to Eden
              </>
            ) : (
              <>
                <ArrowDown className="w-5 h-5" />
                Read to continue
              </>
            )}
          </button>

          {!isComplete && (
            <p className="mt-3 text-center text-text-dim text-sm">
              {Math.round(progress * 100)}% complete
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Individual verse block with hover effects
 */
function VerseBlock({ verse }: { verse: Verse }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Highlight key verses
  const isKeyVerse = [1, 3, 26, 27, 31].includes(verse.number);

  return (
    <div
      ref={ref}
      className={`
        relative group
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${reducedMotion ? 'transition-none' : ''}
      `}
      style={{ transitionDelay: reducedMotion ? '0ms' : '100ms' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Key verse indicator */}
      {isKeyVerse && (
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-neon-gold/50 rounded-full" />
      )}

      <div
        className={`
          scripture-text
          ${isKeyVerse ? 'text-text-primary' : ''}
          ${isHovered && !reducedMotion ? 'scale-[1.01]' : ''}
          transition-transform duration-200
        `}
      >
        <sup className="verse-number">{verse.number}</sup>
        <VerseText text={verse.text} isHovered={isHovered && !reducedMotion} />
      </div>
    </div>
  );
}

/**
 * Verse text with word-level hover effects
 */
function VerseText({ text, isHovered }: { text: string; isHovered: boolean }) {
  const words = text.split(' ');

  return (
    <span>
      {words.map((word, index) => (
        <span
          key={index}
          className={`
            inline-block hover-lift
            ${isHovered ? 'opacity-100' : 'opacity-90'}
          `}
          style={{
            transitionDelay: `${index * 10}ms`,
          }}
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
