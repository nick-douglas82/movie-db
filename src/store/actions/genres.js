import { GET_MOVIES_GENRES_REQUEST, GET_TV_GENRES_REQUEST } from '../../constants/index';
import { API_ROOT, API_KEY } from '../../config';

/**
 * Get movie genres
 */
export const getMovieGenres = () => async dispatch => {
  const genres = `${API_ROOT}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(genres);
  const responseJson = await response.json();

  dispatch(storeMovieGenres(responseJson.genres));
}

export const getTVGenres = () => async dispatch => {
  const genres = `${API_ROOT}/genre/tv/list?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(genres);
  const responseJson = await response.json();

  dispatch(storeTvGenres(responseJson.genres));
}

export const storeMovieGenres = (genres) => {
  return {
    type: GET_MOVIES_GENRES_REQUEST,
    payload: genres
  };
};

export const storeTvGenres = (genres) => {
  return {
    type: GET_TV_GENRES_REQUEST,
    payload: genres
  };
};
