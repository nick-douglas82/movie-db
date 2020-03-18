import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active">Logo</NavLink>
      </li>
      <li>
        <NavLink to="/movies/now-playing" activeClassName="is-active">Now Playing</NavLink>
      </li>
      <li>
        <NavLink to="/movies/upcoming" activeClassName="is-active">Upcoming</NavLink>
      </li>
      <li>
        <NavLink to="/movies/trending" activeClassName="is-active">Trending</NavLink>
      </li>
      <li>
        <NavLink to="/tv" activeClassName="is-active">TV</NavLink>
      </li>
      <li>
        <NavLink to="/movies" activeClassName="is-active">Movies</NavLink>
      </li>
    </ul>
  );
}
export default Navigation;
