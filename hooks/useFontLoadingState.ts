import { useEffect, useState } from 'react';

export default function useFontLoadingState() {
  const [fontLoadingState, setFontLoadingState] = useState({
    ready: false,
  });
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoadingState((prev) => ({ ...prev, ready: true }));
    });
  }, []);

  return fontLoadingState;
}
