'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';

export function AccessibilityToggle() {
  const { dyslexiaMode, setDyslexiaMode } = useAccessibility();

  return (
    <button
      onClick={() => setDyslexiaMode(!dyslexiaMode)}
      className={`
        fixed top-4 right-4 z-50
        px-4 py-2 rounded-full
        border border-cyan-500/30
        text-sm font-medium
        transition-all duration-300
        ${dyslexiaMode
          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
          : 'bg-zinc-900/80 text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/50'
        }
        backdrop-blur-sm
      `}
      aria-pressed={dyslexiaMode}
      aria-label={dyslexiaMode ? 'Disable dyslexia-friendly mode' : 'Enable dyslexia-friendly mode'}
    >
      <span className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {dyslexiaMode ? 'Reading Mode: ON' : 'Reading Mode'}
      </span>
    </button>
  );
}
