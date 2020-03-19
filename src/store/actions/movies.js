import { GET_NOW_PLAYING_REQUEST, GET_UPCOMING_REQUEST, GET_TRENDING_REQUEST } from '../../constants/index';

import { API_ROOT, API_KEY } from '../../config';
import { NOW_PLAYING, UPCOMING, POPULAR_MOVIE, POPULAR_TV, LANGUAGE } from '../../constants/api';
import { getPageName } from '../../helpers/helpers';

export const getTrending = () => async dispatch => {
  const movieTrendingUrl = `${API_ROOT}/${POPULAR_MOVIE}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
  let response = await fetch(movieTrendingUrl);
  let movieResponse = await response.json();

  const tvTrendingUrl = `${API_ROOT}/${POPULAR_TV}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
  response = await fetch(tvTrendingUrl);
  const tvResponse = await response.json();

  const results = {
    movies: movieResponse.results,
    tv: tvResponse.results
  }

  dispatch(storeTrendingMoviesTv(results));
}

export const getMovies = (pageName) => async dispatch => {
  let url = null;
  let response = null;
  let movieResponse = null;

  switch (getPageName(pageName)) {
    case 'now-playing':
      url = `${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
      response = await fetch(url);
      movieResponse = await response.json();
      dispatch(storeNowPlayingMovies(movieResponse.results));
      break;

    case 'upcoming':
      url = `${API_ROOT}/${UPCOMING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
      response = await fetch(url);
      movieResponse = await response.json();
      dispatch(storeUpcomingMovies(movieResponse.results));
      break;

    default:
      url = `${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
      response = await fetch(url);
      movieResponse = await response.json();
      dispatch(storeNowPlayingMovies(movieResponse.results));
      break;
  }
}

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
// export const storeTheatreMovies = (movies) => {
//   return {
//     type: GET_MOVIES_THEATRE_REQUEST,
//     payload: movies
//   };
// };

// export const storeComingSoonMovies = (movies) => {
//   return {
//     type: GET_MOVIES_COMINGSOON_REQUEST,
//     payload: movies
//   };
// };

// export const storeChartMovies = (movies) => {
//   return {
//     type: GET_MOVIES_CHART_REQUEST,
//     payload: movies
//   };
// };
