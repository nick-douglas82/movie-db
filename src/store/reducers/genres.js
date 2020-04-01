import {
  GET_MOVIES_GENRES_REQUEST,
  GET_TV_GENRES_REQUEST
} from '../../constants/index';

const initState = {
  genres: {
    movie: null,
    tv: null
  }
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_MOVIES_GENRES_REQUEST:
      return {
        ...state,
        genres: {
          ...state.genres,
          movie: action.payload
        }
      }
    case GET_TV_GENRES_REQUEST:
      return {
        ...state,
        genres: {
          ...state.genres,
          tv: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;
