import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' type='image/x-conl' href='/fav.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <meta name='title' content='Liftris - Your Log, Your Way' />
        <meta
          name='description'
          content='Liftris - The feature-rich workout app that lets you log the way you want'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://liftris.beebl.es' />
        <meta property='og:title' content='Liftris - Your Log, Your Way' />
        <meta
          property='og:description'
          content='Liftris - The feature-rich workout app that lets you log the way you want'
        />
        <meta property='og:image' content='https://liftris.beebl.es/meta.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://liftris.beebl.es' />
        <meta property='twitter:title' content='Liftris - Your Log, Your Way' />
        <meta
          property='twitter:description'
          content='Liftris - The feature-rich workout app that lets you log the way you want'
        />
        <meta
          property='twitter:image'
          content='https://liftris.beebl.es/meta.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
