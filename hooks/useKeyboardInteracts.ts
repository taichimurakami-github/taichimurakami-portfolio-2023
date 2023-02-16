import { EASTER_EGG_CONFIG } from '@/app.config';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useEasterEggOnTitleSection() {
  const [cmdCompleted, setCmdCompleted] = useState(false);
  const [cmdInputReady, setCmdInputReady] = useState(false);
  const [cmdValidId, setCmdValidId] = useState(0);

  const inputCurrentId = useRef<number>(0);
  const cmdInputActivator = useCallback(() => {
    setCmdInputReady(true);
  }, []);
  const cmdInputDeactivator = useCallback(() => {
    setCmdInputReady(false);
  }, []);
  const cmd_keyCode = EASTER_EGG_CONFIG.titleSection.cmd_keyCode;

  if (cmdInputReady) {
    document.createElement('input').focus();
  }

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (cmd_keyCode.includes(e.code)) {
        e.preventDefault();
      }
      const i = inputCurrentId.current;
      const validCmd = cmd_keyCode[i] === e.code;

      inputCurrentId.current = validCmd ? inputCurrentId.current + 1 : 0;

      setCmdValidId(inputCurrentId.current);
      setCmdCompleted(inputCurrentId.current === cmd_keyCode.length);
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return {
    cmdCompleted,
    cmdInputReady,
    cmdValidId,
    cmdInputActivator,
    cmdInputDeactivator,
  };
}
