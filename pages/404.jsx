import Head from "next/head";

export default function Home() {
  return (
    <div className='h-full py-10 pb-5 m-auto'>
      <Head>
        <title>Liftris - 404</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='text-zinc-400'>
          <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
            404 - Page Not Found
          </h1>
        </div>
      </main>
    </div>
  );
}
