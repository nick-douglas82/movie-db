import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './components/Header';
import routes from './routes';
import { getMovieGenres, getTVGenres } from './store/actions/genres';

// import "~normalize.css/normalize.css";
import "./sass/main.scss";

class App extends Component {
  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header />
        <main>
          { routes }
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = { getMovieGenres, getTVGenres };

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
