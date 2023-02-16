import { useEffect } from 'react';

export function useParallaxEffect(scrollSpeedAmpRate: number = 0.9) {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      console.log(e);
      const [scrollX, scrollY] = [window.pageXOffset, window.pageYOffset];
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);
}
