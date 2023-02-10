import { Silkscreen } from '@next/font/google';
import TypingAnimatedText from '@/components/containers/TypingAnimatedText';
import { TitleSectionLinkWithIcon } from '@/components/views/ExternalLinks';
import { INFORMATIONS } from '@/app.config';
import { ArrowDownAsset } from '@/components/views/Parts';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function TitleSection() {
  return (
    <section
      id="title_section"
      className="h-screen grid grid grid-rows-4 items-center justify-center"
    >
      <h1 className="text-center text-6xl flex-xyc flex-col gap-10">
        <TypingAnimatedText
          id="atxt_page_title"
          contents={[
            {
              text: 'TAICHI MURAKAMI ',
              font: silkscreen_regular,
              class: 'text-white',
              typingInterval_ms: 50,
              afterInterval_ms: 0,
            },
            {
              text: 'portfolio',
              font: silkscreen_regular,
              class: 'text-emerald-1',
              typingInterval_ms: 50,
            },
          ]}
          // wrapperClass="underline underline-offset-[2rem] decoration-[10px] decoration-dark-gray-2"
        />
        <div className=" h-[15px] bg-dark-gray-2"></div>
      </h1>
      <div>
        <TitleSectionLinkWithIcon
          url={INFORMATIONS.github_url}
          iconSrc="./github-icon.svg"
          linkText={'github'}
          altText="taichimurakami-github"
          wrapperClass={`${silkscreen_regular.className} text-4xl mb-[2.5%]`}
          imgClass="w-[2rem] "
        />
        <TitleSectionLinkWithIcon
          url={`mailto:${INFORMATIONS.email_address}`}
          iconSrc="./envelope.svg"
          linkText={INFORMATIONS.email_address}
          altText="taichimurakami-github"
          wrapperClass={`${silkscreen_regular.className} text-2xl mb-[2.5%]`}
          imgClass="w-[2rem] "
        />
      </div>
      <div className="relative w-[90vw] h-[90vw] max-w-[200px] max-h-[200px] rounded-full border-2 border-emerald-1 flex-xyc mx-auto">
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
    </section>
  );
}
