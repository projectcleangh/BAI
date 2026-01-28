'use client';

import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for GSAP scroll-triggered animations
 * Respects reduced motion preferences
 */
export function useScrollAnimation<T extends HTMLElement>(
  config: {
    animation: gsap.TweenVars;
    trigger?: gsap.DOMTarget;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    toggleActions?: string;
  }
): RefObject<T> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const element = ref.current;
    const {
      animation,
      trigger,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      markers = false,
      toggleActions = 'play none none reverse',
    } = config;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animation,
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          scrub,
          markers,
          toggleActions,
        },
      });
    });

    return () => ctx.revert();
  }, [config, reducedMotion]);

  return ref;
}

/**
 * Hook for parallax scrolling effect
 */
export function useParallax<T extends HTMLElement>(
  speed: number = 0.5
): RefObject<T> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, reducedMotion]);

  return ref;
}

/**
 * Hook for staggered reveal animation
 */
export function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  config: {
    stagger?: number;
    duration?: number;
    from?: gsap.TweenVars;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const container = ref.current;
    const elements = container.querySelectorAll(selector);

    if (elements.length === 0) return;

    const { stagger = 0.1, duration = 0.6, from = {} } = config;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        opacity: 0,
        y: 30,
        ...from,
        duration,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [selector, config, reducedMotion]);

  return ref;
}

/**
 * Hook for text reveal animation (word by word)
 */
export function useTextReveal<T extends HTMLElement>(
  config: {
    stagger?: number;
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const element = ref.current;
    const text = element.textContent || '';
    const words = text.split(' ');

    // Wrap each word in a span
    element.innerHTML = words
      .map((word) => `<span class="inline-block">${word}</span>`)
      .join(' ');

    const spans = element.querySelectorAll('span');

    const { stagger = 0.05, duration = 0.4 } = config;

    const ctx = gsap.context(() => {
      gsap.from(spans, {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
        duration,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ctx.revert();
      element.textContent = text; // Restore original text
    };
  }, [config, reducedMotion]);

  return ref;
}

/**
 * Hook for beat-sync animation (for future audio integration)
 */
export function useBeatSync<T extends HTMLElement>(
  bpm: number = 85
): {
  ref: RefObject<T>;
  triggerBeat: () => void;
  triggerImpact: () => void;
} {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const beatDuration = 60 / bpm;

  const triggerBeat = () => {
    if (reducedMotion || !ref.current) return;

    gsap.to(ref.current, {
      scale: 1.02,
      duration: beatDuration * 0.2,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    });
  };

  const triggerImpact = () => {
    if (reducedMotion || !ref.current) return;

    const tl = gsap.timeline();

    tl.to(ref.current, {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.out',
    })
      .to(ref.current, {
        x: 'random(-3, 3)',
        y: 'random(-2, 2)',
        duration: 0.05,
        repeat: 4,
        yoyo: true,
      })
      .to(ref.current, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });
  };

  return { ref, triggerBeat, triggerImpact };
}
