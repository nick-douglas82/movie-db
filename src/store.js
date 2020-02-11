import { createStore } from 'redux'
import reducer from './reducers/rootReducer';

const initState = {
  movies: {
    isLoading: true,
    isCompleted: false,
    error: null,
    data: null
  }
}

const store = createStore(reducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
