import useDetectPointerOn from '@/hooks/useDetectPointerOn';
import usePointerCd from '@/hooks/usePointerCd';
import { useState } from 'react';
import animiations from '@/styles/animations.module.scss';

export default function PointerTraceCircle(props: { radius_px?: number }) {
  const pointerCd = usePointerCd();
  const [circleRadius_px, setCircleRadius_px] = useState(100);
  const pointerOnClickableElement = useDetectPointerOn('class', [
    'cursor-pointer',
  ]);

  return (
    <div
      className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 z-0 ${
        pointerCd.clientX > 0 && pointerOnClickableElement
          ? animiations['animate-active-circle-pointer-tracer']
          : animiations['animate-unactive-circle-pointer-tracer']
      }`}
      style={{
        width: circleRadius_px,
        height: circleRadius_px,
        left: pointerCd.clientX,
        top: pointerCd.clientY,
        backgroundColor: 'orange',
      }}
    ></div>
  );
}
