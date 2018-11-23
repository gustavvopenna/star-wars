import React, { Component } from 'react';
import CardGrid from './CardGrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    const urls = [
      'https://swapi.co/api/people/'
    ];

    Promise.all(urls.map(url => {
      return(
        fetch(url)
        .then(resp => resp.json())
      )
    })).then(array => this.setState({
      people: array[0].results
    }))
  }

  render() {
    return (
      <div className='appBackground tc'>
        <div className='f2 b bg-gold'>Star Wars</div>
        <CardGrid list={this.state.people}/>
      </div>
    );
  }
}

export default App;
