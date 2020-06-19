import { INITIAL_STATE } from './state';
import * as types from './types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ADDRESS:
      return {
        ...state.address,
        status: 'true',
        addresses: {
          ...state.addresses,
          cep: action.data.cep,
          logradouro: action.data.logradouro,
          complemento: action.data.complemento,
          bairro: action.data.bairro,
          localidade: action.data.localidade,
          uf: action.data.uf,
          unidade: action.data.unidade,
          ibge: action.data.ibge,
          gia: action.data.gia,
        },
      };

    case types.FAIL_REQUEST:
      return {
        ...state,
        status: 'false',
      };
    default:
      return state;
  }
};
