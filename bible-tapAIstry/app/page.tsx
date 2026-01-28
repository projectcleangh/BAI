'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, Eye } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useDyslexiaMode } from '@/hooks/useDyslexiaMode';

/**
 * Home Page - Entry point to Bible TapAIstry
 * Clean, futuristic F1 dashboard style landing
 */
export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const { isDyslexiaMode, toggleDyslexiaMode } = useDyslexiaMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo / Title */}
          <div
            className={`
              mb-8
              ${reducedMotion ? '' : 'animate-float'}
            `}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-green via-neon-cyan to-neon-purple mb-6">
              <BookOpen className="w-10 h-10 text-deep-black" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight">
            Bible{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
              TapAIstry
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary mb-4 max-w-xl mx-auto">
            Scripture Overview Experience
          </p>

          <p className="text-text-dim mb-12 max-w-md mx-auto">
            A dynamic, semantic, and accessible way to explore the Bible.
            Be doers of the word, not hearers only.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/framework"
              className="
                inline-flex items-center gap-3 px-8 py-4
                bg-neon-green text-deep-black
                text-lg font-semibold rounded-xl
                hover:bg-neon-green/90 transition-all duration-300
                hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-deep-black
              "
            >
              Begin Journey
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/eden"
              className="
                inline-flex items-center gap-3 px-8 py-4
                bg-charcoal text-text-primary
                text-lg font-medium rounded-xl
                border border-slate-dark
                hover:bg-slate-dark transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-deep-black
              "
            >
              <Sparkles className="w-5 h-5 text-neon-gold" />
              Jump to Eden
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <FeatureCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Framework"
              description="How to read Scripture"
            />
            <FeatureCard
              icon={<Sparkles className="w-5 h-5" />}
              title="Eden"
              description="The beginning of everything"
            />
            <FeatureCard
              icon={<Eye className="w-5 h-5" />}
              title="Accessible"
              description="Dyslexia-friendly mode"
              onClick={mounted ? toggleDyslexiaMode : undefined}
              highlight={mounted && isDyslexiaMode}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-dark/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-dim text-sm">
            Built with reverence. Scroll with intention.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  highlight?: boolean;
}

function FeatureCard({ icon, title, description, onClick, highlight }: FeatureCardProps) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={`
        p-4 rounded-xl
        ${highlight ? 'bg-neon-green/10 border-neon-green/50' : 'bg-charcoal/50 border-slate-dark/50'}
        border
        text-left
        transition-all duration-300
        ${onClick ? 'cursor-pointer hover:bg-charcoal' : ''}
      `}
    >
      <div className={`mb-2 ${highlight ? 'text-neon-green' : 'text-neon-cyan'}`}>
        {icon}
      </div>
      <h3 className="text-text-primary font-medium mb-1">{title}</h3>
      <p className="text-text-dim text-sm">{description}</p>
    </Component>
  );
}
