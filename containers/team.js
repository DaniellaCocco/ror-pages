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

export default class extends React.Component {
  render () {
    const leaders = this.props.troopers.filter(trooper => {
      return trooper.username.match(/^(Phantom|Daniella)$/)
    })

    const members = this.props.troopers.filter(trooper => {
      return !trooper.username.match(/^(Phantom|Daniella)$/)
    }).sort((a, b) => {
      return a.username.localeCompare(b.username)
    })

    return <Section
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
        {leaders.map(({username, picture}, i) =>
          <div className='card' key={i}>
            <div className='avatar'>{avatar(picture)}</div>
            <div className='info'>
              <p className='role'>{role(username)}</p>
              <p className='username'>{username}</p>
            </div>
          </div>
        )}
        {members.map(({username, picture}, i) =>
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
        margin: 40px auto;
        width: 800px;
      }

      .card {
        background-color: #999;
        display: inline-block;
        width: 200px;
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
          width: 600px;
        }

        .cards .card {
          width: 150px;
        }

        .role {
          font-size: 12px;
        }

        .username {
          font-size: ${theme.font.runningText.smallSize};
        }
      }

      @media (max-width: ${theme.viewport.small}px) {
        .cards {
          width: 280px;
        }

        .cards .card {
          width: 140px;
        }
      }
    `}</style>
    </Section>
  }
}
