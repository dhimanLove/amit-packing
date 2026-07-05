import { useEffect } from 'react';
import { getLenis } from '../lib/lenis';

export function useLenis() {
  useEffect(() => {
    // Lenis is initialized in main.tsx
  }, []);

  return getLenis;
}
