import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from '@/styles/animations.module.scss';
import { NextFont } from '@next/font';

const TypingAnimationContent = React.memo(
  function TypingAnimationContent(props: {
    id: number;
    key: string;
    text: string;
    class?: string;
    onHandleAnimationCompleted?: (id: number, key: string) => void;
    typingInterval_ms?: number;
    beforeAnimationStartInterval_ms?: number;
  }) {
    const { renderedChars, startAnimation } = useTypingAnimation(
      props.text,
      props.typingInterval_ms ?? 100,
      () => {
        props.onHandleAnimationCompleted &&
          props.onHandleAnimationCompleted(props.id, props.key);
      }
    );

    useEffect(() => {
      setTimeout(startAnimation, props.beforeAnimationStartInterval_ms ?? 0);
    }, [startAnimation, props.beforeAnimationStartInterval_ms]);

    return (
      <span key={props.key} className={`align-middle ${props.class ?? ''}`}>
        {renderedChars}
      </span>
    );
  }
);

export type TypingAnimatedContent = {
  text: string;
  font: NextFont;
  typingInterval_ms?: number;
  afterInterval_ms?: number;
  class?: string;
  style?: CSSProperties;
};

/** TODO: need performance tunings (may be there is a component activation cost) */
/** switching activation by display property will work ? */
export default function TypingAnimatedText(props: {
  id: string;
  contents: TypingAnimatedContent[];
  fontSizeClassName?: string;
  typingInterval_ms?: number;
  endbarSettings?: {
    width_px?: number;
    height_px?: number;
    barColor: string;
    marginLeft: string;
  };
  wrapperClass?: string;
}) {
  const [activeComponentId, setActiveComponentId] = useState(0);
  const setTimeoutId = useRef<null | number>(null);

  const components = useMemo(
    () =>
      props.contents
        .filter((_, i) => i <= activeComponentId)
        .map((v, i) => (
          <TypingAnimationContent
            id={i}
            key={`${props.id}_${i}`}
            text={v.text}
            class={`${v.font.className} ${v.class}`}
            typingInterval_ms={v.typingInterval_ms}
            onHandleAnimationCompleted={(id: number, key: string) => {
              //show next animating component with delay if v.afterInterval_ms is defined
              if (setTimeoutId.current === null) {
                setTimeoutId.current = window.setTimeout(() => {
                  setTimeoutId.current = null;

                  //update animation completed component id
                  setActiveComponentId(id + 1);
                }, v.afterInterval_ms ?? 0);
              }
            }}
          />
        )),
    [props.id, props.contents, setActiveComponentId, activeComponentId]
  );

  const getActiveComponents = useCallback(() => {
    // return all components as active
    // if animated component id >= num of props.contents - 1
    if (activeComponentId >= props.contents.length - 2) {
      return components;
    }

    return components.filter((_, i) => i <= activeComponentId);
  }, [props.contents, components, activeComponentId]);

  return (
    <p
      className={`table p-2 w-full text-center font-bold ${props.wrapperClass}`}
      style={{
        lineHeight: '1.25em',
      }}
    >
      {getActiveComponents()}
      <span
        className={`inline-block ${styles['animate-fade-in']} align-middle`}
        style={{
          //end bar width options
          width: props?.endbarSettings?.width_px ?? '0.8rem',

          //end bar height options
          height: props?.endbarSettings?.height_px ?? '1.75rem',

          //other options
          background: props?.endbarSettings?.barColor ?? 'white',
          marginLeft: props?.endbarSettings?.marginLeft ?? '1rem',
        }}
      ></span>
    </p>
  );
}
