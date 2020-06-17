import * as types from './types';

export function incrementCounter() {
  return (dispatch) => {
    dispatch({
      type: types.INCREMENT_COUNTER,
    });
  };
}

export function decrementCounter() {
  return (dispatch) => {
    dispatch({
      type: types.DECREMENT_COUNTER,
    });
  };
}
