import React from 'react';
import './App.css';
import ProfilePicture from './ProfilePicture';
import { Container } from 'semantic-ui-react'
import Feed from './Feed';
import Segment from './Segment';
import Menu from './Menu';
import store from './redux/store';


export default class App extends React.Component {
  render() {
    const allRedux = store.getState();
    const page = allRedux.page; 

    return (
      <div className="App">
        <Container text color textAlign="center">
          <Menu activePage={page} />
          {page === 'gamepad' && <ProfilePicture />}
          {page === 'video camera' && <Feed />}
          {page === 'video play' && <Segment />}
        </Container>
      </div>
    );
  }
}