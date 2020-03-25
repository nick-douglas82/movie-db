import {
  GET_NOW_PLAYING_REQUEST,
  GET_UPCOMING_REQUEST,
  GET_TRENDING_REQUEST,
  GET_MOVIES_REQUEST
} from '../../constants/index';

const initState = {
    now_playing: null,
    upcoming: null,
    trending: null
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_UPCOMING_REQUEST:
      let upcoming = action.payload.map((movie) => {
        movie.type = 'movie';
        return movie
      });
      return {
        ...state,
        upcoming: [
          ...upcoming
        ]
      }

    case GET_NOW_PLAYING_REQUEST:
      let now_playing = action.payload.map((movie) => {
        movie.type = 'movie';
        return movie
      });
      return {
        ...state,
        now_playing: [
          ...now_playing
        ]
      }

    case GET_MOVIES_REQUEST:
      let discoverMovies = action.payload.map((movie) => {
        movie.type = 'movie';
        return movie
      });
      return {
        ...state,
        movies: [
          ...discoverMovies
        ]
      }

    case GET_TRENDING_REQUEST:
      return {
        ...state,
        trending: [
          ...action.payload.results
        ]
      }
    default:
      return state;
  }
}

export default reducer;
