import React, { PropsWithChildren, useRef } from 'react';

import useComponentInView from '@/hooks/useComponentInView';

export default function SectionWrapper(
  props: PropsWithChildren<{ id: string; class?: string }>
) {
  const { targetRef, inViewPct } = useComponentInView();

  // console.log(`
  // ${targetRef?.current?.id}:
  //   >>> ${inViewPct}
  // `);

  return (
    <section
      id={props.id}
      ref={targetRef}
      className={`min-h-screen max-w-[1440px] w-full mx-auto z-10 ${
        props.class ?? ''
      }`}
      style={{
        opacity: inViewPct / 100,
      }}
    >
      {props.children}
    </section>
  );
}