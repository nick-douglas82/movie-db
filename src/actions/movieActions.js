import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL
} from "../constants/index";

import {
  getMovies
} from "../api/api";

const getMovie = async dispatch => {
  dispatch({ type: GET_MOVIES_REQUEST });
  try {
    const response = await getMovies();
    const res = await response.json();
      dispatch({ type: GET_MOVIES_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_MOVIES_FAIL, payload: e });
  }
};

export const getMoviesFunc = dispatch => {
  return () => getMovie(dispatch);
}

// export const deleteMovie = (id) => {
//   return {
//     type: 'DELETE_MOVIE',
//     id: id
//   }
// }

// export const storeMovies = (movies) => {
//   return {
//     type: 'STORE_MOVIES',
//     movies: movies
//   }
// }

// export const storeGenres = (genres) => {
//   return {
//     type: 'STORE_GENRES',
//     genres: genres
//   }
// }
