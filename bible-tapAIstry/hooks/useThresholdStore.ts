'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThresholdStore {
  hasPassedThreshold: boolean;
  setPassedThreshold: (value: boolean) => void;
  resetThreshold: () => void;
}

/**
 * Store to track whether user has passed the Scripture Threshold
 * Persists to sessionStorage (resets when tab closes)
 */
export const useThresholdStore = create<ThresholdStore>()(
  persist(
    (set) => ({
      hasPassedThreshold: false,
      setPassedThreshold: (value: boolean) => set({ hasPassedThreshold: value }),
      resetThreshold: () => set({ hasPassedThreshold: false }),
    }),
    {
      name: 'scripture-threshold-storage',
      storage: {
        getItem: (name) => {
          if (typeof window === 'undefined') return null;
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          if (typeof window === 'undefined') return;
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          if (typeof window === 'undefined') return;
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
