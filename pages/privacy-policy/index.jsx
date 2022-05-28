import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Liftris - Privacy Policy</title>
      </Head>
      <main className='h-full m-auto'>
        <div className='flex flex-col justify-center text-center px-5'>
          <div className='pb-5'>
            <h1 className='text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Privacy Policy
            </h1>
            <div className='pb-5 text-xl font-medium text-zinc-400'>
              <p>
                Liftris is an entirely client-side app. It saves data locally to
                the user's device to enable history, but this data is never
                accessed by any person or program other than the Liftris app. No
                app data or user data is ever collected and sent off-device.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
