import React from 'react';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../store/actions/movies';
import { getTv } from '../store/actions/tv';
import Item from '../components/movie/Card';

class Home extends React.Component {
  componentDidMount() {
    this.props.getUpcomingMovies();
  }

  render() {
    if (this.props.nowPlaying) {
      return (
        <div className="wrapper">
          <div className="listing">
            {Object.keys(this.props.nowPlaying).map((i) => (
              <Item
                title={this.props.nowPlaying[i].title}
                date={this.props.nowPlaying[i].release_date}
                id={this.props.nowPlaying[i].id}
                genres={this.props.nowPlaying[i].genre_ids}
                rating={this.props.nowPlaying[i].vote_average}
                poster={this.props.nowPlaying[i].poster_path}
                key={i}
              ></Item>
            ))}
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

const mapStateToProps = (state, ownProps) => ({ nowPlaying: state.moviesReducer.movies.now_playing });
const mapDispatchToProps = { getUpcomingMovies, getTv };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
