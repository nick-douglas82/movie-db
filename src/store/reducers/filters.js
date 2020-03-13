import {
  CHANGE_MOVIES_FILTER
} from '../../constants/index';

const initState = {
  filter: {
    type: 'IN_THEATRES'
  },
}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case CHANGE_MOVIES_FILTER:
      return {
        ...state,
        filter: {
          type: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;
