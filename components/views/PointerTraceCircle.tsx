import useDetectPointerOn from '@/hooks/useDetectPointerOn';
import usePointerCd from '@/hooks/usePointerCd';
import { useEffect, useState } from 'react';

export default function PointerTraceCircle(props: { radius_px?: number }) {
  const pointerCd = usePointerCd();
  const [circleRadius_px, setCircleRadius_px] = useState(100);
  const pointerOnClickableElement = useDetectPointerOn('class', [
    'cursor-pointer',
  ]);

  return (
    <div
      className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 z-0"
      style={{
        width: circleRadius_px,
        height: circleRadius_px,
        left: pointerCd.clientX,
        top: pointerCd.clientY,
        visibility: pointerCd.clientX > 0 ? 'visible' : 'hidden',
        background: pointerOnClickableElement ? 'orange' : 'lightgray',
      }}
    ></div>
  );
}
