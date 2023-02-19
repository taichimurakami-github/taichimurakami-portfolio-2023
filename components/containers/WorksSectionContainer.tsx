import React, { useState } from 'react';
import SectionTitleContainer from '@containers/SectionTitleContainer';
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

function WorksSectionGridContentViewWrapper(props: { imgSrc: string }) {
  return (
    <div className="relative flex-xyc w-[350px] overflow-hidden">
      <img
        className="w-full h-full object-cover aspect-square"
        src={props.imgSrc}
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
  );
}

export default function WorksSection() {
  const [activeId, setActiveId] = useState(0);

  return (
    <SectionWrapper id="works_section" class="">
      <StickyWrapper class="p-4 shrink-0" stickyPosition={{ top: '0px' }}>
        <SectionTitleContainer title="WORKS" />
      </StickyWrapper>

      <div
        className={`flex-xyc gap-10 flex-wrap w-full h-full mx-auto ${silkscreen_regular.className}`}
      >
        {worksContentsImgSrcList.map((src) => (
          <WorksSectionGridContentViewWrapper
            key={`works_section_grid_${src}`}
            imgSrc={src}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
