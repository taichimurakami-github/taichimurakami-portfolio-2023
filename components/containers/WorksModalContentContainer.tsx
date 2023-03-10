import React from 'react';
import { WorksSectionConfig } from '@/app.config';
import CarouselContainer from './CarouselContainer';
import { Silkscreen } from '@next/font/google';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function WorksModalContentContainer(props: WorksSectionConfig) {
  const carouselContents = props.carouselSrc.map((src, i) => (
    <img
      className="w-full max-h-[500px] object-cover select-none"
      src={`./${src}`}
      key={`works_modal_carousel_${props.id}_${i}`}
      loading="lazy"
    />
  ));

  return (
    <div className="relative  h-full pt-8 pb-[50vh] overflow-scroll-without-scrollbar overscroll-none text-lg z-0">
      <div className="max-w-[1152px] mx-auto">
        <CarouselContainer id={props.id} contents={carouselContents} />

        <div className="w-[90%] px-2 py-8 flex flex-col gap-2 z-10 mx-auto my-20 shadow-md">
          <h2 className="text-3xl font-bold">{props.title}</h2>
          {props.githubUrl && (
            <a
              className={`text-xl font-bold text-emerald-1 underline ${silkscreen_regular.className}`}
              href={props.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              click to show github
            </a>
          )}
          <p>{props.description}</p>
        </div>

        <div className="w-[90%] mx-auto shadow-md">
          <p className={`text-2xl mb-2 ${silkscreen_regular.className}`}>
            - <span className="text-emerald-1">I</span>NFORMATION -
          </p>
          <ul className="grid  gap-8 z-10 text-center bg-dark-gray-2 px-2 py-4 text-white">
            <li>
              <h3 className="underline">技術スタック</h3>
              <p className="text-xl font-bold">{props.techs}</p>
            </li>
            <li>
              <h3 className="underline">・制作期間・</h3>
              <p className="text-xl font-bold">{props.period}</p>
            </li>
            <li>
              <h3 className="underline">・制作内訳・</h3>
              <p className="text-xl font-bold">{props.member}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
