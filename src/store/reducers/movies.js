import {
  GET_MOVIES_THEATRE_REQUEST,
  GET_MOVIES_COMINGSOON_REQUEST,
  GET_MOVIES_CHART_REQUEST,
} from '../../constants/index';

const initState = {
  movies: {
    theatres: null,
    comingsoon: null,
    chart: null,
    data: null
  }
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_MOVIES_THEATRE_REQUEST:
      if (state.movies.theatres !== null) {
        const theatres = state.movies.theatres;
        return {
          ...state,
          movies: {
            theatres: theatres
          }
        }
      }

      return {
        ...state,
        movies: {
          ...state.movies,
          theatres: action.payload,
          data: action.payload
        }
      }
    case GET_MOVIES_COMINGSOON_REQUEST:
      return {
        ...state,
        movies: {
          ...state.movies,
          comingsoon: action.payload,
          data: action.payload
        }
      }
    case GET_MOVIES_CHART_REQUEST:
      return {
        ...state,
        movies: {
          ...state.movies,
          chart: action.payload,
          data: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;
