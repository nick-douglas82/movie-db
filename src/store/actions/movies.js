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
    let response = '';
    let movieResponse = '';

    switch (store.getState().filtersReducer.filter.type) {
      case 'in_theatres':
        url = `${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        console.log(movieResponse.results);
        dispatch(storeTheatreMovies(movieResponse));
        break;
      case 'comming_soon':
        url = `${API_ROOT}/${UPCOMING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        console.log(movieResponse.results);
        dispatch(storeComingSoonMovies(movieResponse));
        break;
      case 'chart':
        url = `${API_ROOT}/${CHART}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
        response = await fetch(url)
        movieResponse = await response.json();
        console.log(movieResponse.results);
        dispatch(storeChartMovies(movieResponse));
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
