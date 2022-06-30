import Head from "next/head";

import changelog from "../../public/changelog.json";

import ChangelogRoot from "../../components/ChangelogRoot";

export default function Home() {
  const featureTitle = "text-3xl font-semibold";
  const starFeatureTitle = `${featureTitle} text-emerald-500`;

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Update 1.7.0</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update 1.7.0
            </h1>
            <h2 className='text-center text-5xl md:text-7xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Release 7 - June 30
            </h2>
            <div className='py-10'>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                What's New
              </h3>
              <div className='flex justify-center'>
                <div className='flex flex-col w-full md:w-2/3 items-center'>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={starFeatureTitle}>
                        Editing Previous Workouts
                      </h4>
                      <p>
                        Accidentally log the wrong number and don't want to ruin
                        your beautiful progress graphs?
                        <br />
                        <br />
                        No longer do you have to delete that workout, delete all
                        of the entries in exercises, and then write everything
                        out again. Simply edit it in the history tab. Upon
                        saving an edit, all data will be adjusted not just in
                        the workout, but also in all of the exercise stats pages
                        that correspond to that workout.
                      </p>
                      <div className='w-72 mx-auto md:w-full flex justify-center'>
                        <img src='/update1.7.0/editHistory.gif' />
                      </div>
                    </div>
                  </article>
                  <article className='flex flex-col py-3'>
                    <div>
                      <h4 className={featureTitle}>Uncollapsing Exercises</h4>
                      <p>
                        Upon saving an exercise, all collapsed exercises will be
                        uncollpased when you go to view that workout in your
                        history. This behaviour can be turned off with the "Stop
                        Uncollapsing Exercises" setting.
                      </p>
                    </div>
                  </article>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={featureTitle}>Smarter Deleting</h4>
                      <p>
                        Starting today, when you delete and/or edit a previous
                        workout from the history page, all data points in your
                        exercise stats will now also be updated. Due to a lack
                        of data in the previous exercises, this will only apply
                        to new workouts/data that is created from the day of the
                        update forward.
                      </p>
                    </div>
                  </article>
                  <article className='flex flex-col md:flex-row py-3'>
                    <div>
                      <h4 className={featureTitle}>Advanced Settings</h4>
                      <p>
                        I created Liftris with the goal of being the most
                        feature-rich and customizable workout logging app on iOS
                        and Android. In fulfilling that goal, many challenges
                        have arisen.
                        <br />
                        <br />
                        In making so many settings available to be changed, some
                        may not know what many mean and will end up being
                        overwhelmed with choice instead of helped by it. Because
                        of this, I have moved many of the "power-user" settings
                        to the new 'Advanced Settings' tab. It is closed by
                        default, but a tap on the tab will open it up.
                        <br />
                        <br />I found this to be the best balance of having as
                        much customization as possible, while still ensuring
                        that all of the most common settings are easily
                        findable.
                      </p>
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
                .filter((e) => e.version === "1.7.0")
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
