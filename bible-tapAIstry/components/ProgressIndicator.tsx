'use client';

interface ProgressIndicatorProps {
  progress: number; // 0-1
  isComplete: boolean;
  className?: string;
}

/**
 * Progress indicator bar
 * Shows scroll progress with neon gradient
 */
export function ProgressIndicator({
  progress,
  isComplete,
  className = '',
}: ProgressIndicatorProps) {
  const percentage = Math.round(progress * 100);

  return (
    <div className={`fixed top-16 left-0 right-0 z-30 ${className}`}>
      {/* Progress bar background */}
      <div className="h-1 bg-charcoal">
        {/* Progress fill */}
        <div
          className={`
            h-full progress-bar
            transition-all duration-100
            ${isComplete ? 'opacity-100' : 'opacity-80'}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage label */}
      <div className="absolute right-4 top-2 text-xs font-mono text-text-dim">
        {percentage}%
        {isComplete && (
          <span className="ml-2 text-neon-green">Complete</span>
        )}
      </div>
    </div>
  );
}

/**
 * Circular progress indicator
 */
interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularProgress({
  progress,
  size = 48,
  strokeWidth = 3,
  className = '',
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - progress * circumference;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          className="text-charcoal"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="url(#progress-gradient)"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300"
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF87" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-mono text-text-secondary">
          {Math.round(progress * 100)}
        </span>
      </div>
    </div>
  );
}
