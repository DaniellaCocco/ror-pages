import Head from 'next/head'
import theme from '../theme'
import Intro from '../components/intro'

export default () =>
  <div>
    <Head>
      <title>Remains of the Republic | SWBF2 gaming clan</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='msapplication-config' content='/static/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png?v=OmybA708yg' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png?v=OmybA708yg' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png?v=OmybA708yg' />
      <link rel='manifest' href='/static/manifest.json?v=OmybA708yg' />
      <link rel='mask-icon' href='/static/safari-pinned-tab.svg?v=OmybA708yg' color='#1454a1' />
      <link rel='shortcut icon' href='/static/favicon.ico?v=OmybA708yg' />
      <link rel='stylesheet' type='text/css' href='/static/commons.css' />
    </Head>
    <Intro />
    <style jsx>{`
      :global(p, a) {
        color: ${theme.color.dark};
        font: ${theme.font.runningText};
        -webkit-font-smoothing: antialiased;
      }

      :global(h1, h2, h3, h4, h5, h6) {
        font: ${theme.font.heading};
      }

      :global(a) {
        text-decoration: none;
        transition: filter .2s ease;
      }

      :global(a:hover) {
        filter: brightness(110%);
      }
    `}</style>
  </div>
