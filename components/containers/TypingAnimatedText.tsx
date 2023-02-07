import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { CSSProperties, useEffect, useState } from 'react';
import styles from '@/styles/animations.module.scss';
import { NextFont } from '@next/font';

export default function TypingAnimatedText(props: {
  text: string;
  font: NextFont;
  fontSizeClassName?: string;
  typingInterval_ms?: number;
  endbarBgColor?: string;
  endbarWidth_px?: number;
  endbarHeight_px?: number;
}) {
  const { renderedChars, startAnimation } = useTypingAnimation(
    props.text,
    props.typingInterval_ms ?? 100
  );
  const [endbarStyles, setEndbarStyles] = useState<CSSProperties>({
    //end bar width options
    width: props.endbarWidth_px ?? '0.8rem',

    //end bar height options
    height: '100%',
    minHeight: props.endbarHeight_px ?? '1.25em',
    lineHeight: props.endbarHeight_px ?? '1.25em',

    //other options
    background: props.endbarBgColor ?? 'white',
    color: props.endbarBgColor ?? 'white',
  });

  useEffect(() => {
    setTimeout(() => {
      startAnimation();
    }, 1000);
  }, [startAnimation]);

  return (
    <p
      className={`p-2 font-bold flex ${props.font.className} ${props.fontSizeClassName}`}
    >
      {renderedChars}
      <span
        className={`block ${styles['animate-fade-in']}`}
        style={endbarStyles}
      ></span>
    </p>
  );
}
