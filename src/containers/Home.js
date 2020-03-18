import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import { getTv } from '../store/actions/tv';

class Home extends React.Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getTv();
  }

  render() {
    return (
      <div>
        Homepage
        {/* <Hero></Hero> */}
        {/* <MovieFilters></MovieFilters> */}
        {/* <MovieListing></MovieListing> */}
      </div>
    );
  }
}

const mapDispatchToProps = { getMovies, getTv };

export default connect(
  null,
  mapDispatchToProps
)(Home);
