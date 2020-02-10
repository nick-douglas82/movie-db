// import React, { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import MovieCard from '../movie/Card.js'

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e0c577647a14eae09f07aa14fee7caeb&language=en-GB&page=1&region=GB")
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          movies: result.data.results
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Listing">
          {movies.map((movie, index) => (
            <MovieCard
              title={movie.title}
              genres={movie.genre_ids}
              rating={movie.vote_average}
              poster={movie.poster_path}
              key={index}
            ></MovieCard>
          ))}
        </div>
      );
    }
  }
}

export default Listing;
