import {
  CHANGE_MOVIES_FILTER
} from '../../constants/index';

const initState = {
  filter: {
    type: 'in_theatres'
  },
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case CHANGE_MOVIES_FILTER:
      return {
        ...state,
        filter: {
          type: action.filter
        }
      }
    default:
      return state;
  }
}

export default reducer;
