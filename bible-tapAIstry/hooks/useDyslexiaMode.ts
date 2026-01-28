'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DyslexiaModeStore {
  isDyslexiaMode: boolean;
  toggleDyslexiaMode: () => void;
  setDyslexiaMode: (value: boolean) => void;
}

/**
 * Zustand store for dyslexia-friendly mode
 * Persists preference to localStorage
 */
export const useDyslexiaMode = create<DyslexiaModeStore>()(
  persist(
    (set) => ({
      isDyslexiaMode: false,
      toggleDyslexiaMode: () =>
        set((state) => {
          const newValue = !state.isDyslexiaMode;
          // Apply class to body
          if (typeof document !== 'undefined') {
            document.body.classList.toggle('dyslexia-mode', newValue);
          }
          return { isDyslexiaMode: newValue };
        }),
      setDyslexiaMode: (value: boolean) =>
        set(() => {
          if (typeof document !== 'undefined') {
            document.body.classList.toggle('dyslexia-mode', value);
          }
          return { isDyslexiaMode: value };
        }),
    }),
    {
      name: 'dyslexia-mode-storage',
      onRehydrateStorage: () => (state) => {
        // Reapply class after hydration
        if (state?.isDyslexiaMode && typeof document !== 'undefined') {
          document.body.classList.add('dyslexia-mode');
        }
      },
    }
  )
);
