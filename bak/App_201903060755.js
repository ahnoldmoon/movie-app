import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello!!
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default App;
