import { Silkscreen } from '@next/font/google';
import { ArrowAsset } from '@views/Parts';
import TypingAnimatedText from '@containers/TypingAnimatedText';
import SectionWrapper from '@views/SectionWrapper';
import animations from '@/styles/animations.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function LastSection() {
  return (
    <SectionWrapper
      id="title_section"
      class={`z-[1] flex-xyc flex-col gap-[70px] ${silkscreen_regular.className}`}
    >
      <h1 className="text-center text-6xl gap-10">
        <TypingAnimatedText
          id="atxt_page_title"
          contents={[
            {
              text: 'THANK',
              font: silkscreen_regular,
              class: 'text-white mr-[1rem]',
              typingInterval_ms: 50,
            },
            {
              text: 'YOU',
              font: silkscreen_regular,
              class: 'text-white mr-[1rem]',
              typingInterval_ms: 50,
              afterInterval_ms: 150,
            },
            {
              text: 'FOR',
              font: silkscreen_regular,
              class: 'text-white mr-[1rem]',
              typingInterval_ms: 50,
              afterInterval_ms: 150,
            },
            {
              text: 'WATCHING!!',
              font: silkscreen_regular,
              class: 'text-white',
              typingInterval_ms: 50,
            },
          ]}
        />
      </h1>
      <p className="text-xl">UPDATES MAY BE COMING SOON ... ?</p>
      <div
        className={`
          relative w-[50vw] h-[50vw] max-w-[200px] max-h-[200px] 
          rounded-full border-2 flex-xyc mx-auto cursor-pointer
          ${animations['animate-active-title-section-circle']}
          ${animations['animate-bg-transition-05']}
          bg-dark-gray-1 hover:bg-emerald-1 border-emerald-1
      `}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <ArrowAsset
          barWidth="7px"
          colPartWidth="100px"
          rowPartWidth="30px"
          rotate_deg={-90}
        />
        <div
          className={`${silkscreen_regular.className} absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xl whitespace-nowrap`}
        >
          <span className="text-emerald-1">S</span>
          <span>CROLL TO TITLE</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
