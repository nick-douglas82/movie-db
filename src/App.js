import React from "react";
import Routes from "./views/Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers";

import "./sass/main.scss";

const store = createStore(reducer);

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
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App;
