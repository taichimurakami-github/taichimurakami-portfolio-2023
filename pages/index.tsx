import Head from 'next/head';
import { DotGothic16, Inter, Silkscreen } from '@next/font/google';
import PointerTraceCircle from '@views/PointerTraceCircle';
import TitleSectionContainer from '@containers/TitleSectionContainer';
import AboutSectionContainer from '@containers/AboutSectionContainer';
import LoadingScreenContainer from '@containers/LoadingScreenContainer';
import WorksSectionContainer from '@containers/WorksSectionContainer';
import LastSectionContainer from '@containers/LastSectionContainer';

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
  subsets: ['latin-ext'],
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
      <main className="relative bg-dark-gray-1 text-white grid gap-10 flex flex-col gap-[35vh] z-0">
        <PointerTraceCircle />
        <TitleSectionContainer />
        <AboutSectionContainer />
        <WorksSectionContainer />
        <LastSectionContainer />
      </main>
      <LoadingScreenContainer />
    </>
  );
}
