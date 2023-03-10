import range from '@/utils/range';
import { Silkscreen } from '@next/font/google';
import React from 'react';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

const SkillLevelText = (props: {
  skillName: string;
  level: number;
  maxLevel?: number;
}) => {
  return (
    <p className="text-xl">
      {range(0, props.maxLevel ?? 5 - 1).map((_, i) =>
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
};

const SkillLevelContent = (props: {
  categoryName: string;
  skills: {
    name: string;
    level: number;
    maxLevel?: number;
  }[];
}) => {
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
};

export default SkillLevelContent;
