import theme from '../theme/index'

export default () =>
  <section>
    <div className='content'>
      <h2>About RoR gaming clan</h2>
      <p className='subheading'>Subheading</p>
      <p>Text.</p>
    </div>
    <style jsx>{`
      section {
        align-items: center;
        background-color: ${theme.color.dark};
        display: flex;
        justify-content: center;
        padding: 120px 0;
        width: 100%;
      }

      .content {
        padding-bottom: 80px;
        text-align: center;
        width: 100%;
        z-index: 1;
      }

      h2 {
        color: ${theme.color.light};
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;
      }

      p.subheading {
        color: ${theme.color.light};
        font-size: 70px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 700;
        margin: 0;
        text-transform: uppercase;
      }

      p {
        color: ${theme.color.light};
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
      }
    `}</style>
  </section>
