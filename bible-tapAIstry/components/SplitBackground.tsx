'use client';

interface SplitBackgroundProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  colors?: [string, string];
  className?: string;
}

/**
 * Daily Duppy style split background
 * Classic yellow/black split for emphasis
 */
export function SplitBackground({
  children,
  direction = 'horizontal',
  colors = ['#FFE500', '#0D0D0D'],
  className = '',
}: SplitBackgroundProps) {
  const gradient =
    direction === 'horizontal'
      ? `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`
      : `linear-gradient(180deg, ${colors[0]} 50%, ${colors[1]} 50%)`;

  return (
    <div
      className={`relative ${className}`}
      style={{ background: gradient }}
    >
      <div className="relative z-10 mix-blend-difference text-white">
        {children}
      </div>
    </div>
  );
}

/**
 * Animated split that slides in
 */
export function AnimatedSplit({
  children,
  isVisible,
  className = '',
}: {
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Yellow panel slides in from left */}
      <div
        className={`
          absolute inset-y-0 left-0 w-1/2 bg-duppy-yellow
          transition-transform duration-700 ease-out
          ${isVisible ? 'translate-x-0' : '-translate-x-full'}
        `}
      />
      {/* Black panel slides in from right */}
      <div
        className={`
          absolute inset-y-0 right-0 w-1/2 bg-duppy-black
          transition-transform duration-700 ease-out
          ${isVisible ? 'translate-x-0' : 'translate-x-full'}
        `}
      />
      {/* Content */}
      <div className="relative z-10 mix-blend-difference text-white">
        {children}
      </div>
    </div>
  );
}
