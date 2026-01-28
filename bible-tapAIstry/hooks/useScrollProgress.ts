'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';

interface ScrollProgressOptions {
  threshold?: number; // Percentage to consider "complete" (0-1)
  offset?: number; // Pixel offset for completion
}

interface ScrollProgressResult {
  progress: number; // 0-1 scroll progress
  isComplete: boolean; // Whether threshold is reached
  scrollToBottom: () => void; // Helper to scroll to bottom
}

/**
 * Hook to track scroll progress within a container
 * Used for Scripture Threshold gating
 */
export function useScrollProgress(
  containerRef: RefObject<HTMLElement>,
  options: ScrollProgressOptions = {}
): ScrollProgressResult {
  const { threshold = 0.95, offset = 50 } = options;
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const calculateProgress = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      setProgress(1);
      setIsComplete(true);
      return;
    }

    const currentProgress = Math.min(scrollTop / maxScroll, 1);
    setProgress(currentProgress);

    // Check if we've reached the threshold (accounting for offset)
    const reachedEnd = scrollTop + clientHeight >= scrollHeight - offset;
    const reachedThreshold = currentProgress >= threshold;
    setIsComplete(reachedEnd || reachedThreshold);
  }, [containerRef, threshold, offset]);

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial calculation
    calculateProgress();

    // Listen for scroll events
    container.addEventListener('scroll', calculateProgress, { passive: true });

    // Also listen for resize
    const resizeObserver = new ResizeObserver(calculateProgress);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', calculateProgress);
      resizeObserver.disconnect();
    };
  }, [containerRef, calculateProgress]);

  return { progress, isComplete, scrollToBottom };
}

/**
 * Hook to track page scroll progress
 */
export function usePageScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        setProgress(1);
        return;
      }

      setProgress(Math.min(scrollTop / maxScroll, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
}
