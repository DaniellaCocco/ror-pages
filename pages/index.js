import Head from 'next/head'
import theme from '../theme'
import Intro from '../components/intro'

export default () =>
  <div>
    <Head>
      <title>Remains of the Republic | SWBF2 gaming clan</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/static/normalize.min.css' />
    </Head>
    <Intro />
    <style jsx>{`
      :global(p, a) {
        color: ${theme.color.dark};
        font: ${theme.font.runningText};
      }

      :global(h1, h2, h3, h4, h5, h6) {
        font: ${theme.font.heading};
      }

      :global(a) {
        transition: filter .2s ease;
      }

      :global(a:hover) {
        filter: brightness(110%);
      }
    `}</style>
  </div>
