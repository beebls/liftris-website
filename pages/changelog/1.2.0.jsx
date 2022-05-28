import Head from "next/head";

import changelog from "../../public/changelog.json";

import { CategoryMap } from "../../components/ChangelogMaps";
import { useEffect } from "react";

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Changelog</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update 1.2.0
            </h1>
            <h2 className='text-center text-5xl md:text-7xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Release 2 - May 28
            </h2>
            <div>
              <h3 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl from-sky-600 to-cyan-400 text-transparent'>
                Changelog
              </h3>
              {changelog
                .filter((e) => e.version === "1.2.0")
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
