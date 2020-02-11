import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAIL
} from "../constants/index";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        movies: {
          isLoading: true,
          isCompleted: false,
          error: null,
          data: null
        }
      }
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          isLoading: false,
          isCompleted: true,
          error: false,
          data: action.payload.results
        }
      }
    case GET_MOVIES_FAIL:
      return {
        ...state,
        movies: {
          isLoading: false,
          isCompleted: true,
          error: action.payload,
          data: false
        }
      }

      case GET_GENRES_REQUEST:
        return {
          ...state,
          genres: {
            isLoading: true,
            isCompleted: false,
            error: null,
            data: null
          }
        }
      case GET_GENRES_SUCCESS:
        return {
          ...state,
          genres: {
            isLoading: false,
            isCompleted: true,
            error: false,
            data: action.payload.genres
          }
        }
      case GET_GENRES_FAIL:
        return {
          ...state,
          genres: {
            isLoading: false,
            isCompleted: true,
            error: action.payload,
            data: false
          }
      }
    default: return state;
  }
}

export default reducer;
