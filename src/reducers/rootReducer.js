const initState = {
  movies: [],
  test: 'nick'
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_MOVIE') {
    let newMovies = state.movies.filter(movie => {
      return action.id !== movie.id;
    })
    return {
      ...state,
      movies: newMovies
    };
  }

  if (action.type === 'STORE_MOVIES') {
    return {
      ...state,
      movies: action.movies
    };
  }
  return state;
}

export default rootReducer;
