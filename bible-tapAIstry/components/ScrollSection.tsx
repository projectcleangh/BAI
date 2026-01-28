'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  threshold?: number;
}

/**
 * Scroll-triggered section wrapper
 * Handles intersection observation for GSAP-style scroll effects
 */
export function ScrollSection({
  children,
  id,
  className = '',
  onEnter,
  onLeave,
  threshold = 0.3,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInView;
        const nowInView = entry.isIntersecting;

        setIsInView(nowInView);

        if (nowInView && !wasInView) {
          onEnter?.();
        } else if (!nowInView && wasInView) {
          onLeave?.();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isInView, onEnter, onLeave, threshold]);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        min-h-screen flex items-center justify-center
        ${reducedMotion ? '' : 'transition-opacity duration-500'}
        ${isInView ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      data-in-view={isInView}
    >
      {children}
    </section>
  );
}

/**
 * Full-screen panel section (F1 dashboard style)
 */
interface PanelSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function PanelSection({
  children,
  title,
  subtitle,
  className = '',
}: PanelSectionProps) {
  return (
    <ScrollSection className={className}>
      <div className="w-full max-w-5xl mx-auto px-6 py-20">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className="text-sm font-mono text-neon-green tracking-widest uppercase mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </ScrollSection>
  );
}

/**
 * Stacked reveal sections (reveals content as you scroll)
 */
interface StackedRevealProps {
  items: ReactNode[];
  className?: string;
}

export function StackedReveal({ items, className = '' }: StackedRevealProps) {
  return (
    <div className={`space-y-32 ${className}`}>
      {items.map((item, index) => (
        <ScrollSection key={index} threshold={0.5}>
          {item}
        </ScrollSection>
      ))}
    </div>
  );
}
