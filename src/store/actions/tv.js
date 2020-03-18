import { GET_TV_REQUEST } from '../../constants/index';

export const getTv = (pageNumber) => async dispatch => {

}

export const storeTV = (tv) => {
  return {
    type: GET_TV_REQUEST,
    payload: tv
  };
};
