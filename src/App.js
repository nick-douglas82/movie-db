import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { getGenresFunc } from './actions/movieActions';
import Header from './components/Header';
import routes from './routes';

import "./sass/main.scss";

class App extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <main>
          {routes}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getGenres: getGenresFunc(dispatch)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
