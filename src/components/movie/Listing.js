// import React, { useState, useEffect } from "react";
import React from "react";
import { connect } from 'react-redux';
import { getMoviesFunc } from '../../actions/movieActions';
import MovieCard from '../movie/Card.js';

class Listing extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.state;
    if (movies.data) {
      return (
        <div className="Listing">
        {movies.data.map((movie, index) => (
          <MovieCard
            title={movie.title}
            id={movie.id}
            genres={movie.genre_ids}
            rating={movie.vote_average}
            poster={movie.poster_path}
            key={index}
          ></MovieCard>
        ))}
        </div>
      )
    }

    return (
      <div>Loading...</div>
    )
  }
}
const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: getMoviesFunc(dispatch),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);

