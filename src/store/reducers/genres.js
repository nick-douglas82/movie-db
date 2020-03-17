import {
  GET_GENRES_REQUEST
} from '../../constants/index';

const initState = {
  genres: null
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_GENRES_REQUEST:
      return {
        ...state,
        genres: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
