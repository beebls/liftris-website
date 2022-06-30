import Head from "next/head";

import changelog from "../../public/changelog.json";

import ChangelogRoot from "../../components/ChangelogRoot";

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";

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
              Release 3 - May 31
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
                        Autofilling Workouts
                      </h4>
                      <p>
                        Do you have a set that was the exact same as last weeks?
                        Maybe you like to remind yourself of the same thing
                        every week in your notes.
                        <br />
                        <br />
                        If so, you no longer need to manually re-type these
                        fields every workout. Simply swipe right on a set to
                        bring the autofill menu up.
                        <br />
                        <br />
                        If you already have a number written into a field, by
                        default the autofill will skip over that field, but you
                        can change this behaviour in settings to make it always
                        write over your current data.
                      </p>
                    </div>
                    <div className='w-72 self-center md:w-full'>
                      <img src='/update1.3.0/autofill.gif' />
                    </div>
                  </article>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={updateNameStyle}>Quick Start</h4>
                      <p>
                        You can now jump straight into an empty workout from the
                        home page without having to create any preset.
                        <br />
                        <br />
                        This goes hand in hand with the next feature...
                      </p>
                    </div>
                  </article>
                  <article className='flex flex-col py-3'>
                    <div>
                      <h4 className={updateNameStyle}>
                        Turn Workouts Into Presets
                      </h4>
                      <p>
                        After finishing any workout, you can now turn that exact
                        routine into its own preset in one button.
                        <br />
                        <br />
                        This allows you to re-use workouts much more easily. And
                        combined with quick-starting empty workouts, you now
                        have much more flexibility with how you log.
                      </p>
                    </div>
                    <div className='w-72 mx-auto md:w-full flex justify-center'>
                      <img src='/update1.3.0/quickstart.gif' />
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
                .filter((e) => e.version === "1.3.0")
                .map((e) => (
                  <ChangelogRoot data={e} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
