import Head from "next/head";

import changelog from "../../public/changelog.json";

import { RootMap } from "../../components/ChangelogMaps";

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Update 1.4.0</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update 1.4.0
            </h1>
            <h2 className='text-center text-5xl md:text-7xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Release 4 - June 3
            </h2>
            <div className='py-10'>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                What's New
              </h3>
              <div className='flex justify-center'>
                <div className='flex flex-col items-start w-full md:w-2/3'>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={updateNameStyle + " text-emerald-500"}>
                        Performance
                      </h4>
                      <p>
                        As Liftris has grown, the complexity of the app has
                        grown, but the underlying code that renders it all has
                        stayed the same. This changes today.
                        <br />
                        <br />A render is the act of your phone drawing out the
                        app's visuals on the screen. Through the use of
                        optimization techniques in React Native{" "}
                        {"(the app framework Liftris is built on)"}, I have been
                        able to reduce the amount of renders anywhere from 2-5x
                        depending on the length and complexity of your workouts.
                        <br />
                        <br />
                        For you, nothing will appear different, but your phone
                        will be kissing the ground and thanking you for how much
                        less work it is doing in the background.
                      </p>
                    </div>
                  </article>
                  <article className='flex flex-col py-3'>
                    <div>
                      <h4 className={updateNameStyle}>Color Picker Options</h4>
                      <p>
                        You can now choose custom colors using a hex-code
                        instead of the built-in color wheel. This means you can
                        use any online color/theme generator to make colors for
                        your Liftris theme.
                      </p>
                    </div>
                    <div className='w-72 mx-auto md:w-full flex justify-center'>
                      <img src='/update1.4.0/hexcolor.gif' />
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                Changelog
              </h3>
              {changelog
                .filter((e) => e.version === "1.4.0")
                .map((e, i) => (
                  <article key={`changelog_${e.version}`}>
                    <span className={updateNameStyle}>
                      {e.version} - {e.name} - {e.date}
                    </span>
                    <ul className={ulstyle}>
                      <RootMap data={e.data} />
                    </ul>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
