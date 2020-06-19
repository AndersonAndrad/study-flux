import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAddress } from '../store/action';

function addressView(props) {
  // eslint-disable-next-line
  const [cep, setCep] = useState('');

  return (
    <div>
      <h1>This part is address component</h1>
      <h3>status: {props.status}</h3>
      <h4>CEP: {props.data.cep}</h4>
      <h4>Longadouro: {props.data.logradouro}</h4>
      <h4>Complemento: {props.data.complemento}</h4>
      <h4>Bairro: {props.data.bairro}</h4>
      <h4>Localidade: {props.data.localidade}</h4>
      <h4>UF: {props.data.uf}</h4>
      <h4>Unidade: {props.data.unidade}</h4>
      <h4>IBGE: {props.data.ibge}</h4>
      <h4>GIA: {props.data.gia}</h4>
      <div>
        <input type="text" onChange={(event) => setCep(event.target.value)} />
        <button onClick={() => props.get()}>Get address</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.address.addresses,
  status: state.address.status,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getAddress('72850210')),
});

export default connect(mapStateToProps, mapDispatchToProps)(addressView);
