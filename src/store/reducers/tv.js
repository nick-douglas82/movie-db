import {
  GET_TV_REQUEST
} from '../../constants/index';

const initState = {}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_TV_REQUEST:
      let _tv = {}
      for (let tv of action.payload.results) {
        _tv = {
          ..._tv,
          [tv.id]: tv
        }
      }

      return {
        ...state,
        ..._tv
      }
    default:
      return state;
  }
}

export default reducer;
