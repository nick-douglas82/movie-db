import { GET_NOW_PLAYING_REQUEST, GET_UPCOMING_REQUEST, GET_TRENDING_REQUEST, GET_MOVIES_REQUEST } from '../../constants/index';

import { API_ROOT, API_KEY } from '../../config';
import { NOW_PLAYING, UPCOMING, MOVIES, LANGUAGE } from '../../constants/api';

/**
 * ACTION CREATORS
 */

/**
 * Trending movies and TV
 */
export const getTrending = () => async dispatch => {
  const trending = `${API_ROOT}/trending/all/day?api_key=${API_KEY}`;
  const response = await fetch(trending);
  const responseJson = await response.json();

  dispatch(storeTrendingMoviesTv(responseJson));
}

/**
 * Upcoming movies
 */
export const getUpcomingMovies = () => async dispatch => {
  const url = `${API_ROOT}/${UPCOMING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
  const response = await fetch(url);
  const movieResponse = await response.json();
  dispatch(storeUpcomingMovies(movieResponse.results));
}

/**
 * Now playing movies
 */
export const getNowPlaying = () => async dispatch => {
  const url = `${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
  const response = await fetch(url);
  const movieResponse = await response.json();
  dispatch(storeNowPlayingMovies(movieResponse.results));
}

/**
 * Discover Movies
 */
export const getMovies = () => async dispatch => {
  const url = `${API_ROOT}/${MOVIES}?api_key=${API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const response = await fetch(url);
  const moviesResponse = await response.json();
  dispatch(storeMovies(moviesResponse.results));
}

/**
 * ACTIONS
 */
export const storeTrendingMoviesTv = (results) => {
  return {
    type: GET_TRENDING_REQUEST,
    payload: results
  };
};

export const storeNowPlayingMovies = (movies) => {
  return {
    type: GET_NOW_PLAYING_REQUEST,
    payload: movies
  };
};

export const storeUpcomingMovies = (movies) => {
  return {
    type: GET_UPCOMING_REQUEST,
    payload: movies
  };
};

export const storeMovies = (movies) => {
  return {
    type: GET_MOVIES_REQUEST,
    payload: movies
  };
};
