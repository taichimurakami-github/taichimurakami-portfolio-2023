import { useCallback, useEffect, useRef, useState } from 'react';

export function useTypingAnimation(
  content: string,
  options: {
    interval_ms: number;
    barWith_px: number;
  }
) {
  const [renderedChars, setRenderedChars] = useState('');
  const contentData = useRef(content);
  const unsubscriber = useRef<undefined | NodeJS.Timeout>();
  const ableToShotNextChar = useRef(false);

  const shotNewChar = useCallback(() => {
    ableToShotNextChar.current = false;

    const newChar = contentData.current.charAt(0);
    contentData.current = contentData.current.slice(1);

    setRenderedChars((prevRenderedChars) => prevRenderedChars + newChar);
  }, [setRenderedChars]);

  const startAnimation = useCallback(() => {
    unsubscriber.current = setTimeout(shotNewChar, options.interval_ms);
  }, []);

  const endAnimation = useCallback(() => {
    if (unsubscriber.current) {
      clearTimeout(unsubscriber.current);
    }
  }, []);

  return { renderedChars, startAnimation, endAnimation };
}
