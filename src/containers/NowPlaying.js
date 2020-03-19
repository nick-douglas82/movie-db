import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import Listing from '../components/movie/Listing';

class NowPlaying extends React.Component {
  componentDidMount() {
    this.props.getMovies(this.props.location.pathname);
  }

  render() {
    if (this.props.nowPlaying) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing movies={this.props.nowPlaying}></Listing>
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
const mapStateToProps = (state, ownProps) => ({ nowPlaying: state.moviesReducer.now_playing });
const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
