import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/movies/now-playing">Now Playing</Link>
      </li>
      <li>
        <Link to="/movies/upcoming">Upcoming</Link>
      </li>
      <li>
        <Link to="/movies/trending">Trending</Link>
      </li>
      <li>
        <Link to="/tv">TV</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
  );
}
export default Navigation;
