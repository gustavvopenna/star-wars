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
      // 'https://swapi.co/api/vehicles/'
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
        <h1 className='f2 b bg-gold'>Star Wars</h1>
        <CardGrid list={this.state.people}/>
      </div>
    );
  }
}

export default App;
