import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';

const initState = {
  movies: {
    isLoading: true,
    isCompleted: false,
    error: null,
    data: null
  },
  filter: {
    type: 'in_theatres'
  },
  genres: {
    isLoading: true,
    isCompleted: false,
    error: null,
    data: null
  }
}

const store = createStore(rootReducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
