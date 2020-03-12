import {
  CHANGE_MOVIES_FILTER
} from '../../constants/index';

export const setFilter = (filter) => {
  return {
    type: CHANGE_MOVIES_FILTER,
    payload: filter
  };
};
