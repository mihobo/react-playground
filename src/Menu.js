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
          name='me'
          active={activePage === 'me'}
          onClick={this.handleItemClick}
        >
          <Icon name='user secret' />
          About Me
        </Menu.Item>

        <Menu.Item
          name='news feed'
          active={activePage === 'news feed'}
          onClick={this.handleItemClick}
        >
          <Icon name='newspaper' />
          News Feed
        </Menu.Item>

        <Menu.Item
          name='friends'
          active={activePage === 'friends'}
          onClick={this.handleItemClick}
        >
          <Icon name='beer' />
          Friends
        </Menu.Item>
      </Menu>
    )
  }
}
