import React from 'react';
import { connect } from 'react-redux';
import { getTrending } from '../store/actions/movies';
import Listing from '../components/movie/Listing';

class Trending extends React.Component {
  componentDidMount() {
    this.props.getTrending();
  }

  render() {
    if (this.props.trending) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing movies={this.props.trending}></Listing>
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
const mapStateToProps = (state, ownProps) => ({ trending: state.moviesReducer.trending });
const mapDispatchToProps = { getTrending };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
