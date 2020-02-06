import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Dashboard from "../views/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
export default Routes;
