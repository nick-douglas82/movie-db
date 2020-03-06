import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './store/reducers/movies';
import genresReducer from './store/reducers/genres';
import filtersReducer from './store/reducers/filters';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  genresReducer: genresReducer,
  filtersReducer: filtersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
