'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ScriptureThreshold } from '@/components/ScriptureThreshold';
import { useThresholdStore } from '@/hooks/useThresholdStore';

/**
 * Scripture Threshold Page
 * Users must read Genesis 1 before proceeding to Eden
 */
export default function ThresholdPage() {
  const router = useRouter();
  const { hasPassedThreshold } = useThresholdStore();

  // If already passed, redirect to Eden
  useEffect(() => {
    if (hasPassedThreshold) {
      router.push('/eden');
    }
  }, [hasPassedThreshold, router]);

  return <ScriptureThreshold />;
}
