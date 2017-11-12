import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Intro from '../containers/intro'
import About from '../containers/about'
import Team from '../containers/team'
import Footer from '../containers/footer'

const FrontPage = ({ troopers }) =>
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
    <About />
    <Team troopers={troopers} />
    <Footer />
    <style jsx>{`
      :global(p, a, h1, h2, h3, h4, h5, h6) {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

FrontPage.getInitialProps = async ({ req }) => {
  const res = await fetch('http://community.ror-clan.eu/api/groups/clan-members/members')
  const json = await res.json()
  return { troopers: json.users }
}

export default FrontPage
