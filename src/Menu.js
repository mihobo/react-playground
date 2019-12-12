import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import store from './redux/store';


export default class MenuExampleLabeledIcons extends Component {
  handleItemClick = (e, { name }) => {  
    store.dispatch({type: 'SET_PAGE', page: name });
  }

  render() {
    const { activePage } = this.props;

    return (
      <Menu icon='labeled'>
        <Menu.Item
          name='gamepad'
          active={activePage === 'gamepad'}
          onClick={this.handleItemClick}
        >
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item
          name='video camera'
          active={activePage === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='video camera' />
          Channels
        </Menu.Item>

        <Menu.Item
          name='video play'
          active={activePage === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>
    )
  }
}