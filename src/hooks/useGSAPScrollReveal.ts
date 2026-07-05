import { useLayoutEffect, useRef, type RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useReducedMotion } from './useReducedMotion';

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

export function useGSAPScrollReveal(
  ref: RefObject<Element>,
  options: ScrollRevealOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useLayoutEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const {
      y = 32,
      opacity = 0,
      duration = 0.9,
      stagger = 0.12,
      start = 'top 80%',
    } = options;

    const elements = ref.current.querySelectorAll('[data-reveal]');

    if (elements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(elements, { opacity: 1, y: 0 });
      hasAnimated.current = true;
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { opacity, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref.current);

    hasAnimated.current = true;

    return () => ctx.revert();
  }, [ref, options, prefersReducedMotion]);
}
