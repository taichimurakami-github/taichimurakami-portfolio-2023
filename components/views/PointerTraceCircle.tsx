import usePointerCd from '@/hooks/usePointerCd';
import { useState } from 'react';

export default function PointerTraceCircle(props: { radius_px?: number }) {
  const pointerCd = usePointerCd();
  const [circleRadius_px, setCircleRadius_px] = useState(100);

  return (
    <div
      className="absolute bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
      style={{
        width: circleRadius_px,
        height: circleRadius_px,
        left: pointerCd.clientX,
        top: pointerCd.clientY,
        visibility: pointerCd.clientX > 0 ? 'visible' : 'hidden',
      }}
    ></div>
  );
}
