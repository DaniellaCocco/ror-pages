import theme from '../theme'

export default ({fill, anim, ...rest}) =>
  <svg viewBox='0 0 40 22' {...rest}>
    <path d='M0.3984375 9.95715332 0.3984375 11.9768337 36.0767922 11.9768337 27.8845881 20.1690378 29.2567883 21.541238 39.8410908 10.9569355 29.0348721 0.15071679 27.6654823 1.52010653 36.1443877 9.99901193z' />
    <style jsx>{`
      svg {
        animation-name: ${anim && 'pointingArrow'};
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        position: relative;
        fill: ${fill || theme.color.dark};
        transform: ${anim && 'rotate(90deg)'};
      }

      @keyframes pointingArrow {
        0% { opacity: 0; top: 0; }
        80% { opacity: 1; top: 20px; }
        100% { opacity: 0; top: 20px; }
      }
   `}</style>
  </svg>
