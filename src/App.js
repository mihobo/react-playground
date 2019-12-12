import React from 'react';
import './App.css';
import ProfilePicture from './ProfilePicture';
import { Container } from 'semantic-ui-react'
import Feed from './Feed';
import Segment from './Segment';
import Menu from './Menu';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 'gamepad'
    };
  }

  render() {
    const {page} = this.state;

    return (
      <div className="App">
        <Container text color textAlign="center">
          <Menu
            activePage={page}
            onPageChange={(page) => {
              this.setState({page});
            }}
          />
         {page === 'gamepad' && <ProfilePicture />}
         {page === 'video camera' && <Feed />}
         {page === 'video play' && <Segment />}
        </Container>
      </div>
    );
  }
}