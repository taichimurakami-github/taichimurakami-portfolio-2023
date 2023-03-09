export const EASTER_EGG_CONFIG = {
  titleSection: {
    cmd_keyCode: [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyA',
      'KeyA',
      'Enter',
    ],
    cmd_str: ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'A', 'A', 'Enter'],
  },
};

export const INFORMATIONS = {
  source_code_url:
    'https://github.com/taichimurakami-github/taichimurakami-portfolio-2023',
  github_url: 'https://github.com/taichimurakami-github',
  email_address: 'taichi.murakami.s5@dc.tohoku.ac.jp',
};

export type WorksSectionConfig = {
  id: string;
  title: string;
  thumbnailSrc: string;
  carouselSrc: string[];
  githubUrl?: string;
  description: string;
  techs: string;
  period: string;
  member: string;
};

export const WORKS_SECTION_CONFIG: WorksSectionConfig[] = [
  {
    id: 'splat',
    title: '色塗りゲーム',
    thumbnailSrc: 'ex-work-1.png',
    carouselSrc: [
      'ex-work-1.png',
      'ex-work-2.png',
      'ex-work-1.png',
      'ex-work-2.png',
      'ex-work-1.png',
      'ex-work-2.png',
      'ex-work-1.png',
      'ex-work-2.png',
      'ex-work-1.png',
      'ex-work-2.png',
      'ex-work-1.png',
      'ex-work-2.png',
    ],
    githubUrl:
      'https://github.com/taichimurakami-github/OpenRIEC_ColorWars_Public',
    description:
      '研究室公開の際に作成した色塗りゲームです．小さい子供から大人まで，幅広く遊べる体感型ゲームを目指して制作しました．',
    techs: 'Unity, C#, C++',
    period: '1週間程度',
    member:
      '企画 : 5人 / 開発（ソフトウェア）: 2人 / 開発（ハードウェア）: 3人',
  },
];
