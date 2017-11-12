import Logo from '../components/logo/logo'
import Button from '../components/button'
import Arrow from '../components/arrow'
import theme from '../theme/index'

export default () =>
  <header>
    <div className='content'>
      <h1>Remains of the Republic</h1>
      <Logo fill={theme.color.light} style={{ width: '75%', maxWidth: 400, maxHeight: 200 }} glow />
      <p>Gaming clan for <em>Star Wars</em> Battlefront II (Playstation 4).</p>
      <Button primary />
      <span className='learnMore' onClick={() => { window.scroll({top: window.innerHeight, behavior: 'smooth'}) }}>
        <span>Learn more</span><br />
        <Arrow fill={theme.color.light} style={{ marginTop: 10, width: 24 }} anim />
      </span>
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
        position: relative;
        width: 100%;
      }

      header:after {
        background: radial-gradient(rgba(0,0,0,.8), rgba(0,0,0,.3), rgba(0,0,0,0)), linear-gradient(rgba(0,0,0,0) 80%, rgba(0,0,0,1));
        content: '';
        display: block;
        height: 100vh;
        left: 0;
        position: absolute;
        width: 100%;
        top: 0;
      }

      .content {
        padding-bottom: 100px;
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
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        line-height: ${theme.font.runningText.lineHeight};
        padding: 0 20px;
      }

      .learnMore {
        bottom: 50px;
        color: ${theme.color.light};
        font-size: 18px;
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        display: block;
        height: 80px;
        left: 50%;
        margin-left: -100px;
        position: absolute;
        width: 200px;
        z-index: 1;
      }

      .learnMore > span {
        clear: both;
        color: inherit;
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
      }

      @media (max-width: ${theme.viewport.medium}px) {
        header:after {
          background: radial-gradient(rgba(0,0,0,.8), rgba(0,0,0,.3), rgba(0,0,0,.2)), linear-gradient(rgba(0,0,0,0) 80%, rgba(0,0,0,1));
        }
      }

      @media (max-width: ${theme.viewport.small}px) {
        header, header:after {
          height: 500px;
        }

        header:after {
          background: radial-gradient(rgba(0,0,0,.7), rgba(0,0,0,.4)), linear-gradient(rgba(0,0,0,0) 80%, rgba(0,0,0,1));
        }

        p {
          font-size: 20px;
        }

        .learnMore {
          bottom: 0;
        }
      }

      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
        header, header:after {
          height: 600px;
        }
      }

      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        header, header:after {
          height: 900px;
        }
      }
    `}</style>
  </header>
