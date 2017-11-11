import theme from '../theme'

export default ({heading, subheading, text, children, decoration, dark}) =>
  <section>
    <div className='content'>
      <h2>{heading}</h2>
      <p className='subheading'>{subheading}</p>
      {text.map(paragraph => <p>{paragraph}</p>)}
    </div>
    {children && children}
    <style jsx>{`
      section {
        align-items: center;
        background-color: ${dark ? theme.color.dark : theme.color.light};
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 200px 0;
        position: relative;
        width: 100%;
      }

      section:after {
        background-image: url("${decoration.image}");
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: contain;
        bottom: 0;
        content: '';
        display: block;
        height: 600px;
        position: absolute;
        ${decoration.right ? 'right: 0' : 'left: 0'};
        width: 600px;
      }

      .content {
        background-image: ${dark ? 'radial-gradient(rgba(0,0,0,.8), rgba(0,0,0,0), rgba(0,0,0,0))' : 'radial-gradient(rgba(255,255,255,.8), rgba(255,255,255,0), rgba(255,255,255,0))'};
        max-width: 600px;
        padding: 0 100px;
        width: 80%;
        z-index: 1;
      }

      h2 {
        color: ${dark ? theme.color.light : theme.color.dark};
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;
      }

      p.subheading {
        color: ${dark ? theme.color.light : theme.color.dark};
        font-size: ${theme.font.heading.size};
        font-family: ${theme.font.heading.family};
        font-weight: ${theme.font.heading.weight};
        margin: 0 0 40px 0;
        line-height: ${theme.font.heading.lineHeight};
        text-transform: uppercase;
      }

      p {
        color: ${dark ? theme.color.light : theme.color.dark};
        font-size: ${theme.font.runningText.size};
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        line-height: ${theme.font.runningText.lineHeight};
      }
    `}</style>
  </section>
