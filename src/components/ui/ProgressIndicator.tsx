'use client';

interface ProgressIndicatorProps {
  progress: number;
  className?: string;
}

export function ProgressIndicator({ progress, className = '' }: ProgressIndicatorProps) {
  return (
    <div className={`fixed left-0 top-0 h-1 w-full z-50 ${className}`}>
      {/* Background track */}
      <div className="absolute inset-0 bg-zinc-800/50" />

      {/* Progress fill */}
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

      {/* Glow effect at the tip */}
      <div
        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent to-cyan-400/50 blur-sm transition-all duration-150 ease-out"
        style={{ left: `calc(${progress}% - 2rem)` }}
      />

      {/* Screen reader text */}
      <span className="sr-only">{Math.round(progress)}% read</span>
    </div>
  );
}

// Vertical variant for the scripture threshold
export function VerticalProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-48 w-1 z-40 rounded-full overflow-hidden">
      {/* Background track */}
      <div className="absolute inset-0 bg-zinc-800/50 rounded-full" />

      {/* Progress fill - fills from bottom to top */}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-full transition-all duration-150 ease-out"
        style={{ height: `${progress}%` }}
      />

      {/* Label */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-zinc-500 whitespace-nowrap">
        {Math.round(progress)}%
      </div>

      {/* Screen reader text */}
      <span className="sr-only">{Math.round(progress)}% of chapter read</span>
    </div>
  );
}
