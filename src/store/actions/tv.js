import { GET_TV_REQUEST } from '../../constants/index';
import { API_ROOT, API_KEY } from '../../config';
import { TV, LANGUAGE } from '../../constants/api';

/**
 * Discover TV
 */
export const getTv = () => async dispatch => {
  const url = `${API_ROOT}/${TV}?api_key=${API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const response = await fetch(url);
  const tvResponse = await response.json();
  dispatch(storeTV(tvResponse.results));
}

export const storeTV = (tv) => {
  return {
    type: GET_TV_REQUEST,
    payload: tv
  };
};
