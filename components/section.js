import theme from '../theme'

export default ({heading, subheading, text, children, decoration, dark}) =>
  <section>
    <div className='content'>
      <h2>{heading}</h2>
      <p className='subheading'>{subheading}</p>
      {text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>
    {children && children}
    <style jsx>{`
      section {
        background-color: ${dark ? theme.color.dark : theme.color.light};
        background-image: url('${decoration.image}');
        background-position: bottom ${decoration.right ? 'right' : 'left'};
        background-repeat: no-repeat;
        background-size: 600px;
        padding: 200px 0 300px;
        position: relative;
        width: 100%;
      }

      .content {
        background-image: ${dark ? 'radial-gradient(rgba(0,0,0,.8), rgba(0,0,0,0), rgba(0,0,0,0))' : 'radial-gradient(rgba(255,255,255,.8), rgba(255,255,255,0), rgba(255,255,255,0))'};
        margin: 0 auto;
        max-width: 600px;
        width: 80%;
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

      @media (max-width: ${theme.viewport.medium}px) {
        .content {
          background-image: ${dark ? 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0) 80%, rgba(0,0,0,0))' : 'radial-gradient(rgba(255,255,255,1), rgba(255,255,255,0) 80%, rgba(255,255,255,0))'};
        }

        p.subheading {
          font-size: ${theme.font.heading.mediumSize};
        }
      }

      @media (max-width: ${theme.viewport.small}px) {
        section {
          background-image: none;
          padding: 100px 0;
        }

        p.subheading {
          font-size: ${theme.font.heading.smallSize};
        }

        p {
          font-size: ${theme.font.runningText.smallSize};
        }
      }
    `}</style>
  </section>
