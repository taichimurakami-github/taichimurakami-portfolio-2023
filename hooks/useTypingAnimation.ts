import { useCallback, useRef, useState } from 'react';

export function useTypingAnimation(content: string, interval_ms: number) {
  const [renderedChars, setRenderedChars] = useState('');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const contentData = useRef(content);
  const prevShotted = useRef(0);
  const unsubscriber = useRef<undefined | NodeJS.Timeout>();

  const shotNewChar = useCallback(() => {
    if (Date.now() - prevShotted.current < interval_ms) {
      return;
    }
    prevShotted.current = Date.now();

    const newChar = contentData.current.charAt(0);
    contentData.current = contentData.current.slice(1);

    setRenderedChars((prevRenderedChars) => prevRenderedChars + newChar);
  }, [setRenderedChars, interval_ms]);

  const startAnimation = useCallback(() => {
    window.setTimeout(() => {
      if (contentData.current.length === 0) {
        setAnimationCompleted(true);
        return;
      }
      shotNewChar();
      startAnimation();
    }, interval_ms);
  }, [interval_ms, shotNewChar]);

  const endAnimation = useCallback(() => {
    if (unsubscriber.current) {
      clearTimeout(unsubscriber.current);
    }
  }, []);

  return { renderedChars, animationCompleted, startAnimation, endAnimation };
}
