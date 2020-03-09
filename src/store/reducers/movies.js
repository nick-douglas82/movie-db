import {
  GET_MOVIES_THEATRE_REQUEST,
  GET_MOVIES_COMINGSOON_REQUEST,
  GET_MOVIES_CHART_REQUEST,
} from '../../constants/index';

const initState = {
  movies: {
    theatres: null,
    comingsoon: null,
    chart: null
  }
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_MOVIES_THEATRE_REQUEST:
      return {
        ...state,
        movies: {
          ...state.movies,
          theatres: action.payload
        }
      }
    case GET_MOVIES_COMINGSOON_REQUEST:
      return {
        ...state,
        movies: {
          ...state.movies,
          comingsoon: action.payload
        }
      }
    case GET_MOVIES_CHART_REQUEST:
      return {
        ...state,
        movies: {
          ...state.movies,
          chart: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;
