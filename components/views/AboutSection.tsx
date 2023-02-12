import SectionTitleContainer from '../containers/SectionTitleContainer';
import { DotGothic16, Silkscreen } from '@next/font/google';
import AboutSectionToC from './TableOfContent';
import SectionWrapper from './SectionWrapper';
import StickyWrapper from './StickyWrapper';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['latin-ext'],
});

export default function AboutSection() {
  return (
    <SectionWrapper id="about_section">
      <StickyWrapper class="p-4">
        <SectionTitleContainer title="ABOUT" />
        <AboutSectionToC
          contents={[
            <p key="about_section_content_profile">PROFILE</p>,
            <p key="about_section_content_skills">SKILLS</p>,
          ]}
          font={silkscreen_regular}
          wrapperClass="pl-10 mt-4 text-2xl"
          indexContentClass="h-[50px]"
        />
      </StickyWrapper>
      <div className="h-[1000px]">this is a main contents</div>
    </SectionWrapper>
  );
}
