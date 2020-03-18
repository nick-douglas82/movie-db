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
		<Route path="/" component={Home} />
		<Route path="/movies" component={Movies} />
		<Route path="/movies/now-playing" component={Movies} />
		<Route path="/movies/upcoming" component={Movies} />
		<Route path="/movies/trending" component={Movies} />
		<Route path="/tv" component={TV} />
	</Switch>
);
