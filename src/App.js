import React from 'react';
import { Provider } from 'react-redux';
import store from './config/redux';

// all components (nothing use router);
import CounterView from './components/counter/pages/counterView-page';
import AddressView from './components/address/pages/address';

function App() {
  return (
    <Provider store={store}>
      <CounterView />
      <AddressView />
    </Provider>
  );
}

export default App;
