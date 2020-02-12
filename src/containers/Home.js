import React from 'react';
// import Hero from '../components/heros/Hero';
import MovieListing from '../components/movie/Listing'

const Home = () => {
  return (
    <div>
      {/* <Hero></Hero> */}
      <main>
        <div className="wrapper">
          <MovieListing></MovieListing>
        </div>
      </main>
    </div>
  );
}
export default Home;
