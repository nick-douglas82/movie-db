import {
  API_ROOT,
  API_KEY
} from '../config';

import {
  NOW_PLAYING,
  LANGUAGE,
  GENRE
} from '../constants/api';

export const getMovies = () => fetch(`${API_ROOT}/${NOW_PLAYING}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`);
export const getGenres = () => fetch(`${API_ROOT}/${GENRE}?api_key=${API_KEY}&language=${LANGUAGE}`);

