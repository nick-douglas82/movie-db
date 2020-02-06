import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navigation from "../components/Navigation";
import Routes from "../components/Routes";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Routes />
      </div>
    </Router>
  );
}
export default App;
