import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { CSSProperties, useEffect, useState } from 'react';
import styles from '@/styles/animations.module.scss';
import { NextFont } from '@next/font';

export type TypingAnimatedContent = {
  text: string;
  font: NextFont;
  typingInterval_ms: number;
  afterInterval_ms?: number;
  class?: string;
  style?: CSSProperties;
};

export default function TypingAnimatedText(props: {
  contents: TypingAnimatedContent[];
  fontSizeClassName?: string;
  typingInterval_ms?: number;
  endbarSettings?: {
    width_px?: number;
    height_px?: number;
    barColor: string;
    marginLeft: string;
  };
}) {
  /** TODO: update useTypingAnimation for new contents specification format */
  const { renderedChars, startAnimation } = useTypingAnimation(
    '',
    100
    // props.text,
    // props.typingInterval_ms ?? 100
  );
  const [endbarStyles, setEndbarStyles] = useState<CSSProperties>({
    //end bar width options
    width: props?.endbarSettings?.width_px ?? '0.8rem',

    //end bar height options
    height: props?.endbarSettings?.height_px ?? '1.75rem',

    //other options
    background: props?.endbarSettings?.barColor ?? 'white',
    marginLeft: props?.endbarSettings?.marginLeft ?? '1rem',
  });

  useEffect(() => {
    setTimeout(() => {
      startAnimation();
    }, 1000);
  }, [startAnimation]);

  return (
    <p
      className={`table p-2 w-full text-center font-bold`}
      style={{
        lineHeight: '1.25em',
      }}
    >
      <span className="align-middle">{renderedChars}</span>
      <span
        className={`inline-block ${styles['animate-fade-in']} align-middle`}
        style={endbarStyles}
      ></span>
    </p>
  );
}
