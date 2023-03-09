import { useCallback } from 'react';

export default function usePreventScroll<TElement extends HTMLElement>(
  targetRef: React.RefObject<TElement>
) {
  const _handlePreventDefault = useCallback((e: TouchEvent | WheelEvent) => {
    e.preventDefault();
  }, []);

  const preventScroll = useCallback(() => {
    if (targetRef.current) {
      targetRef.current.addEventListener('touchmove', () => {}, {
        passive: false,
      });

      targetRef.current.addEventListener('wheel', () => {}, {
        passive: false,
      });
    }
  }, [targetRef]);

  const allowScroll = useCallback(() => {
    if (targetRef.current) {
      targetRef.current.removeEventListener('touchmove', _handlePreventDefault);
      targetRef.current.removeEventListener('wheel', _handlePreventDefault);
    }
  }, [targetRef]);

  return { preventScroll, allowScroll };
}
