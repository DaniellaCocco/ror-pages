import Arrow from '../components/arrow'
import theme from '../theme/index'

export default ({primary}) =>
  <a href='//community.ror-clan.eu'>
    <span>To the community</span>
    <Arrow fill={theme.color.light} style={{ display: 'inline', marginLeft: 12, width: 24 }} />
    <style jsx>{`
      a {
        background-color: ${primary ? theme.color.primary : theme.color.darkGrey};
        border: 0;
        color: ${theme.color.light};
        display: inline-block;
        font-size: 18px;
        font-family: ${theme.font.runningText.family};
        font-weight: bolder;
        height: 64px;
        margin-top: 12px;
        min-width: 230px;
        line-height: 64px;
        padding: 0 33px 0 47px;
        text-decoration: none;
        text-transform: uppercase;
      }

      span {
        display: inline;
        float: left;
      }

      @media (max-width: ${theme.viewport.small}px) {
        a {
          padding: 0 20px;
        }
      }
    `}</style>
  </a>
