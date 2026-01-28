'use client';

import { useAccessibility } from '@/contexts/AccessibilityContext';

interface ContinueButtonProps {
  enabled: boolean;
  onClick: () => void;
  text?: string;
}

export function ContinueButton({ enabled, onClick, text = 'Continue' }: ContinueButtonProps) {
  const { reducedMotion } = useAccessibility();

  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={`
        relative px-8 py-4 rounded-full
        font-semibold text-lg
        transition-all duration-500
        ${enabled
          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'
          : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
        }
        ${!reducedMotion && enabled ? 'animate-pulse-subtle' : ''}
      `}
      aria-disabled={!enabled}
    >
      {/* Glow ring when enabled */}
      {enabled && (
        <span
          className={`
            absolute inset-0 rounded-full
            bg-gradient-to-r from-cyan-500/20 to-emerald-500/20
            blur-xl -z-10
            ${!reducedMotion ? 'animate-pulse' : ''}
          `}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${enabled ? 'translate-x-0' : '-translate-x-1 opacity-50'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </button>
  );
}
