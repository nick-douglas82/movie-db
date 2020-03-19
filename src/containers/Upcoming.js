import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import Listing from '../components/movie/Listing';

class Upcoming extends React.Component {
  componentDidMount() {
    this.props.getMovies(this.props.location.pathname);
  }

  render() {
    if (this.props.upcoming) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing movies={this.props.upcoming}></Listing>
          </div>
        </div>
      );
    } else {
      return (
        <div>Nothing</div>
      )
    }
  }
}
const mapStateToProps = (state, ownProps) => ({ upcoming: state.moviesReducer.upcoming });
const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming);
