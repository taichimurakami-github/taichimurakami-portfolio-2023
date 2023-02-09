import { useCallback, useEffect, useRef, useState } from 'react';

export default function usePointerCd(samplingRate_ms = 100) {
  const [pointerCd, setPointerCd] = useState({
    screenX: -1,
    screenY: -1,
    clientX: -1,
    clientY: -1,
  });
  const prevSampled = useRef(0);

  const receiveMouseMoveEvent = useCallback((e: MouseEvent) => {
    if (Date.now() - prevSampled.current < samplingRate_ms) {
      return;
    }
    setPointerCd({
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
    });
  }, [samplingRate_ms]);

  useEffect(() => {
    window.addEventListener('mousemove', receiveMouseMoveEvent);
  }, [receiveMouseMoveEvent]);

  return pointerCd;
}
