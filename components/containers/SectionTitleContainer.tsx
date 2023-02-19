import React from 'react';
import { Silkscreen } from '@next/font/google';
import TypingAnimatedText from './TypingAnimatedText';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function SectionTitleContainer(props: {
  title: string;
  typingInterval_ms?: number;
  wrapperClass?: string;
}) {
  return (
    <h2
      className={`relative table text-5xl text-white font-bold ${
        silkscreen_regular.className
      } ${props.wrapperClass ?? ''}`}
    >
      <div className="absolute bottom-0 left-5 w-[100%] h-[20px] bg-dark-gray-2 z-0"></div>
      <div className="relative flex-xyc z-10 select-none">
        <span className="text-emerald-1">{props.title.slice(0, 1)}</span>
        <TypingAnimatedText
          id="about_section_title"
          contents={[
            {
              text: props.title.slice(1),
              font: silkscreen_regular,
            },
          ]}
        />
      </div>
    </h2>
  );
}
