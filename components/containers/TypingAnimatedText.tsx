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
import useComponentInViewPct from '@/hooks/useComponentInView';

const TypingAnimationContent = React.memo(
  function TypingAnimationContent(props: {
    id: number;
    elementKey: string;
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
          props.onHandleAnimationCompleted(props.id, props.elementKey);
      }
    );

    useEffect(() => {
      setTimeout(startAnimation, props.beforeAnimationStartInterval_ms ?? 0);
    }, [startAnimation, props.beforeAnimationStartInterval_ms]);

    return (
      <span
        key={props.elementKey}
        className={`align-middle ${props.class ?? ''}`}
      >
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
  endbarClass?: string;
  wrapperClass?: string;
}) {
  const [activeComponentId, setActiveComponentId] = useState(-1);
  const { isIntersecting, targetRef } =
    useComponentInViewPct<HTMLParagraphElement>({ thresholdInterval: 0.1 });
  const setTimeoutId = useRef<null | number>(null);

  const components = useMemo(
    () =>
      props.contents
        .filter((_, i) => i <= activeComponentId)
        .map((v, i) => (
          <TypingAnimationContent
            id={i}
            key={`typinganimatedtxt_${props.id}_${i}_root`}
            elementKey={`${props.id}_${i}`}
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

  useEffect(() => {
    if (isIntersecting && activeComponentId < 0) {
      setActiveComponentId(0);
    }
  }, [isIntersecting]);

  return (
    <p
      className={`flex w-full flex-wrap text-center font-bold ${
        props?.wrapperClass ?? ''
      }`}
      style={{
        lineHeight: '1.25em',
      }}
      ref={targetRef}
    >
      {getActiveComponents()}
      <span
        className={`inline-block ${
          styles['animate-fade-in']
        } align-middle h-[90%] ${props.endbarClass ?? ''}`}
      >
        &#9646;
      </span>
    </p>
  );
}
