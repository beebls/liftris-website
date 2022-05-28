import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import changelog from "../../public/changelog.json";

import { CategoryMap } from "../../components/ChangelogMaps";

export default function Changelog() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  const router = useRouter();
  const { update } = router.query;

  const log = changelog.filter((e) => e.version === update);

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Update {update}</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Update {update}
            </h1>
            <div>
              <h2 className='text-center text-3xl md:text-5xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
                Changelog
              </h2>
              {log.map((e, i) => (
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
