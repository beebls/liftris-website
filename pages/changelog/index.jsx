import Head from "next/head";
import Link from "next/link";

import changelog from "../../public/changelog.json";

import { RootMap } from "../../components/ChangelogMaps";

const updatesWithPages = ["1.4.0", "1.3.0"];

export default function Home() {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";

  return (
    <div className='h-full py-10 pb-5'>
      <Head>
        <title>Liftris - Changelog</title>
      </Head>
      <main className='flex flex-col justify-center h-full w-full'>
        <div className='m-auto px-5'>
          <div className='text-zinc-400'>
            <h1 className='text-center text-6xl md:text-8xl font-bold pb-5 bg-clip-text bg-gradient-to-tl to-[#5ddeed] from-[#0e82c3] text-transparent'>
              Changelog
            </h1>
            <h2 className='text-center text-2xl md:text-4xl font-medium pb-5 bg-clip-text bg-gradient-to-tl from-slate-500 to-slate-300 text-transparent'>
              Click on underlined entries for additional info
            </h2>
            {changelog.map((e) => {
              const isSpecial = updatesWithPages.find((f) => f === e.version);
              return (
                <article key={`changelog_${e.version}`}>
                  <Link href={`/changelog/${e.version}`}>
                    <a
                      className={`${updateNameStyle} ${
                        isSpecial ? "underline" : ""
                      }`}>
                      {e.version} - {e.name} - {e.date}
                    </a>
                  </Link>
                  <ul className={ulstyle}>
                    <RootMap data={e.data} />
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
