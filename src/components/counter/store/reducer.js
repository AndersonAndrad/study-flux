import { INITIAL_STATE } from './state';
import * as types from './types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, valueCounter: state.valueCounter + 1 };

    case types.DECREMENT_COUNTER:
      return { ...state, valueCounter: state.valueCounter - 1 };

    default:
      return state;
  }
};
