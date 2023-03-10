import React, { useCallback, useRef, useState } from 'react';
import { WORKS_SECTION_CONFIG } from '@/app.config';
import SectionTitleContainer from '@containers/SectionTitleContainer';
import SectionWrapper from '@views/SectionWrapper';
import StickyWrapper from '@views/StickyWrapper';
import { DotGothic16, Silkscreen } from '@next/font/google';
import animations from '@/styles/animations.module.scss';
import WorksModalContentContainer from './WorksModalContentContainer';
import CloseIcon from '../views/CloseIcon';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext', 'latin', 'cyrillic'],
});

export default function WorksSection() {
  const [modalActiveId, setModalActiveId] = useState<null | number>(null);
  const preventScrollTarget = useRef<HTMLDivElement>(null);

  const handleOpenModal = useCallback(
    (i: number) => {
      setModalActiveId(i);
    },
    [setModalActiveId]
  );

  const handleCloseModal = useCallback(() => {
    setModalActiveId(null);
  }, [setModalActiveId]);

  return (
    <SectionWrapper id="works_section" class="z-10" disableOpacityChange>
      <StickyWrapper
        class="p-4 shrink-0 bg-dark-gray-1 z-10"
        stickyPosition={{ top: '0px' }}
      >
        <SectionTitleContainer title="WORKS" />
      </StickyWrapper>

      <div
        className={`relative flex items-start justify-center gap-10 flex-wrap py-[10vh] mx-auto z-0 ${silkscreen_regular.className}`}
      >
        {WORKS_SECTION_CONFIG.map((v, i) => (
          <div
            key={`works_section_grid_${i}`}
            className={`relative flex-xyc w-full max-w-[480px] h-[270px] overflow-hidden cursor-pointer border-2 border-dark-gray-3`}
          >
            <img
              className="w-full h-full object-cover aspect-square z-0"
              src={v.thumbnailSrc}
              alt="works image"
            />
            <div
              className={`
              hover-nav absolute bottom-0 left-0 w-full h-full flex-xyc flex-col gap-4 select-none z-10
              bg-emerald-1 text-xl font-bold cursor-pointer
              ${animations['animate-works-showcase-hover-nav']}
            `}
              onClick={() => {
                handleOpenModal(i);
              }}
            >
              <p className="text-2xl">{v.title}</p>
              <p>&gt;&gt; Click to show details</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="works-modal-wrapper fixed top-0 left-0 flex justify-center items-end w-full h-full bg-white bg-[rgba(0,0,0,0.7)] z-10 overflow-hidden"
        style={{
          visibility: modalActiveId !== null ? 'visible' : 'hidden',
        }}
        onClick={() => setModalActiveId(null)}
        ref={preventScrollTarget}
      >
        <div
          className={`bg-white w-[95%] h-[95%] text-dark-gray-1 text-center ${
            modalActiveId !== null && animations['animate-works-modal']
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseIcon
            content={
              <p className={`pl-4 text-3xl ${silkscreen_regular.className}`}>
                <span className="text-emerald-1">W</span>ORKS #{modalActiveId}
              </p>
            }
            onHandleClick={handleCloseModal}
          />

          <WorksModalContentContainer
            {...WORKS_SECTION_CONFIG[modalActiveId ?? 0]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
