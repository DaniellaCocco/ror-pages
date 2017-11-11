import Section from '../components/section'

export default () =>
  <Section
    heading='About RoR gaming clan'
    subheading='The rise, fall and reinstatement'
    text={[
      'Founded in 2010 by Phantom, Remains of the Republic finds its roots in the original Star Wars Battlefront II (2005) for the Playstation 2, becoming one of its most successful Europe-based clans.',
      'In 2015 - 2016, RoR was active on the new Star Wars Battlefront (2015) game. Though just a group of friends playing for fun occasionally, RoR still managed to win the EU Cup in a tournament.',
      'These days, RoR mainly functions as a homebase where old and new players meet up to stay in touch and play Battlefront II (2017) as well as other games.'
    ]}
    decoration={{
      image: '/static/swbf2.jpg',
      right: true
    }}
    dark
  />
