import React from 'react';
import { Provider } from 'react-redux';
import store from './config/redux';

// all components (nothing use router);
import CounterView from './components/counter/pages/counterView-page';

function App() {
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
}

export default App;
