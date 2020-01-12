import React, { Component } from 'react';
import './App.css';

class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    }
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=500')
      .then(results => {
        return results.json();
      }).then(data => {
        let pictures = data.results.map((pic) => {
          return(
            <span key={pic.results}>
              <img src={pic.picture.medium} />
            </span>
          )
        })
        this.setState({pictures: pictures});
      })
  }

  render() {
    return (
      <span className='picContainer'>{this.state.pictures}</span>
    )
  }
}

export default Background;
