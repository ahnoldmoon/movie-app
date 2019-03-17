import React, { Component} from 'react';
import ProyTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        // console.log(this.props);
        return(
            <div>
                <MoviePoster poster1={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>

        )

    }
}

class MoviePoster extends Component{
    render(){
        console.log(this.props)
        return(
            <img src={this.props.poster1}></img>
        )
    }
}

export default Movie
