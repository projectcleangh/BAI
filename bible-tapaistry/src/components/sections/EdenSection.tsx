'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { edenContent } from '@/data/genesis1';
import { ImpactWord } from '@/components/effects/ImpactWord';
import { DiscoBall } from '@/components/effects/DiscoBall';
import { SplitBackground } from '@/components/effects/SplitBackground';
import { SemanticImage } from '@/components/effects/SemanticImage';

gsap.registerPlugin(ScrollTrigger);

export function EdenSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showDiscoBall, setShowDiscoBall] = useState(false);
  const [showGarden, setShowGarden] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const { reducedMotion, dyslexiaMode } = useAccessibility();

  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;

    const panels = gsap.utils.toArray<HTMLElement>('.eden-panel');

    panels.forEach((panel, i) => {
      // Animate panel content on scroll
      gsap.fromTo(
        panel.querySelector('.panel-content'),
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Track current panel
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setCurrentIndex(i);
          updateSemanticImages(i);
        },
        onEnterBack: () => {
          setCurrentIndex(i);
          updateSemanticImages(i);
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [reducedMotion]);

  const updateSemanticImages = (index: number) => {
    const content = edenContent[index];
    if (!content) return;

    // Show disco ball ONLY when discussing image of God
    setShowDiscoBall(content.showDiscoBall || false);

    // Show garden for Eden content
    setShowGarden(content.id === 'eden');

    // Show tree for command content
    setShowTree(content.id === 'command');
  };

  // Get color scheme based on content type
  const getColorScheme = (type?: string) => {
    switch (type) {
      case 'key':
        return 'cyan-black';
      case 'warning':
        return 'amber-black';
      case 'transition':
        return 'emerald-black';
      default:
        return 'yellow-black';
    }
  };

  // Get text color based on content type
  const getTextColor = (type?: string) => {
    switch (type) {
      case 'key':
        return 'text-cyan-400';
      case 'warning':
        return 'text-amber-400';
      case 'metaphor':
        return 'text-purple-400';
      case 'trio':
        return 'text-emerald-400';
      default:
        return 'text-white';
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600vh] bg-zinc-950"
    >
      {/* Dynamic split background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <SplitBackground
          direction="diagonal"
          colorScheme={getColorScheme(edenContent[currentIndex]?.type)}
          active={currentIndex >= 0}
          className="w-full h-full opacity-15"
        >
          <div />
        </SplitBackground>
      </div>

      {/* Semantic images - appear contextually */}
      <div className="fixed top-1/2 right-16 -translate-y-1/2 z-20 pointer-events-none">
        <DiscoBall visible={showDiscoBall} size="lg" />
      </div>
      <div className="fixed bottom-24 left-16 z-20 pointer-events-none">
        <SemanticImage type="garden" visible={showGarden} size="lg" />
      </div>
      <div className="fixed top-1/3 left-16 z-20 pointer-events-none">
        <SemanticImage type="tree" visible={showTree} size="md" />
      </div>

      {/* Content panels */}
      <div className="relative z-10">
        {/* Title panel */}
        <div className="eden-panel h-screen flex items-center justify-center">
          <div className="panel-content text-center px-8">
            <div className="mb-4 text-emerald-400 text-sm uppercase tracking-widest">
              Part 1
            </div>
            <ImpactWord word="Eden" size="4xl" color="emerald" />
            <p className="mt-6 text-zinc-400 text-lg">
              The world as it was meant to be.
            </p>
          </div>
        </div>

        {/* Content panels */}
        {edenContent.map((item, index) => (
          <div
            key={item.id}
            className="eden-panel h-screen flex items-center justify-center"
          >
            <div className="panel-content max-w-4xl px-8 text-center">
              {/* Main text */}
              <p
                className={`
                  text-3xl md:text-5xl lg:text-6xl font-bold leading-tight
                  ${dyslexiaMode ? 'tracking-wide leading-relaxed' : 'tracking-tight'}
                  ${getTextColor(item.type)}
                `}
                style={{
                  fontFamily: dyslexiaMode ? 'OpenDyslexic, Comic Sans MS, sans-serif' : 'inherit'
                }}
              >
                {/* For "trio" type, split into separate emphasized words */}
                {item.type === 'trio' ? (
                  item.text.split(', ').map((word, i, arr) => (
                    <span key={i}>
                      <span className="inline-block hover:scale-110 transition-transform">
                        {word}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="mx-2 text-zinc-600">•</span>
                      )}
                    </span>
                  ))
                ) : (
                  item.text
                )}
              </p>

              {/* Reference if exists */}
              {'reference' in item && item.reference && (
                <p className="mt-6 text-zinc-500 text-lg">
                  {item.reference}
                </p>
              )}

              {/* Special decorative element for key concepts */}
              {item.type === 'key' && (
                <div className="mt-8 flex justify-center">
                  <span className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Closing panel */}
        <div className="eden-panel h-screen flex items-center justify-center">
          <div className="panel-content text-center px-8 max-w-2xl">
            <div className="text-6xl mb-8">🌅</div>
            <p className="text-2xl text-zinc-300 leading-relaxed">
              This was the world God created.
              <br />
              <span className="text-zinc-500">
                Beautiful. Purposeful. Very good.
              </span>
            </p>
            <p className="mt-8 text-amber-400/80 text-lg">
              But something happened...
            </p>
            <div className="mt-12 text-zinc-600 text-sm uppercase tracking-widest">
              To be continued
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
