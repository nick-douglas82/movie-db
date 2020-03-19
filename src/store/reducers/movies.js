import {
  GET_NOW_PLAYING_REQUEST
} from '../../constants/index';

const initState = {
  movies: {
    now_playing: null
  }
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    // case GET_MOVIES_THEATRE_REQUEST:
    //   return {
    //     ...state,
    //     movies: {
    //       ...state.movies,
    //       theatres: action.payload
    //     }
    //   }
    // case GET_MOVIES_COMINGSOON_REQUEST:
    //   return {
    //     ...state,
    //     movies: {
    //       ...state.movies,
    //       comingsoon: action.payload
    //     }
    //   }
    // case GET_MOVIES_CHART_REQUEST:
    //   return {
    //     ...state,
    //     movies: {
    //       ...state.movies,
    //       chart: action.payload
    //     }
    //   }
    case GET_NOW_PLAYING_REQUEST:
      let _movie = {}
      for (let movie of action.payload) {
        _movie = {
          ..._movie,
          [movie.id]: movie
        }
      }
      return {
        ...state,
        movies: {
          ...state.movies,
          now_playing: {
            ..._movie
          }
        }
      }
    default:
      return state;
  }
}

export default reducer;
