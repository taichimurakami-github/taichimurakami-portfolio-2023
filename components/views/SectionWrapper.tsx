import React, { PropsWithChildren, useRef } from 'react';

import useComponentInView from '@/hooks/useComponentInView';

export default function SectionWrapper(
  props: PropsWithChildren<{
    id: string;
    class?: string;
    disableOpacityChange?: boolean;
  }>
) {
  const { targetRef, inViewPct } = useComponentInView();

  return (
    <section
      id={props.id}
      ref={targetRef}
      className={`min-h-screen max-w-[1280px] w-full mx-auto z-10 ${
        props.class ?? ''
      }`}
      style={{
        opacity: props.disableOpacityChange ? 1 : inViewPct / 100,
      }}
    >
      {props.children}
    </section>
  );
}
