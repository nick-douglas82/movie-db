import {
  GET_TV_REQUEST
} from '../../constants/index';

const initState = {}

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case GET_TV_REQUEST:
      let tv = action.payload.map((tv) => {
        tv.type = 'TV';
        return tv
      });
      return {
        ...state,
        tv: [
          ...tv
        ]
      }
    default:
      return state;
  }
}

export default reducer;
