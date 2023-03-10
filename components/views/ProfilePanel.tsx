import { Silkscreen } from '@next/font/google';
import React from 'react';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function ProfilePanel() {
  return (
    <div className="grid gap-[35px] w-[80%] max-w-[750px] mx-auto text-lg">
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
      <p>
        個人的にWeb関連全般（特にフロントエンド）の開発をやっている大学院生です。
        普段はHCI系の研究室でユーザインタフェースに関する研究を行いつつ、
        スタートアップ企業でwebエンジニア（フロント・バックエンド）をやっています。
        <br></br>
        今年は画像処理が本職になりそうな予感...
      </p>
      <p>
        趣味：
        <br></br>
        web開発、寝ること、短距離ツーリング等
      </p>
      <ul className="grid gap-[15px]">
        経歴：<br></br>
        <li>
          <span className={silkscreen_regular.className}>2023/3：</span>
          <br></br>
          宮城ハッカソン2023に参加
        </li>
        <li>
          <span className={silkscreen_regular.className}>2022/9：</span>
          <br></br>
          研究室一般開放イベントでの体感型ゲームの制作
        </li>
        <li>
          <span className={silkscreen_regular.className}>2022/3 - 4：</span>
          <br></br>
          東北⼤学大学院 情報科学研究科 ⼊学 <br></br>
          東北⼤学工学部 電気情報物理⼯学科 卒業
        </li>
        <li>
          <span className={silkscreen_regular.className}>2022/3 - 現在</span>
          <br></br>
          株式会社YenPointにてwebエンジニアとして勤務
        </li>
        <li>
          <span className={silkscreen_regular.className}>
            2021/9 - 2022/2：
          </span>
          <br></br>
          Global Lab Sendaiに出場
        </li>
        <li>
          <span className={silkscreen_regular.className}>2021/8 - 現在：</span>
          <br></br>
          地方塾で導入されている出席管理システムの開発・運用
        </li>
        <li>
          <span className={silkscreen_regular.className}>
            2020/11 - 2021/3：
          </span>
          <br></br>
          とんぺい学習会のwebサイト制作及びシステム開発
        </li>
        <li></li>
        <li>
          <span className={silkscreen_regular.className}>
            2020/5 - 2020/8：
          </span>
          <br></br>
          TechAchademyを受講し、webページ制作やデザインの実務作業を担当
        </li>
        <li>
          <span className={silkscreen_regular.className}>2019/8：</span>
          <br></br>
          ベトナムでビジネス研修プログラムに参加
        </li>
        <li>
          <span className={silkscreen_regular.className}>2018/3：</span>
          <br></br>
          東北⼤学工学部 電気情報物理⼯学科 ⼊学
        </li>
      </ul>
    </div>
  );
}
