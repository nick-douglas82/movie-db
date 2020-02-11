import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL
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
    default: return state;
  }
}

export default reducer;

// const rootReducer = (state = initState, action) => {
//   if (action.type === 'DELETE_MOVIE') {
//     let newMovies = state.movies.filter(movie => {
//       return action.id !== movie.id;
//     })
//     return {
//       ...state,
//       movies: newMovies
//     };
//   }

//   if (action.type === 'STORE_MOVIES') {
//     return {
//       ...state,
//       movies: action.movies
//     };
//   }

//   if (action.type === 'STORE_GENRES') {
//     return {
//       ...state,
//       genre: action.genre
//     };
//   }
//   return state;
// }

// export default rootReducer;
