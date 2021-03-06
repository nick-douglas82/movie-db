import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './reducers/movies';
import tvReducer from './reducers/tv';
import genresReducer from './reducers/genres';
import filtersReducer from './reducers/filters';

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  tvReducer: tvReducer,
  genresReducer: genresReducer,
  filtersReducer: filtersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
