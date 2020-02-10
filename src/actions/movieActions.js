export const deleteMovie = (id) => {
  return {
    type: 'DELETE_MOVIE',
    id: id
  }
}

export const storeMovies = (movies) => {
  return {
    type: 'STORE_MOVIES',
    movies: movies
  }
}
