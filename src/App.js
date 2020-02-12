import React from "react";
import { connect } from 'react-redux';
import routes from './routes';
import { getGenresFunc } from './actions/movieActions';
import "./sass/main.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <div className="wrapper">
        {routes}
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

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
