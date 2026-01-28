'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ScrollSection } from '@/components/ScrollSection';
import { WordReveal } from '@/components/WordReveal';
import { SemanticImage } from '@/components/SemanticImage';
import { SplitBackground } from '@/components/SplitBackground';
import { frameworkContent, type ContentBlock } from '@/lib/content';

/**
 * Framework Page (Part 0)
 * Daily Duppy style reveal of framework concepts
 */
export default function FrameworkPage() {
  const router = useRouter();
  const [activeImageType, setActiveImageType] = useState<string | null>(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);

  const handleBlockEnter = useCallback((block: ContentBlock, index: number) => {
    setCurrentBlockIndex(index);
    if (block.semanticImage) {
      setActiveImageType(block.semanticImage);
    }
  }, []);

  const handleBlockLeave = useCallback((block: ContentBlock) => {
    if (block.semanticImage) {
      // Small delay before hiding to prevent flicker
      setTimeout(() => {
        setActiveImageType((current) =>
          current === block.semanticImage ? null : current
        );
      }, 300);
    }
  }, []);

  const handleContinueToThreshold = () => {
    router.push('/threshold');
  };

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Progress dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 space-y-2">
        {frameworkContent.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentBlockIndex
                ? 'bg-neon-green scale-150'
                : index < currentBlockIndex
                ? 'bg-neon-green/50'
                : 'bg-slate-dark'
              }
            `}
          />
        ))}
      </div>

      {/* Intro section */}
      <ScrollSection className="bg-deep-black">
        <div className="text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-6">
            FRAMEWORK
          </h1>
          <p className="text-xl text-text-secondary max-w-md mx-auto">
            Before we dive in, let&apos;s establish how to read.
          </p>
          <div className="mt-12 animate-bounce">
            <span className="text-text-dim text-sm">Scroll</span>
          </div>
        </div>
      </ScrollSection>

      {/* Content blocks */}
      {frameworkContent.map((block, index) => (
        <ScrollSection
          key={block.id}
          onEnter={() => handleBlockEnter(block, index)}
          onLeave={() => handleBlockLeave(block)}
          className="relative"
        >
          <div className="w-full max-w-5xl mx-auto px-6 py-20">
            {/* Semantic image overlay */}
            {block.semanticImage && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30">
                <SemanticImage
                  type={block.semanticImage as any}
                  isVisible={activeImageType === block.semanticImage}
                />
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              {block.splitBackground ? (
                <SplitBackground className="py-12 -mx-6 px-6">
                  <div className="text-center">
                    <WordReveal
                      text={block.text}
                      type={block.type}
                      emphasis={block.emphasis}
                    />
                  </div>
                </SplitBackground>
              ) : (
                <div className="text-center">
                  <WordReveal
                    text={block.text}
                    type={block.type}
                    emphasis={block.emphasis}
                  />
                  {block.reference && (
                    <p className="mt-4 text-sm font-mono text-text-dim">
                      {block.reference}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollSection>
      ))}

      {/* Transition to Threshold */}
      <ScrollSection className="bg-charcoal/30">
        <div className="text-center px-6 py-20">
          <p className="text-text-secondary text-xl mb-4">
            Now, before we explore Eden...
          </p>
          <p className="text-text-dim mb-12">
            Let us read the foundation.
          </p>

          <button
            onClick={handleContinueToThreshold}
            className="
              inline-flex items-center gap-3 px-8 py-4
              bg-neon-green text-deep-black
              text-lg font-semibold rounded-xl
              hover:bg-neon-green/90 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-deep-black
            "
          >
            Read Genesis 1
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </ScrollSection>
    </div>
  );
}
