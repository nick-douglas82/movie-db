import {
  GET_NOW_PLAYING_REQUEST,
  GET_UPCOMING_REQUEST,
  GET_TRENDING_REQUEST
} from '../../constants/index';

const initState = {
    now_playing: null,
    upcoming: null,
    trending: null
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_UPCOMING_REQUEST:
      let upcoming = {}
      for (let movie of action.payload) {
        upcoming = {
          ...upcoming,
          [movie.id]: movie
        }
      }
      return {
        ...state,
        upcoming: {
          ...upcoming
        }
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

    case GET_TRENDING_REQUEST:
      let trendingMovies = {}
      for (let movie of action.payload.movies) {
        trendingMovies = {
          ...trendingMovies,
          [movie.id]: movie
        }
      }

      let trendingTv = {}
      for (let tv of action.payload.tv) {
        trendingTv = {
          ...trendingTv,
          [tv.id]: tv
        }
      }

      return {
        ...state,
        trending: {
          ...trendingMovies,
          ...trendingTv
        }
      }
    default:
      return state;
  }
}

export default reducer;
