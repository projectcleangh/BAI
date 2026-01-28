'use client';

import { useEffect, useState } from 'react';
import { Eye, Type } from 'lucide-react';
import { useDyslexiaMode } from '@/hooks/useDyslexiaMode';

/**
 * Accessibility toggle button for dyslexia-friendly mode
 * Appears in the corner of the screen
 */
export function AccessibilityToggle() {
  const { isDyslexiaMode, toggleDyslexiaMode } = useDyslexiaMode();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleDyslexiaMode}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2 px-4 py-3
        rounded-full
        transition-all duration-300
        ${isDyslexiaMode
          ? 'bg-neon-green text-deep-black'
          : 'bg-charcoal text-text-secondary hover:text-text-primary border border-slate-dark'
        }
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-deep-black
      `}
      aria-label={isDyslexiaMode ? 'Disable dyslexia-friendly mode' : 'Enable dyslexia-friendly mode'}
      aria-pressed={isDyslexiaMode}
    >
      {isDyslexiaMode ? (
        <>
          <Eye className="w-5 h-5" />
          <span className="text-sm font-medium">Dyslexia Mode On</span>
        </>
      ) : (
        <>
          <Type className="w-5 h-5" />
          <span className="text-sm font-medium">Aa</span>
        </>
      )}
    </button>
  );
}
