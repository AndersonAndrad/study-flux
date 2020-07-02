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

create an increment module. Inside it you will create a folder called pages an another called store.

*let's got to the store page first*

Inside it create four files with the respective names: actions, reducer,  state and types all with the file extension in js.

*First of all let's create the state, where the information about the increment and decrement will be stored.*

### State

```javascript
export const INITIAL_STATE = {
  valueCounter: 0,
};

```

We will export constant with the name INITIAL_STATE, all in upcase we add an object with the valueCounter property to be 1, just for testing.

### Types

```javascript
export const INCREMENT_COUNTER = '@COUNTER/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = '@COUNTER/DECREMENT_COUNTER';
```

We will also export two constants, with the names "INCREMENT_COUNTER" and "DECREMENT_COUNTER" receiving a string with  the same name...

*Obs: before each string has the property "@COUNTER" I add this to know which was the module that triggered the name of this action it only facilitates the identification can be done with or without.*

### Reducer

```javascript
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

```

now import what was exported from the state and what was in types, note that the import of both is different from each other.

When exporting, pass two arguments, state, which will receive the object you created in the other file and action, responsible for the types and data that pass between the action and the reducer.

Inside you will create a switch that will work with the types you created, for each type you create a case and the default and that it always return to state if no changes.

I will use as an example the increment but this rule is for any other that you will modify. Whenever you change a value in the state, first you return it the same way it's an then navigate to where you want to change and pass the change value.

exp: 

```javascript
{...state, valueCounter: state.valueCounter + 1 }
```

After everything is ready at reducer, we will import it into the redux config that had been created before...

```javascript
// depedencies
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import counter from '../components/counter/store/reducer';

const reducers = combineReducers({
  // implement your reducers here after import
  counter,
});

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;

```

We import it and add it within combineReducers. If all the previous processes are correct you can already check the state with the value of 1 that was previously added, but we will create the action soon to move on to the final fila which is the component itself.

### Actions

```javascript
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

```

 Inside the action it will be necessary only the types, after importing all of them, we will export two functions of increment and decrement, accessing exactly the types that had been created previously, these functions will be accessed inside the component.