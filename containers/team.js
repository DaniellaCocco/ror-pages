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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 40px;
        max-width: 800px;
        z-index: 1;
      }

      .card {
        background-color: #999;
        width: 150px;
      }

      .avatar {
        height: 150px;
        width: 150px;
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
    `}</style>
  </Section>
