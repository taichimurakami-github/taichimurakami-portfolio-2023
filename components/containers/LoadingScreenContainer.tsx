import useFontLoadingState from '@/hooks/useFontLoadingState';
import { Silkscreen } from '@next/font/google';
import React, { useEffect, useState } from 'react';
import gradients from '@/styles/gradients.module.scss';
import animations from '@/styles/animations.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function LoadingScreenContainer() {
  const [waiting, setWaiting] = useState(true);
  const fontLoadingState = useFontLoadingState();

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 100);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 flex-xyc flex-col gap-[15px] w-full h-full bg-dark-gray-1 text-4xl z-100 
        ${silkscreen_regular.className} 
        ${gradients['gradient-bg-loading-screen']} 
        ${
          fontLoadingState &&
          !waiting &&
          animations['animate-hide-loading-screen']
        }
      `}
    >
      <p>LOADING...</p>
      <p className={`${gradients['gradient-text-loading-screen']}`}>
        &#10025;&#10034;&#10025;&#10022;&#10034;&#10025;&#10022;
      </p>
    </div>
  );
}
