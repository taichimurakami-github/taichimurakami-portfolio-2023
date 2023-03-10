import React from 'react';
import useCarouselSrcParser from '@/hooks/useCarouselSrcParser';
import { WorksSectionConfig } from '@/app.config';
import CarouselContainer from './CarouselContainer';
import { Silkscreen } from '@next/font/google';
import YouTube from 'react-youtube';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function WorksModalContentContainer(props: WorksSectionConfig) {
  const { parseCarouselSrc } = useCarouselSrcParser();
  const carouselContents = props.carouselSrc.map((src, i) => {
    const content = parseCarouselSrc(src);
    const key = `works_modal_carousel_${props.id}_${i}`;

    if (content.type === 'youtube') {
      return (
        <YouTube
          videoId={content.videoId}
          opts={{
            width: '100%',
            height: '600px',
          }}
          key={key}
          // className="select-none"
        />
      );
    }

    return (
      <img
        className="w-full h-[600px] object-cover select-none"
        src={`./${content.src}`}
        key={key}
        loading="lazy"
      />
    );
  });

  return (
    <div className="relative h-full pb-[50vh] overflow-scroll-without-scrollbar overscroll-none text-lg z-0">
      <div className="bg-dark-gray-1 py-10">
        <div className="max-w-[1152px] mx-auto">
          <CarouselContainer id={props.id} contents={carouselContents} />
        </div>
      </div>

      <div className="max-w-[1152px] mx-auto">
        <div className="w-[90%] px-2 py-8 flex flex-col gap-2 z-10 mx-auto my-8 shadow-md border-2 border-dark-gray-3">
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
          {props.description.map((v, i) => (
            <p key={`works_${props.id}_desc_${i}`}>{v}</p>
          ))}
        </div>

        <div className="w-[90%] mx-auto shadow-md">
          <p
            className={`text-2xl py-2 border-2 border-dark-gray-3 ${silkscreen_regular.className}`}
          >
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
