'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { frameworkContent } from '@/data/genesis1';
import { ImpactWord } from '@/components/effects/ImpactWord';
import { SemanticImage } from '@/components/effects/SemanticImage';
import { SplitBackground } from '@/components/effects/SplitBackground';

gsap.registerPlugin(ScrollTrigger);

interface FrameworkSectionProps {
  onComplete: () => void;
}

export function FrameworkSection({ onComplete }: FrameworkSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMirror, setShowMirror] = useState(false);
  const { reducedMotion, dyslexiaMode } = useAccessibility();

  useEffect(() => {
    if (!containerRef.current || reducedMotion) {
      // In reduced motion, just show all content
      return;
    }

    const panels = gsap.utils.toArray<HTMLElement>('.framework-panel');

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setCurrentIndex(i);
          // Show mirror when "Scripture is a mirror" appears
          if (frameworkContent[i]?.id === 'mirror') {
            setShowMirror(true);
          }
        },
        onEnterBack: () => {
          setCurrentIndex(i);
          if (frameworkContent[i]?.id === 'mirror') {
            setShowMirror(true);
          }
        },
        onLeave: () => {
          if (frameworkContent[i]?.id === 'mirror') {
            setShowMirror(false);
          }
        },
        onLeaveBack: () => {
          if (frameworkContent[i]?.id === 'mirror') {
            setShowMirror(false);
          }
        }
      });
    });

    // Final trigger to complete section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'bottom bottom',
      onEnter: onComplete
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [onComplete, reducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[500vh] bg-zinc-950"
    >
      {/* Fixed background that changes with panels */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <SplitBackground
          direction="diagonal"
          colorScheme={currentIndex % 2 === 0 ? 'yellow-black' : 'cyan-black'}
          active={true}
          className="w-full h-full opacity-10"
        >
          <div />
        </SplitBackground>
      </div>

      {/* Mirror image - appears semantically */}
      <div className="fixed top-1/2 right-16 -translate-y-1/2 z-20 pointer-events-none">
        <SemanticImage type="mirror" visible={showMirror} size="lg" />
      </div>

      {/* Content panels */}
      <div className="relative z-10">
        {/* Title panel */}
        <div className="framework-panel h-screen flex items-center justify-center">
          <div className="text-center px-8">
            <div className="mb-4 text-cyan-400 text-sm uppercase tracking-widest">
              Part 0
            </div>
            <ImpactWord word="Framework" size="4xl" color="white" />
          </div>
        </div>

        {/* Content panels */}
        {frameworkContent.map((item, index) => (
          <div
            key={item.id}
            className="framework-panel h-screen flex items-center justify-center"
          >
            <div className="max-w-4xl px-8 text-center">
              <p
                className={`
                  text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed
                  ${dyslexiaMode ? 'tracking-wide leading-loose' : 'tracking-tight'}
                  ${item.id === 'glory' ? 'text-amber-400' : 'text-white'}
                `}
                style={{
                  fontFamily: dyslexiaMode ? 'OpenDyslexic, Comic Sans MS, sans-serif' : 'inherit'
                }}
              >
                {item.text}
              </p>
              {item.reference && (
                <p className="mt-6 text-zinc-500 text-lg">
                  {item.reference}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Transition panel */}
        <div className="framework-panel h-screen flex items-center justify-center">
          <div className="text-center px-8">
            <p className="text-zinc-400 text-xl mb-8">
              Now, let&apos;s read the Scripture.
            </p>
            <div className="text-cyan-400">
              <svg className="w-8 h-8 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
