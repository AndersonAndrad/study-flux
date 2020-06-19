import * as types from './types';
import axios from 'axios';

export function getAddress(cep) {
  return async (dispatch) => {
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      // .get(`https://viacep.com.br/ws/72850210/json/`)
      .then((resp) => {
        let data = resp.data;
        dispatch({ type: types.GET_ADDRESS, data });
      })
      .catch(() => dispatch({ type: types.FAIL_REQUEST }));
  };
}
