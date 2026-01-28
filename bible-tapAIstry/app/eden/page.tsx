'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ChevronLeft, RotateCcw } from 'lucide-react';
import { ScrollSection } from '@/components/ScrollSection';
import { WordReveal, MultiWordReveal } from '@/components/WordReveal';
import { SemanticImage } from '@/components/SemanticImage';
import { SplitBackground } from '@/components/SplitBackground';
import { useThresholdStore } from '@/hooks/useThresholdStore';
import { edenContent, type ContentBlock } from '@/lib/content';

/**
 * Eden Page (Part 1)
 * The beginning - Creation, Image of God, Eden
 * Disco ball imagery for "image of God" discussions
 */
export default function EdenPage() {
  const router = useRouter();
  const { hasPassedThreshold, resetThreshold } = useThresholdStore();
  const [activeImageType, setActiveImageType] = useState<string | null>(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user has passed threshold
  useEffect(() => {
    if (mounted && !hasPassedThreshold) {
      router.push('/threshold');
    }
  }, [hasPassedThreshold, router, mounted]);

  const handleBlockEnter = useCallback((block: ContentBlock, index: number) => {
    setCurrentBlockIndex(index);
    if (block.semanticImage) {
      setActiveImageType(block.semanticImage);
    }
  }, []);

  const handleBlockLeave = useCallback((block: ContentBlock) => {
    if (block.semanticImage) {
      setTimeout(() => {
        setActiveImageType((current) =>
          current === block.semanticImage ? null : current
        );
      }, 300);
    }
  }, []);

  const handleRestart = () => {
    resetThreshold();
    router.push('/framework');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Progress dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 space-y-2">
        {edenContent.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentBlockIndex
                ? 'bg-neon-gold scale-150'
                : index < currentBlockIndex
                ? 'bg-neon-gold/50'
                : 'bg-slate-dark'
              }
            `}
          />
        ))}
      </div>

      {/* Floating semantic image (only for disco-ball on image of God) */}
      {activeImageType === 'disco-ball' && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <div className="w-64 h-64 opacity-20">
            <SemanticImage type="disco-ball" isVisible={true} />
          </div>
        </div>
      )}

      {/* Intro section */}
      <ScrollSection className="bg-deep-black relative overflow-hidden">
        {/* Subtle garden backdrop */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900 to-transparent" />
        </div>

        <div className="text-center px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-neon-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-6">
            EDEN
          </h1>
          <p className="text-xl text-text-secondary max-w-md mx-auto">
            In the beginning, God.
          </p>
          <div className="mt-12 animate-bounce">
            <span className="text-text-dim text-sm">Scroll</span>
          </div>
        </div>
      </ScrollSection>

      {/* Content blocks */}
      {edenContent.map((block, index) => (
        <ScrollSection
          key={block.id}
          onEnter={() => handleBlockEnter(block, index)}
          onLeave={() => handleBlockLeave(block)}
          className="relative"
        >
          <div className="w-full max-w-5xl mx-auto px-6 py-20">
            {/* Semantic image (contextual, not decorative) */}
            {block.semanticImage && block.semanticImage !== 'disco-ball' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20">
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
                  {/* Special handling for disco ball - shimmer effect on text */}
                  {block.semanticImage === 'disco-ball' ? (
                    <div className="disco-shimmer">
                      <WordReveal
                        text={block.text}
                        type={block.type}
                        emphasis={block.emphasis}
                        className="disco-shimmer"
                      />
                    </div>
                  ) : (
                    <WordReveal
                      text={block.text}
                      type={block.type}
                      emphasis={block.emphasis}
                    />
                  )}
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

      {/* Special: Rule, Reflect, Fill triad */}
      <ScrollSection className="bg-charcoal/20">
        <div className="text-center px-6 py-20">
          <p className="text-text-secondary text-xl mb-12">
            Humanity&apos;s purpose in three words:
          </p>
          <MultiWordReveal
            words={['RULE', 'REFLECT', 'FILL']}
            staggerDelay={400}
          />
        </div>
      </ScrollSection>

      {/* Conclusion */}
      <ScrollSection className="bg-deep-black">
        <div className="text-center px-6 py-20">
          <div className="mb-12">
            <p className="text-2xl text-text-primary mb-4">
              Eden was rich.
            </p>
            <p className="text-xl text-text-secondary">
              But not the world we see now.
            </p>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon-gold to-transparent mx-auto mb-12" />

          <p className="text-text-dim text-sm mb-8">
            The story continues...
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push('/framework')}
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-charcoal text-text-secondary
                rounded-lg border border-slate-dark
                hover:bg-slate-dark hover:text-text-primary
                transition-all duration-300
              "
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Framework
            </button>

            <button
              onClick={handleRestart}
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-transparent text-text-dim
                rounded-lg border border-slate-dark/50
                hover:border-slate-dark hover:text-text-secondary
                transition-all duration-300
              "
            >
              <RotateCcw className="w-4 h-4" />
              Start Over
            </button>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
