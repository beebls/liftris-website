import Head from "next/head";
import Image from "next/image";

import { Icon, appstore, googleplay } from "react-3d-icons";

export default function Home() {
  return (
    <div className='h-full pt-20 pb-5'>
      <Head>
        <title>Liftris - Your Log, Your Way</title>
      </Head>
      <main className='flex flex-col justify-center h-full'>
        <div className='text-center m-auto px-5'>
          <div className='text-zinc-400'>
            <div className='hidden md:block'>
              <Image src='/logo.svg' width={200} height={200} />
            </div>
            <div className='md:hidden'>
              <Image src='/logo.svg' width={100} height={100} />
            </div>
            <h1 className='text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Liftris
            </h1>
            <div className='text-3xl font-medium'>
              <h2>Your Log, Your Way</h2>
            </div>
            <div className='bg-zinc-400 h-[2px] m-5 mb-10'></div>
            <div className='flex flex-col md:flex-row'>
              <h3 className=' md:hidden text-5xl font-bold bg-clip-text bg-gradient-to-tl from-slate-400 to-slate-200 text-transparent pb-3'>
                Download
              </h3>
              <div className='bg-gradient-to-tl from-zinc-900 to-zinc-700 px-3 md:px-12 py-5 rounded-full border-zinc-900 shadow-md w-56 md:w-auto self-center'>
                <span className='hidden md:block text-5xl font-bold bg-clip-text bg-gradient-to-tl from-slate-400 to-slate-200 text-transparent pb-3'>
                  Download
                </span>
                <div className='flex flex-col md:flex-row'>
                  <button
                    className='w-44 bg-gradient-to-tr from-sky-700 to-cyan-500 from- rounded-full border-zinc-900 shadow-md self-center'
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/liftris/id1625626338"
                      )
                    }>
                    <Icon
                      file={appstore}
                      scale={10}
                      color='#fff'
                      depth={20}
                      position={[5, 5, 0]}
                      rotation={[-10, 15, 0]}
                    />
                  </button>
                  <div className='p-5' />
                  <button
                    className='w-44 bg-gradient-to-tl from-emerald-700 to-lime-500 from- rounded-full border-zinc-900 shadow-md self-center'
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.beebles.liftlog"
                      )
                    }>
                    <Icon
                      file={googleplay}
                      scale={10}
                      color='#fff'
                      depth={15}
                      position={[0, 5, 0]}
                      rotation={[-5, -20, 0]}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
