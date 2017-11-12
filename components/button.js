import Arrow from '../components/arrow'
import theme from '../theme/index'

export default ({primary}) =>
  <a href='//community.ror-clan.eu'>
    To the community
    <Arrow fill={theme.color.light} style={{ marginLeft: 12, width: 24 }} />
    <style jsx>{`
      a {
        background-color: ${primary ? theme.color.primary : theme.color.darkGrey};
        border: 0;
        color: ${theme.color.light};
        display: inline-block;
        font-size: ${theme.font.runningText.size};
        font-family: ${theme.font.runningText.family};
        font-weight: bold;
        height: 64px;
        margin-top: 12px;
        min-width: 230px;
        line-height: 64px;
        padding: 0 40px;
        text-decoration: none;
        text-transform: uppercase;
      }

      @media (max-width: ${theme.viewport.small}px) {
        a {
          padding: 0 20px;
        }
      }
    `}</style>
  </a>
