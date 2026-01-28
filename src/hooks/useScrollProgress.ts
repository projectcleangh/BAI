'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';

export function useScrollProgress(containerRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const calculateProgress = useCallback(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;

    if (scrollHeight <= 0) {
      setProgress(100);
      setHasReachedEnd(true);
      return;
    }

    const currentProgress = Math.min((scrollTop / scrollHeight) * 100, 100);
    setProgress(currentProgress);

    // Consider "reached end" when within 10px of bottom
    if (scrollHeight - scrollTop < 10) {
      setHasReachedEnd(true);
    }
  }, [containerRef]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    element.addEventListener('scroll', calculateProgress);
    calculateProgress(); // Initial calculation

    return () => element.removeEventListener('scroll', calculateProgress);
  }, [containerRef, calculateProgress]);

  return { progress, hasReachedEnd };
}
