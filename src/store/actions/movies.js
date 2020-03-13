import { store } from '../../store/index';

import {
  GET_MOVIES_THEATRE_REQUEST,
  GET_MOVIES_COMINGSOON_REQUEST,
  GET_MOVIES_CHART_REQUEST,
} from '../../constants/index';

import { API_ROOT, API_KEY } from '../../config';
import { NOW_PLAYING, UPCOMING, CHART, LANGUAGE } from '../../constants/api';

export const getMovies = () => async dispatch => {
  let url = '';
  let response = null;
  let movieResponse = null;
  let movieResults = null;

  switch (store.getState().filtersReducer.filter.type) {
    case 'in_theatres':
      if (store.getState().moviesReducer.movies.theatres === null) {
        url = `${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        movieResults = movieResponse.results;
        dispatch(storeTheatreMovies(movieResults));
      } else {
        dispatch(storeTheatreMovies(store.getState().moviesReducer.movies.theatres));
      }
      break;

    case 'comming_soon':
      if (store.getState().moviesReducer.movies.comingsoon === null) {
        url = `${API_ROOT}/${UPCOMING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        movieResults = movieResponse.results;
        dispatch(storeComingSoonMovies(movieResults));
      } else {
        dispatch(storeComingSoonMovies(store.getState().moviesReducer.movies.comingsoon));
      }
      break;

    case 'chart':
      if (store.getState().moviesReducer.movies.comingsoon === null) {
        url = `${API_ROOT}/${CHART}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        movieResults = movieResponse.results;
        dispatch(storeChartMovies(movieResults));
      } else {
        dispatch(storeChartMovies(store.getState().moviesReducer.movies.chart));
      }
      break;
    default:
      // dispatch(someErroredDispatch(movieResponse));
      break;
  }
}

export const storeTheatreMovies = (movies) => {
  return {
    type: GET_MOVIES_THEATRE_REQUEST,
    payload: movies
  };
};

export const storeComingSoonMovies = (movies) => {
  return {
    type: GET_MOVIES_COMINGSOON_REQUEST,
    payload: movies
  };
};

export const storeChartMovies = (movies) => {
  return {
    type: GET_MOVIES_CHART_REQUEST,
    payload: movies
  };
};
