import SectionTitleContainer from '../containers/SectionTitleContainer';
import { DotGothic16, Silkscreen } from '@next/font/google';
import SectionTocContainer from './TableOfContent';
import SectionWrapper from './SectionWrapper';
import StickyWrapper from './StickyWrapper';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext', 'latin', 'cyrillic'],
});

export default function AboutSection() {
  return (
    <SectionWrapper id="about_section" class="flex items-start">
      <StickyWrapper class="p-4 shrink-0" stickyPosition={{ top: '0px' }}>
        <SectionTitleContainer title="ABOUT" />
        <SectionTocContainer
          id="about_section_toc"
          contents={[
            <p key="about_section_content_profile">PROFILE</p>,
            <p key="about_section_content_skills">SKILLS</p>,
          ]}
          font={silkscreen_regular}
          tocDisplaySide="right"
          wrapperClass="pl-10 mt-4 text-2xl"
          contentContainerClass="h-[50px]"
          contentGap={15}
        />
      </StickyWrapper>

      <div
        className={`grid gap-[100px] justify-between max-w-full w-[750px] mx-auto ${dotgothic16_regular.className}`}
      >
        <div className="relative gap-[35px]">
          <div className="absolute top-2 left-2 w-full h-full bg-dark-gray-3 rounded-lg"></div>
          <div className="relative grid gap-[30px] p-8 bg-dark-gray-2 rounded-lg">
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
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-2 left-2 w-full h-full bg-dark-gray-3 rounded-lg"></div>
          <div className="relative grid gap-[30px] p-8 bg-dark-gray-2 rounded-lg">
            <h3
              className={`relative text-2xl text-center ${silkscreen_regular.className}`}
            >
              SKILLS
            </h3>
            <h4
              className={`relative text-2xl text-center ${silkscreen_regular.className}`}
            >
              Web frontend
            </h4>
            <ul className="relative max-w-[250px] mx-auto mb-10">
              <li className="flex gap-[2rem] justify-between w-full">
                <p>TypeScript</p>
                <p>★★★</p>
              </li>
              <li className="flex gap-[2rem] justify-between w-full">
                <p>React.js</p>
                <p>★★★</p>
              </li>
              <li className="flex gap-[2rem] justify-between w-full">
                <p>Vue.js</p>
                <p>★★★</p>
              </li>
            </ul>
            <h4
              className={`relative text-2xl text-center ${silkscreen_regular.className}`}
            >
              Web backend
            </h4>
            <ul className="relative max-w-[250px] mx-auto">
              <li className="flex gap-[2rem] justify-between w-full">
                <p>Node.js</p>
                <p>★★★</p>
              </li>
              <li className="flex gap-[2rem] justify-between w-full">
                <p>PHP/Laravel</p>
                <p>★★★</p>
              </li>
              <li className="flex gap-[2rem] justify-between w-full">
                <p>Wordpress</p>
                <p>★★★</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[100px] right-0">
        <SectionTitleContainer title="WORKS" wrapperClass="rotate-90" />
      </div>
    </SectionWrapper>
  );
}
