import { FETCH_KETO_LOCATIONS } from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case FETCH_KETO_LOCATIONS:
      return action.payload
    default:
      return state;
  }
}