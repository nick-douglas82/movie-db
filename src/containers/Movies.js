import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import { getPageName } from '../helpers/helpers';
import MovieListing from '../components/movie/Listing';

class Movies extends React.Component {
  componentDidMount() {
    this.fetchMovies(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.fetchMovies(nextProps.location.pathname);
    }
  }

  fetchMovies = (path) => {
    this.props.getMovies(getPageName(path));
  }

  render() {
    return (
      <div>
        Movies
        <MovieListing></MovieListing>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({ state: state });

const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
