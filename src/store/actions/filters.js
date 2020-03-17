import {
  CHANGE_MOVIES_FILTER
} from '../../constants/index';

export const updateFilter = () => {
  return {
    type: CHANGE_MOVIES_FILTER
  };
};
