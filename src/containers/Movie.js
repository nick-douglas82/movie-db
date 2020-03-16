import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Hero from '../components/heros/Hero';
import { getMovies } from '../store/actions/movies';
import { getPageName } from '../helpers/helpers';

class Movie extends React.Component {
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
        <Hero></Hero>
        <nav className="wrapper filters">
          <ul className="reset-list filters__list">
            <li>
              <NavLink activeClassName="is-active" to="/movies/in-theatres">In Theatres</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/movies/coming-soon">Coming Soon</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/movies/chart">Chart</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/">Tv Series</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/">Trailers</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({ state: state });

const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
