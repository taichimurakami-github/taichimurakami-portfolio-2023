import { EASTER_EGG_CONFIG, INFORMATIONS } from '@/app.config';
import { useEasterEggOnTitleSection } from '@/hooks/useKeyboardInteracts';
import TypingAnimatedText from '@containers/TypingAnimatedText';
import { TitleSectionLinkWithIcon } from '@views/ExternalLinks';
import { ArrowAsset } from '@views/Parts';
import SectionWrapper from '@views/SectionWrapper';
import { Silkscreen } from '@next/font/google';
import animations from '@/styles/animations.module.scss';
import useAutoScroller from '@/hooks/useAutoScroller';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function TitleSection() {
  const {
    cmdCompleted,
    cmdInputReady,
    cmdValidId,
    cmdInputActivator,
    cmdInputDeactivator,
  } = useEasterEggOnTitleSection();

  const { scrollToTargetElement } = useAutoScroller('about_section');

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
      <div className="relative h-full flex flex-col gap-5">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex-xyc flex-col gap-4 cursor-pointer"
          style={{ visibility: cmdCompleted ? 'visible' : 'hidden' }}
        >
          <a
            className={`${silkscreen_regular.className} text-2xl text-center underline`}
            href={INFORMATIONS.source_code_url}
          >
            <span>&#10096;/&#10097;</span>{' '}
            <span className="text-emerald-1">S</span>OURCE CODE HERE{' '}
            <span>&#10096;/&#10097;</span>
          </a>
          <p className={`${silkscreen_regular.className} text-lg text-center `}>
            press any button to reset
          </p>
        </div>
        <TitleSectionLinkWithIcon
          url={INFORMATIONS.github_url}
          iconSrc="./github-icon.svg"
          linkText={'github'}
          altText="taichimurakami-github"
          wrapperClass={`${silkscreen_regular.className} text-4xl h-[50%] `}
          imgClass="w-[2rem] "
          active={!cmdCompleted}
        />
        <TitleSectionLinkWithIcon
          url={`mailto:${INFORMATIONS.email_address}`}
          iconSrc="./envelope.svg"
          linkText={`CLICK TO SEND EMAIL`}
          altText="email"
          wrapperClass={`${silkscreen_regular.className} text-2xl h-[50%] `}
          imgClass="w-[2rem] "
          active={!cmdCompleted}
        />
      </div>
      <div
        className={`
          relative w-[50vw] h-[50vw] max-w-[200px] max-h-[200px] 
          rounded-full border-2 flex-xyc mx-auto cursor-pointer
          ${animations['animate-active-title-section-circle']}
          ${animations['animate-bg-transition-05']}
          bg-dark-gray-1
          ${cmdCompleted ? 'border-white' : 'border-emerald-1'}
          ${cmdCompleted ? 'hover:bg-salmon-1' : 'hover:bg-emerald-1'}
      `}
        onMouseOver={cmdInputActivator}
        onMouseLeave={cmdInputDeactivator}
        onClick={scrollToTargetElement}
      >
        <div
          className={`${silkscreen_regular.className} absolute top-0 left-1/2 -translate-x-1/2 text-center text-xl whitespace-nowrap`}
        >
          {cmdInputReady ? (
            <>
              {cmdCompleted ? (
                <p className="block">↑↑NEW URL ABOVE↑↑</p>
              ) : (
                EASTER_EGG_CONFIG.titleSection.cmd_str.map((v, i) => {
                  const isLast =
                    i === EASTER_EGG_CONFIG.titleSection.cmd_str.length - 1;
                  return (
                    <span
                      key={`egg_title_section_keyPreview_${i}`}
                      className={isLast ? 'text-emerald-1' : ''}
                      style={{
                        visibility: i < cmdValidId ? 'hidden' : 'visible',
                      }}
                    >
                      {isLast ? '+' + v : v}
                    </span>
                  );
                })
              )}
            </>
          ) : (
            <>
              <span className="text-emerald-1">S</span>
              <span>CROLL TO START</span>
            </>
          )}
        </div>
        <ArrowAsset
          barWidth="7px"
          colPartWidth="100px"
          rowPartWidth="30px"
          rotate_deg={90}
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
