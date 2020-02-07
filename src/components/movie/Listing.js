import React, { useState, useEffect } from "react";
import axios from 'axios';
import MovieCard from '../movie/Card.js'



const Listing = () => {
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    function fetchData() {
      axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e0c577647a14eae09f07aa14fee7caeb&language=en-GB&page=1&region=GB")
        .then(res => setMovies(res.data.results))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);


  return (
    <div className="Listing">
      {console.log(movies)}
      {movies.map((movie, index) => (
        <MovieCard
          title={movie.title}
          genres={movie.genre_ids}
          rating={movie.vote_average}
          poster={movie.poster_path}
          key={index}
        ></MovieCard>
      ))}
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default Listing;
