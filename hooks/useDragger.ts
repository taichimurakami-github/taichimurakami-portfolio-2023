import { useEffect, useRef, useState } from 'react';
import { clamp } from '@/utils/clamp';

export default function useDragger<
  TDraggerElement extends HTMLElement,
  TWrapperElement extends HTMLElement
>(
  direction: 'vertical' | 'horizontal',
  draggerSize = '15px',
  onHandleDrag?: (progressRate: number) => void
) {
  const wrapperRef = useRef<TWrapperElement>(null);
  const draggerRef = useRef<TDraggerElement>(null);
  const isDragging = useRef(false);

  const [draggerStyles, setDraggerStyles] = useState({
    //horizontal
    width: draggerSize,
    height: draggerSize,
    left: direction === 'horizontal' ? '0px' : '50%',
    top: direction === 'vertical' ? '0px' : '50%',
  });
  const [draggerProgressRate, setDraggerProgressRate] = useState(0);

  const _getSeekbarWrapperRects = () =>
    wrapperRef.current ? wrapperRef.current.getBoundingClientRect() : null;

  const updateDraggerStyleTop = (clientX: number, clientY: number) => {
    const wrapperElemRect = _getSeekbarWrapperRects();

    if (!wrapperElemRect) {
      return;
    }

    const getNewDraggerPos_pct = (
      initPosition: number,
      clientPosition: number,
      wrapperAreaLength: number
    ) => {
      const delta = clientPosition - initPosition;

      const newDraggerPosition_px = clamp(0, delta, wrapperAreaLength);

      return (newDraggerPosition_px * 100) / wrapperAreaLength;
    };

    const styleUpdatePatch = {
      left: '50%',
      top: '50%',
    };

    let draggerPositionRate = 0;

    switch (direction) {
      case 'horizontal': {
        const draggerPositionPct = getNewDraggerPos_pct(
          wrapperElemRect.x,
          clientX,
          wrapperElemRect.width
        );
        styleUpdatePatch.left = draggerPositionPct + '%';
        draggerPositionRate = draggerPositionPct / 100;
        break;
      }

      case 'vertical': {
        const draggerPositionPct = getNewDraggerPos_pct(
          wrapperElemRect.y,
          clientY,
          wrapperElemRect.height
        );
        styleUpdatePatch.top = draggerPositionPct + '%';
        draggerPositionRate = draggerPositionPct / 100;
        break;
      }
    }

    setDraggerProgressRate(clamp(0, draggerPositionRate, 1));
    onHandleDrag && onHandleDrag(draggerPositionRate);

    setDraggerStyles((prev) => ({
      ...prev,
      ...styleUpdatePatch,
    }));
  };

  const _setIsDragging = (value: boolean) => {
    isDragging.current = value;
  };

  useEffect(() => {
    const handleMouseMove = (
      e: globalThis.MouseEvent | globalThis.DragEvent
    ) => {
      if (isDragging.current) {
        updateDraggerStyleTop(e.clientX, e.clientY); // real time preview with scrubbing
      }
    };

    const handleMouseUp = (e: globalThis.MouseEvent | globalThis.DragEvent) => {
      if (isDragging.current) {
        updateDraggerStyleTop(e.clientX, e.clientY);
        _setIsDragging(false);
      }
    };

    const handleMouseDown = (e: globalThis.MouseEvent) => {
      updateDraggerStyleTop(e.clientX, e.clientY);
      _setIsDragging(true);
    };

    // if judged as "Dragged", mouse related events does not listen the pointer movement.
    // setting drug event will work.
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('drag', handleMouseMove);

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('dragend', handleMouseUp);

    wrapperRef.current?.addEventListener('mousedown', handleMouseDown);
  }, []);

  return {
    wrapperRef,
    draggerRef,
    draggerStyles,
    draggerProgressRate,
    isDragging: isDragging.current,
  };
}
