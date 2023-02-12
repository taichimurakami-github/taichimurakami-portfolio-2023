import { Silkscreen } from '@next/font/google';
import TypingAnimatedText from '@/components/containers/TypingAnimatedText';
import { TitleSectionLinkWithIcon } from '@/components/views/ExternalLinks';
import { INFORMATIONS } from '@/app.config';
import { ArrowDownAsset } from '@/components/views/Parts';
import SectionWrapper from './SectionWrapper';
import animations from '@/styles/animations.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function TitleSection() {
  return (
    <SectionWrapper
      id="title_section"
      class="grid grid-rows-[40%_20%_30%_10%] items-center justify-center"
    >
      <h1 className="text-center text-6xl gap-10">
        <TypingAnimatedText
          id="atxt_page_title"
          contents={[
            {
              text: 'TAICHI',
              font: silkscreen_regular,
              class: 'text-white mr-[1rem]',
              typingInterval_ms: 50,
              afterInterval_ms: 250,
            },
            {
              text: 'MURAKAMI',
              font: silkscreen_regular,
              class: 'text-white mr-[1rem]',
              typingInterval_ms: 50,
              afterInterval_ms: 250,
            },
            {
              text: 'PORTFOLIO',
              font: silkscreen_regular,
              class: 'text-emerald-1',
              typingInterval_ms: 50,
            },
          ]}
        />
      </h1>
      <div className="h-full flex flex-col gap-5">
        <TitleSectionLinkWithIcon
          url={INFORMATIONS.github_url}
          iconSrc="./github-icon.svg"
          linkText={'github'}
          altText="taichimurakami-github"
          wrapperClass={`${silkscreen_regular.className} text-4xl h-[50%]`}
          imgClass="w-[2rem] "
        />
        <TitleSectionLinkWithIcon
          url={`mailto:${INFORMATIONS.email_address}`}
          iconSrc="./envelope.svg"
          linkText={`CLICK TO SEND EMAIL`}
          altText="email"
          wrapperClass={`${silkscreen_regular.className} text-2xl h-[50%]`}
          imgClass="w-[2rem] "
        />
        <div className="flex-xyc cursor-pointer">
          <a
            className={`${silkscreen_regular.className} text-sm text-center underline`}
            href={INFORMATIONS.source_code_url}
          >
            &#10096;/&#10097; SOURCE CODE HERE &#10096;/&#10097;
          </a>
        </div>
      </div>
      <div
        className={`
          relative w-[50vw] h-[50vw] max-w-[200px] max-h-[200px] 
          rounded-full border-2 border-emerald-1 flex-xyc mx-auto cursor-pointer
          ${animations['animate-active-title-section-circle']}
          bg-dark-gray-1
          hover:bg-emerald-1
      `}
      >
        <p
          className={`${silkscreen_regular.className} absolute top-0 left-1/2 -translate-x-1/2 text-center text-xl whitespace-nowrap`}
        >
          <span className="text-emerald-1">s</span>
          <span>croll to start</span>
        </p>
        <ArrowDownAsset
          barWidth="7px"
          colPartWidth="100px"
          rowPartWidth="30px"
        />
      </div>
      <p
        className={`${silkscreen_regular.className} text-xl letter-1 text-center`}
      >
        &copy; 2023 Taichi Murakami
      </p>
    </SectionWrapper>
  );
}
