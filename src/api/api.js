import {
  API_ROOT,
  API_KEY
} from '../config';

import {
  IN_THEATRES,
  LANGUAGE,
  GENRE
} from '../constants/api';

export const getMovies = () => fetch(`${API_ROOT}/${IN_THEATRES}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`);
export const getGenres = () => fetch(`${API_ROOT}/${GENRE}?api_key=${API_KEY}&language=${LANGUAGE}`);

