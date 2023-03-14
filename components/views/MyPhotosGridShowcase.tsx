import React, { PropsWithChildren } from 'react';

export default function MyPhotosGridShowcase(props: PropsWithChildren) {
  return (
    <div className="relative w-full text-6xl h-screen overflow-hidden">
      <div className="absolute px-2 py-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
        <div className="flex h-[33%]">
          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_05.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_02.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_04.webp"
            alt="about me"
            loading="lazy"
          />
        </div>
        <div className="flex h-[33%] z-0">
          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_06.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_01.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_07.webp"
            alt="about me"
            loading="lazy"
          />
        </div>
        <div className="flex h-[33%] z-0">
          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_08.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_09.webp"
            alt="about me"
            loading="lazy"
          />

          <img
            className="w-[33%] h-full aspect-square object-cover rounded-md z-0"
            src="/about_10.webp"
            alt="about me"
            loading="lazy"
          />
        </div>
      </div>

      {props.children}
    </div>
  );
}
