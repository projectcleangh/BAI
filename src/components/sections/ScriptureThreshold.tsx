'use client';

import { useRef, useState, useCallback } from 'react';
import { genesis1 } from '@/data/genesis1';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { VerticalProgressIndicator } from '@/components/ui/ProgressIndicator';
import { ContinueButton } from '@/components/ui/ContinueButton';
import { HoverWord } from '@/components/effects/ImpactWord';

interface ScriptureThresholdProps {
  onComplete: () => void;
}

export function ScriptureThreshold({ onComplete }: ScriptureThresholdProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { progress, hasReachedEnd } = useScrollProgress(scrollContainerRef);
  const [canContinue, setCanContinue] = useState(false);
  const { dyslexiaMode, reducedMotion } = useAccessibility();

  // Enable continue only when user has scrolled to the end
  const handleScroll = useCallback(() => {
    if (hasReachedEnd && !canContinue) {
      setCanContinue(true);
    }
  }, [hasReachedEnd, canContinue]);

  // Split verse text into words for hover effects
  const renderVerseText = (text: string, highlightWords?: string[]) => {
    const words = text.split(' ');

    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,;:!?]/g, '');
      const isHighlight = highlightWords?.some(
        hw => cleanWord.toLowerCase() === hw.toLowerCase()
      );

      return (
        <span key={i}>
          <HoverWord
            className={`
              ${isHighlight ? 'text-cyan-400 font-semibold' : ''}
            `}
          >
            {word}
          </HoverWord>
          {' '}
        </span>
      );
    });
  };

  return (
    <section className="relative h-screen bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-8 py-6 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Genesis 1</h2>
            <p className="text-zinc-500 text-sm">The Beginning</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
              Scripture Threshold
            </div>
            <div className="text-cyan-400 text-sm">
              {Math.round(progress)}% read
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <VerticalProgressIndicator progress={progress} />

      {/* Scripture content - scrollable */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto scroll-smooth"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#67e8f9 #27272a'
        }}
      >
        <div className="max-w-3xl mx-auto px-8 py-12">
          {/* Chapter heading */}
          <div className="text-center mb-16">
            <span className="text-6xl font-black text-zinc-800">1</span>
          </div>

          {/* Verses */}
          <div
            className={`
              space-y-8
              ${dyslexiaMode ? 'leading-loose tracking-wide' : 'leading-relaxed'}
            `}
            style={{
              fontFamily: dyslexiaMode ? 'OpenDyslexic, Comic Sans MS, sans-serif' : 'Georgia, serif'
            }}
          >
            {genesis1.map((verse) => (
              <div
                key={verse.number}
                className={`
                  group relative
                  ${!reducedMotion ? 'transition-all duration-300 hover:bg-zinc-900/30' : ''}
                  rounded-lg p-4 -mx-4
                `}
              >
                {/* Verse number */}
                <span className="absolute -left-2 text-cyan-500/50 text-sm font-mono select-none">
                  {verse.number}
                </span>

                {/* Verse text */}
                <p
                  className={`
                    text-zinc-200 text-lg md:text-xl
                    ${dyslexiaMode ? 'text-xl leading-loose' : ''}
                  `}
                >
                  {renderVerseText(verse.text, verse.highlightWords)}
                </p>
              </div>
            ))}
          </div>

          {/* End marker */}
          <div className="mt-16 pt-16 border-t border-zinc-800 text-center">
            <div className="inline-flex items-center gap-2 text-zinc-500 mb-8">
              <span className="w-12 h-px bg-zinc-700" />
              <span className="text-sm uppercase tracking-widest">End of Chapter</span>
              <span className="w-12 h-px bg-zinc-700" />
            </div>

            {/* Reverent message */}
            <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
              {canContinue
                ? "You have read God's word. Now let's explore what it means."
                : "Continue scrolling to read the complete chapter."}
            </p>

            {/* Continue button */}
            <div className="pb-8">
              <ContinueButton
                enabled={canContinue}
                onClick={onComplete}
                text="Enter Eden"
              />
            </div>
          </div>

          {/* Extra space for comfortable scrolling */}
          <div className="h-32" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
