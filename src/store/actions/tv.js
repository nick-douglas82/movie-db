import { GET_TV_REQUEST } from '../../constants/index';
import { API_ROOT, API_KEY } from '../../config';
import { TV, LANGUAGE } from '../../constants/api';

export const getTv = (pageNumber) => async dispatch => {
  const url = `${API_ROOT}/${TV}?api_key=${API_KEY}&language=${LANGUAGE}&page=1&region=GB`;
  const response = await fetch(url);
  const tvResponse = await response.json();
  dispatch(storeTV(tvResponse));
}

export const storeTV = (tv) => {
  return {
    type: GET_TV_REQUEST,
    payload: tv
  };
};
