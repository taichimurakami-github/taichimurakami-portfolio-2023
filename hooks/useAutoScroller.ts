import { useCallback } from 'react';

export default function useAutoScroller(
  nextSectionWrapperElementId: string,
  behaviour: 'smooth' | 'auto' = 'smooth',
  margin = 0,
  horizontal = false
) {
  const scrollToTargetElement = useCallback(() => {
    const target = document.getElementById(nextSectionWrapperElementId);

    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollAmount = window.scrollY + rect.top + margin;

      const parsedOptions = {
        top: !horizontal ? scrollAmount : undefined,
        left: horizontal ? scrollAmount : undefined,
        behavior: behaviour,
      };

      window.scrollTo(parsedOptions);
    }
  }, [nextSectionWrapperElementId, horizontal, behaviour, margin]);

  return { scrollToTargetElement };
}
