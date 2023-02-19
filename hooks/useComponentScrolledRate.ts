import { clamp } from '@/utils/clamp';
import { useState, useEffect, useRef } from 'react';

export default function useComponentScrolledRate<
  TElement extends HTMLElement
>() {
  const [scrolledRate, setScrolledRate] = useState(0);
  const targetRef = useRef<TElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const target = targetRef.current;

        const scrolledRate =
          (window.scrollY - window.screenY - target.offsetTop) /
          target.clientHeight;

        setScrolledRate(clamp(0, scrolledRate, 1));
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    targetRef,
    scrolledRate,
  };
}
