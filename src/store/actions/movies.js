import {
  GET_MOVIES_THEATRE_REQUEST,
  GET_MOVIES_COMINGSOON_REQUEST,
  GET_MOVIES_CHART_REQUEST,
} from '../../constants/index';

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
