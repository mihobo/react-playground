import React from 'react'
import { Card, Icon, Image, Reveal, Item, Segment } from 'semantic-ui-react'


const CardExampleCard = () => (
  <div>
        <Card centered>
          <Reveal animated='fade'>
            <Reveal.Content visible>
              <Image src='/square-image.png' size="medium" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src='/robert.png' size="medium" />
            </Reveal.Content>
          </Reveal>

          <Card.Content>
            <Card.Header>Robert</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2017</span>
            </Card.Meta>
            <Card.Description>
              Robert is a hacker living in Sidcup.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="http://google.com/?q=robert">
              <Icon name='user' />
              25234 Friends
            </a>
          </Card.Content>
        </Card>
    <Segment inverted color = 'blue'>
      <p>
          Hi. My name is Robert and I am an elite hacker for RobertCorp. I have luscious long locks and a dazzling smile to charm off enemies in a pinch. I like to play ping pong on the weekend and walk on sandy beaches on a hot summer's day and feel the cool wind in my hair. Contact me for more information about...shh!
      </p>
    </Segment>
  </div>
)

export default CardExampleCard
