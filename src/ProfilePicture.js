import React from 'react'
import { Card, Icon, Image, Reveal } from 'semantic-ui-react'


const CardExampleCard = () => (
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
)

export default CardExampleCard