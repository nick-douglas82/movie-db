import React from "react";
import Routes from "./views/Routes";
import axios from 'axios';

import "./sass/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      genres: []
    };
  }

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e0c577647a14eae09f07aa14fee7caeb&language=en-GB")
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          genres: result.data.genres
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return (
      <Routes></Routes>
    )
  }
}

export default App;
