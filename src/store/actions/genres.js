import {
  GET_GENRES_REQUEST
} from '../../constants/index';

export const storeGenres = () => {
  return {
    type: GET_GENRES_REQUEST
  };
};
