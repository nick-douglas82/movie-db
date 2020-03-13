import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// import Home from './containers/Home';
import Movie from './containers/Movie';
// import Search from './containers/Search';
// import Person from './containers/Person';

export default (
	<Switch>
		<Redirect exact from="/" to="/movies/in-theatres" />
		<Redirect exact from="/movies" to="/movies/in-theatres" />
		<Route path="/movies" component={Movie} />
		<Route path="/movies/in-theatres" component={Movie} />
	</Switch>
);
