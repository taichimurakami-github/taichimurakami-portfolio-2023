import { useEffect, useRef, useState } from 'react';

export default function useComponentInViewPct<
  TargetElement = HTMLElement
>(options?: { thresholdInterval?: number; enableDebugLog?: boolean }) {
  const [inViewPct, setIsIntersectingPct] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<TargetElement>(null);
  const observerCache = useRef<any>();
  const DEFAULT_THRESHOLD_INTERVAL = 0.05;

  useEffect(() => {
    if (targetRef.current) {
      const thresholds: number[] = [];
      const interval = options?.thresholdInterval ?? DEFAULT_THRESHOLD_INTERVAL;

      let val = 0;
      while (val <= 1.0) {
        thresholds.push(val);
        val += interval;
      }

      if (!observerCache.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            /**
             * rootHeight < targetElemHeight の際，（今回はrootHeight = viewportHeight）
             * intersectionRatioの最大値は 0 <= x <= rootHeight / targetElementHeight となってしまうので
             * screenHeightよりも大きな要素がtargetの場合にも対応できるように
             * intersectionRatioを基準とした相対値での計算を行う（正規化）
             */
            const viewportHeight = entry.rootBounds?.height;
            const targetElemHeight = entry.boundingClientRect?.height;
            if (
              viewportHeight !== undefined &&
              targetElemHeight !== undefined
            ) {
              const evHeightRatio = viewportHeight / targetElemHeight;
              const intersectionRatioMax = Math.min(
                Math.max(0, evHeightRatio),
                1.0
              );

              setIsIntersectingPct(
                intersectionRatioMax === 0
                  ? 0
                  : Math.round(
                      (entry.intersectionRatio / intersectionRatioMax) * 10
                    ) * 10
              );
            }
            setIsIntersecting(entry.isIntersecting);
          },
          { threshold: thresholds }
        );
        observerCache.current = observer;
      }

      observerCache.current.observe(targetRef.current);
    }
  }, [targetRef.current]);

  return { targetRef, inViewPct, isIntersecting };
}
