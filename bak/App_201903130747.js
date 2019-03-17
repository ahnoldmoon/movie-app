import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]
//
// const movieImages =[
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
//   "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
// ]

class App extends Component {
  state = {
    greeting: "Hello!",

  }
  componentWillMount(){
    // console.log('Will Mount')
  }

  componentDidMount(){
    // console.log('Did Mount')
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello again!'
    //   })
    // }, 3000)
    setTimeout(() =>{
      // console.log('hello')
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
          },
          {
            title : "Trainspotting",
            poster : "https://secure.i.telegraph.co.uk/multimedia/archive/02809/TRAINSPOTTING_2809300b.jpg"
          }
        ]

      })
    },3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    // console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
