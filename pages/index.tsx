import Head from 'next/head';
import PointerTraceCircle from '@views/PointerTraceCircle';
import TitleSectionContainer from '@containers/TitleSectionContainer';
import AboutSectionContainer from '@containers/AboutSectionContainer';
import LoadingScreenContainer from '@containers/LoadingScreenContainer';
import WorksSectionContainer from '@containers/WorksSectionContainer';
import LastSectionContainer from '@containers/LastSectionContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taichi Murakami Portfolio 2023</title>
        <meta name="description" content="Portfolio of Taichi Murakami" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-dark-gray-1 text-white grid gap-10 flex flex-col gap-[35vh] z-0 overflow-hidden">
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
