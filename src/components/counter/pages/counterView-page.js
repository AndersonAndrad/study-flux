import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../store/action';

function CounterView(props) {
  return (
    <div>
      <h1>this value to counter: {props.valueToCounter} </h1>

      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  valueToCounter: state.counter.valueCounter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
