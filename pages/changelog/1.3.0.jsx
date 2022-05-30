import Head from "next/head";
import Image from "next/image";

import changelog from "../../public/changelog.json";

import { CategoryMap } from "../../components/ChangelogMaps";

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Update 1.3.0</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update 1.3.0
            </h1>
            <h2 className='text-center text-5xl md:text-7xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Release 3 - Coming Soon
            </h2>
            <div>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                What's New
              </h3>
              <div className='flex flex-col items-center'>
                <article className='flex flex-col md:flex-row w-full md:w-1/2'>
                  <div>
                    <h4 className={updateNameStyle}>Autofilling Workouts</h4>
                    <p>
                      Do you have a set that was the exact same as last weeks?
                      Maybe you like to remind yourself of the same thing every
                      week in your notes.
                      <br />
                      <br />
                      If so, you no longer need to manually re-type these fields
                      every workout. Simply swipe right on a set to bring the
                      autofill menu up.
                      <br />
                      <br />
                      If you already have a number written into a field, by
                      default the autofill will skip over that field, but you
                      can change this behaviour in settings to make it always
                      write over your current data.
                    </p>
                  </div>
                  <div className='w-72 self-center md:w-full'>
                    <img src='/130example.gif' />
                  </div>
                </article>
              </div>
            </div>
            <div>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                Changelog
              </h3>
              {changelog
                .filter((e) => e.version === "1.3.0")
                .map((e, i) => (
                  <article key={`changelog_${e.version}`}>
                    <span className={updateNameStyle}>
                      {e.version} - {e.name} - {e.date}
                    </span>
                    <ul className={ulstyle}>
                      {e.data.preface ? <li>{e.data.preface}</li> : null}
                      {e.data.features ? (
                        <CategoryMap name='Features' data={e.data.features} />
                      ) : null}
                      {e.data.bugfixes ? (
                        <CategoryMap name='Bug Fixes' data={e.data.bugfixes} />
                      ) : null}
                      {e.data.misc ? (
                        <CategoryMap name='Misc' data={e.data.misc} />
                      ) : null}
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
