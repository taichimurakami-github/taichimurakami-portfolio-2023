import Head from 'next/head';
import { DotGothic16, Inter, Silkscreen } from '@next/font/google';
import TypingAnimatedText from '@/components/containers/TypingAnimatedText';
import PointerTraceCircle from '@/components/views/PointerTraceCircle';

const inter = Inter({ subsets: ['latin'] });

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});
const silkscreen_bold = Silkscreen({
  weight: '700',
  subsets: ['latin'],
});
const dotgothic16_regular = DotGothic16({
  weight: '400',
  subsets: ['cyrillic'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PointerTraceCircle />
      <main className="overflow-hidden bg-dark-gray-1 text-white">
        <section id="title_section" className="h-screen">
          <h1 className="text-center text-6xl h-[30%] flex-xyc">
            <TypingAnimatedText
              id="atxt_page_title"
              contents={[
                {
                  text: 'TAICHI MURAKAMI ',
                  font: silkscreen_regular,
                  class: 'text-white',
                  typingInterval_ms: 50,
                  afterInterval_ms: 0,
                },
                {
                  text: 'portfolio',
                  font: silkscreen_regular,
                  class: 'text-emerald-1',
                  typingInterval_ms: 50,
                },
              ]}
            />
          </h1>
        </section>
      </main>
    </>
  );
}
