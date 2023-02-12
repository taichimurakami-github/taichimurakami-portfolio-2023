import React, { PropsWithChildren } from 'react';

export default function SectionWrapper(
  props: PropsWithChildren<{ id: string; class?: string }>
) {
  return (
    <section
      id={props.id}
      className={`h-screen max-w-[1920px] w-full mx-auto z-10 ${
        props.class ?? ''
      }`}
    >
      {props.children}
    </section>
  );
}
