import theme from '../theme'
import Section from '../components/section'

const role = username => {
  if (username === 'Phantom') return 'Leader & founder'
  if (username === 'Daniella') return 'Co-leader'
  return 'Member'
}

const avatar = picture => {
  if (picture.length > 0) return <img style={{width: 'inherit', height: 'inherit'}} src={'//community.ror-clan.eu' + picture} alt='avatar' />
  return <img style={{width: 'inherit', height: 'inherit'}} src='/static/trooper.jpg' alt='avatar' />
}

export default ({troopers}) =>
  <Section
    heading='Team'
    subheading='Our living legends'
    text={[
      'These are the troopers still active in our European SWBF2 community, even though the original SWBF2 game came out over ten years ago (2005).'
    ]}
    decoration={{
      image: '/static/hoth.jpg'
    }}
  >
    <div className='cards'>
      {troopers.map(({username, picture}, i) =>
        <div className='card' key={i}>
          <div className='avatar'>{avatar(picture)}</div>
          <div className='info'>
            <p className='role'>{role(username)}</p>
            <p className='username'>{username}</p>
          </div>
        </div>
      )}
    </div>
    <style jsx>{`
      .cards {
        color: ${theme.color.light};
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        justify-content: center;
        align-content: flex-start;
        margin: 40px auto;
        max-width: 800px;
      }

      .card {
        background-color: #999;
      }

      .avatar {
        height: auto;
        width: 100%;
      }

      .info {
        padding: 20px 8px;
      }

      .role {
        font-size: 14px;
        font-family: ${theme.font.runningText.family};
        font-weight: ${theme.font.runningText.weight};
        line-height: ${theme.font.runningText.lineHeight};
        margin: 0;
        text-transform: uppercase;
      }

      .username {
        font-size: ${theme.font.runningText.size};
        font-family: ${theme.font.runningText.family};
        font-weight: 700;
        line-height: ${theme.font.runningText.lineHeight};
        margin: 0;
      }

      @media (max-width: ${theme.viewport.medium}px) {
        .cards {
          grid-template-columns: repeat(auto-fill, 175px);
        }
      }

      @media (max-width: ${theme.viewport.small}px) {
        .cards {
          grid-template-columns: repeat(auto-fill, 150px);
        }
      }
    `}</style>
  </Section>
