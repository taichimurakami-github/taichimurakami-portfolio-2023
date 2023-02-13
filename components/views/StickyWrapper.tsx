import { PropsWithChildren } from 'react';

export default function StickyWrapper(
  props: PropsWithChildren<{
    stickyPosition: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    class?: string;
  }>
) {
  return (
    <div className={`sticky ${props.class ?? ''}`} style={props.shrinkPosition}>
      {props.children}
    </div>
  );
}
