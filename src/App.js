import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from './components/Header';
import routes from './routes';

// import "~normalize.css/normalize.css";
import "./sass/main.scss";

class App extends Component {
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

export default withRouter(App);
