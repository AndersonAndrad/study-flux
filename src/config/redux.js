// depedencies
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import counter from '../components/counter/store/reducer';
import address from '../components/address/store/reducer';

const reducers = combineReducers({
  // implement your reducers here after import
  counter,
  address,
});

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
