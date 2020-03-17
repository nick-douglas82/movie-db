import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { store } from './store/index';

// import moviesReducer from './store/reducers/movies';
// import genresReducer from './store/reducers/genres';
// import filtersReducer from './store/reducers/filters';

import App from './App';
// import registerServiceWorker from './serviceWorker';

// const rootReducer = combineReducers({
//   moviesReducer: moviesReducer,
//   genresReducer: genresReducer,
//   filtersReducer: filtersReducer
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
