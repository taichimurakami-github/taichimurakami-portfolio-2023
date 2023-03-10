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
  description: string[];
  techs: string;
  period: string;
  member: string;
};

export const WORKS_SECTION_CONFIG: WorksSectionConfig[] = [
  {
    id: 'portfolio2023',
    title: 'ポートフォリオ（このサイト）',
    thumbnailSrc: 'works_portfolio-thumbnail.jpg',
    carouselSrc: ['works_portfolio-thumbnail.jpg'],
    githubUrl:
      'https://github.com/taichimurakami-github/OpenRIEC_ColorWars_Public',
    description: [
      '就活を機に作成したポートフォリオサイトです．React + TypeScriptで作成しています．',
      'シンプルながらも遊び心のある世界観が感じられるようなデザインを目指しました．',
      'SwiperとReact-youtube以外のライブラリは使用せず，なるべく自前実装という縛りで作成しました．',
      'タイトル画面の隠しコマンドはもうお試しになりましたか？',
    ],
    techs: 'Vercel, React, TypeScript',
    period: '1週間程度',
    member:
      '企画 : 5人 / 開発（ソフトウェア）: 2人 / 開発（ハードウェア）: 3人',
  },
  {
    id: 'miyagihack2023',
    title: '宮城ハッカソン2023',
    thumbnailSrc: 'works_miyagihack-thumbnail.jpg',
    carouselSrc: [
      'works_miyagihack-01.jpg',
      'works_miyagihack-02.jpg',
      'works_miyagihack-03.jpg',
    ],
    githubUrl: 'https://github.com/taichimurakami-github/miyagi-hackathon-2023',
    description: [
      '全国数百名の応募の中から，運よく当選しましたので参加してきました．',
      '「スポット本人確認」というアイデアを考案し，そのデモとなるアプリケーションの実装を行いました．',
      'アイデアの詳細やアプリケーション構成等，詳しくはGithubのREADME.mdをご覧ください',
      '今回，マイナンバーカードの機能を用いる際に，ポケットサイン社の提供するAPIを使用しました．',
    ],
    techs: 'AWS lambda, Pocket sign API, Webview, React, TypeScript',
    period: '3日（うち開発期間1日）',
    member: '企画5人，プレゼン1人，フロントエンド2人，バックエンド2人',
  },
  {
    id: 'colorwars',
    title: '色塗りゲーム',
    thumbnailSrc: 'works_colorwars-thumbnail.jpg',
    carouselSrc: [
      'https://youtu.be/z6jh8ruTIF8',
      'https://youtu.be/moMLlZELpJ4',
      'works_colorwars-01.jpg',
      'works_colorwars-02.jpg',
      'works_colorwars-03.jpg',
      'works_colorwars-04.jpg',
    ],
    githubUrl:
      'https://github.com/taichimurakami-github/OpenRIEC_ColorWars_Public',
    description: [
      '研究室公開の際に作成した色塗りゲームです．小さい子供から大人まで，１分で白熱して遊べるゲームを目指して制作しました．',
      '回転テーブルの上にメガホンをスタンドで固定し，内部にjoy-conが取り付けられたハードウェアで大砲を操作します．',
      'joy-conの姿勢推定とプロジェクターを組み合わせることで，迫力ある体感型ゲームに仕上がりました．',
    ],
    techs: 'Unity, C#, C++',
    period: '1週間程度',
    member:
      '企画 : 5人 / 開発（ソフトウェア）: 2人 / 開発（ハードウェア）: 3人',
  },
  {
    id: 'attendance',
    title: '出席管理アプリ',
    thumbnailSrc: 'works_attendance-thumbnail.jpg',
    carouselSrc: [
      'https://youtu.be/uRv5C7qSgMU',
      'works_attendance-thumbnail.jpg',
    ],
    githubUrl: 'https://github.com/taichimurakami-github/attendance-management',
    description: [
      '仙台市内のとある地方塾内の自習室において，出席管理を自動化するためのシステムを作成しました．',
      'GUIアプリケーションを通じて，生徒の皆さんが各自で出席状況を登録し，それらを自動で集計するシステムとなっています．',
      '現在も保守・運用中で，不定期にアップデートを行っています．',
    ],
    techs: 'Electron, Github Actions, TypeScript, React, VBA',
    period: '企画・開発・実証実験まで2週間程度',
    member: '開発・保守・運用：2人',
  },
];
