'use client';

import { useState, useEffect } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { AccessibilityToggle } from '@/components/ui/AccessibilityToggle';
import { ProgressIndicator } from '@/components/ui/ProgressIndicator';
import { FrameworkSection } from '@/components/sections/FrameworkSection';
import { ScriptureThreshold } from '@/components/sections/ScriptureThreshold';
import { EdenSection } from '@/components/sections/EdenSection';
import { ImpactWord } from '@/components/effects/ImpactWord';

type AppPhase = 'intro' | 'framework' | 'scripture' | 'eden';

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>('intro');
  const [overallProgress, setOverallProgress] = useState(0);
  const { dyslexiaMode, reducedMotion } = useAccessibility();

  // Update progress based on phase
  useEffect(() => {
    const progressMap: Record<AppPhase, number> = {
      intro: 0,
      framework: 25,
      scripture: 50,
      eden: 75
    };
    setOverallProgress(progressMap[phase]);
  }, [phase]);

  const handleEnterExperience = () => {
    setPhase('framework');
  };

  const handleFrameworkComplete = () => {
    setPhase('scripture');
  };

  const handleScriptureComplete = () => {
    setPhase('eden');
  };

  return (
    <main className={`min-h-screen ${dyslexiaMode ? 'dyslexia-mode' : ''}`}>
      {/* Global accessibility toggle */}
      <AccessibilityToggle />

      {/* Global progress indicator */}
      {phase !== 'intro' && <ProgressIndicator progress={overallProgress} />}

      {/* Phase: Intro */}
      {phase === 'intro' && (
        <IntroSection onEnter={handleEnterExperience} reducedMotion={reducedMotion} />
      )}

      {/* Phase: Framework (Part 0) */}
      {phase === 'framework' && (
        <FrameworkSection onComplete={handleFrameworkComplete} />
      )}

      {/* Phase: Scripture Threshold */}
      {phase === 'scripture' && (
        <ScriptureThreshold onComplete={handleScriptureComplete} />
      )}

      {/* Phase: Eden (Part 1) */}
      {phase === 'eden' && (
        <EdenSection />
      )}
    </main>
  );
}

// Intro Section Component
interface IntroSectionProps {
  onEnter: () => void;
  reducedMotion: boolean;
}

function IntroSection({ onEnter, reducedMotion }: IntroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
        style={{
          backgroundSize: '400% 400%',
          animation: reducedMotion ? 'none' : 'gradientShift 15s ease infinite'
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div
        className={`
          relative z-10 text-center px-8 max-w-4xl
          transition-all duration-1000
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Logo/Brand */}
        <div className="mb-8">
          <span className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-medium">
            A Scripture Overview Experience
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6">
          <ImpactWord word="Bible" size="3xl" color="white" delay={0.2} />
          <span className="block h-4" />
          <ImpactWord word="TapAIstry" size="4xl" color="cyan" delay={0.4} />
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
          Read. Engage. Understand.
        </p>

        {/* Enter button */}
        <button
          onClick={onEnter}
          className={`
            group relative px-12 py-5 rounded-full
            bg-gradient-to-r from-cyan-500 to-emerald-500
            text-black font-bold text-lg
            transition-all duration-300
            hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30
            ${!reducedMotion ? 'animate-pulse-subtle' : ''}
          `}
        >
          <span className="relative z-10 flex items-center gap-3">
            Begin Journey
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Scroll hint */}
        <div className="mt-16 text-zinc-600 text-sm">
          <p className="mb-2">Accessible & Dyslexia-Friendly</p>
          <p className="text-xs">Toggle reading mode in the top right</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700">
        <svg
          className={`w-6 h-6 ${!reducedMotion ? 'animate-bounce' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
