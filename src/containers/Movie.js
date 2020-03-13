import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Hero from '../components/heros/Hero';

class Movie extends React.Component {
  componentDidMount() {
    console.log('yes');
  }
  componentDidUpdate() {
    console.log(this.props.state);
  }

  fetchMovies = () => {

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

export default connect(
  mapStateToProps
)(Movie);
