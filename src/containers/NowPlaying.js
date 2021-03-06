import React from 'react';
import { connect } from 'react-redux';
import { getNowPlaying } from '../store/actions/movies';
import Listing from '../components/movie/Listing';

class NowPlaying extends React.Component {
  componentDidMount() {
    this.props.getNowPlaying();
  }

  render() {
    if (this.props.nowPlaying) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing items={this.props.nowPlaying}></Listing>
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
const mapDispatchToProps = { getNowPlaying };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
