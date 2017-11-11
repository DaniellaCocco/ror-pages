import Logo from './logo/logo'
import theme from '../theme/index'

export default () =>
  <header>
    <div className='content'>
      <h1>Remains of the Republic</h1>
      <Logo fill={theme.color.light} style={{ width: '80%', maxWidth: 440 }} glow />
      <p>Gaming clan for <em>Star Wars</em> Battlefront II (Playstation 4).</p>
      <a className='toCommunity' href='http://community.ror-clan.eu'>To the community</a>
      <div className='learnMore'>
        <a href='#'>Learn more</a>
      </div>
    </div>
    <style jsx>{`
      header {
        align-items: center;
        background-image: url("/static/sullust.jpg");
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
      }

      header:after {
        background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,0));
        content: '';
        display: block;
        height: 100vh;
        position: absolute;
        width: 100%;
      }

      .content {
        padding-bottom: 80px;
        text-align: center;
        width: 100%;
        z-index: 1;
      }

      h1 {
        position: absolute;
        margin: 0;
        text-indent: -9999px;
        z-index: -1;
      }

      p {
        color: ${theme.color.light};
        font-size: 24px;
      }

      .toCommunity {
        background-color: ${theme.color.primary};
        border: 0;
        color: white;
        display: inline-block;
        font-size: 20px;
        height: 64px;
        line-height: 64px;
        padding: 0 36px;
        text-decoration: none;
        text-transform: uppercase;
      }

      .learnMore {
        bottom: 0;
        color: ${theme.color.light};
        height: 132px;
        position: absolute;
        width: 100%;
      }

      .learnMore a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
      }
    `}</style>
  </header>
