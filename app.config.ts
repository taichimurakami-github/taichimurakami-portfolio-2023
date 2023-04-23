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
  relatedLinks?: { url: string; text: string }[];
  githubUrl?: string;
  description: string[];
  techs: string;
  period: string;
  member: string;
};

export const WORKS_SECTION_CONFIG: WorksSectionConfig[] = [
  {
    id: 'yenpoint',
    title: '株式会社Yenpoint様開発協力',
    thumbnailSrc: 'works_yenpoint-thumbnail.jpg',
    carouselSrc: ['works_yenpoint-thumbnail.jpg'],
    description: [
      '仙台市内のスタートアップ企業，株式会社Yenpoint様にて，メインのwebエンジニアとしてプロダクト開発に協力しています．',
      '主にブロックチェーン技術を活用した少額決済プラットフォームのプロダクトを開発しており，',
      'TypeScriptを中心的に利用しつつ，クライアント向けのアプリケーション，',
      '社内システム開発，FaaSを用いたバックエンドAPI開発等を幅広く担当しています．',
      '現在は実証実験の段階に向けて，プロトタイプ版からのアップデート作業を行っています．',
    ],
    techs: 'React, Vue, TypeScript, GCP',
    period: '2022年3月～',
    member: 'ブロックチェーン関連：3人，フロントエンド2人，バックエンド1人',
  },
  {
    id: 'miyagihack2023',
    title: '宮城ハッカソン2023',
    thumbnailSrc: 'works_miyagihack-thumbnail.jpg',
    carouselSrc: [
      'works_miyagihack-01.jpg',
      // 'https://youtu.be/VGnE-o7xpaw', //TypeError: Cannot read properties of null (reading 'removeAttribute')，原因不明．恐らくYoutube側の設定の問題？
      'works_miyagihack-02.jpg',
      'works_miyagihack-03.jpg',
      'works_miyagihack-04.jpg',
    ],
    relatedLinks: [
      {
        url: 'https://2023.hackathon.miyagi.jp/',
        text: '宮城ハッカソンHP（結果が記載されています．）',
      },
    ],
    githubUrl: 'https://github.com/taichimurakami-github/miyagi-hackathon-2023',
    description: [
      '全国数百名の応募の中から運よく当選し，「青翠のまじんこ」チームとして参加してきました．',
      '「スポット本人確認」というアイデアを考案し，そのデモとなるアプリケーションの実装を行いました．',
      'アイデアの詳細やアプリケーション構成等，詳しくはGithubのREADME.mdをご覧ください',
      '今回，マイナンバーカードの機能を用いる際に，ポケットサイン社の提供するAPIを使用しました．',
    ],
    techs: 'AWS lambda, Pocket sign API, Webview, React, TypeScript',
    period: '3日（うち開発期間1日）',
    member: '企画5人，プレゼン1人，フロントエンド2人，バックエンド2人',
  },
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
      'タイトル画面の隠しコマンドはもうお試しになりましたか？(scroll to startをホバーすると...？)',
    ],
    techs: 'Vercel, React, TypeScript',
    period: '1週間程度',
    member:
      '企画 : 5人 / 開発（ソフトウェア）: 2人 / 開発（ハードウェア）: 3人',
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
    id: 'cppinvader',
    title: 'invader++',
    thumbnailSrc: 'works_cppinvader-thumbnail.jpg',
    carouselSrc: [
      'works_cppinvader-thumbnail.jpg',
      'works_cppinvader-01.jpg',
      'works_cppinvader-02.jpg',
      'works_cppinvader-03.jpg',
    ],
    githubUrl: 'https://github.com/taichimurakami-github/cpp-cli-invaders',
    description: [
      '昨年のバンダイナムコスタジオサマーインターンシップに参加した際に最終課題で作成したゲームです．',
      'ターミナル上で動作するインベーダーゲームで，敵機に合わせて自機の「属性」を切り替えながら，迫りくる★を撃ち落とします．',
      '敵機が少なくなると，徐々にレベルアップして難易度UP！としたのですが，少々難しくしすぎました．',
      '描画系の調整が不完全なまま終わってしまったのが心残りですが...',
      '参加者の皆さんからは（ゲーム性については）意外と好評でした．',
    ],
    techs: 'c++',
    period: '2日',
    member: '企画・開発・制作：1人',
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
  {
    id: 'dezamii',
    title: 'Dezamii(beta)',
    thumbnailSrc: 'works_dezamii-thumbnail.jpg',
    carouselSrc: [
      'https://youtu.be/7I2pu0Mqf7c',
      'works_dezamii-thumbnail.jpg',
    ],
    relatedLinks: [
      {
        url: 'https://dezamii.com/',
        text: 'Dezamii beta版公開リンク（デモが動作しますが，一部機能が利用できません．）',
      },
      {
        url: 'https://frome.homes/',
        text: 'dezamii正式運用版（FroMe）',
      },
      {
        url: 'http://about.globallab-sendai.com/about.html',
        text: 'Global Lab SENDAI について',
      },
      {
        url: 'http://about.globallab-sendai.com/event/dateapps2022.html',
        text: 'DA-TE Apps! 2022',
      },
    ],
    githubUrl: 'https://github.com/taichimurakami-github/Dezamii-beta',
    description: [
      '（動画の32:40～あたりからDezamiiのピッチです．）',
      'Dezamiiは，新卒世代向け友達探し専用マッチングアプリです．',
      '出身地や出身校といった，親しみを感じやすいパラメータが一致する同性同年代のユーザをマッチングします．',
      'GPSの位置情報を基に，物理的に近い人を検索し，該当者が居た場合に友達リクエストの送信，及びチャット機能に至るまで，',
      '通常のマッチングサービスに必要な機能をWebアプリの形式ですべて実装しました．',
      'また，UI・UX設計やロゴ作成に至るまで，全て私一人で担当しました．',
      '現在，本サービスはスマートフォンアプリとして正式版の運用が行われています．',
      '※本サービスは2021年度のGlobal Lab SENDAIにて考案したアイデアであり，DA-TE Apps! 2022にて発表しました．',
    ],
    techs: 'React.js, Firebase, LINE Notify API, Stripe, PWA',
    period: '1ヶ月 + α',
    member: '企画：3人，マーケティング：1人，発表：1人，開発&デザイン：1人',
  },
  {
    id: 'tonpeilearning',
    title: 'とんぺい学習会',
    thumbnailSrc: 'works_tonpeilearning-thumbnail.jpg',
    relatedLinks: [
      {
        url: 'https://tonpei-study.com/',
        text: 'とんぺい学習会 公式HP',
      },
      {
        url: 'https://www.tohoku.ed.jp/2022/04/05/%E3%80%8C%E3%81%A8%E3%82%93%E3%81%BA%E3%81%84%E5%AD%A6%E7%BF%92%E4%BC%9A%E3%80%8D%E6%B4%BE%E9%81%A3%E5%A5%91%E7%B4%84%E8%AA%BF%E5%8D%B0%E5%BC%8F/',
        text: '「とんぺい学習会」派遣契約調印式',
      },
    ],
    carouselSrc: ['works_tonpeilearning-thumbnail.jpg'],
    githubUrl: '',
    description: [
      '「厳選された東北大学生による一対一指導」による生徒の学力アップを目指す，オンライン指導塾です．',
      '初期の入会者用システムの作成，及びwebサイト関連の制作を行いました．',
      'デザイナーや企画・マーケターの方と協力しながら，約7ヶ月ほどプロジェクトに携わりました．',
      '現在も継続的にサービスが運営されています．',
    ],
    techs: 'PHP，WordPress，Pug，Sass，JavaScript',
    period: '約7ヶ月',
    member: 'リーダー：1人, デザイナー：1人, エンジニア：1人',
  },
  // {
  //   id: 'tscovid19',
  //   title: 'covid19 感染数理モデル',
  //   thumbnailSrc: 'works_attendance-thumbnail.jpg',
  //   carouselSrc: [],
  //   githubUrl: '',
  //   description: [],
  //   techs: '',
  //   period: '',
  //   member: '',
  // },
];
