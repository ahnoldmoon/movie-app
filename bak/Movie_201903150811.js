import React, {Component} from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// import MoviePoster from './MoviePoster';



function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <MoviePoster poster={poster} />
      <div className="Movie__Column">
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
        </div>
      </div>
    </div>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre}</span>
  )
}

function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
