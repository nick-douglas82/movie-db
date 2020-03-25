import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './containers/Home';
import TV from './containers/TV';
import Movies from './containers/Movies';
import NowPlaying from './containers/NowPlaying';
import Upcoming from './containers/Upcoming';
import Trending from './containers/Trending';

export default (
	<Switch>
		{/* <Redirect exact from="/" to="/movies/in-theatres" />
		<Redirect exact from="/movies" to="/movies/in-theatres" /> */}
		<Route exact path="/" component={Home} />
		{/* <Route exact path="/movies" component={Movies} /> */}
		<Route exact path="/movies/now-playing" component={NowPlaying} />
		<Route exact path="/movies/upcoming" component={Upcoming} />
		<Route exact path="/movies/trending" component={Trending} />
		<Route exact path="/tv" component={TV} />
		<Route exact path="/movies" component={Movies} />
	</Switch>
);
