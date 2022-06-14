import Head from "next/head";

import changelog from "../../public/changelog.json";

import { RootMap } from "../../components/ChangelogMaps";

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Update 1.5.0</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update 1.5.0
            </h1>
            <h2 className='text-center text-5xl md:text-7xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Release 5 - June 15
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
                        Schedules
                      </h4>
                      <p>
                        Do you do the same few routines in the same order every
                        week? Now it's even easier to jump straight into a
                        workout.
                        <br />
                        <br />
                        You can enable the new Schedule feature in settings,
                        make an ordered list of routines, and you will be
                        prompted to quickly jump in to the next scheduled
                        workout. Once you've finished one, the schedule will
                        automatically advance to the next so you never fall out
                        of sync.
                      </p>
                      <div className='w-72 mx-auto md:w-full flex justify-center'>
                        <img src='/update1.5.0/schedules.gif' />
                      </div>
                    </div>
                  </article>
                  <article className='flex flex-col py-3'>
                    <div>
                      <h4 className={updateNameStyle}>Flowing Notes</h4>
                      <p>
                        Long notes now have their own line below the weight and
                        rep fields. This only happens if the note is long enough
                        to require it, and I find that it is the best balance
                        between having long notes without pushing the weight and
                        rep values off of the screen.
                      </p>
                    </div>
                  </article>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={updateNameStyle}>Erase Previous Notes</h4>
                      <p>
                        This is a new settings toggle that when enabled{" "}
                        {"(disabled by default)"}, if you have a previous note
                        on a set, will erase it once you fill out that set with
                        new information.
                        <br />
                        <br />
                        This will reduce the issues where your set has a
                        previous note that is making it take up more space than
                        it needs. However, it can be a little off-putting to
                        people who don't want it, so it can easily be turned on
                        or off to your liking.
                      </p>
                      <div className='w-72 mx-auto md:w-full flex justify-center'>
                        <img src='/update1.5.0/erasenotes.gif' />
                      </div>
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
                .filter((e) => e.version === "1.5.0")
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
