import { useEffect, useState } from 'react';

export default function useDetectPointerOn(
  mode: 'id' | 'class',
  targets: string[]
) {
  const [pointerOn, setPointerOn] = useState(false);

  useEffect(() => {
    const elements: Element[] = [];
    const mouseOverHandler = () => {
      setPointerOn(true);
    };
    const mouseLeaveHandler = () => {
      setPointerOn(false);
    };

    if (mode === 'id') {
      for (const id of targets) {
        const elem = document.getElementById(id);
        elem && elements.push(elem);
      }
    } else if (mode === 'class') {
      for (const cls of targets) {
        const _e = document.getElementsByClassName(cls);
        for (let i = 0; i < _e.length; i++) {
          const elem = _e.item(i);
          elem && elements.push(elem);
        }
      }
    }

    // attach event listeners
    for (const elem of elements) {
      elem.addEventListener('mouseover', mouseOverHandler);
      elem.addEventListener('mouseleave', mouseLeaveHandler);
    }

    // remove event listeners
    return () => {
      for (const elem of elements) {
        elem.removeEventListener('mouseover', mouseOverHandler);
        elem.removeEventListener('mouseleave', mouseLeaveHandler);
      }
    };
  }, []);

  return pointerOn;
}
