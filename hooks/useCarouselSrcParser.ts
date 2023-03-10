import { useCallback } from 'react';

export default function useCarouselSrcParser() {
  const parseCarouselSrc = useCallback(
    (
      src: string
    ):
      | {
          type: 'youtube';
          videoId: string;
          src: string;
        }
      | {
          type: 'img';
          src: string;
        } => {
      if (src.includes('youtu.be') || src.includes('youtube')) {
        const separated = src.split('/');
        const videoId = separated[separated.length - 1];

        return {
          type: 'youtube',
          videoId,
          src: src,
        };
      }

      return {
        type: 'img',
        src: src,
      };
    },
    []
  );

  return { parseCarouselSrc };
}
