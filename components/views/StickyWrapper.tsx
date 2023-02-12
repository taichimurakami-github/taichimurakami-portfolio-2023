import { PropsWithChildren } from 'react';

export default function StickyWrapper(
  props: PropsWithChildren<{
    class?: string;
  }>
) {
  return (
    <div className={`sticky top-0 ${props.class ?? ''}`}>{props.children}</div>
  );
}
