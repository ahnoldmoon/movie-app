import React, {Component} from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// import MoviePoster from './MoviePoster';



function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
        <MoviePoster poster={poster} alt={title} />
      <div className="Movie__Column">
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
        </div>
        <p className="Movie_Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre} </span>
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
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Movie;
