import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAIL
} from "../constants/index";

import {
  getMovies,
  getGenres
} from "../api/api";

const getMovieList = async dispatch => {
  dispatch({ type: GET_MOVIES_REQUEST });
  try {
    const response = await getMovies();
    const res = await response.json();
    dispatch({ type: GET_MOVIES_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_MOVIES_FAIL, payload: e });
  }
};

const getGenresList = async dispatch => {
  dispatch({ type: GET_GENRES_REQUEST });
  try {
    const response = await getGenres();
    const res = await response.json();
    dispatch({ type: GET_GENRES_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_GENRES_FAIL, payload: e });
  }
};

export const getMoviesFunc = dispatch => {
  return () => getMovieList(dispatch);
}
export const getGenresFunc = dispatch => {
  return () => getGenresList(dispatch);
}
