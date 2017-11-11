import Head from 'next/head'
import Intro from '../components/intro'

export default () =>
  <div>
    <Head>
      <title>Remains of the Republic | SWBF2 gaming clan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/semantic.css" />
    </Head>
    <Intro />
  </div>
