// import React, { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import MovieCard from '../movie/Card.js';
import { connect } from 'react-redux';
import { deleteMovie, storeMovies } from '../../actions/movieActions';

class Listing extends React.Component {
  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e0c577647a14eae09f07aa14fee7caeb&language=en-GB&page=1&region=GB")
    .then(
      (result) => {
        this.props.storeMovies(result.data.results);
      }
    )
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <div className="Listing">
          {movies.map((movie, index) => (
            <MovieCard
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
              key={index}
            ></MovieCard>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => dispatch( deleteMovie(id) ),
  storeMovies: (movies) => dispatch( storeMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
