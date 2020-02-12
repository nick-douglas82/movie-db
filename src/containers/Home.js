import React from 'react';
import MovieListing from '../components/movie/Listing';
import MovieFilters from '../components/movie/Filters';

const Home = () => {
  return (
    <div className="wrapper">
      <MovieFilters></MovieFilters>
      <MovieListing></MovieListing>
    </div>
  );
}
export default Home;
