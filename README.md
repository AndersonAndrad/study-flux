# Flex Study

### Here are my notes during some implementations with the flow, if  you find better ways to do the same implementation please do a pull request with what you think s necessary. During the course of new experiences I will implement it here in the same way, so that I can use the study in the future.

## Configure Flux

### As I configure the flow within a project, it can be configured in other ways but I implement it that way.

Install some packages before we start.

```
yarn add redux react-redux redux-thunk
```

as soon as each of the packages are installed, create a config folder inside src, inside that folder a redux.js file.

for example: 

src
	|_ config
				|_ redux.js

Inside the file we will need some imports of some modules, to configure all the redux ( I will pass a configuration and a tool for you to use in the browser).

```js
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
```

explaining that each dependency does.

**createStore** : has the function of creating the store, responsible for storing all the information that goes to the state.

**combineReducers**: responsible for combining all reducers, so it is necessary to pass only a  list of reducers to create the state.

**applyMiddleware**:

**compose**:

--------------

**reducers**: for each module, it's necessary to create a set of files to access and edit the state.

creating a constant with the name of reducers extend the module combineReducers and add all the reducers you have already created, in case you don't have any implement when creating.

the store constant passes only reducers and another command as in the following example.

```js
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ );
```

export only the store, after that it must be imported into the app that was created with the project.

```js
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
```

inside the app import two dependencies, the store you created and the provider from inside react-redux.

*Obs: in this project I'm not using the route method to change between components, but if it's just pass routes normally.*

within the provider pass as the property to him the store that was created by you.

### ready your store should already be created normally, so we will pass the implementation of the increment module.

## Implementing a counter with increment and decrement of numbers.

