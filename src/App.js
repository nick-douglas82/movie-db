import React from "react";
import Routes from "./views/Routes";
import { connect } from 'react-redux';
import { getGenresFunc } from './actions/movieActions';
import "./sass/main.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <Routes></Routes>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
