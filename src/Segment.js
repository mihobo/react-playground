import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Miho Tse',
    text: 'Miho Tse',
    value: 'Miho Tse',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Valter Cunha',
    text: 'Valter Cunha',
    value: 'Valter Cunha',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Drew Johnson',
    text: 'Drew Johnson',
    value: 'Drew Johnson',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Kye Bracey',
    text: 'Kye Bracey',
    value: 'Kye Bracey',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Ryan O\'Callagan',
    text: 'Ryan O\'Callagan',
    value: 'Ryan O\'Callagan',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Lizzy Tam',
    text: 'Lizzy Tam',
    value: 'Lizzy Tam',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Anna Muci',
    text: 'Anna Muci',
    value: 'Anna Muci',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Pete Meehan',
    text: 'Pete Meehan',
    value: 'Pete Meehan',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Alec Sammon',
    text: 'Alec Sammon',
    value: 'Alec Sammon',
    image: { avatar: true, src: '/robert.png' },
  },
]

const suggestedFriendOptions = [
  {
    key: 'Claudia Thomas',
    text: 'Claudia Thomas',
    value: 'Claudia Thomas',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Paul Carter',
    text: 'Paul Carter',
    value: 'Paul Carter',
    image: { avatar: true, src: '/robert.png' },
  },
  {
    key: 'Dominic Johnston',
    text: 'Dominic Johnston',
    value: 'Dominic Johnston',
    image: { avatar: true, src: '/robert.png' },
  },
]

const DropdownExampleSelection = () => (
  <div>
    <Dropdown
      placeholder='Select Friend'
      fluid
      selection
      options={friendOptions}
    />

    <br />

    <Dropdown
      text='Add user'
      icon='add user'
      floating
      labeled
      button
      className='icon'
    >
      <Dropdown.Menu>
        <Dropdown.Header content='People You Might Know' />
        {suggestedFriendOptions.map((option) => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
)
export default DropdownExampleSelection
