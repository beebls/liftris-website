import "../styles/globals.css";

import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full flex flex-col'>
      <nav className='flex align-middle items-center w-full h-20 bg-gradient-to-tl from-sky-700 to-cyan-400 px-5'>
        <div className='cursor-pointer flex'>
          <Link href='/'>
            <div className='flex items-center'>
              <Image
                src='/logo-flat.svg'
                width={40}
                height={40}
                alt='Liftris Logo'
              />
              <span className='pl-3 text-4xl font-bold bg-clip-text bg-gradient-to-tl from-slate-400 to-slate-200 text-transparent'>
                Liftris
              </span>
            </div>
          </Link>
        </div>
        <div className='ml-auto text-xl text-slate-800 font-medium'>
          <Link href='/changelog'>
            <a>Changelog</a>
          </Link>
        </div>
      </nav>
      <div className='bg-gradient-to-br from-zinc-800 to-zinc-900 h-full flex flex-col flex-auto'>
        <Component {...pageProps} />
        <footer className='mt-auto ml-auto pr-4 pb-2'>
          <a
            href='https://beebl.es'
            target='_blank'
            className='font-medium text-zinc-400 text-xl'>
            Made by Beebl.es
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
