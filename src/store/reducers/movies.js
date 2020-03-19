import {
  GET_NOW_PLAYING_REQUEST,
  GET_UPCOMING_REQUEST,
  GET_TRENDING_REQUEST
} from '../../constants/index';

const initState = {
  movies: {
    now_playing: null,
    upcoming: null,
  }
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
      let now_playing = {}
      for (let movie of action.payload) {
        now_playing = {
          ...now_playing,
          [movie.id]: movie
        }
      }
      return {
        ...state,
        now_playing: {
          ...now_playing
        }
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
      for (let movie of action.payload.tv) {
        trendingTv = {
          ...trendingTv,
          [movie.id]: movie
        }
      }

      const newItem = { ...trendingMovies, ...trendingTv };

      console.log(newItem)

      // return {
      //   ...state,
      //   trending: {
      //     ...trending
      //   }
      // }
      return state;
    default:
      return state;
  }
}

export default reducer;
