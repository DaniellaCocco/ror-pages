import theme from '../../theme'
import logoPaths from './logo-paths'

export default ({fill, glow, ...rest}) =>
  <svg viewBox='0 0 491 214' {...rest}>
    {logoPaths.map((path, i) =>
      <path d={path} key={i} />
    )}
    <style jsx>{`
      svg {
        fill: ${fill || theme.color.dark};
        ${glow && `filter: drop-shadow(0 0 4px white)`};
      }
   `}</style>
  </svg>
