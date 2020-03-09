import React from "react";
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movies';
import MovieCard from '../movie/Card.js';

class Listing extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    if (this.props.movies.theatres) {
      return (
        <div className="wrapper">
          <div className="listing">
          {this.props.movies.theatres.map((movie, index) => (
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
        </div>
      )
    }

    return (
      <div>Loading...</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ movies: state.moviesReducer.movies });
const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);

