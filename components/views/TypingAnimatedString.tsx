import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useEffect } from 'react';

export default function TypingAnimatedString() {
  const { renderedChars, startAnimation } = useTypingAnimation(
    'これはテスト用の文章です．',
    200
  );

  useEffect(() => {
    setTimeout(() => {
      startAnimation();
    }, 1000);
  }, [startAnimation]);

  return <p className="text-xl font-bold">{renderedChars}</p>;
}
