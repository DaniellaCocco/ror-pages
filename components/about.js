import theme from '../theme/index'

export default () =>
  <section>
    <div className='content'>
      <h2>About RoR gaming clan</h2>
      <p className='subheading'>The rise, fall and reinstatement</p>
      <p>Founded in 2010 by Phantom, Remains of the Republic finds its roots in the original Star Wars Battlefront II (2005) for the Playstation 2, becoming one of its most successful Europe-based clans.</p>
      <p>In 2015 - 2016, RoR was active on the new Star Wars Battlefront (2015) game. Though just a group of friends playing for fun occasionally, RoR still managed to win the EU Cup in a tournament.</p>
      <p>These days, RoR mainly functions as a homebase where old and new players meet up to stay in touch and play Battlefront II (2017) as well as other games.</p>
    </div>
    <style jsx>{`
      section {
        align-items: center;
        background-color: ${theme.color.dark};
        display: flex;
        justify-content: center;
        padding: 200px 0;
        position: relative;
        width: 100%;
      }

      section:after {
        background: url("/static/swbf22.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        bottom: 0;
        content: '';
        display: block;
        height: 600px;
        position: absolute;
        right: 0;
        width: 600px;
      }

      .content {
        background-image: radial-gradient(rgba(0,0,0,.8), rgba(0,0,0,0), rgba(0,0,0,0));
        max-width: 600px;
        padding: 0 100px;
        width: 80%;
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
        font-size: ${theme.font.heading.size};
        font-family: ${theme.font.heading.family};
        font-weight: ${theme.font.heading.weight};
        margin: 0 0 40px 0;
        line-height: ${theme.font.heading.lineHeight};
        text-transform: uppercase;
      }

      p {
        color: ${theme.color.light};
        font-size: ${theme.font.runningText.size};
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        line-height: ${theme.font.runningText.lineHeight};
      }
    `}</style>
  </section>
