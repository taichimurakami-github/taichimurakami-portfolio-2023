import React, { PropsWithChildren, useCallback } from 'react';
import useComponentScrolledRate from '@/hooks/useComponentScrolledRate';
import SectionTitleContainer from '@containers/SectionTitleContainer';
import DraggerAreaContainer from '@/components/containers/DraggerAreaContainer';
import SectionWrapper from '@views/SectionWrapper';
import StickyWrapper from '@views/StickyWrapper';
import { Caveat, DotGothic16, Silkscreen } from '@next/font/google';
import range from '@/utils/range';
import extension from '@/styles/extension.module.scss';

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

function SkillLevelText(props: {
  skillName: string;
  level: number;
  maxLevel?: number;
}) {
  const MAX_LEVEL = props.maxLevel ?? 5;

  return (
    <p className="text-xl">
      {range(0, MAX_LEVEL - 1).map((_, i) =>
        i < props.level ? (
          <span
            key={`skill_text_${props.skillName}_${i}`}
            className="text-emerald-1"
          >
            &#9733;
          </span>
        ) : (
          <span
            key={`skill_text_${props.skillName}_${i}`}
            className="text-dark-gray-3"
          >
            &#9734;
          </span>
        )
      )}
    </p>
  );
}

function SkillLevelContent(props: {
  categoryName: string;
  skills: {
    name: string;
    level: number;
    maxLevel?: number;
  }[];
}) {
  return (
    <>
      <h4
        className={`relative text-2xl text-center ${silkscreen_regular.className}`}
      >
        {props.categoryName}
      </h4>
      <ul className="relative max-w-[250px] mx-auto mb-10">
        {props.skills.map((v) => {
          return (
            <li
              key={`about_skills_${props.categoryName}_${v.name}`}
              className="flex gap-[2rem] justify-between w-full"
            >
              <p>{v.name}</p>
              <SkillLevelText
                skillName={v.name}
                level={v.level}
                maxLevel={v.maxLevel}
              />
            </li>
          );
        })}
      </ul>
    </>
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
      <SectionWrapper id="about_section" class="flex items-start">
        <StickyWrapper class="p-4 shrink-0" stickyPosition={{ top: '0px' }}>
          <SectionTitleContainer title="ABOUT" />
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
          className="relative flex flex-start gap-[35px] justify-center max-w-[1000px] mx-auto all-children-select-none"
          onScroll={(e) => {
            console.log(e.currentTarget.scrollTop);
          }}
        >
          <div
            className={`grid gap-[75vh] my-[80vh] py-[20vh] justify-between max-w-[750px] h-full ${dotgothic16_regular.className}`}
            ref={targetRef}
          >
            <AboutSectionContentWrapper subtitle="PROFILE">
              <h3 className="text-2xl text-center">Taichi Murakami</h3>
              <img
                className="rounded-full mx-auto"
                src="./avatar.jpg"
                alt="Taichi Murakami"
                style={{
                  width: 250,
                  height: 250,
                }}
              />
              <p className="w-[80%] max-w-[750px] mx-auto">
                普段はスタートアップ企業でwebエンジニア（フロント・バックエンド）をやっています。
                <br></br>
                趣味：寝ること、イラスト・ゲーム制作（最近始めたばかりです）
                <br></br>
              </p>
              <p>
                経歴：<br></br>
                2022/4：東北⼤学大学院 情報科学研究科 ⼊学<br></br>
                2018/4：東北⼤学工学部 電気情報物理⼯学科 卒業<br></br>
                2018/3：東北⼤学工学部 電気情報物理⼯学科 ⼊学
              </p>
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
                    name: 'Browsers',
                    level: 4,
                  },
                  {
                    name: 'Vue.js',
                    level: 4,
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
                    name: 'Docker',
                    level: 3,
                  },
                  {
                    name: 'Unity',
                    level: 3,
                  },
                  {
                    name: 'Unreal Engine',
                    level: 2,
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
      </SectionWrapper>
    </div>
  );
}
