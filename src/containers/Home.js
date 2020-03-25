import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movies';
import Listing from '../components/movie/Listing';

class Home extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    if (this.props.movies) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing items={this.props.movies}></Listing>
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

const mapStateToProps = (state) => ({ movies: state.moviesReducer.movies });
const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
