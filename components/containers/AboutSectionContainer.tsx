import React, { PropsWithChildren, useCallback } from 'react';
import useComponentScrolledRate from '@/hooks/useComponentScrolledRate';
import SectionTitleContainer from '@containers/SectionTitleContainer';
import DraggerAreaContainer from '@/components/containers/DraggerAreaContainer';
import SectionWrapper from '@views/SectionWrapper';
import StickyWrapper from '@views/StickyWrapper';
import { Caveat, DotGothic16, Silkscreen } from '@next/font/google';
import extension from '@/styles/extension.module.scss';
import SkillLevelContent from '../views/SkillLevelContent';
import ProfilePanel from '../views/ProfilePanel';
import MyPhotosGridShowcase from '../views/MyPhotosGridShowcase';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext', 'latin', 'cyrillic'],
});

const caveat = Caveat({
  weight: '600',
  subsets: ['latin'],
});

function AboutSectionContentWrapper(
  props: PropsWithChildren<{
    subtitle: string;
  }>
) {
  return (
    <div className="relative pr-2 pb-2">
      <div className="absolute bottom-0 right-0 w-full h-full bg-dark-gray-3 rounded-[0_50px_0_50px]"></div>
      <div className="relative bg-dark-gray-2 rounded-[0_30px_0_30px]">
        <p
          className={`
          bottom-0 right-0 text-6xl z-0
          scale-[-100%]
          select-none
          ${silkscreen_regular.className}
          ${extension['about-section-subtitle']}
      `}
        >
          {props.subtitle}
        </p>

        <div className="relative top-3 ml-4 max-w-[35%] mb-4">
          <div
            className={`
            absolute -bottom-1 right-0 z-0
            ${extension['about-section-sticky-note-shadow-effect']}
          `}
          ></div>
          <h3
            className={`
            bg-white text-dark-gray-1 text-3xl
            rotate-[-2deg]
            border-l-[15px] border-emerald-1
            z-10
            ${caveat.className}
          `}
          >
            <p className="flex-xyc p-2">{props.subtitle}</p>
          </h3>
        </div>
        <div className="grid gap-[30px] p-8 z-10">{props.children}</div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { targetRef, scrolledRate } =
    useComponentScrolledRate<HTMLDivElement>();

  const handleScrollFromDragger = useCallback(
    (rate: number) => {
      const target = targetRef.current;
      const newWindowY = target
        ? target.offsetTop + target.clientHeight * rate + window.screenY
        : undefined;

      if (newWindowY !== undefined) {
        window.scrollTo({
          top: newWindowY,
        });
      }
    },
    [targetRef]
  );

  return (
    <div>
      <SectionWrapper id="about_section" disableOpacityChange>
        <StickyWrapper
          class="p-4 shrink-0 z-10 bg-dark-gray-1 z-10"
          stickyPosition={{ top: '0px' }}
        >
          <SectionTitleContainer title="ABOUT" />
        </StickyWrapper>

        <div
          className="relative flex-xyc flex-col gap-[35px] w-full mx-auto all-children-select-none z-0"
          onScroll={(e) => {
            console.log(e.currentTarget.scrollTop);
          }}
        >
          <MyPhotosGridShowcase>
            <p
              className={`
              w-full h-full flex-xyc bg-dark-gray-1 opacity-70
              text-stroke text-white z-20
              ${silkscreen_regular.className} 
            `}
            >
              ABOUT ME
            </p>
          </MyPhotosGridShowcase>

          <div className="flex items-start z-10">
            <StickyWrapper
              class="p-4 shrink-0 h-screen items-center hidden lg:flex"
              stickyPosition={{ top: '0px' }}
            >
              <div className="flex justify-end pt-8 w-full">
                <DraggerAreaContainer
                  direction="vertical"
                  wrapperLength_px="70vh"
                  activeSectionId={1}
                  contents={['PROFILE', 'SKILLS']}
                  draggerProgress={scrolledRate}
                  onHandleDrag={handleScrollFromDragger}
                />
              </div>
            </StickyWrapper>

            <div
              className={`grid gap-[15vh] py-[50vh] justify-between max-w-[750px] h-full overflow-hidden ${dotgothic16_regular.className}`}
              ref={targetRef}
            >
              <AboutSectionContentWrapper subtitle="PROFILE">
                <ProfilePanel />
              </AboutSectionContentWrapper>

              <AboutSectionContentWrapper subtitle="SKILLS">
                <SkillLevelContent
                  categoryName="Languages"
                  skills={[
                    {
                      name: 'TypeScript',
                      level: 5,
                    },
                    {
                      name: 'JavaScript',
                      level: 5,
                    },
                    {
                      name: 'Python',
                      level: 4,
                    },
                    {
                      name: 'C/C++/C#',
                      level: 3,
                    },
                    {
                      name: 'PHP',
                      level: 3,
                    },
                    {
                      name: 'Rust',
                      level: 2,
                    },
                  ]}
                />
                <SkillLevelContent
                  categoryName="Web frontend"
                  skills={[
                    {
                      name: 'HTML/pug',
                      level: 5,
                    },
                    {
                      name: 'CSS/Sass',
                      level: 5,
                    },
                    {
                      name: 'React.js',
                      level: 5,
                    },
                    {
                      name: 'Electron',
                      level: 4,
                    },
                    {
                      name: 'Browsers',
                      level: 4,
                    },
                    {
                      name: 'Vue.js',
                      level: 4,
                    },
                    {
                      name: 'Nuxt.js',
                      level: 3,
                    },
                    {
                      name: 'webpack/vite',
                      level: 3,
                    },
                  ]}
                />
                <SkillLevelContent
                  categoryName="Web backend"
                  skills={[
                    {
                      name: 'Node.js',
                      level: 5,
                    },
                    {
                      name: 'Firebase',
                      level: 5,
                    },
                    {
                      name: 'express',
                      level: 4,
                    },
                    {
                      name: 'WordPress',
                      level: 4,
                    },
                    {
                      name: 'GCP/AWS',
                      level: 3,
                    },
                    {
                      name: 'Laravel',
                      level: 3,
                    },
                    {
                      name: 'MySQL',
                      level: 3,
                    },
                  ]}
                />
                <SkillLevelContent
                  categoryName="Others"
                  skills={[
                    {
                      name: 'OpenCV',
                      level: 4,
                    },
                    {
                      name: 'Photoshop',
                      level: 4,
                    },
                    {
                      name: 'Docker',
                      level: 3,
                    },
                    {
                      name: 'Unity',
                      level: 3,
                    },
                    {
                      name: 'Premier pro',
                      level: 3,
                    },
                    {
                      name: 'Flutter',
                      level: 2,
                    },
                  ]}
                />
              </AboutSectionContentWrapper>
            </div>
          </div>
          <div className="relative flex-xyc flex-col gap-[100px] w-full text-6xl h-screen overflow-hidden">
            <p
              className={`
              w-full h-full z-10 flex-xyc bg-dark-gray-1 opacity-80
              ${silkscreen_regular.className} text-stroke text-6xl`}
            >
              <span className="text-3xl">&gt;&gt; next</span>
              <br></br>
              MY WORKS
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
