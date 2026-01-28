'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  dyslexiaMode: boolean;
  setDyslexiaMode: (value: boolean) => void;
  reducedMotion: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [dyslexiaMode, setDyslexiaMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('dyslexiaMode');
    if (saved) {
      setDyslexiaMode(JSON.parse(saved));
    }

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    localStorage.setItem('dyslexiaMode', JSON.stringify(dyslexiaMode));
  }, [dyslexiaMode]);

  return (
    <AccessibilityContext.Provider value={{ dyslexiaMode, setDyslexiaMode, reducedMotion }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
