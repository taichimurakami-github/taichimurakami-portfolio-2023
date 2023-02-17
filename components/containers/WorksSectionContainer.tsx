import React, { useState } from 'react';
import SectionTitleContainer from '@containers/SectionTitleContainer';
import SectionToCContainer from '@views/TableOfContent';
import SectionWrapper from '@views/SectionWrapper';
import StickyWrapper from '@views/StickyWrapper';
import { DotGothic16, Silkscreen } from '@next/font/google';
import gradients from '@/styles/gradients.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext', 'latin', 'cyrillic'],
});

const worksContentsImgSrcList = ['./ex-work-1.png', './ex-work-2.png'];

export default function WorksSection() {
  const [activeId, setActiveId] = useState(0);
  const handleActiveContentUpdate = (nextId: number, nowId: number) => {
    setActiveId(nextId);
  };

  return (
    <SectionWrapper id="works_section" class="flex items-start">
      <StickyWrapper class="p-4 shrink-0" stickyPosition={{ top: '0px' }}>
        <SectionTitleContainer title="WORKS" />
        <SectionToCContainer
          id="works_section_toc"
          contents={worksContentsImgSrcList.map((src, i) => (
            <img
              key={`work_section_toc_#${i}`}
              src={src}
              alt="example of my works #1"
              className="w-[150px] h-[150px] object-cover"
            />
          ))}
          font={silkscreen_regular}
          contentGap={15}
          tocDisplaySide="left"
          wrapperClass="pl-10 mt-4 text-2xl"
          onHandleActiveContentChange={handleActiveContentUpdate}
        />
      </StickyWrapper>

      <div
        className={`flex-xyc flex-col gap-4 w-full h-full mx-auto ${silkscreen_regular.className}`}
      >
        <div className="flex gap-2 text-3xl">
          <span className="text-emerald-1">{activeId + 1}</span>
          <span>/</span>
          <span>{worksContentsImgSrcList.length}</span>
        </div>
        <div className="relative flex-xyc w-[90%] h-full max-h-[750px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={worksContentsImgSrcList[activeId]}
            alt="works image"
          />
          <div
            className={`
              absolute bottom-0 left-0 w-full bg-emerald-1 text-xl p-4 cursor-pointer
              ${gradients['gradient-bg-works-section-nav']}
            `}
          >
            &gt;&gt; Click or hover to show details<br></br>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
