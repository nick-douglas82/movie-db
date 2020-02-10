import React from "react";
import Routes from "./views/Routes";

import "./sass/main.scss";

const App = () => {

  // useEffect(() => {
  //   getGenres();
  // }, []);

  // const getGenres = () => {
  //   axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=e0c577647a14eae09f07aa14fee7caeb&language=en-GB`)
  //     .then(results => {
  //       // results.genres;
  //     })
  // };

  return (
    <Routes></Routes>
  )
}

export default App;
