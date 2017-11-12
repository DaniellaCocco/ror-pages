import Logo from '../components/logo/logo'
import Button from '../components/button'
import theme from '../theme'

export default () =>
  <footer>
    <div className='content'>
      <div className='info'>
        <Logo fill={theme.color.light} style={{ height: '55px', width: '125px' }} /><br /><br />
        <small>
          The "Star Wars" handle and related materials are all property of their respective owners. RoR gaming clan does not claim to have any ownership over these materials. No copyright infringement intended.<br /><br />
          RoR is not affiliated with Star Wars, Lucasfilm or EA in any way; we simply are a loosely gathered group of enthusiastic gamers and Battlefront fans who use this website as means of communication.<br /><br />
          For inquiries, please contact admin@ror-clan.eu.
        </small>
      </div>
      <div className='extra'>
        <Button />
      </div>
    </div>
    <style jsx>{`
      footer {
        align-items: center;
        background-color: #999;
        display: flex;
        justify-content: center;
        padding: 75px 100px;
      }

      .content {
        align-items: center;
        display: flex;
      }

      .info {
        padding-right: 50px;
      }

      small {
        color: ${theme.color.light};
        display: inline-block;
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        line-height: ${theme.font.runningText.lineHeight};
        max-width: 600px;
      }

      .extra {
        align-items: center;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        max-width: 540px;
        padding: 0 50px;
      }

      @media (max-width: ${theme.viewport.medium}px) {
        footer {
          padding: 50px 0;
        }

        .content {
          flex-direction: column-reverse;
        }
        
        .info {
          padding: 75px 10px 0;
        }

        small {
          max-width: calc(100vw - 40px);
        }

        .extra {
          padding: 0;
        }
      }
    `}</style>
  </footer>
