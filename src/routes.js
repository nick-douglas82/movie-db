import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './containers/Home';
import Movies from './containers/Movies';
import TV from './containers/TV';
// import Search from './containers/Search';
// import Person from './containers/Person';

export default (
	<Switch>
		{/* <Redirect exact from="/" to="/movies/in-theatres" />
		<Redirect exact from="/movies" to="/movies/in-theatres" /> */}
		<Route exact path="/" component={Home} />
		<Route exact path="/movies" component={Movies} />
		<Route exact path="/movies/now-playing" component={Movies} />
		<Route exact path="/movies/upcoming" component={Movies} />
		<Route exact path="/movies/trending" component={Movies} />
		<Route exact path="/tv" component={TV} />
	</Switch>
);
