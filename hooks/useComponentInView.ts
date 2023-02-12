import { useEffect, useMemo, useRef, useState } from 'react';

export default function useComponentInViewPct(thresholdInterval?: number) {
  const [inViewPct, setInViewPct] = useState(0);
  const targetRef = useRef<HTMLElement>(null);
  const observerCache = useRef<any>();
  const DEFAULT_THRESHOLD_INTERVAL = 0.1;

  useEffect(() => {
    if (targetRef.current) {
      const thresholds: number[] = [];
      const interval = thresholdInterval ?? DEFAULT_THRESHOLD_INTERVAL;

      let val = 0;
      while (val <= 1.0) {
        thresholds.push(val);
        val += interval;
      }

      if (!observerCache.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInViewPct(Math.round(entry.intersectionRatio * 100));
          },
          { threshold: thresholds }
        );
        observerCache.current = observer;
      }

      observerCache.current.observe(targetRef.current);
    }
  }, [targetRef.current]);

  return { targetRef, inViewPct };
}
