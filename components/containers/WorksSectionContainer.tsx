import React, { useState } from 'react';
import SectionTitleContainer from '@containers/SectionTitleContainer';
import SectionWrapper from '@views/SectionWrapper';
import StickyWrapper from '@views/StickyWrapper';
import { DotGothic16, Silkscreen } from '@next/font/google';
import animations from '@/styles/animations.module.scss';
import extensions from '@/styles/extension.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext', 'latin', 'cyrillic'],
});

const worksContentsImgSrcList = [
  './ex-work-1.png',
  './ex-work-2.png',
  './ex-work-1.png',
  './ex-work-2.png',
  './ex-work-1.png',
  './ex-work-2.png',
  './ex-work-1.png',
  './ex-work-2.png',
  './ex-work-1.png',
  './ex-work-2.png',
  './ex-work-1.png',
  './ex-work-2.png',
];

export default function WorksSection() {
  const [modalActiveId, setModalActiveId] = useState<null | number>(null);

  return (
    <SectionWrapper id="works_section" class="">
      <StickyWrapper
        class="p-4 shrink-0 bg-dark-gray-1 z-10"
        stickyPosition={{ top: '0px' }}
      >
        <SectionTitleContainer title="WORKS" />
      </StickyWrapper>

      <div
        className={`relative flex items-start justify-center gap-10 flex-wrap py-[10vh] mx-auto z-0 ${silkscreen_regular.className}`}
      >
        {worksContentsImgSrcList.map((src, i) => (
          <div
            key={`works_section_grid_${src}`}
            className={`relative flex-xyc w-[350px] h-[350px] overflow-hidden cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover aspect-square z-0"
              src={src}
              alt="works image"
            />
            <div
              className={`
              hover-nav flex-xyc select-none
              absolute bottom-0 left-0 w-full h-full bg-emerald-1 text-xl cursor-pointer
              backdrop-blur-md z-10
              ${animations['animate-works-showcase-hover-nav']}
            `}
              onClick={() => setModalActiveId(i)}
            >
              &gt;&gt; Click to show details<br></br>
            </div>
          </div>
        ))}
      </div>
      <div
        className="works-modal-wrapper fixed top-0 left-0 flex justify-center items-end w-full h-full bg-white bg-[rgba(0,0,0,0.7)] z-10"
        style={{
          visibility: modalActiveId !== null ? 'visible' : 'hidden',
        }}
        onClick={() => setModalActiveId(null)}
      >
        <div
          className={`bg-white w-[95%] max-w-[1000px] h-[90%] text-dark-gray-1 text-center ${
            modalActiveId !== null && animations['animate-works-modal']
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-end">
            <div
              className={`cursor-pointer ${extensions['works-modal-close-wrapper']}`}
              onClick={() => setModalActiveId(null)}
            >
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="relative desc-container h-full pb-[10vh] overflow-scroll-without-scrollbar text-lg">
            <div className="absolute top-0 left-0 w-full max-h-[60vh] z-0">
              <img
                className="w-full h-full object-cover mb-40"
                src={worksContentsImgSrcList[0]}
              />
            </div>

            <div className="h-[60vh]"></div>

            <div className="z-10 mt-10">
              <h2 className="text-2xl font-bold">色塗りゲーム</h2>
              <a>githubリポジトリはこちらをクリック</a>
              <p>
                研究室公開の際に作成した色塗りゲームです．小さい子供から大人まで，幅広く遊べる体感型ゲームを目指して制作しました．
              </p>
            </div>

            <ul className="grid mx-auto z-10">
              <li className="flex justify-between gap-10 w-full">
                <h3>使用技術</h3>
                <p>Unity, C# </p>
              </li>
              <li className="flex justify-between gap-10 w-full">
                <h3>制作期間</h3>
                <p>1週間程度</p>
              </li>
              <li className="flex justify-between gap-10 w-full">
                <h3>制作内訳</h3>
                <p>
                  企画 : 5人 / 開発（ソフトウェア）: 2人 / 開発（ハードウェア）:
                  3人
                </p>
              </li>
            </ul>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
